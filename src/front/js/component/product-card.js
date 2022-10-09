import React from "react";
import "../../styles/product_card.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export const Product_card = (props) => {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
};
