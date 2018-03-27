import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Restaurant from './components/Restaurant'
import registerServiceWorker from './registerServiceWorker';
//import Hello from './components/Hello';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
