import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title={'Alejandro'} />
  </React.StrictMode>
)

