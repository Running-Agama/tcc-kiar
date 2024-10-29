import './index.scss'
import { useLocation } from 'react-router-dom'


export default function CadastroFinal(){
    const corpo = useLocation()
    const data = corpo.state
    
    return(
        <div className="conteudo-cadastro-final">
        <div className="faixa1">
            <h1>Pedido Recebido</h1>
            <p>Em alguns instantes, você receberá um email de confirmação com os próximos passosv</p>
            <a className="botao-inicial" href="/">Voltar para a página inicial</a>
        </div>

        <h1>Detalhes do pedido</h1>
        <div className="conteudo-detalhes-pedido">
            <div className="card">
                <h4>Numero do pedido:</h4>
                <p>{data.id_cliente}</p>
            </div>

            <div className="card">
                <h4>Data do pedido</h4>
                <p>{data.dt_adicao}</p>
            </div>

            <div className="card">
                <h4>Plano selecionado</h4>
                <p>{data.ds_plano}</p>
            </div>

            <div className="card">
                <h4>Endereço de instalação</h4>
                <p>{data.nm_rua}, {data.nr_casa}, {data.ds_bairro}</p>
            </div>
        </div>
    </div>
    )
}