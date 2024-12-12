import React from "react";
import BannerHome from "./components/BannerHome";
import ListaCursos from "./components/ListaCursos";

function HomePage() {
  return (
    <section>
      <BannerHome></BannerHome>
      <div class="container mt-5">
        <article class="row mt-5">
          <div class="col-12 col-md-6">
            <h2 class="text-center mb-5">
              ¿Te gustaría aprender un nuevo idioma?
            </h2>
            <h3 class="text-center mb-4">
              Amplía tus horizontes con nuestros cursos de idiomas. Descubre el
              placer de aprender inglés, francés e italiano con nuestro programa
              diseñado para todas las edades y niveles.
            </h3>
            <h3 class="text-center mt-5">
              ¡Da el primer paso hacia un futuro multilingüe! 🌎 Inscríbete
              ahora y descubre lo que puedes lograr.
            </h3>
          </div>
          <div class="col-12 col-md-6">
            <img
              class="w-100"
              src="/cuatro-paginas-para-aprender-idiomas-facilmente-729812.jpg"
              alt=""
            />
          </div>
        </article>
        <ListaCursos></ListaCursos>
      </div>
    </section>
  );
}

export default HomePage;
