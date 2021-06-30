import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.module.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="sidenav">
          <li>
            <NavLink activeClassName="active" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/Address">
              Address
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/PaymentCard">
              Payment Card
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
