import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function PrivateRoute({ component: Component, isLoggedin, ...rest }) {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn
    ? <Route
      {...rest}
      render={() => <Component />}
    />
    : <Redirect to='/login' />
}

export default PrivateRoute;