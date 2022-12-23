import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { bank } from './redux/dataBank';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={bank}>      
    <App />  
  </Provider>
);

