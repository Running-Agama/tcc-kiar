//TODO: verificar se dados são validos (data de nascimento, celular, email, cpf e outros) ao apertar en avançar
import { useContext } from 'react'
import './index.scss'
import {contextoCadastro} from '../../../pages/Cadastro'

export default function InformeDados() {

    const [
        cep, setCep,
        nomeCompleto, setNomeCompleto, 
        celular, setCelular,
        telefone, setTelefone,
        email, setEmail,
        cpf, setCpf,
        dtNascimento, setDtNascimento,

        ] 
    = useContext(contextoCadastro)

    return (
        <div className="conteudo">
            <h1>Informe seus dados</h1>
            <div className="campos-informedados">

                <div className="linha">
                    <input type="text" placeholder="Nome completo:" required className='campo-um-input' onChange={(e)=>setNomeCompleto(e.target.value)} />
                </div>
                
                <div className="linha">
                    <input type="number" placeholder="CEP:" className='campo-um-input' onChange={(e)=>setCep(e.target.value)} />
                </div>

                <div className="linha">
                    <input type="tel" className="campo" placeholder="Celular" onChange={(e)=>setCelular(e.target.value)} />

                    <input type="tel" className="campo" placeholder="Telefone (opcional)" onChange={(e)=>setTelefone(e.target.value)} />
                </div>

                
                <div className="linha">
                    <input type="email" placeholder="Email:" className='campo-um-input' onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="linha">
                    <input type="text" className="campo" placeholder="CPF:" onChange={(e)=> setCpf(e.target.value)}/>
                    <input type="date" className="campo" placeholder="Data de nascimento:" onChange={(e)=> setDtNascimento(e.target.value)}/>
                </div>

                
            </div>
            
        </div>
    )
}