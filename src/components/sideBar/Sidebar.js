import "./sideBar.scss";

export default function SideBar({ videos, onVideoClick }) {
  return (
    <aside className="sidebar">
      {videos.map((video) => (
        <img
          className="sidebar__video"
          src={video.image}
          alt={video.name}
          key={video.id}
          onClick={(event) => onVideoClick(event, video.id)}
        />
      ))}
    </aside>
  );
}
