import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from './components/molecules/Input';

import GlobalStyles from './global/styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Input typeInput='MOBILE'  placeHolder='Insira os nomes dos participantes'/>
  </React.StrictMode>,
  document.getElementById('root')
);

