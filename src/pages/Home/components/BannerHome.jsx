import React from "react";
import imagenBanner from "../../../assets/img/imagenBanner.jpg";
import "../styles/home.css";

function BannerHome() {
  return (
    <section className="w-100 ">
      <img className="imgBanner w-100" src={imagenBanner} alt="Imagen banner" />
      <article class="descripcionBanner p-2 p-md-5 text-center">
        <h1 class="titlePages bold ">Bienvenidos a Speak Master</h1>
        <h2 class="titlePages">
          La mejor manera de aprender idiomas a tu ritmo!
        </h2>
      </article>
    </section>
  );
}

export default BannerHome;
