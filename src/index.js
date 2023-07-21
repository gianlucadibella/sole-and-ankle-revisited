import React from 'react';
import ReactDOM from 'react-dom';
import { THEME } from './constants';
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'styled-components';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
    <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
