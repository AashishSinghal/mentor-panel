import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import $ from "jquery";
import "./SidePannel.css";
import {
  HomeIcon,
  TutorIcon,
  ProjectsIcon,
  AccountsIcon,
  StudentsIcon,
  PaymentsIcon,
  ReportsIcon,
  SettingsIcon,
} from "../../Assets/svg.js";
const SidePannel = () => {
  const handleSidepanelChange = () => {
    console.log(this);
  };

  return (
    <div className="sidepanel">
      {/* <Router> */}
      <Link to="/dashboard">
        <div className="sidepanel__link active" onClick={handleSidepanelChange}>
          <HomeIcon className="sidepanel__link__icon" /> Dashboards
        </div>
      </Link>
      <Link to="/">
        <div className="sidepanel__link">
          <TutorIcon /> Tutors
        </div>
      </Link>
      <Link to="/">
        <div className="sidepanel__link">
          <StudentsIcon /> Students
        </div>
      </Link>
      <Link to="/projects">
        <div className="sidepanel__link">
          <ProjectsIcon /> Projects
        </div>
      </Link>
      <Link to="/">
        <div className="sidepanel__link">
          <AccountsIcon /> Acoounts
        </div>
      </Link>
      <Link to="/">
        <div className="sidepanel__link">
          <PaymentsIcon /> Payments
        </div>
      </Link>
      <Link to="/">
        <div className="sidepanel__link">
          <ReportsIcon /> Reports
        </div>
      </Link>
      <Link to="/">
        <div className="sidepanel__link">
          <SettingsIcon /> Settings
        </div>
      </Link>
      {/* </Router> */}
    </div>
  );
};

export default SidePannel;
