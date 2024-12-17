import React from 'react'

function CardCurso({curso}) {
    console.log(curso);
    
  return (
  <section className="container">
  <article className="row">
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card cardCurso mt-4">
        <img
          src={curso.imagen}
          className="card-img-top imgCard"
          alt={`Imagen del curso ${curso.nombreCurso}`}
        />
        <div className="card-body ">
          <h5 className="card-title text-center">{curso.nombreCurso}</h5>
          <p className="card-text">{curso.descripcionBreve}</p>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item cardCurso">{curso.duracion}</li>
          {/* <li className="list-group-item cardCurso">{curso.info2}</li> */}
          <li className="list-group-item cardCurso">{curso.precio}</li>
        </ul>
        <div className="card-body botonCard">
          <a
            href= "#"
            className="btn  w-100"
          >
            Más información
          </a>
        </div>
      </div>
    </div>
  </article>
</section>
  )
}

export default CardCurso