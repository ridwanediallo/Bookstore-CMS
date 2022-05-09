import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => (
  <nav className="nav">
    <div className="left-side">
      <h1 className="logo">BookStore CMS</h1>
      <ul className="nav-links">
        <li>
          <Link to="/" className="link">
            Books
          </Link>
        </li>
        <li>
          <Link to="/categories" className="link">
            Categories
          </Link>
        </li>
      </ul>
    </div>
    <div className="left-side">icon</div>
  </nav>
);

export default NavBar;
