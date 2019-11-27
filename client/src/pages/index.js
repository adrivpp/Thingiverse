import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom";

import PrivateRoute from '../routes/privateRoute';
import ThingsList from './thigsList';
import Login from './login';

export default function Pages() {
    return (
        <Switch>
            <Route path='/login' exact component={Login} />
            <PrivateRoute path='/' exact component={ThingsList} />
        </Switch>
    );
}
