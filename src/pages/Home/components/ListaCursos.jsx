import React, { useState } from "react";
import { cursos } from "../../../helpers/cursos";
import CardCurso from "./CardCurso";

function ListaCursos({ busqueda, cursosFiltrados, selectedCategory }) {
  const [cursosAlmacenados, setCursosAlmacenados] = useState(cursos);

  return (
    <>
      <div className="mt-5">
        {busqueda === "" && selectedCategory === "" && (
          <div className="">
            {cursosAlmacenados.map((curso) => (
              <CardCurso key={curso.id} curso={curso}></CardCurso>
            ))}
          </div>
        )}

        {selectedCategory === "frances" && (
          <div className="">
            <div className="">
              {cursos
                .filter((curso) => curso.categoria == selectedCategory)
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {selectedCategory === "ingles" && (
          <div className="">
            <div className="">
              {cursos
                .filter((curso) => curso.categoria == selectedCategory)
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {selectedCategory === "italiano" && (
          <div className="">
            <div className="">
              {cursos
                .filter((curso) => curso.categoria == selectedCategory)
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}

        {/* {busqueda === "" && (
          <div>
        
            <div className="d-md-flex">
              {cursosAlmacenados
                .filter((curso) => curso.categoria == "italiano")
                .map((curso) => (
                  <CardCurso key={curso.id} curso={curso}></CardCurso>
                ))}
            </div>
          </div>
        )}  */}

        {cursosFiltrados.length > 0 && busqueda !== "" && selectedCategory === "" && (
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
