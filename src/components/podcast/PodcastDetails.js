import React from "react";
import { useNavigate } from "react-router-dom";

const PodcastDetails = ({ item }) => {
  const navigate = useNavigate();

  const image = item?.["im:image"]?.[2].label;
  const podcastName = item?.["im:name"]?.label;
  const author = item?.["im:artist"].label
    ?.replace(/\n/g, "<br>")
    .replace(/\\"/g, '"')
    .replace(/(barstool\.link\/mworthofgame)/g, '<a href="http://$1">$1</a>');
  const summary = item?.summary?.label
    ?.replace(/\n/g, "<br>")
    .replace(/\\"/g, '"')
    .replace(/(barstool\.link\/mworthofgame)/g, '<a href="http://$1">$1</a>');

  const handleRedirect = (podcast) => {
    debugger;
    const url = `/podcast/${podcast.id.attributes["im:id"]}`;
    navigate(url);
  };

  return (
    <div className="w-100">
      <div className="card">
        <img
          src={image}
          alt="Card"
          className="card-img-top p-3"
          onClick={() => handleRedirect(item)}
          style={{ cursor: "pointer" }}
        />
        <hr className="border-top mt-3 mx-2 border-2" />
        <div className="card-body">
          <div
            onClick={() => handleRedirect(item)}
            style={{ cursor: "pointer" }}
          >
            <h5 className="card-title">{podcastName}</h5>
            {author && <p>By {author}</p>}
          </div>
          <hr className="border-top mt-3 mx-2 border-2" />
          <div className="col-lg-1 border-right"></div>
          {summary && (
            <>
              <h5 className="card-text">Description</h5>
              <p className="card-text">{summary} </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
