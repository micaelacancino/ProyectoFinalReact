import React from "react";
import { cursos } from "../../../helpers/cursos";
import CardCurso from "./CardCurso";

function ListaCursos() {

    
  return (
    <div className="mt-5">
      <h2 className="text-center my-4">Nuestros cursos</h2>
      <h4 className="text-center mb-5">
        "Ofrecemos una amplia variedad de cursos diseñados para principiantes,
        estudiantes avanzados y personas de todas las edades."
      </h4>
      <div className="my-3">
        <h3 className="text-center mt-4">Inglés</h3>
        <div className="d-md-flex">
        {cursos.filter((curso) => curso.categoria == "ingles"  ).map((curso) => (
          <CardCurso key={curso.id} curso={curso}></CardCurso>
        ))}
      </div>
      </div>
      <div className="my-5">
        <h3 className="text-center my-4">Francés</h3>
        <div className="d-md-flex">
        {cursos.filter((curso) => curso.categoria == "frances"  ).map((curso) => (
          <CardCurso key={curso.id} curso={curso}></CardCurso>
        ))}
      </div>
      </div>
      <div>
        <h3 className="text-center my-4">Italiano</h3>
        <div className="d-md-flex">
        {cursos.filter((curso) => curso.categoria == "italiano"  ).map((curso) => (
          <CardCurso key={curso.id} curso={curso}></CardCurso>
        ))}
      </div>
      </div>
      
     
    </div>
  );
}

export default ListaCursos;
