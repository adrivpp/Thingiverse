import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom";

import PrivateRoute from '../routes/privateRoute';
import ThingsList from './thigsList';
import Login from './login';

export default function Pages() {
    return (
        <Switch>
            <Route path='/auth' component={() => { window.location = process.env.REACT_APP_AUTH_URL; return null }} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/' component={ThingsList} />
        </Switch>
    );
}
