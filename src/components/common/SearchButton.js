import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const SearchButton = ({ setSearchTerm, totalResults, searchTerm }) => {
  const handleClear = () => {
    setSearchTerm(""); // Clear the search term
  };
  return (
    <div className="d-flex justify-content-end align-items-center">
      <span className="ml-2 badge bg-primary text-center justify-content-center p-2">
        {totalResults}
      </span>
      <div className="mx-2 w-25 d-flex flex-row ">
        <input
          type="text"
          className="form-control"
          placeholder="Search Podcasts"
          value={searchTerm}
          style={{ position: "revert", background: "transparent" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            className="btn btn btn-clear align-self-end "
            type="button"
            onClick={handleClear}
            style={{
              background: "transparent",
              marginLeft: "-3rem",
            }}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchButton;
