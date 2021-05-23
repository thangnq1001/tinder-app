import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MOCK_LOGGED_IN_USER_ID} from './constants/common';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// mock logged in user. In a real project it should be a long random string. For now we just use user id of `Thang Ngo` record
localStorage.setItem('token', MOCK_LOGGED_IN_USER_ID.toString());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
