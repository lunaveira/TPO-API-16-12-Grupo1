const express = require('express');
const cors = require('cors');
const pool = require('../database/database');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');


const servidor = express();
servidor.use(express.json());
servidor.use(cors());


function jwtGenerator(idUser){

    const payload = {user: {id: idUser}}
    return jsonwebtoken.sign(payload, 'admin', {expiresIn: '24hr'});
}

servidor.post('/api/login', async function(req, res){
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

});

servidor.post('/api/register', async function(req, res){
   
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

});


servidor.listen(4444, function(){
    console.log('el servidor esta escuchando')
});

