import express from 'express'
import 'dotenv/config.js'
import adicionarRotas from './rotas.js'

const servidor = express()
const porta = process.env.API_PORTA
servidor.use(express.json())

 adicionarRotas(servidor)

servidor.listen(3080, ()=>{
    console.log('API aberta na porta' + porta)
})