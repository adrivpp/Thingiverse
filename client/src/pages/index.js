import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import PrivateRoute from '../routes/private-route';
import AnonRoute from '../routes/anon-route';
import ThingsList from './things-list';
import Login from './login';
import ThingDetails from './thing-details/thing-details';
import { Error } from '../components';

export default function Pages() {
    return (
        <Router>
            <Switch>
                <Redirect exact from='/' to='popular' />
                <AnonRoute path='/login' exact component={Login} />
                <PrivateRoute path='/things/:id' exact component={ThingDetails} />
                <PrivateRoute path='/:category' exact component={ThingsList} />
                <Route component={() => <Error message={'We could not found what you are looking for'}/>}/>
            </Switch>
        </Router>
    );
}
