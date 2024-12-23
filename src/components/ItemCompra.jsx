import React from "react";

function ItemCompra({ compra }) {
  return (
    <tr>
      <td>{compra.usuario}</td>
      <td>
        <ul>
          {compra.cursos.map((curso, index) => (
            <li key={index}> {curso.nombreCurso}  </li>
          ))}
        </ul>
      </td>
      <td>${compra.total}</td>
    </tr>
  );
}

export default ItemCompra;
