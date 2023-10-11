import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Contexts } from './contexts/Contexts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Contexts>
      <Routes>
        <Route path='/*' element={<AppRoutes/>} ></Route>
      </Routes>
    </Contexts>
    </BrowserRouter>
  </React.StrictMode>
);

