import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand ms-2">Pethome</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <title className="nav-link active" aria-current="page">
                  Perros
                </title>
              </li>
              <li className="nav-item">
                <title className="nav-link">Gatos</title>
              </li>
              <li className="nav-item dropdown">
                <title
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aves
                </title>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Another action</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">Something else here</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <title className="nav-link disabled">Reptiles</title>
              </li>
            </ul>
            <Link to="/inicio-sesion">
              <button className="btn btn-primary me-3">Inicio de sesion</button>
            </Link>
            <Link to="/registro">
              <button className="btn btn-success me-5" type="submit">
                Registro
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
