import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ItemProvider } from './context';

ReactDOM.render(
  <ItemProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ItemProvider>,
  document.getElementById('root')
);

reportWebVitals();
