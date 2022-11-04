import "./Header.scss";
import Logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import Upload from "../../assets/images/Icons/upload.svg";
import Search from "../../assets/images/Icons/search.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="header__search">
        <img src={Search} alt="Search" className="header__search-image" />
        <input
          placeholder="    Search"
          className="header__search-placeholder"
        />
        <div className="header__avatar">
          <img src={Avatar} alt="man" className="header__avatar-image" />
        </div>
      </div>

      <div className="header__upload">
        <img src={Upload} alt="arrowUp" className="header__upload-image" />

        <a href="#upload" className="header__upload-link">
          Upload
        </a>
      </div>
    </header>
  );
}
