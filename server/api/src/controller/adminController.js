import express from 'express'
import loginAdm from '../repository/admin/adminrepository.js'
import jwt from 'jsonwebtoken'
import crypto from 'crypto-js'
const endpointsAdmin = express.Router()


endpointsAdmin.post('/admin/login', async(req,res)=>{
    try {

        const corpo = req.body
        const resposta = await loginAdm(corpo)
        console.log(resposta)
        if(!resposta.length > 0){
            return res.status(400).send('não encontrado')
        }
        
        const token = jwt.sign(resposta, process.env.JWT_SENHA)

        return res.status(200).send(token)
    } catch (error) {
        console.log(error)
        return res.status(400).send({erro: error})
    }
})
export default endpointsAdmin