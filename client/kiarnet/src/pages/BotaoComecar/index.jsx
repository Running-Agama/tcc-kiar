import React from 'react';
import './index.scss';

export default function Plans() {
    return (
        <div className="plans-page">
            <header className="header">
                <h1>Escolha o Seu Plano</h1>
                <p>Descubra qual plano se adapta melhor às suas necessidades!</p>
            </header>

            <section className="plans-section">
                <div className="plan-card">
                    <h2>Plano Básico</h2>
                    <p>Ideal para navegação leve e streaming.</p>
                    <h3>100 Mbps</h3>
                    <button className="btn-select">Selecionar</button>
                </div>

                <div className="plan-card">
                    <h2>Plano Intermediário</h2>
                    <p>Perfeito para famílias e trabalho remoto.</p>
                    <h3>200 Mbps</h3>
                    <button className="btn-select">Selecionar</button>
                </div>

                <div className="plan-card">
                    <h2>Plano Avançado</h2>
                    <p>Para gamers e heavy users.</p>
                    <h3>300 Mbps</h3>
                    <button className="btn-select">Selecionar</button>
                </div>
            </section>

            <section className="contact-section">
                <h2>Entre em Contato</h2>
                <p>Tem dúvidas? Nossa equipe está aqui para ajudar!</p>
              <a href="/Contato">  <button className="btn-contact">Fale Conosco</button></a>
            </section>

            <footer className="footer">
                <p>© 2024 Kiarnet. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
