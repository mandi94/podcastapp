import React from "react";

const PodcastDetails = ({ item }) => {
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

  return (
    <div className="w-100">
      <div className="card">
        <img src={image} alt="Card" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{podcastName}</h5>
          {author && <p>By {author}</p>}
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
