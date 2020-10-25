import React from "react";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import Home from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOptions title="Home" Icon={Home} />
      <SidebarOptions title="Tranding" Icon={WhatshotIcon} />
      <SidebarOptions title="Subscription" Icon={SubscriptionIcon} />
    </div>
  );
};

export default Sidebar;
