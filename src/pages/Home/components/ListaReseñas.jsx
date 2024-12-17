import React from 'react'
import { reseñas } from '../../../helpers/reseñasCursos'
import ReseñaUsuario from './ReseñaUsuario'

function ListaReseñas() {
  return (
    <div className="reseñas-container d-flex flex-wrap justify-content-center gap-3 mt-5">
     
           {
             reseñas.map((reseña) =>(
              <ReseñaUsuario key={reseña.id} reseña={reseña}  ></ReseñaUsuario>
             ) )

           }

       </div>
  )
}

export default ListaReseñas