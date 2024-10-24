import React from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalhoA';
export default function MoreInfo() {
    return (
        <div className="more-info-page">
            <Cabecalho />
            <header className="header">
                <h1>Mais Sobre a Kiar Net</h1>
                <p>Descubra todos os benefícios e serviços que oferecemos para transformar sua navegação.</p>
            </header>

            <section className="benefits-section">
                <h2>Benefícios da Kiar Net</h2>
                <div className="benefit">
                    <h3>Conexão Estável</h3>
                    <p>Com tecnologia de ponta, garantimos uma conexão estável e rápida para todas as suas atividades online.</p>
                </div>
                <div className="benefit">
                    <h3>Atendimento Personalizado</h3>
                    <p>Nossa equipe está sempre pronta para ajudar, oferecendo suporte rápido e eficaz sempre que você precisar.</p>
                </div>
                <div className="benefit">
                    <h3>Planos Flexíveis</h3>
                    <p>Escolha entre diferentes planos de internet que se adaptam ao seu estilo de vida e necessidades específicas.</p>
                </div>
            </section>

            <section className="testimonials-section">
                <h2>O que nossos clientes dizem</h2>
                <div className="testimonial">
                    <p>"A Kiar Net transformou minha experiência de navegação! Nunca tive uma conexão tão rápida!"</p>
                    <span>- João Silva</span>
                </div>
                <div className="testimonial">
                    <p>"O suporte da Kiar Net é excepcional. Sempre que preciso, eles estão lá para me ajudar!"</p>
                    <span>- Maria Oliveira</span>
                </div>
            </section>

            <footer className="footer">
                <p>© 2024 Kiarnet. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
