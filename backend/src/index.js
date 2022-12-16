const express = require('express');
const cors = require('cors');
const pool = require('../database/database');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { json } = require('express');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();


const servidor = express();
servidor.use(express.json({limit: '50mb'}));
servidor.use(express.urlencoded({limit: '50mb'}));
servidor.use(cors());

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);


function jwtGenerator(id){

    const payload = {user: {id}}
    return jsonwebtoken.sign(payload, 'admin', {expiresIn: '24hr'});
}

servidor.post('/api/login', async function(req, res){
    try {
        const { email, password } = req.body;

        const user = await pool.query(`
            SELECT *
            FROM users
            WHERE email = $1;
        `, [email]);

        if (user.rows.length === 0) {
            return res.status(401).json('Password or email is incorrect');

        } 

      

        const validPassword = await bcrypt.compare(password, user.rows[0].pass);
        if (!validPassword){
            return res.status(401).json('Password or email is incorrect');

        } 

        const token = jwtGenerator(user.rows[0].id);
        res.json({ token });

    } catch(error) {
        res.status(500).send();
    }
   

});

servidor.post('/api/register', async function(req, res){

    try {
        const {nombre, apellido, email, password, titulo, experiencia, primaria, secundaria, terciario, universitario, fechaNac, rol } = req.body 
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if(user.rows.length != 0){
        return res.status(401).json('Ya existe un usuario con este email')
    }
    
    const saltRound = 10;
     const salt = await bcrypt.genSalt(saltRound);
     const passEncriptada = await bcrypt.hash(password, salt);
     const nuevoUser = await pool.query('INSERT INTO users(nombre, apellido, email, pass, rol) VALUES($1, $2, $3, $4, $5) RETURNING *', [nombre, apellido, email, passEncriptada, rol])

    if(rol === 'alumno') {
       
        const nuevoAlumno = await pool.query('INSERT INTO alumno(primaria, secundaria, terciario, universitario, fechaNac, idUser) VALUES($1, $2, $3, $4, $5, $6)', [primaria, secundaria, terciario, universitario, fechaNac, nuevoUser.rows[0].id]);
    } else if (rol === 'profesor') {
        const nuevoProfesor = await pool.query('INSERT INTO profesor(titulo, experiencia, idUser) VALUES($1, $2, $3)', [titulo, experiencia, nuevoUser.rows[0].id]);
    }
    const token = jwtGenerator(nuevoUser.rows[0].id);
    res.json({token});

    } catch(error) {
        res.status(500).send();
    }
   
    
});


servidor.get('/api/validate-token',  function(req, res){
    try{
        const token = req.header('token');
    if(!token) {
        return res.status(403).json('No autorizado')
    } 
   
    jsonwebtoken.verify(token, 'admin');
    res.status(200).send();

    } catch(error) {
        res.status(500).send();
    }
    
})

servidor.get('/api/usuarios/:id', async function(req, res){
    try {
        const {id} = req.params 
        let userByID = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        userByID = userByID.rows[0];
        let profeOAlumno = null;
        let clases = null;

        if (userByID.rol == 'profesor') {
            profeOAlumno = await pool.query('SELECT * FROM profesor WHERE idUser = $1', [userByID.id])
            clases = await pool.query('SELECT * FROM clases WHERE idProfesor = $1', [profeOAlumno.rows[0].id]);
        } else if(userByID.rol == 'alumno') {
            profeOAlumno = await pool.query('SELECT * FROM alumno WHERE idUser = $1', [userByID.id]);
            clases = await pool.query('SELECT * FROM clases_contratadas WHERE idAlumno = $1', [profeOAlumno.rows[0].id]);

            for (let i = 0; i < clases.rows.length; i++) {
                const fetchProfesor = await pool.query('SELECT * FROM profesor WHERE id = $1', [clases.rows[i].idprofesor])
                const fetchClase = await pool.query('SELECT * FROM clases WHERE id = $1', [clases.rows[i].idclase])
                clases.rows[i].profesor = fetchProfesor.rows[0]
                clases.rows[i].clase = fetchClase.rows[0]
            }
        }

        res.json({ userByID, profeOAlumno: profeOAlumno.rows[0], clases: clases.rows });
    } catch(error) {
        res.status(500).send();
    }
});

servidor.get('/api/clases', async function(req, res){
    try {
        const clases = await pool.query('SELECT * FROM clases');

        for (let index = 0; index < clases.rows.length; index++) {
            let clase = clases.rows[index];

            const traerComentarios = await pool.query('SELECT * FROM comentario WHERE idClase = $1', [clases.rows[index].id]);
            const traerCalificaciones = await pool.query('SELECT * FROM calificacion WHERE idClase = $1', [clases.rows[index].id]);
            const traerProfesor = await pool.query('SELECT * FROM profesor WHERE id = $1', [clases.rows[index].idprofesor]);
            const traerUser = traerProfesor.rows != "" && await pool.query('SELECT * FROM users WHERE id = $1', [traerProfesor.rows[0].iduser]);

            let promedioCalificacion = 0;
            for (let x = 0; x < traerCalificaciones.rows.length; x++) {
                let calificacion = traerCalificaciones.rows[x];
                promedioCalificacion += calificacion.calificacion;
            }
            promedioCalificacion = promedioCalificacion / traerCalificaciones.rows.length;

            clase.comentarios = traerComentarios.rows;
            clase.calificaciones = traerCalificaciones.rows;
            clase.profesor = traerProfesor.rows[0];
            clase.promedioCalificacion = promedioCalificacion;
            if (traerUser) clase.user = traerUser.rows[0];
        }

        res.json({ clases: clases.rows });
    } catch(error) {
        res.status(500).send();
    }
})




servidor.get('/api/recuperar-password', function(req, res) {
    const { email } = req.query;
    const code = "hola";

    const plantillaHtml = `
        <h1>Hola! Tu codigo para ingresar es: ${code}</h1>
    `;

    sgMail.send({ from: "naveiralucia@gmail.com", to: email, html: plantillaHtml, subject: "Codigo para ingresar" })
});

servidor.post('/api/crear-clase', async function(req,res) {
    try {
        const {			name,
            materia,
            frecuencia,
            duracion,
            tipo,
            costo,
            descripcion,
            image, profesorId} = req.body;
    
        await pool.query(`
            INSERT INTO clases(nombre, materia, frecuencia, duracion, idProfesor, costo, descripcion, tipoClase, imagen)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
        `, [name, materia, frecuencia, duracion, profesorId, costo, descripcion, tipo, image]);

        res.sendStatus(200);
    } catch(err) {
        console.log(err.message)
        res.sendStatus(500);
    }
});

servidor.post('/api/contratar-clase', async (req, res) => {
    const { email, telefono, horario, mensaje } = req.body;

    try {
        const plantillaHtml = `
            <h1>Hola! Tu codigo para ingresar es: ${code}</h1>
        `;

        sgMail.send({ from: "naveiralucia@gmail.com", to: email, html: plantillaHtml, subject: "Codigo para ingresar" })

        res.sendStatus(200);
    } catch(err) {
        res.sendStatus(500);
    }
});



servidor.listen(4444, function(){
    console.log('el servidor esta escuchando')
});

