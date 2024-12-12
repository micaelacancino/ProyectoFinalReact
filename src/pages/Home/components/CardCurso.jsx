import React from 'react'

function CardCurso({curso}) {
    console.log(curso);
    
  return (
   
        <div className="card">
              <img src= {curso.imagen} className="card-img-top " alt="Imagen del curso de inglés nivel A1"/>
              <div className="card-body">
                <h5 className="card-title text-center"> {curso.nombreCurso} </h5>
                <p className="card-text"> {curso.descripcionBreve} </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">  {curso.duracion} </li>
                <li className="list-group-item"> {curso.info2}  </li>
                <li className="list-group-item"> {curso.precio} </li>
              </ul>
              <div className="card-body">
                <a href="#" className="btn btn-danger w-100">Más información</a>
              </div>
            </div>

  )
}

export default CardCurso