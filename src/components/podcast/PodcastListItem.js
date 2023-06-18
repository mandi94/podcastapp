import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PodcastListItem = ({ item, index }) => {
  const title = item["im:name"].label;
  const description = item.id.label;
  const image = item["im:image"][2].label;

  const navigate = useNavigate();

  const handleRedirect = (podcast) => {
    // Store the fetched list and timestamp in local storage
    localStorage.setItem(
      `podcast_${podcast.id.attributes["im:id"]}`,
      JSON.stringify(podcast)
    );
    localStorage.setItem(
      `podcastTimestamp_${podcast.id.attributes["im:id"]}`,
      Date.now()
    );
    const url = `/podcast/${podcast.id.attributes["im:id"]}`;
    navigate(url);
  };

  return (
    <div key={index} className="col-sm-3">
      <div className="card">
        <img src={image} alt="Card" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            <button
              className="btn btn-link"
              style={{ textAlign: "left" }}
              onClick={() => handleRedirect(item)}
            >
              {title}
            </button>
          </h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PodcastListItem;
