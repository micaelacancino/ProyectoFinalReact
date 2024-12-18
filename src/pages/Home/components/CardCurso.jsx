import React from 'react'

function CardCurso({curso}) {
    console.log(curso);
    
  return (
//   <section classNameName="container">
//   <article classNameName="row">
//     <div classNameName="col-12 col-md-6 col-lg-3">
//       <div classNameName="card cardCurso mt-4">
//         <img
//           src={curso.imagen}
//           classNameName="card-img-top imgCard"
//           alt={`Imagen del curso ${curso.nombreCurso}`}
//         />
//         <div classNameName="card-body ">
//           <h5 classNameName="card-title text-center">{curso.nombreCurso}</h5>
//           <p classNameName="card-text">{curso.descripcionBreve}</p>
//         </div>
//         <ul classNameName="list-group list-group-flush ">
//           <li classNameName="list-group-item cardCurso">{curso.duracion}</li>
//           {/* <li classNameName="list-group-item cardCurso">{curso.info2}</li> */}
//           <li classNameName="list-group-item cardCurso">{curso.precio}</li>
//         </ul>
//         <div classNameName="card-body botonCard">
//           <a
//             href= "#"
//             classNameName="btn  w-100"
//           >
//             Más información
//           </a>
//         </div>
//       </div>
//     </div>
//   </article>
// </section>

<div className= "card cardCursos mb-3">
<div className="row g-0">
  <div className="col-md-4">
    <img src={curso.imagen} className="rounded-start imgCard" alt="imagen curso"/>
  </div>
  <div className="col-md-8">
    <div className="card-body ">
      <h5 className="card-title">{curso.nombreCurso}</h5>
      <div className="d-flex justify-content-space-between">
      <p className="card-text  mt-1">
       {curso.descripcionBreve}
      </p>
      <h4 className="ms-5 mt-1">{curso.precio} </h4>
      <div className="text-end ms-5">
        <button className="btn btn-danger px-4 ">Ver más...</button>
       </div>
    </div>
      <p className="card-text"><small className="text-muted">{curso.duracion} </small></p>

   
 
    </div>
  </div>
</div>
</div>

  )
}

export default CardCurso