import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/productos.css";
import { Link } from "react-router-dom";

export const Productos = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid">
          <Link to="/" className="link">
            <h1 className="navbar-brand ms-2 text-dark">Pethome</h1>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Perros
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/productos" className="dropdown-item text-dark">
                      Comida
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Juguetes</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Higiene</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gatos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-dark">Comida</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Juguetes</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Higiene</a>
                  </li>
                </ul>
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
                    <a className="dropdown-item text-dark">Comida</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Juguetes</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Higiene</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reptiles
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-dark">Comida</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Juguetes</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Higiene</a>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to="/inicio-sesion">
              <button className="btn btn-primary me-3">Inicio de sesion</button>
            </Link>
            <Link to="/registro">
              <button className="btn btn-success me-4" type="submit">
                Registro
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
