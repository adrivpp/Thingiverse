import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '../routes/private-route';
import AnonRoute from '../routes/anon-route';
import ThingsList from './things-list';
import Login from './login';
import ThingDetails from './thing-details/thing-details';

export default function Pages() {
    return (
        <Router>
            <Switch>
                <Redirect exact from='/' to='popular' />
                <AnonRoute path='/login' exact component={Login} />
                <PrivateRoute path='/things/:id' exact component={ThingDetails} />
                <PrivateRoute path='/:category' exact component={ThingsList} />
            </Switch>
        </Router>
    );
}
