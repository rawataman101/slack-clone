import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useDataLayerValue } from "./DataLayer";
function Header() {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* avatar gpr logged in user */}
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        {/* time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* search icon */}
        <SearchIcon />
        {/* input */}
        <input type="text" placeholder="Search.." />
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
