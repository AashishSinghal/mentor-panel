import React from "react";
import "./Header.css";
import Logo from "../../Assets/tmm__logo.png";
import {
  ExpandMore,
  ForumOutlined,
  NotificationsActiveOutlined,
  Search,
} from "@material-ui/icons";
import Profile from "../../Assets/avatar.jpg";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="header__container">
        <div className="header__search">
          <Search />
          <input
            type="text"
            name="search"
            placeholder="Search for student/tutor/project"
          />
        </div>
      </div>
      <div className="header__container">
        <div className="header__nav-items">
          <NotificationsActiveOutlined className="nav-item noti__svg" />
          <ForumOutlined className="nav-item chat__svg" />
          <div className="header__nav-items__avatar nav-item">
            <Avatar
              alt="Profile Picture"
              src={Profile}
              className="header__avatar"
            />
            <span>Micheal P.</span>
            <ExpandMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
