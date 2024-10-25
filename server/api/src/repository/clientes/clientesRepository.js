import con from "../connection.js"
// adicionar usuario primeiro, pegar insertid e adicionar o resto
async function cadastrarCliente(corpo){
    console.log(corpo.nome)
    console.log('chegou aqui')
    const comando = `
    INSERT INTO usuarios(
        nm_completo, 
        celular, 
        email, 
        telefone_opcional,
        cpf, 
        dt_nascimento
     )
    VALUES(?,?,?,?,?,?);`


    const resposta = await con.query(comando, [
        corpo.nome
    ])
    console.log(resposta)
}

export default {cadastrarCliente}