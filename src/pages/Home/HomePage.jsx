import React from "react";
import BannerHome from "./components/BannerHome";
import ListaCursos from "./components/ListaCursos";
import "./styles/home.css";
import idiomas from "../../assets/img/idiomas.jpg";
import ListaReseñas from "./components/ListaReseñas";
import FiltroCurso from "./components/FiltroCurso";

function HomePage({cursosAlmacenados} ) {
  
  return (
    <section className="d-flex flex-column ">
      <BannerHome></BannerHome>
      <div className="container containerInfo mb-5">
        <article className="row justify-content-center mt-5">
          <div className="col-12 col-md-6">
            <h2 className="text-center my-5 titlePages">
              ¿Te gustaría aprender un nuevo idioma?
            </h2>
            <p className="text-center mb-4 fs-5">
              Amplía tus horizontes con nuestros cursos de idiomas. Descubre el
              placer de aprender inglés, francés e italiano con nuestro programa
              diseñado para todas las edades y niveles.
            </p>
            <p className="text-center mt-5 fs-5">
              ¡Da el primer paso hacia un futuro multilingüe! 🌎 Inscríbete
              ahora y descubre lo que puedes lograr.
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center pb-5 imgIdiomas">
            <img className="w-100" src={idiomas} alt="imagen de idiomas" />
          </div>
        </article>
      </div>
      <h3 className="mt-3 pt-5 text-center titlePages">
        ALUMNOS QUE NOS APOYAN Y RECOMIENDAN
      </h3>
      <ListaReseñas></ListaReseñas>
      <div className="container">
        <div className="containerSubtitulo mt-5 p-1">
          <h2 className="text-center my-5 titlePages">Nuestros cursos</h2>
          <p className="text-center mb-5 fs-5 fw-bold">
            "Ofrecemos una amplia variedad de cursos diseñados para
            principiantes, estudiantes avanzados y personas de todas las
            edades."
          </p>
        </div>
        <FiltroCurso cursosAlmacenados={cursosAlmacenados} ></FiltroCurso>
      </div>
    </section>
  );
}

export default HomePage;
