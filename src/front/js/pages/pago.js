import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pago.css";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../component/checkoutForm";
import "../../styles/app.css";

const promise = loadStripe(
  "pk_test_51LyYrIDwE9VfIXGQ8zwXnzUyl4ZypeEWK0HoHGFa58oJkPogeIcUbq8Njb69z4tTMC1PzV8SilB5uUs6RIsdysg600nMLtovZu"
);

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
      <div className="container bg-white mt-5 rounded-3">
        <div className="row">
          <div className="col-7 mx-auto">
            <h3 className="mx-auto">Lista de compra</h3>
          </div>
        </div>
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
      <div className="App">
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
};
