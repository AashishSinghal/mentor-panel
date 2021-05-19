import React from "react";
import "./Header.css";
import Logo from "../../Assets/tmm__logo.png";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumIcon from "@material-ui/icons/Forum";
import { Avatar } from "@material-ui/core";
import Bell from "../../Assets/Bell";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        {/* <div className="header__vl"></div> */}
      </div>
      <div className="header__container">
        <div className="header__search">
          <SearchIcon />
          <input
            type="text"
            name="search"
            placeholder="Search for student/tutor/project"
          />
        </div>
      </div>
      <div className="header__container">
        <div className="header__nav-items">
          <NotificationsActiveIcon className="nav-item noti__svg" />
          {/* <Bell className="nav-item bell__svg" /> */}
          <ForumIcon className="nav-item chat__svg" />
          <div className="header__nav-items__avatar nav-item">
            <Avatar className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
