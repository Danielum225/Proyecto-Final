import React from "react";
import "../../styles/product_card.css";

export const Product_card = ({ products }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={products.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {products.name}, {products.price}€
          </h5>
          <p className="card-text">{products.description}</p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
    </>
  );
};
