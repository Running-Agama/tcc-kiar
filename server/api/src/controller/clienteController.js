import express, { Router } from 'express'
import listarClientesService from '../service/listarClientesService.js'
import { adicionarClientesService } from '../service/adicionarClientesService.js'
import { deletarCliente } from '../service/deletarClienteService.js'
const endpoints = Router()

endpoints.get('/clientes/listar', async (req,res)=>{
    try {
        const resposta = await listarClientesService()

        res.send(resposta[0])
    } catch (error) {
        console.log(error)
    }
})

endpoints.post('/clientes/adicionar', async (req,resp) =>{
    try {
        const corpo = req.body
        const resposta = await adicionarClientesService(corpo)

        resp.status(201).send(resposta)
    } catch (error) {
        console.log(error);
    }
})

endpoints.delete('/clientes/delete', async (req, resp) => {
    try {
        const resposta = await deletarClienteService(corpo)

    } catch (error) {
        console.log(error);
    }
})

export default endpoints