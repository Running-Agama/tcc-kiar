import './index.scss'
import Cabecalho from '../../components/cabecalhoA'

export default function duvidas() {

    return (
        <div className="pagina-duvidas">
            <Cabecalho />
            <div className="part-duvidas">
                <h1>Dúvidas em destaque</h1>

                <div className="duvidas">
                    <div className="duvida-c1">
                        <p>COMPRAR</p>
                        <ul>
                            <a href="">Como contratar o serviço?</a>
                        </ul>
                    </div>
                    <div className='duvida-c2'>
                        <p>COMPRAR</p>
                        <ul>
                            <a href="">Onde realizo o pagamento?</a>
                        </ul>
                    </div>
                    <div className="duvida-c3">
                        <p>COMPRAR</p>
                        <ul>
                            <a href="">Qual plano é melhor pra mim?</a>
                        </ul>
                    </div>
                    <div className="duvida-c4">
                        <p>COMPRAR</p>
                        <ul>
                            <a href="">Quais planos posso escolher?</a>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="box-chat">
                <h1>Não achou o que precisava?</h1>
                <h2>Converse diretamente com um técnico</h2>
                <button>Começar</button>
            </div>

            <footer class="ft">
                <div class="ft-warp">
                    <div class="ft-warp1">
                        <h2>Company</h2>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                    <div class="ft-warp2">
                        <h2>Support</h2>
                        <p>Contatos</p>

                    </div>
                    <div class="ft-warp3">
                        <h2>Legal</h2>
                        <p>Politica de Privacidade</p>
                        <p>Termos de Serviço</p>
                        <p>Politica de Cookies</p>
                    </div>
                </div>
                <div class="final-footer">
                    <p>© 2024 Kiarnet. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}