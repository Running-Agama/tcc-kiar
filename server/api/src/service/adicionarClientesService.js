import clientesRepository from "../repository/clientesRepository.js";
import clienteValidation from "../validation/clienteValidation.js";

export async function adicionarClientesService(corpo){
    await clienteValidation.validarCampos(corpo)
    await clientesRepository.adicionarCliente(corpo)
}