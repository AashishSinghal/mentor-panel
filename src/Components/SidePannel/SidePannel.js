import React from "react";
import { Link } from "react-router-dom";
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
  // const handleSidepanelChange = (e) => {
  //   e.preventDefault();
  //   $(".sidepanel__link").removeClass("active");
  //   // console.log(this, e); 
  //   // var item = e.target;
  //   // if (item.classList.contains("active")) {
  //   //   console.log(item.classList.contains("active"));
  //   // } else {
  //   //   item.classList.push("active");
  //   // }
  // };
  $(".sidepanel__link").on("click", function () {
    console.log("Sidepanel Trigger");
    $(".sidepanel__link").removeClass("active");
    $(this).addClass("active");
  });

  return (
    <div className="sidepanel">
      <Link to="/dashboard">
        <div
          className="sidepanel__link active"
          // onClick={(e) => handleSidepanelChange(e)}
        >
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
    </div>
  );
};

export default SidePannel;
