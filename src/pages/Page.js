import PageVideo from "../assets/images/Upload-video-preview.jpg";
import Publish from "../assets/images/Icons/publish.svg";
import "../pages/page.scss";
import { useParams } from "react-router-dom";

export default function Page({ comments }) {
  return (
    <section className="publishPage">
      <h3 className="publishPage__title">Upload Video</h3>
      <p> VIDEO THUMBNAIL</p>
      <div className="publishPage__form">
        <div className="publishPag__form-image">
          <img alt="road" src={PageVideo} />
        </div>

        <form id="myForm" action="" className="form" method="post">
          <label htmlFor="userTitle" className="form__label">
            Title your video
          </label>

          <input
            id="userTitle"
            name="userTitle"
            type="text"
            className="form__textarea-item"
            placeholder="Add a new comment"
          ></input>

          <label htmlFor="userDescription" className="form__label">
            ADD A VIDEO DESCRIPTION
          </label>
          <div className="form__textarea">
            <textarea
              id="userDescription"
              name="userDescription"
              type="text"
              className="form__textarea-item"
              placeholder="Add a new comment"
            ></textarea>

            <button
              id="submit"
              type="submit"
              name="submit"
              className="form__button-btn"
            >
              <img src={Publish} alt="arrow up" className="form__button-img" />
              PUBLISH
            </button>

            <button
              id="submit"
              type="submit"
              name="submit"
              className="form__button-chancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
