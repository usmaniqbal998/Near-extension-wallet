import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import GlobalStyles from './styles/globals_styles';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mock_api/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
