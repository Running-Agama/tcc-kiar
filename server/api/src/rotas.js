import endpoints from "./controller/clienteController.js";

export default function adicionarRotas(app){
    app.use(endpoints)
}