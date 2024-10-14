import { createContext, useState } from 'react';
import InformeDados from '../../components/cadastro-passos/Informedados';
import './index.scss'
import Barraprogresso from '../../components/Barraprogresso';
import Pagamento from '../../components/cadastro-passos/Pagamento';
import BancoConta from '../../components/inserir-dados-bancarios';

//TODO: Aproveitando que a API do viacep verifica região, definir que apenas regiões sul/sudeste podem se inscrever, tela de erro
 export const contextoCadastro = createContext()
export function Cadastro(){
    const [passo, setPasso] = useState(0)
    

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [celular, setCelular] = useState('')
    const [telefone, setTelefone ] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [dtNascimento, setDtNascimento] = useState('')
    const [escolhaDebito, setEscolhaDebito] = useState(false)
    const [tipoResidencia, setTipoResidencia] = useState('')
    const [emailFatura, setEmailFatura] = useState('')
    const [diaVencimento, setDiaVencimento] = useState(0)
    const [cep, setCep] = useState(0)
    const [dadosEndereco, setDadosEndereco] = useState({})

    function proximoPasso(){

    }
    function passoAnterior(){
        if(!passo >= 0){
            setPasso(passo - 1)
        }
    }
    return(
    
    <div className="conteudo">
        <div className="barra-progresso" style={{position: 'sticky', width: '100%', top: '10px'}}>
            <Barraprogresso progresso={(35*passo)}/>
            <button onClick={passoAnterior}>Voltar</button>
        </div>

        <contextoCadastro.Provider value={
            [
            nomeCompleto, setNomeCompleto, 
            celular, setCelular,
            telefone, setTelefone,
            email, setEmail,
            cpf, setCpf,
            dtNascimento, setDtNascimento,
            escolhaDebito, setEscolhaDebito,
            tipoResidencia, setTipoResidencia,
            emailFatura, setEmailFatura,
            diaVencimento, setDiaVencimento,
            cep, setCep,
            dadosEndereco, setDadosEndereco
            ]
            }>
            <div className="campo-passos">
                {passo === 0 && <InformeDados/>}
                {passo === 1 && <Pagamento/>}
                {passo === 2 && <BancoConta/>}
            </div>
        </contextoCadastro.Provider>
        <button className='botao' onClick={()=>setPasso(passo + 1)}>Avançar</button>
    </div>
    )
}