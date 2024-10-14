//TODO: verificar se dados são validos (data de nascimento, celular, email, cpf e outros) ao apertar en avançar
import { useContext } from 'react'
import './index.scss'
import {contextoCadastro} from '../../../pages/Cadastro'
import { useForm } from 'react-hook-form';

export default function InformeDados() {

    const [
        cep, setCep,
        nomeCompleto, setNomeCompleto, 
        celular, setCelular,
        telefone, setTelefone,
        email, setEmail,
        cpf, setCpf,
        dtNascimento, setDtNascimento,
        numeroEndereco, setNumeroEndereco

        ] 
    = useContext(contextoCadastro)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="conteudo">
            <h1>Informe seus dados</h1>
            <div className="campos-informedados">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="linha">
                <input type="text" placeholder="Nome completo" {...register("Nome completo", {required: true})} required className='campo-um-input'  onChange={(e)=>setNomeCompleto(e.target.value)}/>
                </div>
                
                <div className="linha">
                    <input type="number" placeholder="CEP:" {...register("CEP", {required: true})} className='campo-um-input' onChange={(e)=>setCep(e.target.value)} />
                </div>

                <div className="linha">
                    <input type="tel" {...register("celular", {required: true})} className="campo" placeholder="Celular" onChange={(e)=>setCelular(e.target.value)} />

                    <input type="tel" className="campo" placeholder="Telefone (opcional)" onChange={(e)=>setTelefone(e.target.value)} />
                </div>

                
                <div className="linha">
                    <input type="email" placeholder="Email:" className='campo-um-input' onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="linha">
                <input type="text" className="campo-um-input" placeholder="CPF:" onChange={(e)=> setCpf(e.target.value)}/>
                </div>
                <div className="linha">
                    <input type='number' className='campo' placeholder='Número' onChange={(e)=> setNumeroEndereco(e.target.value)}/>
                    <input type="date" className="campo" placeholder="Data de nascimento:" onChange={(e)=> setDtNascimento(e.target.value)}/>
                </div>
                <input type="submit" />
                </form>
            </div>
            
        </div>
    )
}