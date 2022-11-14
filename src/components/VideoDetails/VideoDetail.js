import "./videoDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SideBar from "../sideBar/Sidebar";
import Comments from "../Comments/Comments";
import Description from "../description/Description";

const URL = `https://project-2-api.herokuapp.com/videos/`;
const API_KEY = `?api_key=70453c80-7523-4f69-a815-ba520ea2f155`;

export default function VideoDetails() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const params = useParams();

  useEffect(() => {
    axios
      .get(URL + API_KEY)
      .then((response) => {
        const videoId = params.videoId ? params.videoId : response.data[0].id;

        setVideos(response.data.filter((video) => video.id !== videoId));
        axios.get(URL + videoId + API_KEY).then((response) => {
          setSelectedVideo(response.data);
        });
      })

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
    </>
  );
}
