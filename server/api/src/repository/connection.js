import mysql from 'mysql2/promise.js'

const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'db_kiarnet'
})

export default con