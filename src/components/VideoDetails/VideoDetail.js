import "./videoDetails.scss";
import iconView from "../../assets/images/Icons/views.svg";
import Like from "../../assets/images/Icons/likes.svg";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import SideBar from "../sideBar/Sidebar";
import Comments from "../Comments/Comments";
// import VideoBanner from "../VideoBanner/VideoBanner";

const URL = `https://project-2-api.herokuapp.com/videos/`;
const API_KEY = `?api_key=${process.env.REACT_APP_VIDEO_API_KEY}`;
// const getVideoID = (videoId) => `${URL}&i=${videoId}`;

export default function VideoDetails(/*{ videoPlayer  }*/) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const { videoId = "84e96018-4022-434e-80bf-000ce4cd12b8" } = useParams();

  useEffect(() => {
    axios
      .get(URL + API_KEY)
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        setVideos(response.data); // set state with jokes data
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (videoId) {
      axios
        .get(URL + videoId + "/" + API_KEY)
        .then((response) => {
          //   console.log(response);
          setSelectedVideo(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [videoId]);

  // const {
  //   id,
  //   title,
  //   channel,
  //   image,
  //   description,
  //   views,
  //   likes,
  //   duration,
  //   video,
  //   timestamp,
  //   comments,
  //   ...rest
  // } = videoPlayer;

  // function convertData(myDate) {
  //   let date = new Date(myDate).toLocaleDateString("en-GB");
  //   return date;
  // }

  return (
    <>
      {selectedVideo && (
        <div className="videoBanner">
          <video
            controls
            className="videoBanner__video"
            poster={selectedVideo.image}
          >
            <source src="#" type="video/mp4" />
          </video>
        </div>
      )}

      <section className="main">
        <section className="main__left">
          <Comments comments={selectedVideo.comments} />
        </section>
        <section className="main__right">
          <SideBar videos={videos} />
        </section>
      </section>

      {/* <main className="details">
        <section className="details__info">
          <p className="details__info-title"> {videos.title}</p>
          <section className="details__top">
            <div>
              <p className="details__top-chanel"> {videos.channel}</p>
              <p className="details__top-date">
                {convertData(videos.timestamp)}
              </p>
            </div>

            <div>
              <span
                role="img"
                aria-label="view icon"
                className="details__top-right"
              >
                <img src={iconView}></img>
                <p className="details__top-view"> {videos.views}</p>
              </span>

              <span
                role="img"
                aria-label="heart icon"
                className="details__top-left"
              >
                <img src={Like}></img>
                <p className="details__top-view">{videos.likes} </p>
              </span>
            </div>
          </section>

          <section className="details__bottom">
            <p className="details__bottom-description"> {videos.description}</p>
          </section>
        </section>
      </main> */}
    </>
  );
}
