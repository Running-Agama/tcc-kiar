export default function CardCrmClientes(props){
    return(
        <div className="client-card">
            <p>
                <span className="client-name">Nome: {ds_nome}</span>
                <span className="client-info">CEP: {props.ds_cep}</span>
                <span className="client-info">CPF: {props.ds_cpf}</span>
                <span className="client-info">MENSALIDADE: PAGA / N PAGA</span>
            </p>
      </div>
    )
}