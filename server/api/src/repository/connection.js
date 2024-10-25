import mysql from 'mysql2/promise'

const con =  await mysql.createConnection({
    host: "localhost",
    database: "kiarnett",
    password: "1234",
    user: "root"
})
console.log('conectado')


export default con