import React, { useEffect, useState } from "react";
import PodcastListItem from "../components/podcast/PodcastListItem";
import { getTopPodcasts } from "../services/podcast/podcastService";

const PodcastView = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      // Check if the list exists in the local storage
      const cachedList = localStorage.getItem("podcastList");
      const cachedTimestamp = localStorage.getItem("podcastListTimestamp");

      // If the list exists and is not expired (within 24 hours)
      if (cachedList && cachedTimestamp) {
        const timestamp = Number(cachedTimestamp);
        const currentTime = Date.now();
        const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;

        // If it's within the 24-hour window, use the cached list
        if (currentTime - timestamp < twentyFourHoursInMilliseconds) {
          setPodcasts(JSON.parse(cachedList));
          return;
        }
      }

      // If the list doesn't exist or is expired, fetch from the server
      try {
        const fetchedPodcasts = await getTopPodcasts({});
        // Store the fetched list and timestamp in local storage
        localStorage.setItem(
          "podcastList",
          JSON.stringify(fetchedPodcasts?.feed?.entry)
        );
        localStorage.setItem("podcastListTimestamp", Date.now());

        setPodcasts(fetchedPodcasts?.feed?.entry);
      } catch (error) {
        // Handle any errors during the API request
        console.log("Error fetching podcast list:", error);
      }
    };

    fetchPodcasts();
  }, []); // Empty dependency array to fetch the list only once on mount

  return (
    <div className="container">
      <div className="row">
        {podcasts.map((item, index) => (
          <PodcastListItem index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PodcastView;
