import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PodcastDetails from "../components/podcast/PodcastDetails";
import PodcastEpisodeDetails from "../components/podcast/PodcastEpisodeDetails";

const PodcastEpisodeDetailsView = ({}) => {
  const { podcastId, episodeId } = useParams();

  const [podcastsDetails, setPodcastsDetails] = useState(null);
  const [episodeDetails, setEpisodeDetails] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const cachedPodcastDetails = localStorage.getItem(`podcast_${podcastId}`);
      const cachedPodcastEpisode = localStorage.getItem(
        `podcast_${podcastId}_episode_${episodeId}`
      );

      if (cachedPodcastDetails && cachedPodcastEpisode) {
        setPodcastsDetails(JSON.parse(cachedPodcastDetails));
        setEpisodeDetails(JSON.parse(cachedPodcastEpisode));
      }
    };
    fetchPodcasts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3">
          <PodcastDetails item={podcastsDetails} />
        </div>

        <div className="col-lg-8">
          <PodcastEpisodeDetails episode={episodeDetails} />
        </div>
      </div>
    </div>
  );
};

export default PodcastEpisodeDetailsView;
