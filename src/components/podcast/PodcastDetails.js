import React from "react";
import { Link } from "react-router-dom";

const PodcastDetails = ({ item }) => {
//   const artistName = item.artistName;

  return (
    <div className="w-100">
      <div className="card">
        {/* <img src={image} alt="Card" className="card-img-top" /> */}
        <div className="card-body">
          {/* <h5 className="card-title">{artistName}</h5> */}
          <div className="col-lg-1 border-right"></div>
          <p className="card-text">Description</p>
          <p className="card-text">La descripcion va aqui </p>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
