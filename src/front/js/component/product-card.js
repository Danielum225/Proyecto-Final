import React, { useContext, useState } from "react";
import "../../styles/product_card.css";
import { Context } from "../store/appContext";

export const Product_card = ({ products }) => {
  const { store, actions } = useContext(Context);
  const [Click, setClick] = useState(false);

  const handleClick = () => {
    actions.addFavorites(products.name);
    Click == true ? setClick(false) : setClick(true);
  };
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={products.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {products.name}, {products.price}€
          </h5>
          <p className="card-text">{products.description}</p>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-warning"
          >
            Comprar
          </button>
        </div>
      </div>
    </>
  );
};
