import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {StoreProvider} from './utils/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const render = (
    <StoreProvider>
        <Router >
            <Route exact path='*' component={App} />
        </Router>
    </StoreProvider>
)

ReactDOM.render(render, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
