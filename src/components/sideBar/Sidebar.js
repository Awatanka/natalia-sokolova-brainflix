import "./sideBar.scss";

export default function SideBar({ videos, onVideoClick }) {
  return (
    <aside className="sidebar">
      {videos.map((video) => (
        <>
          <img
            className="sidebar__video"
            src={video.image}
            alt={video.name}
            key={video.id + video.name}
            onClick={(event) => onVideoClick(event, video.id)}
          />
          <div className="sidebar__right">
            <h3>{video.title}</h3>
            <p> {video.channel}</p>
          </div>
        </>
      ))}
    </aside>
  );
}
