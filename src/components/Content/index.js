import React from "react";
import { Connection, Home, Restaurants } from "../../pages";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Content = ({ setUserToken }) => {
  return (
    <Router>
      <Switch>
        <Route path="/restaurants" exact>
          <Restaurants />
        </Route>

        <Route path="/connect" exact>
          <Connection setUserToken={setUserToken} />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Content;