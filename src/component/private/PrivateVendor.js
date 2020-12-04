import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateVendor = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") &&
      localStorage.getItem("type") === "Vendor" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateVendor;
