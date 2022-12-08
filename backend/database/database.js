const postgresSQL = require('pg');


const pool = new postgresSQL.Pool({
    user: 'postgres',
    password: 'admin123',
    host: 'localhost',
    database: 'tusClases',
    port: 5432
})


module.exports = pool;
