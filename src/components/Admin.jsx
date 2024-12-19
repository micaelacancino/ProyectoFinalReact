import React, { useEffect, useState } from 'react';
import { obtenerUsuarios } from '../database.js';
import ModalAdmin from './ModalAdmin.jsx';

function Admin() {
  const [usuario, setUsuario] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const users = obtenerUsuarios();
    setUsuario(users);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Lista de Usuarios Registrados</h1>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Usuario</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuario.length > 0 ? (
            usuario.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.usuario}</td>
                <td>{user.nombre}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={handleShow}>Editar</button>
                  <button className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No hay usuarios registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ModalAdmin show={show} handleClose={handleClose} />
    </div>
  );
}

export default Admin;