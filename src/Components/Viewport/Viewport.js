import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Projects from "./Projects/Projects";

const Viewport = () => {
  return (
    <div class="viewport">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path=""></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Viewport;
