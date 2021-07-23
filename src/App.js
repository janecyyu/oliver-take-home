import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import ReviewsGrid from "./Components/ReviewsGrid";
import ReviewForm from "./Components/ReviewForm";

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/write_review/:id"
            render={(props) => <ReviewForm {...props} />}
          />
          <Route
            path="/reviews/:id"
            render={(props) => <ReviewsGrid {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
