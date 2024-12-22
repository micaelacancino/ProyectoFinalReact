import React from 'react'

function ItemCompra({compra}) {
  return (
    <tr>
    <td>{compra.id}</td>
    <td>{compra.usuario}</td>
    <td>
        <ul>
        {compra.cursos.map( curso => (
            <li> {curso.nombreCurso} </li>
        )   )    }
 </ul>
    </td>
    <td>${compra.total}</td>
    </tr> 
  )
}

export default ItemCompra