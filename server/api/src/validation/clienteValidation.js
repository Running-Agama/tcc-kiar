async function validarCampos(corpo){
    console.log(corpo)
    if(!corpo.nomeCliente){
        throw new Error ('Campo de nome de cliente não encontrado')
    }

    if(!corpo.nrCpf){
        throw new Error ('Campo de CPF de cliente não encontrado')
    }


    if(!corpo.dsCelular){
        throw new Error ('Campo de Celular de cliente não encontrado')
    }

    if(!corpo.dsTelefone){
        throw new Error ('Campo de Telefone de cliente não encontrado')
    }

    if(!corpo.dsEmail){
        throw new Error ('Campo de Email de cliente não encontrado')
    }

    if(!corpo.dtNascimento){
        throw new Error ('Campo de Nascimento de cliente não encontrado')
    }

    if(!corpo.dsCep){
        throw new Error ('Campo de CEP de cliente não encontrado')
    }

    if(!corpo.dsResidencia){
        throw new Error ('Campo de Residencia de cliente não encontrado')
    }

    if(!corpo.dsComplemento){
        throw new Error ('Campo de Complemento de cliente não encontrado')
    }

}

export default {validarCampos}