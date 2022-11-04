import "./videoBanner.scss";

function VideoBanner({ videoBanner, videoPoster }) {
  return (
    <div className="videoBanner">
      <video controls className="videoBanner__video" poster={videoPoster}>
        <source src={videoBanner} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBanner;
