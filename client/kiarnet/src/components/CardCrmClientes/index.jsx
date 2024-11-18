export default function CardCrmClientes({ nome, cep, cpf, idCliente, onClick }) {
    return (
      <div className="client-card" onClick={onClick}>
        <p>
          <span className="client-name">Nome: {nome}</span>
          <span className="client-info">CEP: {cep}</span>
          <span className="client-info">CPF: {cpf}</span>
          <span className="client-info">MENSALIDADE: PAGA / N PAGA</span>
        </p>
      </div>
    );
  }
  