
import crmRepository from '../repository/crm/crmRepository.js'

import express from 'express'
const crmEndpoints = express.Router()

crmEndpoints.get('/crm/consulta', async(req,res)=>{
    try{
        const resposta = await crmRepository.consultarClientes()

        res.status(200).send(resposta)
    }
    catch(err){
        res.status(400).send({erro: err})
    }
})


export default crmEndpoints