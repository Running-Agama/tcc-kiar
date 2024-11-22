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

        let transporter = nodemailer.createTransport({ 
            service: 'gmail', 
            auth: { 
               user: process.env.NODEMAILER_EMAIL, 
               pass: process.env.NODEMAILER_SENHA 
             } 
            });
        
            const mailOptions = {
                from: process.env.NODEMAILER_EMAIL, // sender address
                to: corpo.email, // receiver (use array of string for a list)
                subject: 'Email de confirmação', // Subject line
                html: '<p>Não tivemos tempo de fazer um email bonitinho, se contente com isto 👍</p>'// plain text body
              };
    
              transporter.sendMail(mailOptions, (err, info) => {
                if(err)
                  console.log(err)
                else
                  console.log(info);
             });
    
        return res.status(200).send(resposta[0])

    } catch (error) {
        return res.status(400).send({erro: error})
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

//telefone e celular
//depois cep e numero casa
endpoints.post('/cliente/validacao/procura-celular', async(req,res)=>{
    try {

        const corpo = req.body
        const resposta = await clientesRepository.buscarCelular(corpo)

        if(resposta.length > 0){
            return res.status(200).send({resposta: 'encontrado'})
        }

        return res.status(200).send({resposta:'não encontrado'})

    } catch (error) {
        console.log('erro na procura por email (procura-email)', error)
        return res.status(400).send({erro: error})
    }
})
export default endpoints