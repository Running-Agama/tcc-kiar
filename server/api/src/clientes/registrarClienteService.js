import validarCampos from "../cllientes/clientesValidation";
import CryptoJS from "crypto-js";
export default async function registrarClienteService(corpo){
    await validarCampos(corpo)

}