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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     
     <BrowserRouter>
          <Routes>
               <Route path='/' element={<Landing/>}/>
               <Route path='*' element={<Notfound/>}/>
               <Route path='/cadastro' element={<Cadastro/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/duvidas' element={<Duvidas/>}/>
               <Route path='/sobre' element={<SobreNós/>}/>
               <Route path='/Contato' element={<Contato/>}/>
          </Routes>
     </BrowserRouter>

);
