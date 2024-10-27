import con from "../connection.js"

//TODO: ver porque o dadosbancarios já é um objeto direto enquanto o dadosendereco é uma array com os dados no indice 0, isso é sus
//TODO: Na validacao tem que ver se tem dados repetidos, mesmo cpf, bairro e rua não deveriam fazer cadastro mais de uma vez, mete no react
let comando
let resposta

async function cadastrarCliente(corpo){

    try{

        comando = `
        INSERT INTO tb_cliente(
            nm_completo, 
            ds_celular, 
            ds_email, 
            ds_telefone,
            ds_cpf, 
            dt_nascimento
         )
        VALUES(?,?,?,?,?,?);`

        //faz o registro do usuario primeiro, pega o insertId e faz registro do resto
        //certeza que em breve isso aí vai me dar problema

        resposta = await con.query(comando, [
            corpo.nome,
            corpo.celular,
            corpo.email,
            corpo.telefone,
            corpo.cpf,
            corpo.datanascimento
        ])
        const insertId = resposta[0].insertId

        comando = `
            INSERT INTO tb_endereco(
                cliente_id,
                bairro,
                nm_rua,
                nr_casa,
                complemento
            )
            VALUES(?,?,?,?,?);
            `
        resposta = await con.query(comando,[
            insertId, corpo.dadosendereco[0].bairro,
            corpo.dadosendereco[0].rua, corpo.numeroendereco,
            corpo.complemento
        ])

        comando = `
            INSERT INTO tb_dados_bancarios(
                cliente_id,
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


        console.log(resposta)


    }

    catch(err){

        console.log('erro', err)
    }
}

export default {cadastrarCliente}