import React from "react";

function CardCurso({ curso }) {
 

  return (
    <div className="card cardCursos mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={curso.imagen}
            className="rounded-start imgCard"
            alt="imagen curso"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body ">
            <h5 className="card-title">{curso.nombreCurso}</h5>
            <small className="text-muted fw-bold">{curso.nivel} </small>
            <div className="d-flex justify-content-space-between">
              <p className="card-text  mt-1 ">{curso.descripcionBreve}</p>
              <h4 className="ms-5 mt-1">{curso.precio} </h4>
              <div className="text-end ms-5">
                <button className="btn btn-danger px-4 ">Ver más...</button>
              </div>
            </div>
            <p className="card-text fw-bold">
              <small className="text-muted">{curso.duracion} </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCurso;
