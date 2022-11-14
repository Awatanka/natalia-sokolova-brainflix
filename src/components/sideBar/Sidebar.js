import "./sideBar.scss";
// import axios from "axios";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SideBar({ videos }) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-header"> NEXT VIDEO</h3>
      {videos.map((video) => (
        <Link to={`/videos/${video.id}`} key={video.id}>
          <div className="sidebar-content" key={video.id}>
            <div className="sidebar-content__left">
              <img
                className="sidebar-content__left-video"
                src={video.image}
                alt={video.name}
              />
            </div>
            <div className="sidebar-content__right">
              <h3 className="sidebar-content__right-title">{video.title}</h3>
              <p className="sidebar-content__right-text"> {video.channel}</p>
            </div>
          </div>
        </Link>
      ))}
    </aside>
  );
}
