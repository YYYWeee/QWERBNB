// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "./logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul>
      <div className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="logo" width="30" height="30" />
          <NavLink exact to="/" id='QWERBNB'>
            <h2>QWERBNB</h2>
          </NavLink>
        </div>
        <div className="menu">
          {isLoaded && <ProfileButton user={sessionUser} id='QWERBNB' />}
        </div>
      </div>

    </ul>
  );
}

export default Navigation;
