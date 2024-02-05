import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

import user from "../../img/user.png";
import logo from "../../img/logo.png";

const Navbar = ({ setState, state }) => {
  const navigate = useNavigate();
  return (
    <div className="header align-items-center">
      <div className="firstHalf">
        <div className="logo">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>
      </div>

      <div className="lastHal d-flex align-items-center me-4">
        <div className="me-3">
          <HiBars3BottomRight
            className="text-light sidebar__bar"
            onClick={() => setState(!state)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="navs me-5">
        <Link to="/home" className="link">
            ABOUT
          </Link>
          <Link to="/home" className="link">
            DOCS
          </Link>
          
          <Link to="/home" className="link">
            BLOGS
          </Link>
        </div>
        <Link className="d-none d-sm-block" to="/">
          <button className="signupbtn link me-3 me-md-5">Disconnect</button>
        </Link>

        <div class="dropdown">
          <button
            className="dropdown-toggle d-flex align-items-center navbar__avatar"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img className="img-fluid" src={user} alt="user" />
          </button>
          <ul
            className="dropdown-menu text-uppercase"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a className="dropdown-item" href="#">
                My Profile
              </a>
            </li>{" "}
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>{" "}
            <li className="m-0" onClick={()=> navigate('/')}>
              <a className="dropdown-item" href="#">
                Sign Out
              </a>
            </li>
            <li className="ms-2 d-sm-none">
              <Link className="" to="/">
                <button className="signupbtn link me-3 me-md-5">
                  Disconnect
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
