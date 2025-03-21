import con from "../connection.js"

//TODO: ver porque o dadosbancarios já é um objeto direto enquanto o dadosendereco é uma array com os dados no indice 0, isso é sus
//TODO: Na validacao tem que ver se tem dados repetidos, mesmo cpf, bairro e rua não deveriam fazer cadastro mais de uma vez, mete no react
let comando
let resposta

async function cadastrarCliente(corpo){
        console.log(corpo)
        comando = `
        INSERT INTO tb_cliente(
            ds_nome, 
            ds_celular, 
            ds_email, 
            ds_telefone,
            ds_cpf, 
            dt_nascimento,
            ds_debito_automatico,
            dt_adicao
         )
        VALUES(?, ?,?,?,?,?, ?, SYSDATE());`

        //faz o registro do usuario primeiro, pega o insertId e faz registro do resto
        //certeza que em breve isso aí vai me dar problema

        resposta = await con.query(comando, [
            corpo.nome,
            corpo.celular,
            corpo.email,
            corpo.telefone,
            corpo.cpf,
            corpo.datanascimento,
            corpo.opcaodebito
        ])
        const insertId = resposta[0].insertId

        comando = `
            INSERT INTO tb_endereco(
                id_cliente,
                ds_cep,
                ds_bairro,
                nm_rua,
                nr_casa,
                ds_complemento
            )
            VALUES(?,?, ?,?,?,?);
            `
        resposta = await con.query(comando,[
            insertId, 
            corpo.cep,
            corpo.dadosendereco[0].bairro,
            corpo.dadosendereco[0].rua, 
            corpo.numeroendereco,
            corpo.complemento
        ])

        if(corpo.dadosbancarios){
            comando = `
            INSERT INTO tb_dados_bancarios(
                id_cliente,
                nm_banco,
                ds_tipo_conta,
                nr_agencia,
                nr_conta
            )
            VALUES(?,?,?,?,?);`

        resposta = await con.query(comando, [
            insertId, corpo.dadosbancarios.banco,
            corpo.dadosbancarios.tipoconta,
            corpo.dadosbancarios.numeroagencia,
            corpo.dadosbancarios.numeroconta
        ])
        }   


        comando = `
            INSERT INTO tb_instalacao(
                id_cliente,
                ds_instalacao,
                dt_primeira_opcao,
                dt_segunda_opcao
            )
            VALUES(?,?,?, ?)`
        resposta = await con.query(comando,[
            insertId, 
            'Pendente',
            corpo.primeiraopcaoinstalacao, 
            corpo.segundaopcaoinstalacao])

        comando = `
        INSERT INTO tb_faturas(
            id_cliente,
            ds_plano,
            ds_email_fatura,
            ds_tipo_residencia,
            ds_dia_vencimento)
        VALUES(?,?,?,?,?)`

        resposta = await con.query(comando,[
            insertId,
            corpo.plano,
            corpo.emailfatura,
            corpo.tiporesidencia,
            corpo.datavencimento
        ])

        //pegando dados para a pagina final
        comando = `
        SELECT 
            id_cliente, dt_adicao, ds_plano, nm_rua, nr_casa, ds_bairro
        FROM 
            tb_cliente
        JOIN 
            tb_endereco USING(id_cliente)
        JOIN 
            tb_faturas USING (id_cliente)
        WHERE id_cliente = ?`

        resposta = await con.query(comando, [insertId])

        return resposta[0]


    
}

async function buscarEmail(corpo){
    comando = `
        SELECT * FROM tb_cliente
        WHERE ds_email = ?
        `

    resposta = await con.query(comando, [corpo.email])

    return resposta[0]
    

}

async function buscarCPF(corpo){

    comando = `
        SELECT * FROM tb_cliente
        WHERE ds_cpf = ?
        `
    resposta = await con.query(comando, [corpo.cpf])

    return resposta[0]
}

async function buscarCelular(corpo){
    comando = `
        SELECT * FROM tb_cliente
        WHERE ds_celular = ?
        `
    resposta = await con.query(comando, [corpo.celular])

    return resposta[0]
}
export default {cadastrarCliente, buscarEmail, buscarCPF, buscarCelular}