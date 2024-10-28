
import Cabecalho from '../../components/cabecalhoA'
import './index.scss'

export default function Landing() {

    
    function abrirMenu(){
        
    }

    return (
        <div className="conteudo-landing">

            <Cabecalho />

            <section class="hero-section">
                <div class="hero-content">
                    <h1><h1 style={{color: 'black'}}>O MELHOR</h1> PROVEDOR DE INTERNET PARA SUA CASA</h1>
                        <p>Experimente a diferença! Temos planos <br/> flexíveis e atendimento personalizado. <br/> Entre em contato e transforme sua <br/> navegação!</p>
                            <div class="buttons">
                              <a href="/planos">  <button class="btn-primary">Começar</button></a>
                              <a href="/BotaoVermais">  <button class="btn-secondary">Ver mais</button></a>
                            </div>
                        </div>
                        </section>

                            <section class="info-section">
                                <div class="info-box">
                                    <h2>Descubra o melhor da conexão</h2>
                                    <p>Diga adeus à lentidão e frustrações! É hora de explorar planos de internet feitos para acompanhar todas as suas necessidades, seja para navegar, trabalhar ou aproveitar o melhor do entretenimento.</p>
                                </div>


                                <div class="info-box">
                                    <h2>Encontre o plano perfeito para você</h2>
                                    <p>Escolha a velocidade ideal: 100 Mbps para navegação e streaming fluidos, 200 Mbps para tarefas que exigem mais dados, ou até mesmo planos de 300 Mbps para downloads ultrarrápidos e desempenho sem igual.</p>
                                    <p>Nossa conexão é tão estável quanto uma cabra montesa em seu pico: firme, confiável e pronta para entregar a estabilidade que você merece.</p>
                                </div>
                            </section>
                            <section class="meio">
                                <div class="meio-pt1">
                                    <h2>Conecte-se</h2>
                                    <p>Com nosso plano de internet, navegue <br/> sem interrupções e aproveite streaming <br/> e jogos com a melhor velocidade. <br/> Experimente a diferença!</p>
                                        <button>Iniciar</button>
                                    </div>

                                        <div class="meio-pt2">
                                            <h2>Um plano só para você</h2>
                                            <p>Atendemos a todas as necessidades de <br/> internet, desde jogos até streaming, tudo <br/>  coberto.</p>
                                            </div>
                                            </section>
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
                                                        <a href="/duvidas">Duvidas</a>
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

