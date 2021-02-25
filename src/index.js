import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './ComponentA/Top'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
  <Top/> 
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
