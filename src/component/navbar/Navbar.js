import React from "react";
import imagelogo from "../../images/argos-logo-claro.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html"><img src={imagelogo} alt="argos-logo" width="120px"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <a className="nav-link text-light fs-4 " aria-current="page" href="index.html">Home</a>
            <a className="nav-link text-light fs-4 " href="#media">Contenido</a>
            <a className="nav-link text-light fs-4 " href="#redes">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
