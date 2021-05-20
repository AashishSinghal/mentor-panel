/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SidePannel.css";
import Home from "../../Assets/Home";
import Tutor from "../../Assets/Tutor";
// import Student from "../../../Assets/suitcase.png"
import Projects from "../../Assets/Projects";
import Accounts from "../../Assets/Accounts";
import Students from "../../Assets/Students";
import Payments from "../../Assets/Payments";
import Reports from "../../Assets/Reports";
import Settings from "../../Assets/Settings";
import { BrowserRouter as Router, Link } from "react-router-dom";
const SidePannel = () => {
  return (
    <div className="sidepanel">
      <Router>
        <Link to="/dashboard">
          <div className="sidepanel__link active">
            <Home className="sidepanel__link__icon" /> Dashboards
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <Tutor /> Tutors
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <Students /> Students
          </div>
        </Link>
        <br />
        <Link to="/projects">
          <div className="sidepanel__link">
            <Projects /> Projects
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <Accounts /> Acoounts
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <Payments /> Payments
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <Reports /> Reports
          </div>
        </Link>
        <br />
        <Link to="/">
          <div className="sidepanel__link">
            <Settings /> Settings
          </div>
        </Link>
        <br />
      </Router>
    </div>
  );
};

export default SidePannel;
