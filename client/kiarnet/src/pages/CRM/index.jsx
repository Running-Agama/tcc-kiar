import React, { useEffect, useState } from 'react';
import './index.scss';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import CardCrmClientes from '../../components/CardCrmClientes';
import CrmTelaClienteSelecionado from '../../components/CrmTelaClienteSelecionado';
import apiURL from '../../service/axios';

export default function Crm() {
  const { handleSubmit, watch, register } = useForm({
    defaultValues: { cep: '', nome: '' },
    reValidateMode: 'onChange',
    mode: 'onChange'
  });

  const [listaClientes, setListaClientes] = useState([]);
  const [listaClientesFiltro, setListaClientesFiltro] = useState([]);
  const [tamanhoLista, setTamanhoLista] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  async function consultarClientes() {
    const resposta = await apiURL.get(`/crm/consulta`);
    setListaClientes(resposta.data);
    setListaClientesFiltro(resposta.data);
    setTamanhoLista(resposta.data.length);
  }

  const abrirModalCliente = (idCliente) => {
    console.log('ta aqui')
    // axios get na api, setClienteSelecionado data
    const cliente = listaClientes.find((c) => c.id_cliente === idCliente);
    console.log(cliente);
    
    setClienteSelecionado(cliente);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setClienteSelecionado(null);
  };

  const cepFiltro = watch().cep;
  const nomeFiltro = watch().nome;

  useEffect(() => {
    consultarClientes();
  }, []);

  useEffect(() => {
    if (!nomeFiltro && !cepFiltro) {
      setListaClientesFiltro(listaClientes);
      setTamanhoLista(listaClientes.length);
      return;
    }
    const filtro = listaClientes.filter(
      (cliente) =>
        (!cepFiltro || cliente.ds_cep === cepFiltro) &&
        (!nomeFiltro || cliente.ds_nome.toLowerCase().includes(nomeFiltro.toLowerCase()))
    );
    setListaClientesFiltro(filtro);
    setTamanhoLista(filtro.length);
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
            <p>{tamanhoLista}</p>
          </div>
          <form className="filter-section" onSubmit={handleSubmit()}>
            <div className="filter-group">
              <label htmlFor="pago">Pago:</label>
              <input type="checkbox" id="pago" />
            </div>
            <div className="filter-group">
              <label htmlFor="cep">CEP</label>
              <InputMask
                mask="99999-999"
                type="text"
                id="cep"
                {...register('cep')}
                alwaysShowMask={true}
              />
            </div>
            <div className="filter-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="Digite o nome" {...register('nome')} />
            </div>
          </form>
        </aside>

        <section className="client-list-section">
          <h2>LISTA DE CLIENTES</h2>
          <div className="client-list">
            {listaClientesFiltro.map((cliente) => (
              <CardCrmClientes
                key={cliente.id_cliente}
                idCliente={cliente.id_cliente}
                nome={cliente.ds_nome}
                cep={cliente.ds_cep}
                cpf={cliente.ds_cpf}
                onClick={() => abrirModalCliente(cliente.id_cliente)}
              />
            ))}
          </div>
        </section>
      </main>

      {modalAberto && (
        <CrmTelaClienteSelecionado cliente={clienteSelecionado} fecharModal={fecharModal} />
      )}
    </div>
  );
}
