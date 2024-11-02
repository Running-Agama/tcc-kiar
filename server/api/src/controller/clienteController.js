import express from 'express'
import clientesRepository from '../repository/clientes/clientesRepository.js'


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
        const resposta = await clientesRepository.cadastrarCliente(corpo)

        res.status(200).send(resposta[0])

    } catch (error) {
        res.status(400).send(error)
    }
})




// validacoes 
// esse negocio procura email e até que vai, mas ta esquisito

endpoints.post('/cliente/validacao/procura-email', async (req,res)=>{
    try{
        const corpo = req.body

        const resposta = await clientesRepository.buscarEmail(corpo)
        console.log(resposta)

        if(resposta.length === 0){
            res.status(200).send({resposta: 'não encontrado'})
        }
        else{
            res.status(200).send({resposta: 'encontrado'})
        }

    } catch( error){
        console.log('erro na procura por email (procura-email)', error)
        res.status(400).send(error)
    }
})
export default endpoints