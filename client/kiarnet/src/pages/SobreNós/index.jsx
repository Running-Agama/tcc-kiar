import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function SobreNos() {
    const navigate = useNavigate();

    return (
        <div className="conteudoSobre">
            <header className="headerSobre">
                <h1>Sobre a KiarNet</h1>
                <h2>Conheça mais sobre a nossa empresa e a nossa missão</h2>
            </header>

            <div className="containerSobre">
                <section className="historia">
                    <h2>Nossa História</h2>
                    <p>A Kiarnet foi fundada em 2020 com o objetivo de fornecer internet de alta qualidade e acessível para todos. Desde então, temos nos dedicado a oferecer os melhores serviços e suporte aos nossos clientes.</p>
                </section>
                <section className="missao">
                    <h2>Nossa Missão</h2>
                    <p>Nossa missão é conectar pessoas e comunidades, proporcionando uma experiência de internet rápida, estável e confiável. Acreditamos que a internet é uma ferramenta essencial para o desenvolvimento pessoal e profissional.</p>
                </section>
                <section className="valores">
                    <h2>Nossos Valores</h2>
                    <ul>
                        <li>Excelência no Atendimento</li>
                        <li>Transparência</li>
                        <li>Inovação</li>
                        <li>Responsabilidade Social</li>
                    </ul>
                </section>
            </div>

            <div className="btnVoltarHome">
                <button onClick={() => navigate('/')}>Voltar à Home</button>
            </div>
        </div>
    );
}
