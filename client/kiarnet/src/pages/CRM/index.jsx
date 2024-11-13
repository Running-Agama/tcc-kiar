import React, { useEffect, useState } from 'react';
import './index.scss';
import {useForm} from 'react-hook-form'
import InputMask from 'react-input-mask'
import CardCrmClientes from '../../components/CardCrmClientes';
import axios from 'axios';
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

  const urlAPI = 'https://kiarnet-api.onrender.com'

  const [listaClientes, setListaClientes] = useState([])

  async function consultarClientes(){
    const resposta = await axios.get(`${urlAPI}/crm/consulta`)
    const data = resposta.data
    console.log(data)
     setListaClientes(data)
  }

  async function abrirTelaCliente(){
    
  }

  useEffect(()=>{
    consultarClientes()
  },[])

  const onSubmit = async(data)=>{
    localStorage.setItem("oi", data)
      console.log(data)
    }
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
          <form className="filter-section" onSubmit={handleSubmit(onSubmit)}>
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
                  alwaysShowMask = "yes"
                  >
              </InputMask>
            </div>
            <div className="filter-group">
              <label htmlFor="nome">Nome</label>
              <input 
              type="text"
              id="nome" 
              placeholder="Digite o nome"  
              {...register("nome")}/>

            </div>
            <button type='submit'>Pesquisar</button>
          </form>
        </aside>

        <section className="client-list-section">
          <h2>LISTA DE CLIENTES</h2>
          <div className="client-list">
            {listaClientes.map((cliente)=>
              <CardCrmClientes nome = {cliente.ds_nome} cep = {cliente.ds_cep} cpf = {cliente.ds_cpf} id = {cliente.id_cliente}/>)}
          </div>
        </section>
      </main>
      <pre>
      </pre>
    </div >
  );
}

