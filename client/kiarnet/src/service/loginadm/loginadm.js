import apiURL from "../axios"

export default async function loginadm(data){
    try {
        console.log(data)
        const resposta = await apiURL.post('/admin/login', data)
        
        return resposta.data
    } catch (error) {
        console.log(error.response)
        if(error.response.data === "não encontrado"){
            return 'não encontrado'
        }
    }

}