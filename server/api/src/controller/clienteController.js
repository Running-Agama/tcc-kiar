import express from 'express'
import clientesRepository from '../repository/clientes/clientesRepository.js'
import nodemailer from 'nodemailer'

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
                html: `<p>Prepare-se para uma viagem intergaláctica pela web com a nossa internet super rápida! 🚀

A sua confirmação de plano foi um sucesso e agora você está oficialmente na nossa rede de dados mais veloz que o Wi-Fi de um foguete! 🌐✨

Em breve, você vai perceber que:

Seus vídeos em HD vão carregar tão rápido que vai achar que está em uma outra galáxia.
As páginas vão abrir mais rápido que um click no botão de “play” no seu streaming favorito.
E, claro, sua conexão vai ser mais estável que uma mesa de café com 4 pés (sem aquele balanço chato). ☕👌
Fique tranquilo, estamos aqui para garantir que sua experiência seja super tranquila. Se tiver qualquer dúvida, ou se alguém te oferecer Wi-Fi grátis e duvidoso (sabe como é...), lembre-se que você tem o melhor! 😎</p>`// plain text body
              };
            console.log('')
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