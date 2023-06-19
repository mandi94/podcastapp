import React from "react";
import { Link } from "react-router-dom";

function Header({ isLoading }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand text-primary" to="/">
          Podcaster
        </Link>
        <div className="ml-auto">
          {isLoading && (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
