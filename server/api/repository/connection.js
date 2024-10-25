import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "kiarnett"
})

console.log('conectado ao DB')

export default con