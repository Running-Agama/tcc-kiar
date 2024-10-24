import './index.scss'
import { useNavigate } from 'react-router-dom'
import Cabecalho from '../../components/cabecalhoA'

export default function Planos() {
    const navigate = useNavigate()
    return (
        <div className="pagina-plano">
            <Cabecalho />

            <nav>
                <h1>Encontre o Plano de Internet Perfeito para Você!</h1>
                <h2>Navegue na internet com a velocidade e estabilidade que você merece.</h2>
            </nav>
            <section>
                <div className="mega1">
                    <h1>60 MEGA</h1>
                    <p>Ideal para navegação e redes sociais.</p>
                    <h1>R$ 59,90/mês</h1>
                    <div className="true-false">
                        <div className="tf1">
                            <img src="../../../../assets/images/true.webp" alt="" />
                            <p>Velocidade de 60Mbps</p>
                        </div>
                        <div className="tf2">
                            <img src="../../../../assets/images/true.webp" alt="" />
                            <p>Instalação Gratuita</p>
                        </div>
                        <div className="tf3">
                            <img src="../../../../assets/images/false.webp" alt="" />
                            <p>Inclui plataformas</p>
                        </div>
                    </div>
                    <div className="botao" onClick={()=>navigate('/cadastro', {
                        state: {
                            plano: 'Basico'
                        }
                    })}>
                        Assine agora
                    </div>
                </div>
                <div className="mega2">
                    <h1>100 MEGA</h1>
                    <p>Perfeito para streaming e jogos online.</p>
                    <h1>R$ 79,90/mês</h1>
                    <div className="true-false">
                        <div className="tf1">
                            <img src="../../../../assets/images/true.webp" alt="" />
                            <p>Velocidade de 100Mbps</p>
                        </div>
                        <div className="tf2">
                            <img src="../../../../assets/images/true.webp" alt="" />
                            <p>Instalação Gratuita</p>
                        </div>
                        <div className="tf3">
                            <img src="../../../../assets/images/false.webp" alt="" />
                            <p>Inclui plataformas</p>
                        </div>
                    </div>

                    <div className="botao" onClick={()=>navigate('/cadastro', {
                        state: {
                            plano: 'Medio'
                        }
                    })}>
                        Assine agora
                    </div>

                </div>
                <div className="mega3">
                    <h1>300 MEGA</h1>
                    <p>Para quem quer o melhor em velocidade e estabilidade.</p>
                    <h1>R$ 99,90/mês</h1>
                    <div className="true-false">
                        <div className="tf1">
                            <img src="../../../../assets/images/true.webp" alt="" />
                            <p>Velocidade de 300Mbps</p>
                        </div>
                        <div className="tf2">
                            <img src="../../../../assets/images/true.webp" alt="" />
                            <p>Instalação Gratuita</p>
                        </div>
                        <div className="tf3">
                            <img src="../../../../assets/images/true.webp" alt="" />
                            <p>Inclui plataformas</p>
                        </div>
                    </div>
                    <div className="botao" onClick={()=>navigate('/cadastro', {
                        state: {
                            plano: 'Avançado'
                        }
                    })}>
                        Assine agora
                    </div>
                </div>
            </section>
            
        </div>
    )
}