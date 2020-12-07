import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthGuard = ({ children, ...rest }) => {
  const { path, exact } = rest;
  const token = localStorage.getItem('user') === 'huy';
  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
}
export default AuthGuard;