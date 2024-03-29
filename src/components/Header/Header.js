import "./Header.scss";
import Logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import Upload from "../../assets/images/Icons/upload.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <header className="header">
      <Link to={`/home`}>
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
      <div className="header__block">
        <div className="header__search">
          <input placeholder="    Search" className="search__placeholder" />
          <BsSearch className="search__image" size={20} />
        </div>
        <Link to={`/upload`} className="header__upload">
          <button href="#upload" className="header__upload-btn">
            <img src={Upload} alt="arrowUp" className="header__upload-image" />
            Upload
          </button>
        </Link>
        <div className="header__avatar">
          <img src={Avatar} alt="man" className="header__avatar-image" />
        </div>
      </div>
    </header>
  );
}
