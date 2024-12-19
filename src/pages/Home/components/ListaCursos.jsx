import React, { useState } from "react";
import { cursos } from "../../../helpers/cursos";
import CardCurso from "./CardCurso";

function ListaCursos({
  busqueda,
  cursosFiltrados,
  selectedCategoria,
  cursosAlmacenados,
}) {
  return (
    <>
      <div className="mt-5">
        {busqueda === "" && selectedCategoria === "" && (
          <div className="">
            {cursosAlmacenados.map((curso) => (
              <CardCurso key={curso.id} curso={curso}></CardCurso>
            ))}
          </div>
        )}

        {selectedCategoria === "frances" && (
          <div className="">
            <div className="">
              {cursos
                .filter((curso) => curso.categoria == selectedCategoria)
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {selectedCategoria === "ingles" && (
          <div className="">
            <div className="">
              {cursos
                .filter((curso) => curso.categoria == selectedCategoria)
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {selectedCategoria === "italiano" && (
          <div className="">
            <div className="">
              {cursos
                .filter((curso) => curso.categoria == selectedCategoria)
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {cursosFiltrados.length > 0 && busqueda !== "" && (
          <div className="">
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
