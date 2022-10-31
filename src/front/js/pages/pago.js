import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pago.css";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Pago = () => {
  const [buyList, setBuyList] = useState();
  const { store, actions } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setBuyList(store.favorites);
    setTotalPrice(store.totalPrice);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-5 pt-5"></div>
      <div className="container bg-white mt-5">
        <h1>Lista de compra</h1>
        {buyList &&
          buyList.map((item, index) => {
            return (
              <div key={index}>
                {item.name}
                {item.price}
              </div>
            );
          })}
        <p>Precio total: {totalPrice}</p>
      </div>
    </>
  );
};
