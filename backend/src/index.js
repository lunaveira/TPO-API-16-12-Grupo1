const express = require('express');
const cors = require('cors');
const pool = require('../database/database');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { json } = require('express');


const servidor = express();
servidor.use(express.json());
servidor.use(cors());


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

        if(userByID.rol == 'profesor') {
            profeOAlumno = await pool.query('SELECT * FROM profesor WHERE idUser = $1', [userByID.id])

        } else if(userByID.rol == 'alumno') {
            profeOAlumno = await pool.query('SELECT * FROM alumno WHERE idUser = $1', [userByID.id])

        }

        res.json({userByID, profeOAlumno: profeOAlumno.rows[0]});



    } catch(error) {
        res.status(500).send();
    }

    

})

servidor.get('/api/clases', async function(req, res){

    try {
        
        const clases = await pool.query('SELECT * FROM clases');
        const comentarios = await pool.query('SELECT * FROM comentario WHERE idClase = $1');
        const calificaciones = await pool.query('SELECT * FROM calificacion WHERE idClase = $1');
        res.json({clases: clases.rows, comentarios: comentarios.rows, calificaciones: calificaciones.rows})
      
      
    } catch(error) {
        res.status(500).send();
    }

})



servidor.get('/api/clases-contratadas', async function(req, res){

    try {
        const {id} = req.params 
        const clases = await pool.query('SELECT * FROM clases');
      

      
    } catch(error) {
        res.status(500).send();
    }

})





servidor.listen(4444, function(){
    console.log('el servidor esta escuchando')
});

