import con from "./connection.js"

async function listarClientes(){
    const comando  = `
        SELECT * FROM tb_cliente
        `
    const resposta = await con.query(comando, [])

    return resposta
}

async function adicionarCliente(corpo){
    const comando =`
    INSERT INTO tb_clientes(nm_cliente, nr_cpf, ds_celular, ds_telefone, ds_email, dt_nascimento, ds_cep, ds_residencia, ds_complemento)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`    

    const resposta = await con.query(comando, [Object.values(corpo)])
    console.log(resposta)
}

export default
{ listarClientes, adicionarCliente }