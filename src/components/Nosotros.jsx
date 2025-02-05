import React from 'react';
import "../css/nosotros.css";
import micaela from '../assets/micaela.jpeg';
import enzo from '../assets/enzo.png';
import mariano from '../assets/mariano.jpeg';

function Nosotros() {
  return (
    <div className="team-container mainSection">
      <h1 className="team-title titlePages my-4">Quiénes Somos</h1>
      <h4 className="team-subtitle">Somos un equipo apasionado que trabaja para construir un mejor futuro en los idiomas.</h4>
      <div className="team-grid">
        {[ 
          { img: micaela, name: "Micaela Cancino", description: "Estudiante de ingeniería en sistemas de información, me gusta aprender idiomas y explorar las infinitas posibilidades que ofrece el mundo de la tecnología.", github: "https://github.com/micaelacancino" },
          { img: enzo, name: "Enzo Perez", description: "Estudiante de programación en la UTN, me gustan los videojuegos, entrenar y la tecnología. También me gusta el asado los domingos y compartir con amigos.", github: "https://github.com/matperez01" },
          { img: mariano, name: "Mariano Ocon", description: "Estudiante de Administración de Empresas en la UNSTA, también soy asistente ejecutivo en Develative y músico sesionista.", github: "https://github.com/marianoocon" },
          { img: "https://scontent.fsla1-1.fna.fbcdn.net/v/t1.6435-1/60259623_10218336369056257_6265658923181670400_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEJm7e1_5qGhA585QyNR70p0TfM1Uu21HDRN8zVS7bUcNBgbpX1qYC71vGuq7xJ-HU&_nc_ohc=chrwqdG85SMQ7kNvgEIMAQI&_nc_oc=AdgUNKn9Tf_t8uknYn0GCtDTYKPLG9NFfXsj4BK9CcC-wTuiHhnLcOXnLhmfkkE3bSfIhd5_Os9_jKGkumd37Ujl&_nc_zt=24&_nc_ht=scontent.fsla1-1.fna&_nc_gid=AlQpl69UfxOFcQBUbWygNYe&oh=00_AYAQIlUu0biSDgV5yicX1FhU54ooL8TzayP1cf6z3lvAww&oe=678B0ED0", name: "Gerardo Solorzano", description: "Músico, violinista de la orquesta sinfónica de Salta. Me encanta el arte y siento que el universo de la programación es un arte de creatividad infinita.", github: "https://github.com/gerardosolorzano-33" }
        ].map((member, index) => (
          <div className="team-member" key={index}>
            <div className="photo-wrapper">
              <img src={member.img} alt={member.name} className="member-photo" />
            </div>
            <div className="info">
              <h2 className="name">{member.name}</h2>
              <p className="description" style={{ textAlign: "center" }}>{member.description}</p>
              <div className="github-container" style={{ textAlign: "center", marginTop: "10px" }}>
                <a href={member.github} className="role github-link" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "5px 10px", backgroundColor: "#333", color: "white", borderRadius: "5px", textDecoration: "none" }}>
                  <i className="bi bi-github" style={{ marginRight: "5px" }}></i>Perfil de Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nosotros;