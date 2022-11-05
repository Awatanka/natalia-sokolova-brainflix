import "./App.scss";

import { useState } from "react";
import getVideos, { getVideoDetails } from "./components/utils/utils";
// stracture components

import SideBar from "./components/sideBar/Sidebar";
import VideoDetail from "./components/VideoDetails/VideoDetail";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import VideoBanner from "./components/VideoBanner/VideoBanner";

// function

function App() {
  // const randomId = (videoId) => getFirstVideoId()[0];
  // const [videoId, setVideoId] = useState(randomId);

  const [videoId, setVidId] = useState(5); ////////
  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const handleClick = (event, videoId) => {
    event.preventDefault();
    setVidId(videoId);
    setVideos(getVideos(videoId));
    setVideoDetails(getVideoDetails(videoId));
  };

  return (
    <>
      <Header />
      <VideoBanner
        videoBanner={videoDetails.video}
        videoPoster={videoDetails.image}
      />
      <section className="main">
        <section className="main__left">
          <VideoDetail videoPlayer={videoDetails} />
          <Comments comments={videoDetails.comments} />
        </section>
        <section className="main__right">
          <SideBar videos={videos} onVideoClick={handleClick} />
        </section>
      </section>
    </>
  );
}

export default App;
