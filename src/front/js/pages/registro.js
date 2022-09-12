import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/registro.css";
import { Link } from "react-router-dom";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.registro(email, contraseña, direccion, telefono, ciudad, pais);
  };

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
          <div className="col-12 col-md-6 mx-auto">
            <form
              onSubmit={handleSubmit}
              class="row g-3 bg-white rounded-1 px-3 py-3 needs-validation"
              novalidate
            >
              <div className="row">
                <div className="col-3 mx-auto">
                  <h3 className="mx-auto">Registro</h3>
                </div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom01" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom02" class="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="validationCustom02"
                  onChange={(event) => {
                    setContraseña(event.target.value);
                  }}
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">
                  Dirección
                </label>
                <div class="input-group has-validation">
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    onChange={(event) => {
                      setDireccion(event.target.value);
                    }}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  onChange={(event) => {
                    setTelefono(event.target.value);
                  }}
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  Ciudad
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  onChange={(event) => {
                    setCiudad(event.target.value);
                  }}
                  required
                />
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  País
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  onChange={(event) => {
                    setPais(event.target.value);
                  }}
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
