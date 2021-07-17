import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Review from "./Components/Review";

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/reviews/:id"
            render={(props) => <Review {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
