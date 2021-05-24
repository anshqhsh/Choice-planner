import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root') //<div id="root">안에 APP를 등록 해준다.
);
