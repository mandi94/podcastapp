import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand text-primary" to="/">Podcaster</Link>
        {/* <div className="ml-auto">
          <div className="spinner-border text-primary" role="status">
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Header;