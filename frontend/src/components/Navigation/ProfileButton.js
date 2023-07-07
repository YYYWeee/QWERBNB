// frontend/src/components/Navigation/ProfileButton.js
//Render the ProfileButton component only when there is a session user.


import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import { NavLink } from "react-router-dom";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
  };

  const divClassName = "profile-dropdown" + (showMenu ? "active" : " hidden");

  return (
    <>
      <div className="dropdown-menu">
        <button onClick={openMenu} className="button-font-awesome">
          <div className="three-bars"><i className="fa-solid fa-bars fa-xl"></i></div>
          <i className="fas fa-user-circle fa-xl" />
        </button>

        {/* <div className={divClassName} ref={ulRef}> */}
        <div className={divClassName} ref={ulRef}>
          {user ? (
            <>
              {/* <div>{user.username}</div>
              <div>{user.firstName} {user.lastName}</div>
              <div>{user.email}</div> */}
              {/* <p>{user.username}</p> */}

              <p>
                Hello {user.firstName} {user.lastName}
              </p>
              <p>{user.email}</p>
              <NavLink
                exact
                to="/spots/current"
                id="manage-your-spots"
                onClick={() => setShowMenu(false)}
              >
                Manage Spots
              </NavLink>
              <div className="logout-btn">
                <button onClick={logout} id="logout-button">Log Out</button>
              </div>
            </>
          ) : (
            <>
              <div className="login-signup">
                <p>
                  <OpenModalMenuItem
                    itemText="Log In"
                    onItemClick={closeMenu}
                    modalComponent={<LoginFormModal />}
                  />
                </p>
                <p>
                  <OpenModalMenuItem
                    itemText="Sign Up"
                    onItemClick={closeMenu}
                    modalComponent={<SignupFormModal />}
                  />
                </p>
              </div>
            </>
          )}
        </div>
      </div >
    </>
  );
}

export default ProfileButton;
