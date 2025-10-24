import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  setIsAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
