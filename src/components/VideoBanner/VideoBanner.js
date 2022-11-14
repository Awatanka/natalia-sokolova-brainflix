import "./videoBanner.scss";
import PlayButton from "../../assets/images/Icons/play.svg";

function VideoBanner({ videoPoster }) {
  return (
    <>
      <div className="videoBanner">
        <video controls className="videoBanner__video" poster={videoPoster}>
          <source src="#" type="video/mp4" />
        </video>
      </div>

      <section className="main">
        <section className="main__left">
          <VideoDetails />
          <Comments comments={videoDetails.comments} />
        </section>
        <section className="main__right">
          <SideBar videos={videos} onVideoClick={handleClick} />
        </section>
      </section>
    </>
  );
}

export default VideoBanner;
