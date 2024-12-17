import React, { useState } from "react";
import { cursos } from "../../../helpers/cursos";
import CardCurso from "./CardCurso";

function ListaCursos({ busqueda, cursosFiltrados }) {
  const [cursosAlmacenados, setCursosAlmacenados] = useState(cursos);

  return (
    <>
      <div className="mt-5">
        <div className="containerSubtitulo">
          <h2 className="text-center my-4 titlePages">Nuestros cursos</h2>
          <p className="text-center mb-5 fs-5">
            "Ofrecemos una amplia variedad de cursos diseñados para
            principiantes, estudiantes avanzados y personas de todas las
            edades."
          </p>
        </div>
        {busqueda === "" && (
          <div className="my-3">
            <h3 className="text-center mt-4 titlePages">Inglés</h3>
            <div className="d-md-flex">
              {cursosAlmacenados
                .filter((curso) => curso.categoria == "ingles")
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {busqueda === "" && (
          <div className="my-5">
            <h3 className="text-center my-4 titlePages">Francés</h3>
            <div className="d-md-flex">
              {cursos
                .filter((curso) => curso.categoria == "frances")
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {busqueda === "" && (
          <div>
            <h3 className="text-center my-4 titlePages">Italiano</h3>
            <div className="d-md-flex">
              {cursosAlmacenados
                .filter((curso) => curso.categoria == "italiano")
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {cursosFiltrados.length > 0 && busqueda !== "" && (
          <div className="d-md-flex">
            {cursosFiltrados.map((curso) => (
              <CardCurso key={curso.id} curso={curso}></CardCurso>
            ))}
          </div>
        )}

        {cursosFiltrados.length == 0 && busqueda !== "" && (
          <p>No se encontró ningún curso disponible</p>
        )}
      </div>
    </>
  );
}

export default ListaCursos;
