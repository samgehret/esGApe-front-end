import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import HappyHour from './components/HappyHours/HappyHour'
import registerServiceWorker from './registerServiceWorker';
//import Hello from './components/Hello';

ReactDOM.render(
<Router>
<App />
</Router>, document.getElementById('root'));
registerServiceWorker();
