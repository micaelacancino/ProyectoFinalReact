


const CursoCarrito = ({curso, eliminarCurso}) => {
  return (
    <div className="d-flex flex-md-row gap-1 gap-md-3 cardCarrito w-100 h-100 bg-white">
      <div className="align-middle">
        <img className="rounded-3 imgCarrito" src={curso.imagen} />
      </div>
      <div className="w-100 d-flex flex-column align-items-center gap-md-2 ">
        <div className="d-flex justify-content-between w-100">
          <p className="align-middle mb-0 fw-bold mt-3">{curso.nombreCurso} </p>
          <a className="text-danger pt-3 me-3 fw-bold cursor-pointer">
            <small className="cursor-pointer" onClick={() => eliminarCurso(curso.id)} >Eliminar</small>
          </a>
        </div>
        <div className="d-flex justify-content-between w-100 mt-2">
          <div className="d-flex flex-column">
            <span>Nivel:{curso.nivel} </span>
            <small>{curso.duracion} </small>
          </div>
          <div className="text-end fw-bold fs-5 me-2">
            <p>${curso.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoCarrito;
