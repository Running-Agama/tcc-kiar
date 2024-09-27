export default function AgendaInstalacao(){
    return(
        <div className="conteudo">
            <p>Escolha a data de vencimento:</p>
            <div className="opcoes-data">
                <button>03</button>
                <button>03</button>
                <button>03</button>
                <button>03</button>
            </div>

            <div className="campos-informedados">
                <p>Informe seu email para envio da fatura:</p>
                
                <input type="text"  className="campo-um-imput" placeholder="email para envio da fatura"/>
                <input type="text"  className="campo-um-imput" placeholder="Confirme o email"/>
                <input type="checkbox"></input>
            </div>
            

        </div>
    )
}