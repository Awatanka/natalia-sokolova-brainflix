import "./App.scss";
import { useState } from "react";
import getVideos, {
  getFirstVideoId,
  getVideoDetails,
  convertDate,
} from "./components/utils/utils";
// stracture components

// import VideoBanner from "./components/VideoBanner/VideoBanner";
import SideBar from "./components/sideBar/Sidebar";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import VideoBanner from "./components/VideoBanner/VideoBanner";

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

  function convertData(myDate) {
    let date = new Date(myDate).toLocaleDateString("en-GB");
    return date;
  }

  return (
    <>
      <Header />
      <VideoBanner
        videoBanner={videoDetails.video}
        videoPoster={videoDetails.image}
      />
      {/* <VideoBanner/> */}
      <section className="container-left">
        <VideoDetails videoPlayer={videoDetails} />
      </section>
      <Comments comments={videoDetails.comments} />

      <SideBar videos={videos} onVideoClick={handleClick} />
    </>
  );
}

export default App;
