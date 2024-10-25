import './index.scss'

export default function CRMnomelongoteste(){

    return(
    <div className="conteudo-crm">
        <div className="faixa-tecnico">
            <h1>Nome do técnico</h1>
        </div>
        <div className="dados-crm">
            <div className="opcoes-esquerda">
                <div className="total-clientes">
                    <h1>12</h1>
                </div>

                <div className="filtros-clientes">
                    <p>depois vejo</p>
                </div>  
            </div>
        </div>

        <div className="lista-clientes">
            <h1>Lista de clientes</h1>

            <p>nome completo, cep,  cpf e mensalidade</p>
        </div>
    </div>
    )
}