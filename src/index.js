// @flow
import './assets/styles/global';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';

// $FlowFixMe
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
