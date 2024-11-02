import express from 'express'
import adicionarRotas from './rotas.js'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())
adicionarRotas(app)

const porta = process.env.API_PORTA
app.listen(porta, ()=>{
    console.log('aberto na porta ' + process.env.API_PORTA)
})