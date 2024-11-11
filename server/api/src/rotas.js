import endpoints from "./controller/clienteController.js";
import crmEndpoints from "./controller/crmController.js";
export default function adicionarRotas(app){
    app.use(endpoints)
    app.use(crmEndpoints)
}