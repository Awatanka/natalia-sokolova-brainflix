import "./videoDetails.scss";
import iconView from "../../assets/images/Icons/views.svg";
import Like from "../../assets/images/Icons/likes.svg";

export default function VideoDetails({ videoPlayer }) {
  const {
    // id,
    title,
    channel,
    image,
    description,
    views,
    likes,
    // duration,
    // video,
    timestamp,
    // comments,
    ...rest
  } = videoPlayer;

  function convertData(myDate) {
    let date = new Date(myDate).toLocaleDateString("en-GB");
    return date;
  }

  return (
    <main className="details">
      <section className="details__info">
        <section className="details__top">
          <p className="details__top-chanel"> {channel}</p>
          <p className="details__top-date">{convertData(timestamp)}</p>

          <span role="img" aria-label="view icon">
            <img src={iconView}></img>
            <p className="details__top-view"> {views}</p>
          </span>

          <span role="img" aria-label="heart icon">
            <img src={Like}></img>
            <p className="details__top-view">{likes} </p>
          </span>
        </section>

        <section className="details__bottom">
          <p className="details__bottom-description"> {description}</p>
        </section>
      </section>
    </main>
  );
}
