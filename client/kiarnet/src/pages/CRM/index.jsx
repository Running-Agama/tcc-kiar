import React from 'react';
import './index.scss';

export default function Crm() {
  return (
    <div className="conteudo-crm">
      <header className="cabecalho-tecnico">
        <ul>
            <li><a href="/">Voltar a página inicial</a></li>
            <li><h1>Área do técnico - {'{nome}'}</h1></li>
        </ul>
        
        
      </header>

      <main className="area-crm">
        <aside className="sidebar">
          <div className="client-count">
            <p>Clientes no total</p>
          </div>
          <div className="filter-section">
            <div className="filter-group">
              <label htmlFor="pago">Pago:</label>
              <input type="checkbox" id="pago" />
            </div>
            <div className="filter-group">
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" placeholder="Digite o CEP" />
            </div>
            <div className="filter-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="Digite o nome" />
            </div>
            <button>Pesquisar</button>
          </div>
        </aside>

        <section className="client-list-section">
          <h2>LISTA DE CLIENTES</h2>
          <div className="client-list">
              <div className="client-card">
                <p>
                  <span className="client-name">nome completo tlgd parsa</span>
                  <span className="client-info">CEP: xxxxx-xxx</span>
                  <span className="client-info">CPF: xxxxxxxx-xx</span>
                  <span className="client-info">MENSALIDADE: PAGA / N PAGA</span>
                </p>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}

