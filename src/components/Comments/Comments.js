import "./comments.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import Comment from "../../assets/images/Icons/add_comment.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsFillArchiveFill } from "react-icons/bs";

const URL = `https://project-2-api.herokuapp.com/videos/`;
const API_KEY = `?api_key=70453c80-7523-4f69-a815-ba520ea2f155`;

export default function Comments({ comments, selectedVideoId }) {
  function convertData(myDate) {
    let date = new Date(myDate).toLocaleDateString("en-GB");
    return date;
  }

  let navigate = useNavigate();
  const updatedComments = (videoId) => {
    navigate("/videos/" + videoId);
  };

  const [userComment, setUserComment] = useState("");

  const handleChangeComment = (event) => {
    setUserComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(URL + selectedVideoId + "/comments" + API_KEY, {
        name: "testUser",
        comment: userComment,
      })
      .then((response) => {
        updatedComments(selectedVideoId);
      });
  };

  const handleDelete = ({ currentTarget }) => {
    let deleteComment =
      URL + selectedVideoId + "/comments/" + currentTarget.value + API_KEY;
    axios.delete(deleteComment).then(() => {
      updatedComments(selectedVideoId);
    });
  };

  return (
    <section className="comments">
      <article className="comments__form">
        <p className="comments__form-title">3 comments</p>

        <div className="form">
          <div className="form__left">
            <img alt="man" src={Avatar} className="form__img" />
          </div>

          <form id="myForm" action="" className="form__right">
            <label htmlFor="userComment" className="form__label">
              Join the Conversation
            </label>
            <div className="form__textarea">
              <textarea
                id="userComment"
                name="userComment"
                value={userComment}
                type="text"
                className="form__textarea-item"
                placeholder="Add a new comment"
                onChange={handleChangeComment}
              ></textarea>

              <button
                id="submit"
                type="submit"
                name="submit"
                className="form__button-btn"
                onClick={handleSubmit}
              >
                <img src={Comment} alt="plus" className="form__button-img" />
                COMMENT
              </button>
            </div>
          </form>
        </div>
      </article>

      {comments.length > 0 ? (
        <section className="comments__container">
          {comments
            .sort(
              (commentOne, commentTwo) =>
                commentTwo.timestamp - commentOne.timestamp
            )
            .map((comments) => (
              <section className="comments__item" key={comments.id}>
                <div className="comments__item-left">
                  <img className="comments__item-image"></img>
                </div>

                <div className="comments__item-right">
                  <div className="comments__item-top">
                    <h3 className="comments__item-name">{comments.name}</h3>
                    <p className="comments__item-date">
                      {convertData(comments.timestamp)}
                    </p>
                  </div>
                  <div className="comments__item-bottom">
                    <p className="comments__item-text">{comments.comment}</p>
                    <button
                      value={comments.id}
                      onClick={handleDelete}
                      className="comments__item-button"
                    >
                      <BsFillArchiveFill className="comments__item-icon" />
                    </button>
                  </div>
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
