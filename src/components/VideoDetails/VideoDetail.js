import "./videoDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SideBar from "../sideBar/Sidebar";
import Comments from "../Comments/Comments";
import Description from "../description/Description";
// import VideoBanner from "../VideoBanner/VideoBanner";

const URL = `https://project-2-api.herokuapp.com/videos/`;
const API_KEY = `?api_key=70453c80-7523-4f69-a815-ba520ea2f155`;
// const getVideoID = (videoId) => `${URL}&i=${videoId}`;

export default function VideoDetails(/*{ videoPlayer  }*/) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  // const [mainVideo, setMainVideo] = useState([0]);

  const params = useParams();

  useEffect(() => {
    axios
      .get(URL + API_KEY)
      .then((response) => {
        const videoId = params.videoId ? params.videoId : response.data[0].id;

        setVideos(response.data.filter((video) => video.id !== videoId));
        axios.get(URL + videoId + API_KEY).then((response) => {
          setSelectedVideo(response.data);
          // setMainVideo(response.data[0]);
        });

        // setVideos(response.data.filter((video) => video.id === videoId));
        // axios.get(URL + videoId + API_KEY).then((response) => {
        //   setMainVideo(response.data);
        //   console.log(response.data);
        // });
      })
      // .then((videoId) => {

      // })
      .catch((error) => console.log(error));
  }, [params]);

  return (
    <>
      {selectedVideo && (
        <>
          <div className="videoBanner">
            <video
              controls
              className="videoBanner__video"
              poster={selectedVideo.image}
            >
              <source src="#" type="video/mp4" />
            </video>
          </div>

          <section className="main">
            <section className="main__left">
              <Description videoPlayer={selectedVideo} />
              <Comments
                comments={selectedVideo.comments}
                selectedVideoId={selectedVideo.id}
              />
            </section>
            <section className="main__right">
              <SideBar videos={videos} />
            </section>
          </section>
        </>
      )}

      {/* {
        <>
          <div className="videoBanner">
            <video
              controls
              className="videoBanner__video"
              poster={mainVideo.image}
            >
              <source src="#" type="video/mp4" />
            </video>
          </div>
          <section className="main">
            <section className="main__left">
              <Description videoPlayer={mainVideo} />
              <Comments comments={mainVideo.comments} />
            </section>
            <section className="main__right">
              <SideBar videos={videos} />
            </section>
          </section>
        </>
      } */}
    </>
  );
}
