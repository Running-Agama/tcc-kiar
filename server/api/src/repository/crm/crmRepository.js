import con from "../connection.js";
let comando  = ''
let resposta = ''

async function consultarClientes(){
    comando = `
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

    resposta = await con.query(comando)

    return resposta[0]
}
async function consultaDetalhesCliente(id){
    comando = `
        SELECT 
            ds_nome,
            ds_cep, 
            nm_rua, 
            nr_casa, 
            ds_bairro, 
            ds_tipo_residencia, 
            ds_complemento, 
            ds_email, 
            ds_cpf, 
            dt_nascimento,
            ds_celular,
            ds_telefone, 
            ds_plano, 
            dt_adicao, 
            ds_dia_vencimento
        FROM 
            tb_endereco
        JOIN 
            tb_cliente 
            
        USING
            (id_cliente)
        JOIN 
            tb_faturas 
        USING 
            (id_cliente)
        WHERE 
            id_cliente = ?
    `
    resposta = await con.query(comando,[id])

    return resposta[0]
}

export default {consultarClientes, consultaDetalhesCliente}