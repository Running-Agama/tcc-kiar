import express from 'express'
import adicionarRotas from './rotas.js'
import 'dotenv/config'

const app = express()

adicionarRotas(app)
app.use(express.json())
const porta = process.env.API_PORTA
app.listen(3053, ()=>{
    console.log('aberto na porta ' + process.env.API_PORTA)
})