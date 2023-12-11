import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/customer-list" className="nav-link">
            Customer List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/lead-scoring" className="nav-link">
            Lead Scoring
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sales-performance" className="nav-link">
            Sales Performance
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
