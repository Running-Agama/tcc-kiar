import clientesRepository from "../repository/clientes/clientesRepository.js"
import enviarEmail from "../utils/enviarEmail.js"

export default async function registrarClienteService(corpo){
    const resposta = await clientesRepository.cadastrarCliente(corpo)
    enviarEmail(corpo.email)
    return resposta
}