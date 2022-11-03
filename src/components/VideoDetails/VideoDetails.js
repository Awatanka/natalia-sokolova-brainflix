import "./videoDetails.scss";
// import Views from "../../assets/images/Icons/views";

export default function VideoDetails({ videoPlayer }) {
  const {
    // id,
    title,
    channel,
    // image,
    description,
    views,
    likes,
    // duration,
    // video,
    timestamp,
    // comments,
  } = videoPlayer;
  return (
    <main className="details">
      <h1 className="details__heading">{title}</h1>

      <section className="details__info">
        <section className="details__top">
          <p className="details__top-chanel"> {channel}</p>
          <p className="details__top-date">{timestamp}</p>
          <p className="details__top-view">
            {views}
            <span role="img" aria-label="view icon">
              {/* {Views} */}
            </span>
          </p>
          <p className="details__top-view">
            {views}
            <span role="img" aria-label="heart icon">
              {likes}
            </span>
          </p>
        </section>
        <section className="details__bottom">
          <p className="details__bottom-description"> {description}</p>
        </section>
      </section>

      {/* <article class="details__form">
          <p class="details__form ">3 comments</p>
          <h class="main__form-header">Join the Conversation</h>
          <div class="form">
            <div class="form__left">
              <img alt="man" class="form__img" />
            </div>

            <form id="myForm" action="" class="form__right" method="post">
              <div class="form__label">
                <label for="name" class="form__label">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  name="userName"
                  placeholder="Enter your name"
                  class="form__name--item"
                />
              </div>

              <div class="form__textarea">
                <label for="userComment" class="form__label">
                  COMMENT
                </label>
                <textarea
                  id="userComment"
                  name="userComment"
                  type="text"
                  class="form__textarea--item"
                  placeholder="Enter your comment"
                ></textarea>
              </div>

              <div class="form__button">
                <button
                  id="submit"
                  type="submit"
                  name="submit"
                  class="form__button--btn"
                >
                  COMMENT
                </button>
              </div>
            </form>
          </div>
        </article> */}
    </main>
  );
}
