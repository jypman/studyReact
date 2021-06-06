import React from 'react';
import ReactDOM from 'react-dom';
// import './app.css'
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
import './doit-ui/app.css'
import CoinApp from "./08/CoinApp";
import * as serviseWorker from './serviceWorker'

ReactDOM.render(<CoinApp />, document.getElementById('root'));
serviseWorker.unregister();