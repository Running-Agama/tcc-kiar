import endpoints from "./controller/clienteController.js";


export default function adicionarRotas(servidor){

    servidor.use(endpoints)
}