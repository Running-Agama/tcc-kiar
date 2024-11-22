import clientesRepository from "../repository/clientes/clientesRepository.js"
import enviarEmail from "../utils/enviarEmail.js"

export default async function registrarClienteService(corpo){
    console.log('service')
    const resposta = await clientesRepository.cadastrarCliente(corpo)
    const email = await enviarEmail(corpo.email)
    console.log('passou aqui')
    return resposta
}