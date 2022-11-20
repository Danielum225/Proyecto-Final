import React, { useState, useEffect, useContext } from "react";
import "../../styles/productos.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Product_card } from "../component/product-card";
import { Navbar } from "../component/navbar";

export const Productos = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mt-5"></div>
        <div className="row">
          {store.productos &&
            store.productos.map((products) => {
              return (
                <>
                  <div className="col-12 col-md-4 mt-5 mb-4">
                    <Product_card
                      products={products}
                      key={products.id}
                      id={products.id}
                    />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
