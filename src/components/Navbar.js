import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

function Navbars() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid d-flex row">
        <p class="navbar-brand mb-0 h1">
          MARKETPLACE
          <img
            src={logo}
            alt="Logo"
            width="150"
            height="150"
            class="d-inline-block align-text-top"
          />
        </p>
      </div>
    </nav>
  );
}

export default Navbars;
