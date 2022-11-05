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
      <div className="header__block">
        <div className="header__search">
          <input placeholder="     Search" className="search__placeholder" />
          <img src={Search} alt="Search" className="search__image" />
        </div>

        <button className="header__upload" href="#upload">
          <img src={Upload} alt="arrowUp" className="header__upload-image" />
          Upload
        </button>

        <div className="header__avatar">
          <img src={Avatar} alt="man" className="header__avatar-image" />
        </div>
      </div>
    </header>
  );
}
