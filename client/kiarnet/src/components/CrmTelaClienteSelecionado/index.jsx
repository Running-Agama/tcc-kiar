import React from 'react';
import './index.scss';

function CrmTelaClienteSelecionado({ cliente, fecharModal }) {
  if (!cliente) return null;

  return (
    <div className="modal-overlay">
      <div className="container">
        <button className="close-modal" onClick={fecharModal}>
          Fechar
        </button>
        <header className="header">
          <h1>{cliente.ds_nome || 'NOME COMPLETO'}</h1>
        </header>
        <div className="content">
          <div className="box">
            <h2>Informações endereço</h2>
            <div className="field">
              <label>CEP</label>
              <span>{cliente.ds_cep || 'XXXXX-XXX'}</span>
            </div>
            <div className="field">
              <label>Rua</label>
              <span>{cliente.rua || 'Rua Mariano Procópio'}</span>
            </div>
            <div className="field">
              <label>Número</label>
              <span>{cliente.numero || 'XXXX'}</span>
            </div>
            <div className="field">
              <label>Bairro</label>
              <span>{cliente.bairro || 'Bairro do limoeiro'}</span>
            </div>
            <div className="field">
              <label>Tipo</label>
              <span>{cliente.tipo || 'CASA'}</span>
            </div>
            <div className="field">
              <label>Complemento</label>
              <span>{cliente.complemento || '-'}</span>
            </div>
          </div>

          <div className="box">
            <h2>Informações pessoais</h2>
            <div className="field">
              <label>Email</label>
              <span>{cliente.email || 'email@host.com'}</span>
            </div>
            <div className="field">
              <label>CPF</label>
              <span>{cliente.ds_cpf || 'XXXXXXXX-XX'}</span>
            </div>
            <div className="field">
              <label>Telefone</label>
              <span>{cliente.telefone || 'XXXXXXXX-XX'}</span>
            </div>
            <div className="field">
              <label>Data de nascimento</label>
              <span>{cliente.data_nascimento || 'XXXXXXXX'}</span>
            </div>
            <div className="field">
              <label>Celular</label>
              <span>{cliente.celular || 'XXXXXXXX-XX'}</span>
            </div>
          </div>

          <div className="box">
            <h2>Informações serviço</h2>
            <div className="field">
              <label>Plano</label>
              <span>{cliente.plano || '100MB'}</span>
            </div>
            <div className="field">
              <label>Valor</label>
              <span>{cliente.valor || '50'}</span>
            </div>
            <div className="field">
              <label>Data assinatura</label>
              <span>{cliente.data_assinatura || '00/00/0000'}</span>
            </div>
            <div className="field">
              <label>Dia de vencimento</label>
              <span>{cliente.dia_vencimento || '21'}</span>
            </div>
            <div className="field">
              <label>Mensalidade atual paga</label>
              <span>{cliente.mensalidade_paga ? 'SIM' : 'NÃO'}</span>
            </div>
            <button className="history-button">Exibir histórico de mensalidade</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmTelaClienteSelecionado;
