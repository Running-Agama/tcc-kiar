import clientesRepository from "../repository/clientes/clientesRepository.js"
export default async function registrarClienteService(corpo){
    await clientesRepository.cadastrarCliente(corpo)
}