import React, { useState } from "react";
import { cursos } from "../../../helpers/cursos";
import CardCurso from "./CardCurso";

function ListaCursos({
  busqueda,
  cursosFiltrados,
  categoria,
  cursosAlmacenados,
}) {
  return (
    <>
      <div className="mt-5">
        {busqueda === "" && categoria === "" && (
          <div className="">
            {cursosAlmacenados.map((curso) => (
              <CardCurso key={curso.id} curso={curso}></CardCurso>
            ))}
          </div>
        )}

        {categoria === "frances" && (
          <div className="">
            <div className="">
              {cursos
                .filter((curso) => curso.categoria == categoria)
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {categoria === "ingles" && (
          <div className="">
            <div className="">
              {cursos
                .filter((curso) => curso.categoria == categoria)
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {categoria === "italiano" && (
          <div className="">
            <div className="">
              {cursos
                .filter((curso) => curso.categoria == categoria)
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
