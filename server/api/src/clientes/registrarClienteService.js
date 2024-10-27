import clientesRepository from "../repository/clientes/clientesRepository.js"
export default async function registrarClienteService(corpo){
    const resposta = await clientesRepository.cadastrarCliente(corpo)

    return resposta
}