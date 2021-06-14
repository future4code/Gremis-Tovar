import React from "react";
import "./Header.css";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { HeaderMain } from "./Styled";

function Header() {
  return (
    <HeaderMain>
      <Link to="/list">
        <IconButton>
          <PeopleAltIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU"
        className="header_logo"
        alt="logo"
      />
      <Link to="/">
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </HeaderMain>
  );
}

export default Header;
