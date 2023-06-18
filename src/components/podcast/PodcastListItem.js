import React from "react";
import { Link } from "react-router-dom";

const PodcastListItem = ({ item, index }) => {
  const title = item["im:name"].label;
  const description = item.id.label;
  const image = item["im:image"][2].label;
  const podcastId = item.id.attributes["im:id"];

  return (
    <div key={index} className="col-sm-3">
      <div className="card">
        <img src={image} alt="Card" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/podcast/${podcastId}`}>{title}</Link>
          </h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PodcastListItem;
