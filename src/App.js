import "./App.scss";

import { useState } from "react";
import getVideos, { getVideoDetails } from "./components/utils/utils";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// stracture components

import SideBar from "./components/sideBar/Sidebar";
import VideoDetail from "./components/VideoDetails/VideoDetail";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import Page from "./pages/Page";
// function

function App() {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
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
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/videos" />} />
          <Route
            path="videos"
            element={
              <>
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
            }
          />

          <Route path="/Upload" element="{<Page />}" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
