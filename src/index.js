import React from 'react';
import ReactDOM from 'react-dom';
// import './app.css'
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
import './toyUI/app.css'
import CoinApp from "./toy1-1/CoinApp";
import * as serviseWorker from './serviceWorker'

ReactDOM.render(<CoinApp />, document.getElementById('root'));
serviseWorker.unregister();