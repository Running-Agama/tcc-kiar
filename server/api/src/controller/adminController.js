import express from 'express'
import loginAdm from '../repository/admin/adminrepository.js'
import jwt from 'jsonwebtoken'
const endpointsAdmin = express.Router()


endpointsAdmin.post('/admin/login', async(req,res)=>{
    try {
        const corpo = req.body
        const resposta = await loginAdm(corpo)
        console.log(resposta)
        if(!resposta.length > 0){
            return res.status(400).send('não encontrado')
        }

        const token = jwt.sign(resposta[0], 'cacetada')

        return res.status(200).send(token)
    } catch (error) {
        console.log(error)
        return res.status(400).send({erro: error})
    }
})

endpointsAdmin.post('/admin/validacao/crm')

export default endpointsAdmin