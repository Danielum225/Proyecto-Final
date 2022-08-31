import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="row container mx-auto">
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
                  src="https://madagascarmascotas.com/modules/revsliderprestashop/uploads/BANNER-M%C3%93VIL.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.tiendanimal.es/uploads/info_boxes/es-infobox-criadores.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://mascotamarket.com/wp-content/uploads/2019/07/comida_para_perro_y_gato_hills.jpg"
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
      <div className="row text-center mt-5">
        <div className="col-12">
          <h1>
            ¡Échale un vistazo a nuestras novedades en higiene y estética!
          </h1>
        </div>
      </div>
      <div className="row d-flex container mx-auto">
        <div className="col-4 mb-5">
          <img
            className="img-estetica"
            src="https://www.perrogato.net/upload/blockblog/-iquest-que-es-el-trimming-y-como-lo-puedo-hacer-700x700.jpg"
          ></img>
        </div>
        <div className="col-4 mb-5">
          <img
            className="img-estetica"
            src="https://tibetmx.com/dev2021/wp-content/uploads/2022/03/Inicio2.jpg"
          ></img>
        </div>
        <div className="col-4 mb-5">
          <img
            className="img-estetica"
            src="https://www.tiendanimal.es/servicios/peluquerias-salonbelleza/wp-content/uploads/2022/04/perro-secadora.jpg"
          ></img>
        </div>
      </div>
    </>
  );
};
