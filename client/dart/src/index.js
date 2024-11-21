import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter,Routes} from 'react-router-dom'
import Landing from './pages/Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     
     <BrowserRouter>
          <Routes>
          <Route path='/' element={<Landing/>}/> 
          </Routes>
     </BrowserRouter>

);
