import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Projects from "./Projects/Projects";

const Viewport = () => {
  return (
    <div className="viewport">
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path=""></Route>
      </Switch>
    </div>
  );
};

export default Viewport;
