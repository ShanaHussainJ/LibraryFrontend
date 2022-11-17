import React from "react";
import "../Navbar/navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isAdmin, isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn();
    navigate("/");
  };

  return (
    <nav className="navbar overflow-auto navbar-expand-lg">
      <h2 className="lib-app">Library App</h2>

      <div className=" collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="content-navbar navbar-nav mr-auto">
          {isLoggedIn && (
            <>
              <li className="nav-item active">
                <Link
                  to={isAdmin ? "/home" : "/home"}
                  className="nav-link"
                >
                  Profile
                </Link>
              </li>

              {!isAdmin && (
                <li className="nav-item dropdown">
                  <Link to={"/returnbooks"} className="nav-link ">
                    Return
                  </Link>
                </li>
              )}
              {isAdmin && (
                <li className="nav-item dropdown">
                  <Link to={"/viewbooks"} className="nav-link ">
                    Books
                  </Link>
                </li>
              )}
            </>
          )}
          <li className="nav-item dropdown">
            <i
              className="nav-link bi bi-person"
              id="navbarDropdown"
              data-toggle="dropdown"
            ></i>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {isLoggedIn ? (
                <p onClick={handleLogout} className="dropdown-item">
                  Logout
                </p>
              ) : (
                <Link to={"/"} className="dropdown-item">
                  Login
                </Link>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
