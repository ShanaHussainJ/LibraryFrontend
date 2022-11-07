import React from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

function Navbar({ isAdmin }) {
  return (
    <nav className="navbar overflow-auto navbar-expand-lg">
      <h2 className="lib-app">Library App</h2>

      <div className=" collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="content-navbar navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={isAdmin ? "" : "/home"} className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          {!isAdmin && (
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Checkout
              </Link>
            </li>
          )}
          {!isAdmin && (
            <li className="nav-item dropdown">
              <Link to={"/"} className="nav-link ">
                Return
              </Link>
            </li>
          )}
          
          {isAdmin && (
            <li className="nav-item dropdown">
              <Link to={"viewbooks"} className="nav-link ">
                Add Books
              </Link>
            </li>
          )}
          <li className="nav-item dropdown">
            <i
              className="nav-link bi bi-person"
              id="navbarDropdown"
              data-toggle="dropdown"
            ></i>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to={"/login"} className="dropdown-item">
                Login
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
