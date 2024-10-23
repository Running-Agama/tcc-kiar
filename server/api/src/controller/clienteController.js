import express from 'express'
import CryptoJS from 'crypto-js'
import registrarClienteService from '../clientes/registrarClienteService.js'

const endpoints = express.Router()

endpoints.post('/cliente', async (req,res)=>{
    try {
        
        const corpo = req.body
        const cpfcrypt = CryptoJS.HmacSHA256(corpo.cpf, "senha")
        const novocpf = String(cpfcrypt)
        
        corpo.cpf = novocpf
        
        await registrarClienteService(corpo)
         res.send({resposta: corpo})

    } catch (error) {
        res.send(error)
    }
})
export default endpoints