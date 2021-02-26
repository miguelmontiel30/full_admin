import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-css-only/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import { ProviderTema } from './contexts/contextTema'

import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <ProviderTema>
        <App />
      </ProviderTema>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);