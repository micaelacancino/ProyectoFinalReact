import React from "react";
import "../css/nosotros.css";
import micaela from '../assets/micaela.jpeg'
import enzo from '../assets/enzo.png'
import mariano from '../assets/mariano.jpeg'
const Team = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Quiénes Somos</h1>
      <p className="team-subtitle">Somos un equipo apasionado que trabaja para construir un mejor futuro en los idiomas.</p>
      <div className="team-grid">
        <div className="team-member">
          <div className="photo-wrapper">
            <img src={micaela} alt="Nombre 1" className="member-photo" />
          </div>
          <div className="info">
            <h2 className="name">Micaela Cancino</h2>
            <p className="description">Estudiante de ingenieria en sistemas de información, me gusta aprender idiomas y explorar las infinitas posibilidades que ofrece el mundo de la tecnología.</p>
            <i class="bi bi-github " style={{color:"white"}}> <a href="https://github.com/micaelacancino/ProyectoFinalReact/commits?author=micaelacancino" className="role"> Perfil de Github</a> </i>
          </div>
        </div>
        <div className="team-member">
          <div className="photo-wrapper">
            <img src={enzo} alt="Nombre 2" className="member-photo" />
          </div>
          <div className="info">
            <h2 className="name">Enzo Perez</h2>
            <p className="description">Estudiante de programación en la UTN, me gustan los videojuegos, entrenar y la tecnología. También me gusta el asado los domingos y compartir con amigos.</p>
            <i class="bi bi-github " style={{color:"white"}}> <a href="https://github.com/matperez01" className="role"> Perfil de Github</a> </i>
          </div>
        </div>
        <div className="team-member">
          <div className="photo-wrapper">
            <img src={mariano}alt="Nombre 3" className="member-photo" />
          </div>
          <div className="info">
            <h2 className="name">Mariano Ocon</h2>
            <p className="description">Estudiante de Admin. de Empresas en la UNSTA, asistente ejecutivo en Develative y musico sesionista</p>
            <i class="bi bi-github " style={{color:"white"}}> <a href="https://github.com/marianoocon  " className="role"> Perfil de Github</a> </i>
          </div>
        </div>
        <div className="team-member">
          <div className="photo-wrapper">
            <img src="https://scontent.fsla1-1.fna.fbcdn.net/v/t1.6435-1/60259623_10218336369056257_6265658923181670400_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEJm7e1_5qGhA585QyNR70p0TfM1Uu21HDRN8zVS7bUcNBgbpX1qYC71vGuq7xJ-HU&_nc_ohc=chrwqdG85SMQ7kNvgEIMAQI&_nc_oc=AdgUNKn9Tf_t8uknYn0GCtDTYKPLG9NFfXsj4BK9CcC-wTuiHhnLcOXnLhmfkkE3bSfIhd5_Os9_jKGkumd37Ujl&_nc_zt=24&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AlQpl69UfxOFcQBUbWygNYe&oh=00_AYAQIlUu0biSDgV5yicX1FhU54ooL8TzayP1cf6z3lvAww&oe=678B0ED0" alt="Nombre 4" className="member-photo" />
          </div>
          <div className="info">
            <h2 className="name">Gerardo Salorzano</h2>
            <p className="description">Músico, violinista de la orquesta sinfónica de Salta. Me encanta el arte y siento que el universo de la programación es un arte de creatividad infinita.</p>
            <i class="bi bi-github " style={{color:"white"}}>  <a href="https://github.com/gerardosolorzano-33" className="role"> Perfil de Github</a> </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
