import React, { useState } from "react";
import "./Navbar.css";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <MdFingerprint />
          <Link to="/" className="navbar-logo">
            Heros
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link  to='/sign-up'className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </Link>
              ) : (
                <Link  to='/sign-up' className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
