import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './global/styles';
import { Home } from './pages/home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
  );
  
