import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../clientQueries'
import { NavBar } from '../components';
import PageContainer from '../components/page-container';

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn
    ? <Route
      {...rest}
      render={() => {
        return (
          <>
            <NavBar />
            <PageContainer>
              <Component />
            </PageContainer>
          </>
        )
      }}
    />
    : <Redirect to='/login' />
}

export default PrivateRoute;