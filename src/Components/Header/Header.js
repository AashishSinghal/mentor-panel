import React from "react";
import "./Header.css";
import Logo from "../../Assets/tmm__logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo"  />
      </div>
      <div className="header__search">
          
      </div>
      <div className="header__nav-items"></div>
    </div>
  );
};

export default Header;
