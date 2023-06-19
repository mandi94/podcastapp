import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import NotFound from "./views/NotFound";
import PodcastDetailsView from "./views/PodcastDetailsView";
import PodcastEpisodeDetailsView from "./views/PodcastEpisodeDetailsView";
import PodcastView from "./views/PodcastView";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);

      // Simulate a delay for demonstration purposes
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    // Add the event listener for route change
    window.addEventListener("routeChange", handleRouteChange);

    // Clean up the event listener
    return () => {
      window.removeEventListener("routeChange", handleRouteChange);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Header isLoading={isLoading} />
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
