import "./videoBanner.scss";

function VideoBanner({ videoPoster }) {
  return (
    <div className="videoBanner">
      <video controls className="videoBanner__video" poster={videoPoster}>
        <source src="#" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBanner;
