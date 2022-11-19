import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Upload from "./pages/Upload";
import VideoDetails from "./components/VideoDetails/VideoDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<VideoDetails />} />
          <Route path="/home" element={<VideoDetails />} />
          <Route path="/videos" element={<VideoDetails />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
