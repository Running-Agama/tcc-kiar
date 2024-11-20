
import apiURL from "../axios"

async function abrirCliente(id){
    const resposta = await apiURL.post('/crm/cliente/consulta-individual', {idCliente: id})
    return resposta
}

export default abrirCliente