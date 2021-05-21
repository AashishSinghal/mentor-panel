import React from "react";
import CurrentlyRunning from "./CurrentlyRunning./CurrentlyRunning";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <p className="dashboard_analytics_main_head">Analytics Overview</p>
      <div>
          <CurrentlyRunning/>
      </div>
    </div>
  );
};

export default Dashboard;
