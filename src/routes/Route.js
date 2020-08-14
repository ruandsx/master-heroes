import React from 'react';
import {
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { isAuthenticated } from '../utils/Utils'


const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const authenticated = isAuthenticated();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!authenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/login' : '/leaderboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
