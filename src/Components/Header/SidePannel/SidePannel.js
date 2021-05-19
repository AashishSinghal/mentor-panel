/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SidePannel.css";
import Home from "../../../Assets/Home";
import Tutor from "../../../Assets/Tutor";
// import Student from "../../../Assets/suitcase.png"
import Projects from "../../../Assets/Projects";
import Accounts from "../../../Assets/Accounts";
import Students from "../../../Assets/Students";
import Payments from "../../../Assets/Payments";
import Reports from "../../../Assets/Reports";
import Settings from "../../../Assets/Settings";
const SidePannel = () => {
  return (
    <div>
      <div className="sidepanel">
        <a href="#" className="sidepanel__link">
          <Home className="sidepanel__link__icon" /> Dashboards
        </a>
        <br />
        <a href="#" className="sidepanel__link">
          <Tutor /> Tutors
        </a>
        <br />
        <a href="#" className="sidepanel__link">
          <Students/> Students
        </a>
        <br />
        <a href="#" className="sidepanel__link">
          <Projects/> Projects
        </a>
        <br />
        <a href="#" className="sidepanel__link">
          <Accounts/> Acoounts
        </a>
        <br />
        <a href="#" className="sidepanel__link">
         <Payments/> Payments
        </a>
        <br />
        <a href="#" className="sidepanel__link">
         <Reports/> Reports
        </a>
        <br />
        <a href="#" className="sidepanel__link">
         <Settings/> Settings
        </a>
        <br />
      </div>
    </div>
  );
};

export default SidePannel;
