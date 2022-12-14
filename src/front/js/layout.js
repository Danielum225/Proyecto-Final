import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Inicio_sesion } from "./pages/inicio-sesion";
import { Registro } from "./pages/registro";
import { Productos } from "./pages/productos";
import { Productos_admin } from "./pages/productos-admin";
import { Pago } from "./pages/pago";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Inicio_sesion />} path="/inicio-sesion" />
            <Route element={<Registro />} path="/registro" />
            <Route element={<Productos />} path="/productos" />
            <Route element={<Productos_admin />} path="/productos-admin" />
            <Route element={<Pago />} path="/pago" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
