/*
  This file is responsible for checking the user logged in to access the routes
 */
import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

// layout for authenticated and non-authenticated user
import AuthLayout from "../views/layouts/auth";
import DefaultLayout from "../views/layouts/default";

// check if user is authenticated
import { isAuthenticated } from "../services/auth"

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  console.log(isAuthenticated())
  const Layout = isAuthenticated() ? DefaultLayout : AuthLayout;

  // if the user is not authenticated, redirect him to the login screen
  if (!isAuthenticated() && isPrivate) {
    return <Redirect to="/" />
  }

  if (isAuthenticated() && !isPrivate) {
    return <Redirect to="/inicio" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};