import { useState } from "react";
import "./index.scss";
import { useForm, useFieldArray } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import iconeVoltar from '../../images/icons/iconeVoltar/iconeVoltar.svg'
import InputMask from 'react-input-mask'
import validator from 'validator'
import apiURL from '../../service/axios.js'


export function Cadastro() {
  
  const [passo, setPasso] = useState(0);
  const [cep, setCep] = useState("");
  const [emailFatura, setEmailFatura] = useState("");
  const [confirmacaoEmailFatura, setConfirmacaoEmailFatura] = useState("");
  const [dadosEndereco, setDadosEndereco] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [numeroEndereco, setNumeroEndereco] = useState("");
  const [opcoesDebito, setOpcoesDebito] = useState(false)
  const [email, setEmail] = useState('')



  const navegar = useNavigate()
  const dados = useLocation();


  const {
    unregister,
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
      plano: dados.state.plano
    },
    reValidateMode: "onChange",
    mode: "onChange",
  });




  async function verificarCEP() {

    let resposta
    let data

    if (cep.length != 8) {
      setError("cep", {
        type: "manual",
        message: "Formato de CEP invalido, verifique se ele está correto e utiize apenas números"
      })
    }

    if (cep !== "" && cep.length == 8) {
      resposta = await apiURL.get(`https://viacep.com.br/ws/${cep}/json/`);
      data = resposta.data;
      
      console.log(data);

      if (data.erro === "true") {
        setError("cep", {
          type: "manual",
          message: "Erro ao requisitar CEP, verifique se está correto",
        });
      }
      else {
        clearErrors("cep");
        console.log(data)
        setDadosEndereco(data)
        setValue("cep", data.cep);
      }
    }

  }

  function verificarEmailConfirmacao() {

    //validator identifica se é email ou não, mas não executa o set error
    if (!validator.isEmail(emailFatura)) {

      setError("emailfatura", {
        type: "manual",
        message: "Formato de email invalido"
      })
    }
    if (emailFatura !== confirmacaoEmailFatura) {
      setError("emailfatura", {
        type: "manual",
        message: "Os emails não coincidem!"
      });
    } else {
      clearErrors("emailfatura");
    }
  }

  const onSubmit = async (data) => {
    setCarregando(true)


    const resposta = await apiURL.post(`/cliente/cadastro`, data)
    if (resposta.error) {
      console.log(resposta.error)
    }
    console.log(resposta.data)
    // redirecionar pra pagina final com todos os dados
    setCarregando(false)

    navegar('/cadastro/final', { state: resposta.data })
  };

  const { insert, remove } = useFieldArray({
    control,
    name: "dadosendereco",
  });


  async function transicaoPasso2() {
    setCarregando(true);
    try {
      
      const respostaCpf = await apiURL.post(`/cliente/validacao/procura-cpf`, { cpf: watch().cpf });
      const respostaEmail = await apiURL.post(`/cliente/validacao/procura-email`, { email: watch().email });
      const respostaCelular = await apiURL.post(`/cliente/validacao/procura-celular`, {celular: watch().celular});

      let cpfValido = true;
      let emailValido = true;
      let celularValido = true;

      if (respostaCpf.data.resposta === 'encontrado') {
        setError('cpf', {
          type: 'manual',
          message: 'CPF já registrado'
        });
        cpfValido = false;
      } else {
        clearErrors('cpf');
      }

      if (respostaEmail.data.resposta === 'encontrado') {
        setError('email', {
          type: "manual",
          message: "Email já registrado"
        });
        emailValido = false;
      } else {
        clearErrors('email');
      }

      if(respostaCelular.data.resposta === 'encontrado'){
        setError('celular',{
          type: "manual",
          message: "Celular já cadastrado"
        });
        celularValido = false
      } else {
        clearErrors('celular')
      }
      


      if (cpfValido && emailValido && celularValido) {
        setPasso(passo + 1);
      }
  
    }
    finally {
      setCarregando(false);
    }
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
    if (passo > 0) {
      if (passo === 2) {
        remove('dadosendereco', 0)
        remove('dadosbancarios', null)
      }

      setPasso(passo - 1)
    }

  }

  function handleDebitoAutomaticoNao() {
    unregister('dadosbancarios')
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

      </div>

      <div className="campo-passos">
        <form onSubmit={handleSubmit(onSubmit)}>
          {passo === 0 && (
            <div className="conteudo">
              <h1 className="msg-informe">Informe seus dados pessoais</h1>
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
                      className='erro'
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
                      className="erro"
                    >
                      {errors.cep.message}
                    </p>
                  )}
                </div>

                <div className="linha">
                  <InputMask
                    mask="(99) 99999-9999"
                    placeholder="Celular"
                    className="campo"
                    {...register("celular", {
                      required: "O celular é obrigatório"
                    })} />

                  {errors.celular && (
                    <p
                      className="erro"
                    >
                      {errors.celular.message}
                    </p>
                  )}

                  <InputMask
                    placeholder="Telefone (opcional"
                    mask="(99) 99999-9999"
                    className="campo"
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p
                      className="erro"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="linha">
                  <InputMask
                    className="campo-um-input"
                    mask="999.999.999-99"
                    placeholder="CPF:"
                    {...register("cpf", {
                      required: "O CPF é obrigatório"
                    })}
                  />

                  {errors.cpf && (
                    <p
                      className="erro"
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
                      className="erro"
                    >
                      {errors.numeroEndereco.message}
                    </p>
                  )}

                  <div className="dt">
                    <p>Data de nascimento</p>
                    <input
                      type="date"
                      className="campo dtnascimento"
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
                        className="erro"
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
              <h1 className="msg-informe">Dados de endereço</h1>

              <p>Data de vencimento:</p>
              <div className="opcoes-data">
                <select name="" id="" {...register('datavencimento', {
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
                <p>Email para envio da fatura:</p>

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
                      className="erro"
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
                        value="1"
                        {...register("opcaodebito", {
                          required: "Por favor, escolha uma opção"
                        })}
                        onClick={() => setOpcoesDebito(true)}
                      ></input>
                      <label htmlFor="selecao-debito-sim">Sim</label>
                    </div>

                    <div className="input-radio">
                      <input
                        type="radio"
                        name="selecao-debito"
                        id="selecao-debito-nao"
                        value="0"
                        {...register("opcaodebito", {
                          required: "Por favor, escolha uma opção"
                        })}
                        onClick={() => handleDebitoAutomaticoNao()}
                      ></input>
                      <label htmlFor="selecao-debito-nao">Não</label>
                      {errors.opcaodebito && <p>{errors.opcaodebito}</p>}
                    </div>
                  </div>
                </div>

                {opcoesDebito === true &&
                  <div className="bank-data-form" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <div className="form-group">
                      <label htmlFor="bank">Escolha o Banco:</label>
                      <select id="bank" {...register('dadosbancarios.banco', {
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
                      <input type="text" {...register("dadosbancarios.numeroagencia", {
                        required: true
                      })} />
                    </div>
                    <div className="form-group">

                      <div className="form-group">
                        <label htmlFor="numeroConta">Numero da conta com digito</label>
                        <input type="text" {...register('dadosbancarios.numeroconta', {
                          required: true
                        })} />
                      </div>
                      <label htmlFor="accountType">Tipo de Conta:</label>
                      <select id="accountType" {...register('dadosbancarios.tipoconta', {
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
                          {...register("tiporesidencia", {
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
              <h1 className="msg-informe">Selecione as datas de instalação</h1>

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
                {carregando ? <p>Aguarde..</p> : <p>Concluir cadastro</p>}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
