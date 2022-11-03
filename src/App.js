import "./App.css";
import { useState } from "react";
import getVideos, {
  getFirstVideoId,
  getVideoDetails,
} from "./components/utils/utils";

// stracture components

// import VideoBanner from "./components/VideoBanner/VideoBanner";
import SideBar from "./components/sideBar/Sidebar";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";

// function

function App() {
  const randomId = getFirstVideoId()[0];
  const [videoId, setVideoId] = useState(randomId);
  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const handleClick = (event, videoId) => {
    event.preventDefault();
    setVideoId(videoId);
    setVideos(getVideos(videoId));
    setVideoDetails(getVideoDetails(videoId));
  };

  return (
    <>
      {/* <body className="container"> */}
      <Header />
      {/* <VideoBanner /> */}
      <section className="container-left">
        <VideoDetails videoPlayer={videoDetails} />
        <Comments comments={videoDetails.comments} />
      </section>

      <SideBar videos={videos} onVideoClick={handleClick} />
      {/* </body> */}
    </>
  );
}

export default App;
