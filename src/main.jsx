import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={ 21 } />
  </React.StrictMode>
)

