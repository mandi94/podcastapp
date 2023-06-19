import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PodcastDetails from "../components/podcast/PodcastDetails";
import PodcastEpisodesList from "../components/podcast/PodcastEpisodesList";
import {
  getEpisodes,
} from "../services/podcast/podcastService";

const PodcastDetailsView = () => {
  const { podcastId } = useParams();

  const [podcastsDetails, setPodcastsDetails] = useState(null);
  const [podcastEpisodes, setPodcastEpisodes] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const cachedPodcastDetails = localStorage.getItem(`podcast_${podcastId}`);
      const cachedPodcastEpisodes = localStorage.getItem(
        `podcastEpisodes_${podcastId}`
      );
      const podcastEpisodesTimestamp = localStorage.getItem(
        `podcastEpisodesTimestamp_${podcastId}`
      );

      // If the list exists and is not expired (within 24 hours)
      if (cachedPodcastDetails) {
        setPodcastsDetails(JSON.parse(cachedPodcastDetails));
      }

      // If the list exists and is not expired (within 24 hours)
      if (cachedPodcastEpisodes && podcastEpisodesTimestamp) {
        const timestamp = Number(podcastEpisodesTimestamp);
        const currentTime = Date.now();
        const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;

        // If it's within the 24-hour window, use the cached list
        if (currentTime - timestamp < twentyFourHoursInMilliseconds) {
          setPodcastEpisodes(JSON.parse(cachedPodcastEpisodes));
          return;
        }
      }

      // If the podcast episodes doesn't exist or is expired, fetch from the server
      try {
        const fetchedEpisodes = await getEpisodes(podcastId);

        // Store the fetched list and timestamp in local storage
        localStorage.setItem(
          `podcastEpisodes_${podcastId}`,
          JSON.stringify(fetchedEpisodes)
        );
        localStorage.setItem(
          `podcastEpisodesTimestamp_${podcastId}`,
          Date.now()
        );
        setPodcastEpisodes(fetchedEpisodes);
      } catch (error) {
        // Handle any errors during the API request
        console.log("Error fetching podcast list:", error);
      }
    };

    fetchPodcasts();
  }, [podcastId]); 

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3">
          <PodcastDetails item={podcastsDetails} />
        </div>

        <div className="col-lg-8">
          <PodcastEpisodesList
            episodes={podcastEpisodes}
            podcastId={podcastId}
          />
        </div>
      </div>
    </div>
  );
};

export default PodcastDetailsView;
