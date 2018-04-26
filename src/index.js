// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';

// $FlowFixMe
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
