import React from "react";
import "./PopularProjects.css";

function projectType(caps, name) {
  return { caps, name };
}

const projectTypeData = [
  projectType("P", "Projects"),
  projectType("T", "Tutors"),
  projectType("A", "Assigments"),
  projectType("C", "Coaches"),
];

const PopularProjects = () => {
  return (
    <div className="popularProjects">
      <div className="popularProjects_card1">
        {projectTypeData.map((type) => (
          <div key={type.name} className="popularProject_card1_type">
            <div className="popularProject_card1_type_letter">{type.caps}</div>
            <div className="popularProject_card1_type_name">
              <p className="popularProject_card1_type_name_p">{type.name}</p>
              <p className="popularProject_card1_type_name_num">14+ projects</p>
            </div>
            <button className="popularProjects_card1_button">view all</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProjects;
