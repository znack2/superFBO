import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";
import "react-vertical-timeline-component/style.min.css";

import Profile from "./views/Profile";
import Login from "./views/Login";
import Register from "./views/Register";
import ProposalForm from "./views/ProposalForm";
import ProposalSingle from "./views/ProposalSingle";

// Seeds
import "common/api/proposals.seeds";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/user" exact render={(props) => <Profile {...props} />} />
      <Route
        path="/register"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/proposal/"
        exact
        render={(props) => <ProposalForm {...props} />}
      />
      <Route
        path="/proposal/:id"
        exact
        render={(props) => <ProposalSingle {...props} />}
      />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
