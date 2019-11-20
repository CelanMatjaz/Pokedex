import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="Navbar ">
      <div className="Navbar-Container">
        <Link to="/">Home</Link>
        <div className="Navbar-Link-Devider"></div>
        <Link to="/my-pokemon">My Pokemon</Link>
      </div>
    </div>
  );
};
