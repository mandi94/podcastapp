import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import NotFound from "./views/NotFound";
import PodcastDetailsView from "./views/PodcastDetailsView";
import PodcastEpisodeDetailsView from "./views/PodcastEpisodeDetailsView";
import PodcastView from "./views/PodcastView";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<PodcastView />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetailsView />} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<PodcastEpisodeDetailsView />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
