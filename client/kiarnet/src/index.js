import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter,Routes} from 'react-router-dom'
import Notfound from './pages/NotFound';
import {Cadastro} from './pages/Cadastro'
import Landing from './pages/Landing';
import Login from './pages/login';
import Duvidas from './pages/Duvidas';
import SobreNós from './pages/SobreNós';
import Contato from './pages/Contato';
import BotaoComecar from './pages/BotaoComecar';
import BotaoVermais from './pages/BotaoVermais';
import Planos from './pages/planos';
import CRMnomelongoteste from './pages/CRM';
import CadastroFinal from './pages/Cadastro-final';
import Crm from './pages/CRM';
import CrmTelaClienteSelecionado from './components/CrmTelaClienteSelecionado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     
     <BrowserRouter>
          <Routes>
               <Route path='/' element={<Landing/>}/>
               <Route path='/cadastro' element={<Cadastro/>}/>
               <Route path='/cadastro/final' element={<CadastroFinal/>}/>
               <Route path='/admin/login' element={<Login/>}/>
               <Route path='/duvidas' element={<Duvidas/>}/>
               <Route path='/sobre' element={<SobreNós/>}/>
               <Route path='/Contato' element={<Contato/>}/>
               <Route path='/BotaoComecar' element={<BotaoComecar/>}/>
               <Route path='/BotaoVermais' element={<BotaoVermais/>}/>
               <Route path='/planos' element={<Planos/>}/>
               <Route path='/crm' element={<Crm/>}/>
               <Route path='/crm/cliente' element={<CrmTelaClienteSelecionado/>}/>
               <Route path='*' element={<Notfound/>}/>
               
          </Routes>
     </BrowserRouter>

);
