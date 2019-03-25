import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';

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
