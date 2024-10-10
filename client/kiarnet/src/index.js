import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter,Routes} from 'react-router-dom'

import Notfound from './pages/NotFound';
import Cadastro from './pages/Cadastro';
import Landing from './pages/Landing';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     
     <BrowserRouter>
          <Routes>
               <Route path='/' element={<Landing/>}/>
               <Route path='*' element={<Notfound/>}/>
               <Route path='/cadastro' element={<Cadastro/>}/>
          </Routes>
     </BrowserRouter>

);
