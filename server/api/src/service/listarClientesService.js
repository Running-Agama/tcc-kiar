import clientesRepository from "../repository/clientesRepository.js";

export default async function listarClientesService(){
   const resposta = await clientesRepository.listarClientes()
   return resposta
} 