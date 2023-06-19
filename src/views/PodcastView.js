import React, { useEffect, useState } from "react";
import SearchButton from "../components/common/SearchButton";
import PodcastListItem from "../components/podcast/PodcastListItem";
import { getTopPodcasts } from "../services/podcast/podcastService";

const PodcastView = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      // Check if the list exists in the local storage
      const cachedList = localStorage.getItem("podcastList");
      const cachedTimestamp = localStorage.getItem("podcastListTimestamp");

      // If the list exists and is not expired (within 24 hours)
      if (!searchTerm && cachedList && cachedTimestamp) {
        const timestamp = Number(cachedTimestamp);
        const currentTime = Date.now();
        const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;

        // If it's within the 24-hour window, use the cached list
        if (currentTime - timestamp < twentyFourHoursInMilliseconds) {
          const podcastList = JSON.parse(cachedList);
          setPodcasts(podcastList);
          setTotalResults(podcastList?.length);
          return;
        }
      }

      // If the list doesn't exist or is expired, fetch from the server
      try {
        const fetchedPodcasts = await getTopPodcasts({ searchTerm });
        // Store the fetched list and timestamp in local storage
        if (!searchTerm) {
          localStorage.setItem(
            "podcastList",
            JSON.stringify(fetchedPodcasts?.feed?.entry)
          );
          localStorage.setItem("podcastListTimestamp", Date.now());
        }
        setPodcasts(fetchedPodcasts?.feed?.entry);
        setTotalResults(fetchedPodcasts?.feed?.entry.length);
      } catch (error) {
        // Handle any errors during the API request
        console.log("Error fetching podcast list:", error);
      }
    };
    fetchPodcasts();
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="container">
      <div className="row justify-content-end p-3">
        <SearchButton
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          totalResults={totalResults}
        />
      </div>
      <div className="row">
        {podcasts.map((item, index) => (
          <PodcastListItem index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PodcastView;
