import React from "react";

const PodcastEpisodeDetails = ({ episode }) => {
  const title = episode?.trackName;
  const description = episode?.description
    ? episode?.description
        ?.replace(/\n/g, "<br>")
        .replace(/\\"/g, '"')
        .replace(
          /(barstool\.link\/mworthofgame)/g,
          '<a href="http://$1">$1</a>'
        )
    : "No description";

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="card-footer">
        <audio controls className="w-100">
          <source src={episode?.episodeUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default PodcastEpisodeDetails;
