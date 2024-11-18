import axios from "axios"
import apiURL from "../axios"

async function abrirCliente(id){
    apiURL.get('/cliente/consulta-individual', {id: id})
}


export default abrirCliente