import React from "react";
import { Typography } from "@material-ui/core";
import "./SidebarOptions.css";
const SidebarOptions = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      <Icon className="sidebarOption__icon" />
      <h2 className="sidebarOption__title">{title}</h2>
    </div>
  );
};

export default SidebarOptions;
