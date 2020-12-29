import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './RouteWrapper';
import Login from '../pages/login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
}
