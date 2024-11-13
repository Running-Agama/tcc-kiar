import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter,Routes} from 'react-router-dom'
import Landing from './pages/Landing';
import Sobre from './pages/sobre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     
     <BrowserRouter>
          <Routes>
          <Route path='/' element={<Landing/>}/> 
          <Route path='/sobre' element={<Sobre/>}/> 
          </Routes>
     </BrowserRouter>

);
