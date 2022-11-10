import "./description.scss";
import iconView from "../../assets/images/Icons/views.svg";
import Like from "../../assets/images/Icons/likes.svg";

export default function Description({ videoPlayer }) {
  const {
    id,
    title,
    channel,
    image,
    description,
    views,
    likes,
    duration,
    video,
    timestamp,
    comments,
    ...rest
  } = videoPlayer;

  function convertData(myDate) {
    let date = new Date(myDate).toLocaleDateString("en-GB");
    return date;
  }

  return (
    <main className="details">
      <section className="details__info">
        <p className="details__info-title"> {title}</p>
        <section className="details__top">
          <div>
            <p className="details__top-chanel"> {channel}</p>
            <p className="details__top-date">{convertData(timestamp)}</p>
          </div>

          <div>
            <span
              role="img"
              aria-label="view icon"
              className="details__top-right"
            >
              <img src={iconView}></img>
              <p className="details__top-view"> {views}</p>
            </span>

            <span
              role="img"
              aria-label="heart icon"
              className="details__top-left"
            >
              <img src={Like}></img>
              <p className="details__top-view">{likes} </p>
            </span>
          </div>
        </section>

        <section className="details__bottom">
          <p className="details__bottom-description"> {description}</p>
        </section>
      </section>
    </main>
  );
}
