// routes/PrivateRoute.js
import React from 'react';
import { Route, redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
