import React from 'react';
import ReactDOM from 'react-dom';
import DefaultLayout from 'components/App';
import Index from 'components/Index';

import {StoreProvider} from 'utils/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const render = (
    <StoreProvider>
        <Router>
            <Route exact path="/test" component={Index} />
            <DefaultLayout path="/" component={Index} />
        </Router>
    </StoreProvider>
)

ReactDOM.render(render, document.getElementById('root'));