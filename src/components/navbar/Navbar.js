import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "../../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className={"div-cont container-fluid "}>
        <p className="navbar-brand mb-0 mx-0 h1">MARKETPLACE</p>
        <img src={logo} alt="Logo" className={"logo"} />
      </div>
    </nav>
  );
}

export default Navbar;
