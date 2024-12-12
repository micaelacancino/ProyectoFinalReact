import React from "react";
import BannerHome from "./components/BannerHome";
import ListaCursos from "./components/ListaCursos";
import  "./styles/home.css"
import idiomas from "../../assets/img/idiomas.jpg"

function HomePage() {
  return (
    <section className="w-100 d-flex flex-column">
      <BannerHome></BannerHome>
      <div className="container containerInfo">
        <article className="row justify-content-center mt-5">
          <div className="col-12 col-md-6">
            <h2 className="text-center mb-5">
              ¿Te gustaría aprender un nuevo idioma?
            </h2>
            <h3 className="text-center mb-4">
              Amplía tus horizontes con nuestros cursos de idiomas. Descubre el
              placer de aprender inglés, francés e italiano con nuestro programa
              diseñado para todas las edades y niveles.
            </h3>
            <h3 className="text-center mt-5">
              ¡Da el primer paso hacia un futuro multilingüe! 🌎 Inscríbete
              ahora y descubre lo que puedes lograr.
            </h3>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              className="w-100"
              src= {idiomas}
              alt="imagen de idiomas"
            />
          </div>
        </article>
        <ListaCursos></ListaCursos>
      </div>
    </section>
  );
}

export default HomePage;
