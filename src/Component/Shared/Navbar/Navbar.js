import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserLoggedinContext } from "../../../App";
import logo from "../../../Media/img/Shared-Images/education-portal-logo.jpg";
import "./Navbar.scss";

const Navbar = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserLoggedinContext);
  return (
    <div className="nav-section">
      <nav className=" container nav-area">
        <input type="checkbox" id="box" />
        <label htmlFor="box" className="btn-area">
          <i className="fa fa-align-right"></i>
        </label>
        <label>
          <img src={logo} alt="" className="logo" />
        </label>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          {loggedinUser.email ? (
            <span
              style={{ color: "#86bc42", fontSize: "17px", fontWeight: "bold" }}
            >
              {loggedinUser.email}
            </span>
          ) : (
            <li>
              <Link className=" border border-2" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
