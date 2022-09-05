import React, { useState, useEffect, useContext } from "react";
import "../../styles/inicio-sesion.css";
import { Link } from "react-router-dom";

export const Inicio_sesion = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Link className="link" to="/">
              <h1 className="text-white">Pethome</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 mx-auto">
            <form className="bg-white rounded-1 px-3 py-3">
              <div className="row">
                <div className="col-5 mx-auto">
                  <h3 className="mx-auto">Iniciar sesión</h3>
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
