/**
 * NavLink
 * 
 * Contains the Navigational links to be displayed at the root of 
 * the application
 */
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavLink.css';

const NavLink = () => {
  return (
    <div className="NavLink">
      <div className="row">
        <div className="col-sm-12 col-md-offset-4 col-md-4">
          <Link className="NavLink-item" to="/">Home</Link>
          <Link className="NavLink-item" to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default NavLink;