import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../clientQueries';

function AnonRoute({ component: Component, isLoggedIn, ...rest }) {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn
    ? <Redirect to='/popular' />
    : <Route
      {...rest}
      render={() => <Component />}
    />
}

export default AnonRoute;