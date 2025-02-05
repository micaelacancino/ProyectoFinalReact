import React from 'react'
import {Table } from 'react-bootstrap'
import ItemCompra from './ItemCompra'
import { Link } from 'react-router-dom'

function ComprasUsuarios({compras}) {
  return (
    <div className='my-5 mainSection'>
       <Link to={"/Admin"}> 
              <i class="bi bi-arrow-left-circle-fill fs-1 text-secondary ms-5"></i>
            </Link>
        <h2 className='text-center'>Compras de usuarios</h2>
        <Table
        responsive
        hover
        className='container text-center mx-2 mx-sm-auto mt-3 mt-sm-5'
      >
        <thead>
          <tr className='text-center'>
            <th>Usuario</th>
            <th>Cursos</th>
            <th>Total</th>
          
          </tr>
        </thead>
        <tbody className='text-center'>
          {compras.map((compra) => (
            <ItemCompra
              key={compra.id}
              compra={compra}
            />
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ComprasUsuarios