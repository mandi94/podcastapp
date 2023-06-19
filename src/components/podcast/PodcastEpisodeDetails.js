import React from "react";
const BASE_URL = "https://cors-anywhere.herokuapp.com/";

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

  // Im case of use a cors plugin remove the remove from the audioSrc  all the code different to episode?.episodeUrl
  const audioSrc = `https://api.allorigins.win/raw?url=${encodeURIComponent(
    episode?.episodeUrl
  )}`;

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
        {episode?.episodeUrl && (
          <audio controls className="w-100">
            <source src={audioSrc} type={"audio/mp3"} />
            Your browser does not support the audio element.
          </audio>
        )}
        {!episode?.episodeUrl && (
          <p>Your browser does not support the audio element.</p>
        )}
      </div>
    </div>
  );
};

export default PodcastEpisodeDetails;
