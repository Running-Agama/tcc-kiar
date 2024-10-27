import { useState } from "react";
import "./index.scss";
import Barraprogresso from "../../components/Barraprogresso";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import { useLocation } from "react-router-dom";
import iconeVoltar from '../../images/icons/iconeVoltar/iconeVoltar.svg'

//verificar cep quebrando ao tirar o mouse sem nenhum campo, deve ser facil de resolver
//opcao debito null

export function Cadastro() {
  const [passo, setPasso] = useState(0);
  const [cep, setCep] = useState("");
  const [emailFatura, setEmailFatura] = useState("");
  const [confirmacaoEmailFatura, setConfirmacaoEmailFatura] = useState("");
  const [dadosEndereco, setDadosEndereco] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [numeroEndereco, setNumeroEndereco] = useState("");
  const [opcoesDebito, setOpcoesDebito] = useState(false)

  const urlAPI = 'https://kiarnet-api.onrender.com'

  const dados = useLocation();

  const {
    setValue,
    clearErrors,
    handleSubmit,
    control,
    watch,
    register,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      plano: dados.state.plano,
    },
    reValidateMode: "onChange",
    mode: "onChange",
  });


  async function verificarCEP() {


    const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = resposta.data;

    console.log(data);
    
    if (data.erro === "true") {
      setError("cep", {
        type: "manual",
        message: "Erro ao requisitar CEP, verifique se está correto",
      });
    } else if (data.uf !== "SP") {
      setError("cep", {
        type: "manual",
        message: "O CEP não é de SP",
      });
    } else if (data.regiao !== "Sudeste" && data.regiao !== "Sul") {
      setError("cep", {
        type: "manual",
        message: "Por enquanto cobrimos apenas as regiões Sul e Sudeste",
      });
    } else {
      clearErrors("cep");
      setValue("cep", data.cep);
    }
  }

  function verificarEmailConfirmacao() {
    if (emailFatura !== confirmacaoEmailFatura) {
      setError("emailfatura", {
        type: "manual",
        message: "Os emails não coincidem!",
      });
    } else {
      clearErrors("emailfatura");
    }
  }

  const onSubmit = async (data) => {
    console.log(typeof data);
    console.log(data);

    console.log(`${urlAPI}/cliente/cadastro`, data);
    
    await axios.post(`${urlAPI}/cliente/cadastro`, data)
  };

  const { insert, remove } = useFieldArray({
    control,
    name: "dadosendereco",
  });

  async function transicaoPasso2() {
    setCarregando(true);

    const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = resposta.data;
    setDadosEndereco(data);

    setCarregando(false);
    setPasso(passo + 1);
  }

  function transicaoPasso3() {
    insert(0, {
      cep: dadosEndereco.cep,
      bairro: dadosEndereco.bairro,
      cidade: dadosEndereco.localidade,
      estado: dadosEndereco.uf,
      rua: dadosEndereco.logradouro,
    });

    setPasso(passo + 1);
  }

  function handleVoltar() {
    if (passo > 1) {
      if (passo === 2) {
        remove('dadosendereco', 0)
        remove('dadosbancarios',0)
      }

      setPasso(passo - 1)
    }

  }

  function handleDebitoAutomaticoNao(){
    remove('dadosbancarios', 0)
    setOpcoesDebito(false)
  }

  return (
    <div className="conteudo">

      <div
        className="barra-progresso"
        style={{
          position: "sticky",
          width: "100%",
          top: "10px",
          height: "50px",
        }}
      >
        <button className="botao-voltar" onClick={handleVoltar}><img src={iconeVoltar} alt="" /></button>
        <Barraprogresso progresso={50 * passo} />

      </div>

      <div className="campo-passos">
        <form onSubmit={handleSubmit(onSubmit)}>
          {passo === 0 && (
            <div className="conteudo">
              <h1>Informe seus dados</h1>
              <div className="campos-informedados">
                <div className="linha">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="campo-um-input"
                   
                    {...register("nome", {
                      required: "O nome completo é obrigatório",
                    })}
                    
                  />
                  {errors.nome && (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        position: "absolute",
                        marginTop: "50px",
                      }}
                    >
                      {errors.nome.message}
                    </p>
                  )}
                </div>

                <div className="linha">
                  <input
                    type="text"
                    placeholder="CEP:"
                    className="campo-um-input"
                    maxLength={'8'}
                    {...register("cep", {
                      required: "CEP obrigatório",
                      pattern: {
                        value: /^[0-9]{5}-?[0-9]{3}$/,
                        message: "Formato de CEP inválido",
                      },
                    })}
                    onChange={(e) => setCep(e.target.value)}
                    onBlur={verificarCEP}
                  />
                  {errors.cep && (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        position: "absolute",
                        marginTop: "50px",
                      }}
                    >
                      {errors.cep.message}
                    </p>
                  )}
                </div>

                <div className="linha">
                  <input
                    type="tel"
                    className="campo"
                    placeholder="Celular"
                    {...register("celular", {
                      required: "O celular é obrigatório",
                    })}
                    maxLength={"11"}
                  />
                  {errors.celular && (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        position: "absolute",
                        marginTop: "50px",
                      }}
                    >
                      {errors.celular.message}
                    </p>
                  )}

                  <input
                    type="tel"
                    className="campo"
                    placeholder="Telefone (opcional)"
                    {...register("telefone")}
                  />
                </div>

                <div className="linha">
                  <input
                    type="email"
                    placeholder="Email:"
                    className="campo-um-input"
                    {...register("email", {
                      required: "O email é obrigatório",
                    })}
                  />
                  {errors.email && (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        position: "absolute",
                        marginTop: "50px",
                      }}
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="linha">
                  <input
                    type="text"
                    className="campo-um-input"
                    placeholder="CPF:"
                    maxLength={"11"}
                    {...register("cpf", {
                      required: "O CPF é obrigatório",
                    })}
                  />
                  
                  {errors.cpf && (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        position: "absolute",
                        marginTop: "50px",
                      }}
                    >
                      {errors.cpf.message}
                    </p>
                  )}
                </div>

                <div className="linha">
                  <input
                    type="number"
                    className="campo"
                    placeholder="Número"
                    {...register("numeroendereco", {
                      required: "O número do endereço é obrigatório",
                    })}
                    onChange={(e) => setNumeroEndereco(e.target.value)}
                  />
                  {errors.numeroEndereco && (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        position: "absolute",
                        marginTop: "50px",
                      }}
                    >
                      {errors.numeroEndereco.message}
                    </p>
                  )}

                  <div className="dt" style={{ height: "45px", width: "45%" }}>
                    <input
                      type="date"
                      className="campo"
                      placeholder="Data de nascimento:"
                      {...register("datanascimento", {
                        required: "A data de nascimento é obrigatória",
                      })}
                      max={
                        new Date(
                          new Date().setFullYear(new Date().getFullYear() - 18)
                        )
                          .toISOString()
                          .split("T")[0]
                      }
                      style={{ width: "100%" }}
                    />
                    {errors.datanascimento && (
                      <p
                        style={{
                          fontSize: "10px",
                          color: "red",
                          position: "absolute",
                          marginTop: "50px",
                        }}
                      >
                        {errors.datanascimento.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <button
                className="botao"
                disabled={!isValid}
                onClick={async () => transicaoPasso2()}
                type="button"
              >
                {!carregando ? <p>Proximo passo</p> : <p>Aguarde...</p>}
              </button>
            </div>
          )}
          {passo === 1 && (
            <div className="conteudo-passo2">
              <p>Escolha a data de vencimento:</p>
              <div className="opcoes-data">
                <select name="" id="" {...register('datavencimento',{
                  required: true,
                  message: "A data de vencimento é obgiratória"
                })}>
                  <option value="24">24</option>
                  <option value="17">17</option>
                  <option value="10">10</option>
                  <option value="3">3</option>
                </select>

              </div>

              <div className="campos-informedados">
                <p>Informe seu email para envio da fatura:</p>

                <div className="campo-email">
                  <input
                    type="email"
                    className="campo-um-input"
                    placeholder="email para envio da fatura"
                    {...register("emailfatura", {
                      required: "Email de fatura é obrigatorio",
                    })}
                    onChange={(e) => setEmailFatura(e.target.value)}

                  />

                  {errors.emailfatura && (
                    <p
                      style={{
                        position: "absolute",
                        fontSize: "10px",
                        color: "red",
                      }}
                    >
                      {errors.emailfatura.message}
                    </p>
                  )}

                  <input
                    type="email"
                    className="campo-um-input"
                    placeholder="Confirme o email"
                    style={{ marginTop: "15px" }}
                    onChange={(e) => setConfirmacaoEmailFatura(e.target.value)}
                    onBlur={verificarEmailConfirmacao}
                  />
                </div>

                <p style={{ marginTop: "20px" }}>
                  Deseja cadastrar sua conta em débito automatico?
                </p>
                <div className="campo">
                  <div className="campo-input-radio">
                    <div className="input-radio">
                      <input
                        type="radio"
                        name="selecao-debito"
                        id="selecao-debito-sim"
                        value="true"
                        {...register("opcaodebito", {})}
                        onClick={() => setOpcoesDebito(true)}
                      ></input>
                      <label htmlFor="selecao-debito-sim">Sim</label>
                    </div>

                    <div className="input-radio">
                      <input
                        type="radio"
                        name="selecao-debito"
                        id="selecao-debito-nao"
                        value="nao"
                        {...register("opcaodebito", {})}
                        onClick={handleDebitoAutomaticoNao}

                      ></input>
                      <label htmlFor="selecao-debito-nao">Não</label>
                    </div>
                  </div>
                </div>

                {opcoesDebito === true &&
                    <div className="bank-data-form" style={{width: "100%", display: "flex", flexDirection: "column"}}>
                      <div className="form-group">
                        <label htmlFor="bank">Escolha o Banco:</label>
                        <select id="bank" {...register('dadosbancarios.banco',{
                          required: true
                        })}>
                          <option value="Nubank">Nubank</option>
                          <option value="Caixa">Caixa</option>
                          <option value="Original">Original</option>
                          <option value="Bradesco">Bradesco</option>
                          <option value="Banco do Brasil">Banco do Brasil</option>
                          <option value="Santander">Santander</option>
                          <option value="Inter">Inter</option>
                          <option value="Itaú">Itaú</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="numeroAgencia">Numero da agência:</label>
                        <input type="text" {...register("dadosbancarios.numeroagencia",{
                          required: true
                        })}/>
                      </div>
                      <div className="form-group">

                        <div className="form-group">
                          <label htmlFor="numeroConta">Numero da conta com digito</label>
                          <input type="text" {...register('dadosbancarios.numeroconta', {
                            required: true
                          })}/>
                        </div>
                        <label htmlFor="accountType">Tipo de Conta:</label>
                        <select id="accountType" {...register('dadosbancarios.tipoconta',{
                          required: true
                        })}>
                          <option value="corrente">Corrente</option>
                          <option value="fisica">Física</option>
                          <option value="juridica">Jurídica</option>
                        </select>
                      </div>
                    </div>
                }

                <p style={{ marginTop: "10px" }}>Confirme seu endereço:</p>
                <p>pesquisar sobre usefieldarray depois</p>
                <div className="info-endereco">
                  <div className="linha-info-endereco">
                    <p className="nome-linha">CEP:</p>
                    <p>{dadosEndereco.cep}</p>
                  </div>
                  <div className="linha-info-endereco">
                    <p>Bairro:</p>
                    <p>{dadosEndereco.bairro}</p>
                  </div>
                  <div className="linha-info-endereco">
                    <p className="nome-linha">Cidade:</p>
                    <p>{dadosEndereco.localidade}</p>
                  </div>
                  <div className="linha-info-endereco">
                    <p className="nome-linha">Estado:</p>
                    <p>{dadosEndereco.uf}</p>
                  </div>
                  <div className="linha-info-endereco">
                    <p className="nome-linha">Endereço/Rua:</p>
                    <p>{dadosEndereco.logradouro}</p>
                  </div>
                  <div className="linha-info-endereco">
                    <p>Número:</p>
                    <p>{numeroEndereco}</p>
                  </div>

                  <div className="campo-tipo-residencia">
                    <p>Selecione o tipo da sua residência:</p>
                    <div className="campo-input-radio">
                      <div className="input-radio">
                        <input
                          type="radio"
                          name="selecao-residencia"
                          id="selecao-residencia-casa"
                          value="Casa"
                          {...register("tiporesidencia",                             {
                            required: "Por favor, escolha o tipo de residência"
                          })

                          }
                        />
                        <label htmlFor="selecao-residencia-casa">Casa</label>
                        {errors.tiporesidencia && <p>{errors.tiporesidencia}</p>}
                      </div>

                      <div className="input-radio">
                        <input
                          type="radio"
                          name="selecao-residencia"
                          id="selecao-residencia-apartamento"
                          {...register("tiporesidencia")}
                          value="Apartamento"
                        />
                        <label htmlFor="selecao-residencia-apartamento">
                          Apartamento
                        </label>
                      </div>
                    </div>

                    <input
                      type="text"
                      className="complemento"
                      placeholder="Complemento (opcional)"
                      maxLength="60"
                      {...register("complemento")}
                    />
                  </div>

                  <button
                    className="botao"
                    disabled={!isValid}
                    type="button"
                    onClick={() => transicaoPasso3()}
                  >
                    Proximo passo
                  </button>
                </div>
              </div>
            </div>
          )}
          {passo === 2 && (
            <div className="conteudo-passo3">
              <h1>Selecione as datas de instalação</h1>

              <div className="opcoes-instalacao">
                <div className="opcao-instalacao">
                  <p>primeira opção</p>
                  <input
                    type="date"
                    name=""
                    id=""
                    min={new Date()}
                    {...register("primeiraopcaoinstalacao")}
                  />
                </div>

                <div className="opcao-instalacao" style={{ marginTop: "30px" }}>
                  <p>Segunda opção</p>
                  <input
                    type="date"
                    name=""
                    id=""
                    min={new Date()}
                    {...register("segundaopcaoinstalacao")}
                  />
                </div>
              </div>

              <button className="botao" type="submit">
                Concluir cadastro
              </button>
            </div>
          )}
          <pre style={{ position: "absolute" }}>
            {JSON.stringify(watch(), null, 2)}
          </pre>
        </form>
      </div>
    </div>
  );
}
