import "./App.scss";

// import { useState } from "react";
// import getVideos, { getVideoDetails } from "./components/utils/utils";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
// stracture components

// import SideBar from "./components/sideBar/Sidebar";
// import VideoDetail from "./components/VideoDetails/VideoDetail";
// import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
// import VideoBanner from "./components/VideoBanner/VideoBanner";
import Page from "./pages/Page";
import VideoDetails from "./components/VideoDetails/VideoDetail";
// function

// const URL = `https://project-2-api.herokuapp.com/videos/?api_key=${process.env.REACT_APP_VIDEO_API_KEY}`;

function App() {
  // const [videoDetails, setVideoDetails] = useState({});

  // const getVideoByID = async (videoId) => {
  //   const { data } = await axios.get(getVideoID(videoId));
  //   setVideoDetails(data);
  // };

  // const [videoId, setVideoId] = useState(
  //   "84e96018-4022-434e-80bf-000ce4cd12b8"
  // );
  // const [videos, setVideos] = useState(getVideos(videoId));
  // const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  // const handleClick = (event, videoId) => {
  //   event.preventDefault();
  //   setVideoId(videoId);
  //   setVideos(getVideos(videoId));
  //   setVideoDetails(getVideoDetails(videoId));
  // };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoDetails />} />

          <Route
            path="/videos"
            element={
              <>
                {/* <VideoBanner
                  videoBanner={videoDetails.video}
                  videoPoster={videoDetails.image}
                />

                <section className="main">
                  <section className="main__left">
                    
                    <Comments comments={videoDetails.comments} />
                  </section> */}
                <VideoDetails />
                {/* <section className="main__right">
                    <SideBar videos={videos} onVideoClick={handleClick} />
                  </section> */}
                {/* </section> */}
              </>
            }
          />
          <Route path="/videos/:videoId" element={<VideoDetails />} />

          {/* <Route
            path="videos/:videoId"
            element={
              <>
                <VideoBanner
                  videoBanner={videoDetails.video}
                  videoPoster={videoDetails.image}
                />

                <section className="main">
                  <section className="main__left">
                    <VideoDetails videoPlayer={videoDetails} />
                    <Comments comments={videoDetails.comments} />
                  </section>
                  <section className="main__right">
                    <SideBar videos={videos} onVideoClick={handleClick} />
                  </section>
                </section>
              </>
            }
          ></Route> */}

          <Route path="upload" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
