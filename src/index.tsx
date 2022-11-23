import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/atoms/Button';
import GlobalStyles from './global/styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <h1>Leonardo Lima</h1>
    <Button textButton='Click-me' theme='GRAY' fontSize={20} />
  </React.StrictMode>,
  document.getElementById('root')
);

