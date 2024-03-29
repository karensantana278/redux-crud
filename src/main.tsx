import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/index.tsx';




ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
 </React.StrictMode>,
);
