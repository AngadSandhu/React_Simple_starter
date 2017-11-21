import 'babel-polyfill';

import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Routes from './Routes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

import configureStore from './store/configureStore';




const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes} /> 
    </Provider>, document.getElementById('app')
);
