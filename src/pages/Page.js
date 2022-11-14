import "./page.scss";
import PageVideo from "../assets/images/Upload-video-preview.jpg";
import Publish from "../assets/images/Icons/publish.svg";

// import { ToastContainer, toast } from "react-toastify";
import Toastify from "toastify-js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

export default function Page() {
  let navigate = useNavigate();
  const handleClickUpload = () => {
    setTimeout(() => navigate("/home"), 3000);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const isTitleValid = () => {
    return title.length >= 2;
  };

  const isFormValid = () => {
    return title !== "" && description !== "" && isTitleValid();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      Toastify({
        text: "Video has been uploaded",
        duration: 2000,
        newWindow: false,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        className: "infoUpload",
        onClick: function () {},
      }).showToast();
      handleClickUpload();
    } else {
      Toastify({
        text: "Failed to submit, you have empty field in your form",
        duration: 3000,
        newWindow: false,
        gravity: "bottom",
        position: "center",
        className: "infoFailed",
        stopOnFocus: true,
        onClick: function () {},
      }).showToast();
    }
  };

  return (
    <section className="publishPage">
      <h3 className="publishPage__title">Upload Video</h3>

      <form
        id="myForm"
        action=""
        className="form-upload"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="publishPage__form">
          <div className="publishPage__form-container">
            <p className="publishPage__content"> VIDEO THUMBNAIL</p>
            <img
              alt="road"
              src={PageVideo}
              className="publishPage__form-image"
            />
          </div>
          <div className="publishPage__form-right">
            <label htmlFor="userTitle" className="form-upload__label">
              Title your video
            </label>

            <input
              id="userTitle"
              name="userTitle"
              type="text"
              className="form-upload__input-item"
              placeholder="Add a title to your video"
              value={title}
              onChange={handleChangeTitle}
            ></input>
            {/* {!isTitleValid() && <p>Please, enter your title.</p>} */}

            <label htmlFor="userDescription" className="form-upload__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <div className="form-upload__textarea">
              <textarea
                id="userDescription"
                name="userDescription"
                type="text"
                className="form-upload__textarea-item"
                placeholder="Add a description to your video"
                value={description}
                onChange={handleChangeDescription}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="form-upload__button-holder">
          <button
            id="submit"
            type="submit"
            name="submit"
            className="form-upload__button-btn"
          >
            <img
              src={Publish}
              alt="arrow up"
              className="form-upload__button-img"
            />
            PUBLISH
          </button>

          <Link to="/home" className="form-upload__button-container">
            <button
              id="submit"
              type="submit"
              name="submit"
              className="form-upload__button-cancel"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
      {/* </div> */}
    </section>
  );
}
