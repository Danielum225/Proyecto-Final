import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Productos_admin = () => {
  const { store, actions } = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipoAnimal, setTipoAnimal] = useState("");

  const handleSubmit = () => {
    actions.login(categoria, tipoAnimal, nombre, imagen, precio, descripcion);
  };

  useEffect(() => {
    actions.mostrarAnimal();
  }, []);

  useEffect(() => {
    actions.mostrarCategoria();
  }, []);

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
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Tipo de animal
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Seleccionar el tipo de animal</option>
                  {store.tipoAnimal &&
                    store.tipoAnimal.map((tipoAnimal) => {
                      return (
                        <>
                          <option
                            onChange={(event) => {
                              setTipoAnimal(event.target.value);
                            }}
                            tipoAnimal={tipoAnimal}
                            id={tipoAnimal.id}
                          >
                            {tipoAnimal.animal}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Categoría
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Seleccionar categoría</option>
                  {store.categoria &&
                    store.categoria.map((categoria) => {
                      return (
                        <>
                          <option
                            onChange={(event) => {
                              setCategoria(event.target.value);
                            }}
                            categoria={categoria}
                            id={categoria.id}
                          >
                            {categoria.category}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
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
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Imagen
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={(event) => {
                    setImagen(event.target.value);
                  }}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
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
                <label htmlFor="exampleInputPassword1" className="form-label">
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
