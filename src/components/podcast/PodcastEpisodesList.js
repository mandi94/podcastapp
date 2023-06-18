import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate, formatDuration } from "../../utils/Formatter";

const PodcastEpisodesList = ({ episodes, podcastId }) => {
  const episodesList = episodes?.results;
  const episodesCount = episodes?.resultCount;
  const navigate = useNavigate();

  const handleRedirect = (episode) => {
    // Store the fetched list and timestamp in local storage
    localStorage.setItem(
      `podcast_${podcastId}_episode_${episode.trackId}`,
      JSON.stringify(episode)
    );
    localStorage.setItem(
      `podcast_${podcastId}_episode_${episode.trackId}_Timestamp`,
      Date.now()
    );
    const url = `/podcast/${podcastId}/episode/${episode.trackId}`;
    navigate(url);
  };

  return (
    <div className="card">
      <div className="card-body overflow-auto">
        <h5 className="card-title">Episodes: {episodesCount}</h5>
        <table className="table table-hover h-100 overflow-auto">
          <thead>
            <tr>
              <th scope="col" className="w-50">
                Title
              </th>
              <th scope="col" className="w-25">
                Date
              </th>
              <th scope="col" className="w-25">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {episodesList?.map((item, index) => (
              <tr key={index}>
                <td>
                  <button
                    className="btn btn-link"
                    style={{ textAlign: "left" }}
                    onClick={() => handleRedirect(item)}
                  >
                    {item.trackName}
                  </button>
                </td>
                <td>{formatDate(item.releaseDate)}</td>
                <td>{formatDuration(item.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PodcastEpisodesList;
