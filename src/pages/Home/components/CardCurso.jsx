

import React from "react";
import { Link } from "react-router-dom";

function CardCurso({ curso }) {
  return (
    <div className="card cardCursos mb-3">
      <div className="row g-0">
      
        <div className="col-12 col-md-4">
          <img
            src={curso.imagen}
            className="img-fluid rounded-start imgCard"
            alt="imagen curso"
          />
        </div>

  
        <div className="col-12 col-md-8">
          <div className="card-body">
            <h5 className="card-title">{curso.nombreCurso}</h5>
            <small className="text-muted fw-bold">{curso.nivel}</small>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
           
              <p className="card-text mt-2 mt-md-0">{curso.descripcionBreve}</p>
              <h4 className="text-md-end mt-2 mt-md-0">${curso.precio}</h4>
            </div>

       
            <div className="text-start text-md-end mt-3">
              <Link
                className="btn btn-info px-4"
                to={`/detalleCurso/${curso.id}`}
              >
                Ver más...
              </Link>
            </div>

            <p className="card-text fw-bold mt-2">
              <small className="text-muted">{curso.duracion}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCurso;