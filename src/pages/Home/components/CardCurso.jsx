import React from 'react'

function CardCurso({curso}) {
    console.log(curso);
    
  return (
  //   <section className='container'>
  //   <article class="row">
  // <div class="col-12 col-md-6 col-lg-3">



  //       <div className="card mt-4">
  //             <img src= {curso.imagen} className="card-img-top imgCard" alt="Imagen del curso de inglés nivel A1"/>
  //             <div className="card-body">
  //               <h5 className="card-title text-center"> {curso.nombreCurso} </h5>
  //               <p className="card-text"> {curso.descripcionBreve} </p>
  //             </div>
  //             <ul className="list-group list-group-flush">
  //               <li className="list-group-item">  {curso.duracion} </li>
  //               <li className="list-group-item"> {curso.info2}  </li>
  //               <li className="list-group-item"> {curso.precio} </li>
  //             </ul>
  //             <div className="card-body">
  //               <a href="#" className="btn btn-danger w-100">Más información</a>
  //             </div>
  //           </div>


  //           </div>
  //           </article>
  //           </section>


  <section className="container">
  <article className="row">
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card mt-4">
        <img
          src={curso.imagen}
          className="card-img-top imgCard"
          alt={`Imagen del curso ${curso.nombreCurso}`}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{curso.nombreCurso}</h5>
          <p className="card-text">{curso.descripcionBreve}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{curso.duracion}</li>
          <li className="list-group-item">{curso.info2}</li>
          <li className="list-group-item">{curso.precio}</li>
        </ul>
        <div className="card-body">
          <a
            href= "#"
            className="btn btn-danger w-100"
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