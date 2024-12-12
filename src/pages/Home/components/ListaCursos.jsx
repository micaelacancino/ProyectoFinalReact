import React from "react";
import { cursos } from "../../../helpers/cursos";
import CardCurso from "./CardCurso";

function ListaCursos() {

    
  return (
    <div>
      <h2 class="text-center mt-5">Nuestros cursos</h2>
      <h4 class="text-center mt-3">
        "Ofrecemos una amplia variedad de cursos diseñados para principiantes,
        estudiantes avanzados y personas de todas las edades."
      </h4>
      <div>
        <h3 className="text-center mt-4">Inglés</h3>
        <div className="d-md-flex">
        {cursos.filter((curso) => curso.categoria == "ingles"  ).map((curso) => (
          <CardCurso key={curso.id} curso={curso}></CardCurso>
        ))}
      </div>
      </div>
      <div>
        <h3 className="text-center mt-4">Francés</h3>
        <div className="d-md-flex">
        {cursos.filter((curso) => curso.categoria == "frances"  ).map((curso) => (
          <CardCurso key={curso.id} curso={curso}></CardCurso>
        ))}
      </div>
      </div>
      <div>
        <h3 className="text-center mt-4">Italiano</h3>
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
