export default function CardCrmClientes(props){
    return(
        <div className="client-card" onClick={()=>alert(props.id)}>
            <p>
                <span className="client-name">Nome: {props.nome}</span>
                <span className="client-info">CEP: {props.cep}</span>
                <span className="client-info">CPF: {props.cpf}</span>
                <span className="client-info">MENSALIDADE: PAGA / N PAGA</span>
            </p>
      </div>
    )
}