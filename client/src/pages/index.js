import React from 'react';
import { Switch } from "react-router-dom";

import PrivateRoute from '../routes/privateRoute';
import AnonRoute from '../routes/anonRoute';
import ThingsList from './thigsList';
import Login from './login';

export default function Pages() {
    return (
        <Switch>
            <AnonRoute path='/login' exact component={Login} />
            <PrivateRoute path='/' exact component={ThingsList} />
        </Switch>
    );
}
