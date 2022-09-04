import React from "react";
import "../../styles/registro.css";
import { Link } from "react-router-dom";

export const Registro = () => {
  return (
    <>
      <div className="row ms-2">
        <div className="col-3">
          <Link className="link" to="/">
            <h1 className="text-white">Pethome</h1>
          </Link>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 mx-auto">
          <form
            class="row g-3 bg-white rounded-1 px-3 py-3 needs-validation"
            novalidate
          >
            <div className="row">
              <div className="col-5 mx-auto">
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
    </>
  );
};
