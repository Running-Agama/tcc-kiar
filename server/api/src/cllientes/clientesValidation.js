export default async function validarCampos(corpo){
    if(!corpo.nome || !corpo.celular || !corpo.email || !corpo.cpf || !corpo.dtnascimento){
        throw new Error('Campos essenciais não encontrados')
    }
}