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


function projectPerson(avatar, personName) {
    return {avatar, personName};
  }
  

const projectPersonData = [
    projectPerson("K","Kim John"),
    projectPerson("M","Micheal Jim"),
    projectPerson("S","Sophie"),
    projectPerson("E","Ellisa"),
    projectPerson("M","Misey"),
];

const PopularProjects = () => {
    return (
        <div className="popularProjects">
            <div className="popularProjects_card1">
                {projectTypeData.map((type)=> (
                    <div key={type.name} className={`popularProject_card1_type popularProjects_card1_${type.caps}`}>
                        <div className={`popularProject_card1_type_letter ${type.caps}`}>
                            {type.caps}
                        </div>
                        <div className="popularProject_card1_type_name">
                            <p className="popularProject_card1_type_name_p">{type.name}</p>
                            <p className="popularProject_card1_type_name_num">14+ projects</p>
                        </div>
                        <button className="popularProjects_card1_button">view all</button>
                    </div>
                ))}
            </div>
            <div className="popularProject_card2">
                <div className="popularProject_monthlyProgress">
                    <p className="popularProject_monthlyProgress_head">Monthly Projects</p>
                    <p className="popularProject_monthlyProgress_num">14+ Projects</p>      
                </div>
                <div className="popularProject_couter_cards">
                    <div className="popularProject_couter_cards1">
                        <p className="popularProject_couter_cards_total_text">Total<br/>Students</p>
                        <p className="popularProject_couter_cards_total_num">1400+</p>
                        <button className="popularProject_couter_cards_view_btn1">view</button>
                    </div>
                    <div className="popularProject_couter_cards2">
                        <p className="popularProject_couter_cards_total_text">Total<br/>Students</p>
                        <p className="popularProject_couter_cards_total_num">24+</p>
                        <button className="popularProject_couter_cards_view_btn2">view</button>
                    </div>
                </div>
            </div>
            <div className="popularProjects_card1">
                {projectPersonData.map((type)=> (
                    <div key={type.personName} className="popularProject_card1_type">
                        <div className="popularProject_card1_type_letter">
                            {type.avatar}
                        </div>
                        <div className="popularProject_card1_type_name">
                            <p className="popularProject_card1_type_name_p">{type.personName}</p>
                            <p className="popularProject_card1_type_name_num">40+ projects Completed</p>
                        </div>
                        <button className="popularProjects_card1_button">view</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularProjects;
