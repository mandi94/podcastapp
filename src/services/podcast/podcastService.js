import axios from "axios";

const BASE_URL = "https://itunes.apple.com";

export async function getTopPodcasts({ limit, searchTerm }) {
  try {
    const response = await axios.get(
      `${BASE_URL}/us/rss/toppodcasts/limit=${limit ?? 100}${
        searchTerm ? "&term=" + searchTerm : ""
      }/genre=1310/json`
    );
    const topPodcasts = response.data;
    return topPodcasts;
  } catch (error) {
    console.error("Error fetching top podcasts:", error);
    throw error;
  }
}

export async function getPodcastDetails(podcastId) {
  try {
    const response = await axios.get(`${BASE_URL}/lookup?id=${podcastId}`);
    // const response = await axios.get(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     `${BASE_URL}/lookup?id=${podcastId}`
    //   )}`
    // );
    return response.data;
  } catch (error) {
    console.error(`Error fetching podcast details for ID ${podcastId}:`, error);
    throw error;
  }
}

export async function getEpisodes(podcastId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`
    );
    // const response = await axios.get(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     `${BASE_URL}/lookup?id=${podcastId}`
    //   )}`
    // );
    return response.data;
  } catch (error) {
    console.error(`Error fetching podcast details for ID ${podcastId}:`, error);
    throw error;
  }
}

/**
 * Get podcast episode details
 */

export async function getEpisodeDetails(podcastId) {
  try {
    const response = await axios.get(`${BASE_URL}/us/lookup?id=${podcastId}`);
    // const response = await axios.get(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     `${BASE_URL}/lookup?id=${podcastId}`
    //   )}`
    // );
    return response.data;
  } catch (error) {
    console.error(`Error fetching podcast details for ID ${podcastId}:`, error);
    throw error;
  }
}