import React from 'react';
import ReactDOM from 'react-dom';
import DefaultLayout from 'components/App';
import Index from 'components/Index';
import 'scss/main.scss';

import { Provider } from 'react-redux';

import store from 'utils/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const render = (
    <Provider store={store} >
        <Router>
            <Route exact path="/test" component={Index} />
            <DefaultLayout path="/" component={Index} />
        </Router>
    </Provider>
)

ReactDOM.render(render, document.getElementById('root'));
