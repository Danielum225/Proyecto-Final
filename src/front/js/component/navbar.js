import React, { useContext, useState } from "react";
import "../../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("jwt-token");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid">
          <Link className="link" to="/">
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
            {localStorage.getItem("jwt-token") ? (
              <div className="btn-group">
                <button className="btn btn-danger me-3" onClick={handleLogOut}>
                  Cerrar sesión
                </button>
                {store.favorites.length != 0 ? (
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Carrito de la compra:
                    <span className="px-2">{store.favorites.length}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Carrito de la compra:
                  </button>
                )}
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {store.favorites.map((item, index) => {
                    return (
                      <li
                        className="dropdown-item d-flex justify-content-between"
                        key={index}
                      >
                        {item.name}{" "}
                        <i
                          className="fas fa-trash-alt"
                          onClick={() => {
                            actions.deleteFavorites(index);
                          }}
                        ></i>
                      </li>
                    );
                  })}
                  <Link to="/pago" className="dropdown-item text-dark">
                    <button type="button" className="btn btn-warning ms-2">
                      Finalizar compra
                    </button>
                  </Link>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/inicio-sesion">
                  <button className="btn btn-primary me-3">
                    Inicio de sesion
                  </button>
                </Link>
                <Link to="/registro">
                  <button className="btn btn-success me-4" type="submit">
                    Registro
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
