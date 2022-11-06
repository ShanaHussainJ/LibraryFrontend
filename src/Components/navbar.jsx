import React from "react";
import "../Styles/navbar.css";
function Navbar() {
  return (
    <header>
      <nav class="navbar overflow-auto navbar-expand-lg">
        
        <h2 class="lib-app" >
          Library App
        </h2>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="content-navbar navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Library
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Checkout
                </a>
                <a class="dropdown-item" href="#">
                  Return Books
                </a>
                
              </div>
            </li>
            <li><span><i class="nav-item bi bi-bell"></i></span></li>
            
          </ul>
          
        </div>
      </nav>
      
    </header>
  );
}

export default Navbar;
