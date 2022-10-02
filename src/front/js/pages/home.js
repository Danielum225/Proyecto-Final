import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand ms-2">Pethome</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Perros
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/productos" className="dropdown-item text-dark">
                      Comida
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Juguetes</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Higiene</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gatos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-dark">Comida</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Juguetes</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Higiene</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aves
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-dark">Comida</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Juguetes</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Higiene</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reptiles
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-dark">Comida</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Juguetes</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark">Higiene</a>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to="/inicio-sesion">
              <button className="btn btn-primary me-3">Inicio de sesion</button>
            </Link>
            <Link to="/registro">
              <button className="btn btn-success me-4" type="submit">
                Registro
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="caja-carousel container mx-auto">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://kupfertax.mx/wp-content/uploads/2021/09/Banner-Productos-Purina_Mesa-de-trabajo-1-copia-002-1024x512.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://img.freepik.com/foto-gratis/accesorios-mascotas-concepto-naturaleza-muerta-alimento-seco-mascotas_23-2148949564.jpg?w=2000"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://s1.eestatic.com/2020/07/27/cocinillas/actualidad-gastronomica/mascotas-alimentacion-lidl_508460341_156563984_1024x576.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white">
              ¡Échale un vistazo a nuestras novedades en higiene y estética!
            </h1>
          </div>
        </div>
        <div className="row container mx-auto">
          <div className="col-12 col-md-4 mb-5">
            <img
              className="img-estetica"
              src="https://www.perrogato.net/upload/blockblog/-iquest-que-es-el-trimming-y-como-lo-puedo-hacer-700x700.jpg"
            ></img>
          </div>
          <div className="col-12 col-md-4 mb-5">
            <img
              className="img-estetica"
              src="https://tibetmx.com/dev2021/wp-content/uploads/2022/03/Inicio2.jpg"
            ></img>
          </div>
          <div className="col-12 col-md-4 mb-5">
            <img
              className="img-estetica"
              src="https://www.tiendanimal.es/servicios/peluquerias-salonbelleza/wp-content/uploads/2022/04/perro-secadora.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
