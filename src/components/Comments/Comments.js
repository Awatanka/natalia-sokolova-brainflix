import "./comments.scss";

export default function Comments({ comments }) {
  function convertData(myDate) {
    let date = new Date(myDate).toLocaleDateString("en-GB");
    return date;
  }
  return (
    <section className="comments">
      <article className="comments__form">
        <p className="comments__form-title">3 comments</p>

        <div className="form">
          <div className="form__left">
            <img alt="man" className="form__img" />
          </div>

          <form id="myForm" action="" className="form__right" method="post">
            <div className="form__textarea">
              <label htmlFor="userComment" className="form__label">
                Join the Conversation
              </label>
              <textarea
                id="userComment"
                name="userComment"
                type="text"
                className="form__textarea--item"
                placeholder="Enter your comment"
              ></textarea>
            </div>

            <div className="form__button">
              <button
                id="submit"
                type="submit"
                name="submit"
                className="form__button--btn"
              >
                COMMENT
              </button>
            </div>
          </form>
        </div>
      </article>

      {comments.length > 0 ? (
        <section className="comments__container">
          {comments.map((comments) => (
            <section className="comments__item" key={comments.id}>
              <div className="comments__item-left">
                <img className="comments__item-image"></img>
              </div>

              <div className="comments__item-right">
                <h3 className="comments__item-name">{comments.name}</h3>
                <p className="comments__item-date">
                  {convertData(comments.timestamp)}
                </p>

                <p className="comments__item-text">{comments.comment}</p>
              </div>
            </section>
          ))}
        </section>
      ) : (
        <section className="comments__container">
          <p className="comments__no-data">No comments</p>
        </section>
      )}
    </section>
  );
}
