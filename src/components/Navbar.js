import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from './images/planet.png';

function Navbar() {
  return (
    <header className="nav-div">
      <section className="logo-div">
        <img className="space-hub-logo" src={logo} alt="Space Hub Logo" />
        <h1 className="logo">Space Travelers&apos; Hub</h1>
      </section>
      <nav className="nav-links">
        <Link className="links" to="/">Rockets</Link>
        <Link className="links" to="/missions">Missions</Link>
        <Link className="links" to="/profile">My Profile</Link>
      </nav>
    </header>
  );
}

export default Navbar;
