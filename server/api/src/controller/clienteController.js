import express from 'express'
import CryptoJS from 'crypto-js'
const endpoints = express.Router()

endpoints.post('/cliente', (req,res)=>{
    try {
        const corpo = req.body
        res.send({resposta: corpo})
       corpo.cpf = CryptoJS.SHA256(corpo.cpf)
        console.log(corpo)
         res.send({resposta: corpo})

    } catch (error) {
        res.send(error)
    }
})
export default endpoints