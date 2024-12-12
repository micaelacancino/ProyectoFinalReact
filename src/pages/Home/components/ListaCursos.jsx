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

      <div className="d-flex justify-content-center">
        {cursos.map((curso) => (
          <CardCurso key={curso.id} curso={curso}></CardCurso>
        ))}
      </div>
      
      <div className="d-flex justify-content-center">
        {cursos.filter((curso) => curso.categoria == "ingles"  ).map((curso) => (
          <CardCurso key={curso.id} curso={curso}></CardCurso>
        ))}
      </div>
    </div>
  );
}

export default ListaCursos;