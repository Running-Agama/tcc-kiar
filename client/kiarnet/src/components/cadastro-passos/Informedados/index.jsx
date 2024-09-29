
import './index.scss'
export default function InformeDados() {
    return (
        <div className="conteudo">
            <h1>Informe seus dados</h1>
            <div className="campos-informedados">

                <div className="linha">
                    <input type="text" placeholder="Nome completo:" className='campo-um-input' />
                </div>
                

                <div className="linha">
                    <input type="tel" className="campo" placeholder="Celular" />
                    <input type="tel" className="campo" placeholder="Telefone (opcional)" />
                </div>

                
                <div className="linha">
                    <input type="email" placeholder="Email:" className='campo-um-input' />
                </div>

                <div className="linha">
                    <input type="text" className="campo" placeholder="CPF:" />
                    <input type="text" className="campo" placeholder="Data de nascimento:" />
                </div>

                
            </div>
            
        </div>
    )
}