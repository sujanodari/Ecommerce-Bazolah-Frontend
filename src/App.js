import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./component/Login";

import CustomerDashboard from "./component/dashboard/Customer/CustomerDashboard";
import PrivateCustomer from "./component/private/PrivateCustomer";

import VendorDashboard from "./component/dashboard/Vendor/VendorDashboard";
import PrivateVendor from "./component/private/PrivateVendor";
import Footer from "./Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";
function App() {
  return (
    <div className="app">
      <Router>
        <MessengerCustomerChat
          pageId="100972251759163"
          appId="1012992322500389"
        />
        <Switch>
          <PrivateCustomer
            exact
            path="/customer"
            component={CustomerDashboard}
          />
        </Switch>
        <Switch>
          <PrivateVendor exact path="/vendor" component={VendorDashboard} />
        </Switch>

        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
