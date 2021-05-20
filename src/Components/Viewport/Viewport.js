import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Projects from "./Projects/Projects";

const Viewport = () => {
  return (
    <div class="viewport">
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path=""></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Viewport;
