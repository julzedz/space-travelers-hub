import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>Space Travelers Hub</h1>
      <nav>
        <Link to="/">Rockets</Link>
        <Link to="/missions">Missions</Link>
        <Link to="/profile">My Profile</Link>
      </nav>
    </header>
  );
}

export default Navbar;
