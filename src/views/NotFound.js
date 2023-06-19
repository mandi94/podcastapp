import React from "react";

const NotFound = () => {
  return (
    <div className="container text-center">
      <h1 className="display-1">404</h1>
      <p className="lead">
        Oops! The page you're looking for could not be found.
      </p>
      <a href="/" className="btn btn-primary mt-3">
        Go back to the homepage
      </a>
    </div>
  );
};

export default NotFound;
