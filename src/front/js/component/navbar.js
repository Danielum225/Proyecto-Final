import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <h1 className="navbar-brand ms-2">Pethome</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page">
                  Perros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark">Gatos</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aves
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-dark">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Another action</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark">Reptiles</a>
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
