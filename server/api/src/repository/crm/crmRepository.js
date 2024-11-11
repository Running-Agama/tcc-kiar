import con from "../connection.js";

async function consultarClientes(){
    const comando = `
    SELECT
        id_cliente,
        ds_nome, 
        ds_cep, 
        ds_cpf 
    FROM 
        tb_cliente

    JOIN
        tb_endereco 
    USING   
        (id_cliente)
    `

    const resposta = await con.query(comando)

    return resposta[0]
}

export default {consultarClientes}