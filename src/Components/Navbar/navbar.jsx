import React from "react";
import "../Navbar/navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isAdmin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    navigate("/");
  };

  return (
    <nav className="navbar overflow-auto navbar-expand-lg">
      <h2 className="lib-app">Library App</h2>

      <div className=" collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="content-navbar navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={isAdmin ? "/viewbooks" : "/home"} className="nav-link">
              Profile
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to={"/returnbooks"} className="nav-link ">
              Return
            </Link>
          </li>

          <li className="nav-item dropdown">
            <i
              className="nav-link bi bi-person"
              id="navbarDropdown"
              data-toggle="dropdown"
            ></i>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to={"/"} className="dropdown-item">
                Login
              </Link>
              <p onClick={handleLogout} className="dropdown-item">
                Logout
              </p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
