import express from 'express'
import registrarClienteService from '../clientes/registrarClienteService.js'

const endpoints = express.Router()

endpoints.post('/cliente/cadastro', async (req,res)=>{
    try {
        const corpo = req.body

        const resposta = await registrarClienteService(corpo)

    } catch (error) {
        res.send(error)
    }
})
export default endpoints