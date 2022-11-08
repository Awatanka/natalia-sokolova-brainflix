import { startTransition } from "react";
import "./sideBar.scss";

export default function SideBar({ videos, onVideoClick }) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-header"> NEXT VIDEO</h3>
      {videos.map((video) => (
        <div key={video.id}>
          <div className="sidebar-content">
            <div className="sidebar-content__left">
              <img
                className="sidebar-content__left-video"
                src={video.image}
                alt={video.name}
                onClick={(event) => onVideoClick(event, video.id)}
              />
            </div>
            <div className="sidebar-content__right">
              <h3 className="sidebar-content__right-title">{video.title}</h3>
              <p className="sidebar-content__right-text"> {video.channel}</p>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}
