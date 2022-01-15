import React from "react";
import "./Header.css";
import ListAltIcon from "@mui/icons-material/ListAlt";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <ListAltIcon className="title-icon" />
        <p>To-Do</p>
      </div>
    </div>
  );
}

export default Header;
