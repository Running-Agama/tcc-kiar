import express from 'express'
import clientesRepository from '../repository/clientes/clientesRepository.js'


const endpoints = express.Router()

endpoints.get('/', async(req,res)=>{
    try{
        return res.status(200).send('A API ta viva')
    }
    catch(err){
        return res.status(400).send('👍')
    }
})

endpoints.post('/cliente/cadastro', async (req,res)=>{
    try {
        const corpo = req.body
        
        const resposta = await clientesRepository.cadastrarCliente(corpo)

        return res.status(200).send(resposta[0])

    } catch (error) {
        return res.status(400).send(error)
    }
})




// validacoes 
// esse negocio procura email e até que vai, mas ta esquisito

endpoints.post('/cliente/validacao/procura-cpf', async (req,res)=>{
    try{
        const corpo = req.body
        console.log(corpo)


        const resposta = await clientesRepository.buscarCPF(corpo)
        console.log(resposta)

        if(resposta.length > 0){
           return res.status(200).send({resposta:'encontrado'})
        }

        return res.status(200).send({resposta: "não encontrado"})
    }
    catch(error){
        console.log('erro procura cpf', error)
        return res.status(400).send({mensagem: error})
    }
})

endpoints.post('/cliente/validacao/procura-email', async (req,res)=>{
    try{
        const corpo = req.body
        const resposta = await clientesRepository.buscarEmail(corpo)

        if(resposta.length > 0){
            return res.status(200).send({resposta: 'encontrado'})
        }

        return res.status(200).send({resposta:'não encontrado'})


    } catch( error){
        console.log('erro na procura por email (procura-email)', error)
        return res.status(400).send({erro: error})
    }
})
export default endpoints