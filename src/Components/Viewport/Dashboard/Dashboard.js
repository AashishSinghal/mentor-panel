import React from "react";
import "./Dashboard.css";
import CurrentlyRunning from "./CurrentlyRunning/CurrentlyRunning";
import PopularProjects from "./PopularProjects/PopularProjects";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <p className="dashboard_analytics_main_head">Analytics Overview</p>
          <CurrentlyRunning/>
          <p className="dashboard_analytics_main_head">Popular Projects</p>
          <PopularProjects/>
    </div>
  );
};

export default Dashboard;
