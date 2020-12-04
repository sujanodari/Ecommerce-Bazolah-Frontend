import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateCustomer = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") &&
      localStorage.getItem("type") === "Customer" ? (
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

export default PrivateCustomer;
