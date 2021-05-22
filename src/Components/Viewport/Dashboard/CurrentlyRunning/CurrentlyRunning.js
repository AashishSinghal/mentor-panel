import React from "react";
import "./CurrentlyRunning.css";
import { Calendar, DownArrow } from "../../../../Assets/svg";

const CurrentlyRunning = () => {
  return (
    <div className="analyticsOverview">
        <div className="currentlyRunning">
            <div className="currentlyRunning_uprow">
                <p className="currentlyRunning_name">
                Currently Running{" "}
                <span className="currentlyRunning_proj_num_span">13 projets</span>
                </p>
                <button className="currentlyRunning_dropdown">
                <Calendar className="currentlyRunning_svg" />
                Month
                <DownArrow className="currentlyRunning_svg" />
                </button>
            </div>
            <div className="currentlyRunning_status_button">
                <p className="currentlyRunning_status_button_name">
                <div className="currentlyRunning_status_button_color b_color"></div>
                Upcomming
                </p>
                <p className="currentlyRunning_status_button_name">
                <div className="currentlyRunning_status_button_color y_color"></div>
                InProgress
                </p>
                <p className="currentlyRunning_status_button_name">
                <div className="currentlyRunning_status_button_color g_color"></div>
                Completed
                </p>
            </div>
        </div>
        <div className="addProject">
            <img src="../../../../Assets/AddPorject.jpg" className="" alt="Add Project"/>
            <p className="addProject_name">Add New Project</p>
            <p className="addProject_question">Having any trouble while adding any task?</p>
            <button className="addProject_button">Create a Task</button>
        </div>
    </div>

  );
};

export default CurrentlyRunning;
