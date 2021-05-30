import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtube';

//인덱스 js에서 한번만 만든다
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY); //youtube.js에서 export가 안되면 임포트가 안됨

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root') //<div id="root">안에 APP를 등록 해준다.
);
