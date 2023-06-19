import React from "react";
import { useNavigate } from "react-router-dom";

const PodcastListItem = ({ item, index }) => {
  const title = item["im:name"].label;
  const author = item["im:artist"].label;
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
    <div key={index} className="col-sm-3 my-3 ml-1 clickable">
      <div className="d-flex justify-content-center d-flex align-items-center position-relative">
        <img
          src={image}
          alt={title}
          className="rounded-circle border object-fit-cover"
          style={{
            marginBottom: "-5rem",
            width: "50%",
            aspectRatio: "1/1",
            cursor: "pointer",
          }}
          onClick={() => handleRedirect(item)}
        />
      </div>
      <div
        className="card"
        style={{ position: "revert", cursor: "pointer" }}
        onClick={() => handleRedirect(item)}
      >
        <div
          className="card-body overflow-hidden"
          style={{ height: "10rem", paddingTop: "5rem" }}
        >
          <h5
            className="card-title text-center text-uppercase fw-bold overflow-hidden"
            style={{
              maxHeight: "3rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </h5>
          <div
            style={{
              textAlign: "center",
              height: "2rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <p className="card-text">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastListItem;
