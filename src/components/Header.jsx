import React from "react";
import "./sass/header.scss";
import Vector from "../images/Vector.png";
import Profile from "../images/Profile.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
      <div className="header__menu">
        <div className="notification">
          <div className="circle">1</div>
          <img src={Vector} alt="" />
        </div>
        <div className="cabinet">
          <p className="cabinet__name">Личный кабинет</p>
          <div className="cabinet__profile">
            <img src={Profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
