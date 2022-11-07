import "./videoBanner.scss";
import PlayButton from "../../assets/images/Icons/play.svg";

function VideoBanner({ videoPoster }) {
  return (
    <div className="videoBanner">
      <video controls className="videoBanner__video" poster={videoPoster}>
        <source src="#" type="video/mp4" />
        <button id="playpause" type="button" data-state="play">
          {PlayButton}
        </button>
      </video>
    </div>
  );
}

export default VideoBanner;
