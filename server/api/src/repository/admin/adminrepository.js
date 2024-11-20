import con from '../connection.js'
let comando
let resposta

async function loginAdm(corpo){
    comando = `
        SELECT 
            *
        FROM 
            tb_tecnico
        WHERE
            ds_cpf = ?
        AND
            ds_senha = ?
        `
    resposta = await con.query(comando, [corpo.cpf, corpo.senha])
    return resposta[0]
}

export default loginAdm