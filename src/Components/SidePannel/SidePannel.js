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
  $(".sidepanel__link").on("click", function () {
    $(".sidepanel__link").removeClass("active");
    $(this).addClass("active");
  });
  return (
    <div className="sidepanel">
      <Router>
        <Link to="/dashboard">
          <div className="sidepanel__link active">
            <HomeIcon className="sidepanel__link__icon" /> Dashboards
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <TutorIcon /> Tutors
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <StudentsIcon /> Students
          </div>
        </Link>
        <br />
        <Link to="/projects">
          <div className="sidepanel__link">
            <ProjectsIcon /> Projects
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <AccountsIcon /> Acoounts
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <PaymentsIcon /> Payments
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <ReportsIcon /> Reports
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <SettingsIcon /> Settings
          </div>
        </Link>
        <br />
      </Router>
    </div>
  );
};

export default SidePannel;
