import express from 'express'

const endpointsAdmin = express.Router()


endpointsAdmin.post('/admin/login', async(req,res)=>{
    try {
        return res.status(200).send('login')
    } catch (error) {
        
    }
})