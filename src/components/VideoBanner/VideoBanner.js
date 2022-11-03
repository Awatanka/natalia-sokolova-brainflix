import "./videoBanner.scss";
import Video from "../../assets/images/Icons/fullscreen.svg";

function VideoBanner() {
  return (
    <div className="videoBanner">
      <video src={Video}></video>
    </div>
  );
}

export default VideoBanner;
