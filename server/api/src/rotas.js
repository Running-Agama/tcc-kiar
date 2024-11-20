import endpointsAdmin from "./controller/adminController.js";
import endpoints from "./controller/clienteController.js";
import crmEndpoints from "./controller/crmController.js";
export default function adicionarRotas(app){
    app.use(endpoints)
    app.use(crmEndpoints)
    app.use(endpointsAdmin)
}