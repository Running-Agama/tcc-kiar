import React, { useEffect, useState } from 'react';
import './index.scss';
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import CardCrmClientes from '../../components/CardCrmClientes';
import apiURL from '../../service/axios';
export default function Crm() {
  const {
    handleSubmit,
    watch,
    register
  } = useForm({
    defaultValues: {
      cep: "",
      nome: ""
    },
    reValidateMode: "onChange",
    mode: "onChange",

  });

  const [listaClientes, setListaClientes] = useState([])
  const [listaClientesFiltro, setListaClientesFiltro] = useState([])


  async function consultarClientes() {
    const resposta = await apiURL.get(`/crm/consulta`)
    const data = resposta.data
    console.log(data)

    //não faço ideia de como cache funciona, mas parece ser por aí

    setListaClientes(data)
    setListaClientesFiltro(data)
  }


  //colocando aqui pra não precisar subir só pra achar
  const cepFiltro = watch().cep
  const nomeFiltro = watch().nome


  useEffect(() => {
    consultarClientes()
  }, [])

  useEffect(() => {
    console.log(nomeFiltro);
  
    if (!cepFiltro && !nomeFiltro) {
      setListaClientesFiltro(listaClientes);
      return;
    }
  
    if (!cepFiltro) {
      setListaClientesFiltro(
        listaClientes.filter((cliente) =>
          cliente.ds_nome.toLowerCase().includes(nomeFiltro.toLowerCase())
        )
      );
      return;
    }
  
    if (!nomeFiltro) {
      setListaClientesFiltro(
        listaClientes.filter((cliente) => cliente.ds_cep === cepFiltro)
      );
      return;
    }
  
    // Filtro por CEP e nome (busca exata)
    setListaClientesFiltro(
      listaClientes.filter(
        (cliente) =>
          cliente.ds_cep === cepFiltro &&
          cliente.ds_nome.toLowerCase().includes(nomeFiltro.toLowerCase())
      )
    );
    console.log('Filtrando por CEP e nome');
  }, [cepFiltro, nomeFiltro, listaClientes]);

  return (
    <div className="conteudo-crm">

      <header className="cabecalho-tecnico">
        <a href="/">Voltar a página inicial</a>
        <h1>Área do técnico - {'{nome}'}</h1>
      </header>

      <main className="area-crm">
        <aside className="sidebar">
          <div className="client-count">
            <p>Clientes no total</p>
          </div>
          <form className="filter-section" onSubmit={handleSubmit()}>
            <div className="filter-group">
              {/* No momento não tem nada relacionado a "pago" no DB, sem sistema de fatura e sem tempo pra implementar*/}
              <label htmlFor="pago">Pago:</label>
              <input type="checkbox" id="pago" />
            </div>
            <div className="filter-group">

            <label htmlFor="cep" >CEP</label>

              <InputMask
                mask="99999-999"
                type="text"
                id="cep"
                {...register("cep")}
                alwaysShowMask="yes"
              >
              </InputMask>

            </div>
            <div className="filter-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite o nome"
                {...register("nome")} />

            </div>
          </form>
        </aside>

        <section className="client-list-section">
          <h2>LISTA DE CLIENTES</h2>
          <div className="client-list">

            {listaClientesFiltro.map((cliente) =>
              <CardCrmClientes
                nome={cliente.ds_nome}
                cep={cliente.ds_cep}
                cpf={cliente.ds_cpf}
                id={cliente.id_cliente} />
            )}

          </div>
        </section>
      </main>
    </div >
  );
}

