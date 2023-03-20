import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import css from "../navbar/Navbar.module.css";

function Navbars() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className={`container-fluid ${css["div-cont"]}`}>
        <p className="navbar-brand mb-0 mx-0 h1">MARKETPLACE</p>
        <img src={logo} alt="Logo" className={`${css["logo"]}`} />
      </div>
    </nav>
  );
}

export default Navbars;
