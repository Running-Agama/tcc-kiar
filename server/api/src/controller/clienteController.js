import express from 'express'
import registrarClienteService from '../clientes/registrarClienteService.js'

const endpoints = express.Router()

endpoints.get('/', async(req,res)=>{
    try{
        res.status(200).send('A API ta viva')
    }
    catch(err){
        res.status(400).send('👍')
    }
})

endpoints.post('/cliente/cadastro', async (req,res)=>{
    try {
        const corpo = req.body

        const resposta = await registrarClienteService(corpo)

    } catch (error) {
        res.send(error)
    }
})
export default endpoints