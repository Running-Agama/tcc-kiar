
import './index.scss'
export default function InformeDados() {
    return (
        <div className="conteudo">
            <h1>Informe seus dados</h1>
            <div className="campos-informedados">

                <input type="text" placeholder="Nome completo:" className='nome' />

                <div className="linha">
                    <input type="text" className="campo" placeholder="Celular" />
                    <input type="text" className="campo" placeholder="Telefone (opcional)" />
                </div>

                <input type="email" placeholder="email:" className='email' />

                <div className="linha">
                    <input type="text" className="campo" placeholder="CPF:" />
                    <input type="text" className="campo" placeholder="Data de nascimento:" />
                </div>


            </div>
            <button style={{width: '50%'}}>Avançar</button>
        </div>
    )
}