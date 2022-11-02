import React from "react";
import "./header.scss";
import { ReactComponent as logo } from "../../assets/images/Logo/BrainFlix.svg";
import { ReactComponent as upload } from "../../assets/images/Icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__company-name">
        <logo />
      </div>

      <input className="header__search"></input>
      <div className="header__search">
        <img src={upload} alt="upload" />
        <a href="#upload">UPLOAD</a>
      </div>
    </header>
  );
}

export default Header;
