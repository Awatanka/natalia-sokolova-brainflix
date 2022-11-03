import "./comments.scss";

export default function Comments({ comments }) {
  return (
    <section className="comments">
      <h1 className="comments__heading">Comments</h1>
      {comments.length > 0 ? (
        <section className="comments__container">
          {comments.map((comments) => (
            <section className="comments__item" key={comments.id}>
              <h3 className="comments__name">{comments.name}</h3>
              <p className="comments__text">{comments.comment}</p>
              <p className="comments__likes">{comments.likes}</p>
              <p className="comments__date">{comments.timestamp}</p>
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
