import { useState } from 'react';
import './index.scss';
import Barraprogresso from '../../components/Barraprogresso';
import { useForm } from 'react-hook-form';

export function Cadastro() {
    const [passo, setPasso] = useState(0);
    const { watch, register, formState: { errors } } = useForm({ mode: "all" });

    function proximoPasso() {
        if (passo < 2) {
            setPasso(passo + 1);
        }
    }

    function passoAnterior() {
        if (passo > 0) {
            setPasso(passo - 1);
        }
    }

    return (
        <div className="conteudo">
            <div className="barra-progresso">
                <Barraprogresso progresso={33 * passo} />
                <button className="btn-navegacao" onClick={passoAnterior}>Voltar</button>
            </div>

            <div className="campo-passos">
                <form onSubmit={(e) => { e.preventDefault(); console.log(watch()); }}>
                    {passo === 0 && (
                        <div className="conteudo-passo">
                            <h1>Informe seus dados</h1>
                            <div className="campos-informedados">
                                {[
                                    { placeholder: "Nome completo", name: "nome", type: "text", required: true },
                                    { placeholder: "CEP", name: "cep", type: "text", required: true },
                                    { placeholder: "Celular", name: "celular", type: "tel", required: true },
                                    { placeholder: "Telefone (opcional)", name: "telefone", type: "tel", required: false },
                                    { placeholder: "Email", name: "email", type: "email", required: false },
                                    { placeholder: "CPF", name: "cpf", type: "text", required: true },
                                    { placeholder: "Número", name: "numeroEndereco", type: "number", required: true },
                                    { placeholder: "Data de nascimento", name: "datanascimento", type: "date", required: true },
                                ].map(({ placeholder, name, type, required }) => (
                                    <div className="linha" key={name}>
                                        <input
                                            type={type}
                                            placeholder={placeholder}
                                            className='campo-um-input'
                                            {...register(name, { required })}
                                        />
                                        {errors[name] && <p className="error">{errors[name].message}</p>}
                                    </div>
                                ))}
                            </div>
                            <button className='botao' onClick={proximoPasso}>Próximo</button>
                        </div>
                    )}

                    {passo === 1 && (
                        <div className="conteudo-passo">
                            <h1>Escolha a data de vencimento:</h1>
                            <div className="opcoes-data">
                                {[24, 18, 12, 6].map((dia) => (
                                    <button key={dia}>{dia}</button>
                                ))}
                            </div>
                            <div className="campos-informedados">
                                <p>Informe seu email para envio da fatura:</p>
                                <input type="email" className="campo-um-input" placeholder="Email para envio da fatura" {...register("emailFatura")} />
                                <input type="email" className="campo-um-input" placeholder="Confirme o email" {...register("confirmaEmail")} />
                                <p>Deseja cadastrar sua conta em débito automático?</p>
                                <div className="campo-input-radio">
                                    {['Sim', 'Não'].map((opcao) => (
                                        <div key={opcao} className="input-radio">
                                            <input type="radio" name="debito" value={opcao} />
                                            <label>{opcao}</label>
                                        </div>
                                    ))}
                                </div>
                                <button className='botao' onClick={proximoPasso}>Próximo</button>
                            </div>
                        </div>
                    )}

                    {passo === 2 && (
                        <div className="conteudo-passo">
                            <h1>Selecione as datas de instalação</h1>
                            <div className="opcoes-instalacao">
                                {['Primeira opção', 'Segunda opção'].map((opcao, index) => (
                                    <div key={index} className="opcao-instalacao">
                                        <p>{opcao}</p>
                                        <input type="date" />
                                    </div>
                                ))}
                            </div>
                            <button className="botao" type="submit">Finalizar cadastro</button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
