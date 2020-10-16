import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoIcon from "@material-ui/icons/VideoCall";
import AppIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import AvatarIcon from "@material-ui/core/Avatar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      <div className="header__input">
        <input placeholder="search" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoIcon className="header__icon" />
        <AppIcon className="header__icon" />
        <NotificationIcon className="header__icon" />
        <AvatarIcon
          className="header__icon"
          src="https://avatars1.githubusercontent.com/u/47153672?s=400&u=0300b06316e998b1ed0eb9deb38d8ec9281b2a73&v=4"
          alt="Ahmed Faraz"
        />
      </div>
    </div>
  );
};

export default Header;
