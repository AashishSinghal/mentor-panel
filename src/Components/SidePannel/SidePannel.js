import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import $ from "jquery";
import "./SidePannel.css";
import Home from "../../Assets/Home";
import Tutor from "../../Assets/Tutor";
import Projects from "../../Assets/Projects";
import Accounts from "../../Assets/Accounts";
import Students from "../../Assets/Students";
import Payments from "../../Assets/Payments";
import Reports from "../../Assets/Reports";
import Settings from "../../Assets/Settings";
const SidePannel = () => {
  $(".sidepanel a div").on("click", function () {
    console.log("Sidepanel Trigger");
    $(".sidepanel__link").removeClass("active");
    $(this).addClass("active");
  });

  return (
    <div className="sidepanel">
      <Router>
        <Link to="/dashboard">
          <div className="sidepanel__link active">
            <Home className="sidepanel__link__icon" /> Dashboards
          </div>
        </Link>
        <Link to="/">
          <div className="sidepanel__link">
            <Tutor /> Tutors
          </div>
        </Link>
        <Link to="/">
          <div className="sidepanel__link">
            <Students /> Students
          </div>
        </Link>
        <Link to="/projects">
          <div className="sidepanel__link">
            <Projects /> Projects
          </div>
        </Link>
        <Link to="/">
          <div className="sidepanel__link">
            <Accounts /> Acoounts
          </div>
        </Link>
        <Link to="/">
          <div className="sidepanel__link">
            <Payments /> Payments
          </div>
        </Link>
        <Link to="/">
          <div className="sidepanel__link">
            <Reports /> Reports
          </div>
        </Link>
        <Link to="/">
          <div className="sidepanel__link">
            <Settings /> Settings
          </div>
        </Link>
      </Router>
    </div>
  );
};

export default SidePannel;
