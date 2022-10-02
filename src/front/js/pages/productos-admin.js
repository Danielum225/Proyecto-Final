import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Productos_admin = () => {
  const { store, actions } = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = () => {
    actions.login(nombre, precio, descripcion);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-1 px-3 py-3"
            >
              <div className="row">
                <div className="col-6 mx-auto">
                  <h3 className="mx-auto">Nuevo producto</h3>
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={(event) => {
                    setNombre(event.target.value);
                  }}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Precio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(event) => {
                    setPrecio(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Descripción
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(event) => {
                    setDescripcion(event.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Crear
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
