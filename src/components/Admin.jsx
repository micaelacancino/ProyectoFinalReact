import React, { useEffect, useState } from 'react';
import { obtenerUsuarios, agregarUsuario } from '../database.js';
import ModalAdmin from './ModalAdmin.jsx';
import Swal from 'sweetalert2';

function Admin() {
  const [usuarios, setUsuarios] = useState([]);
  const [show, setShow] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const handleClose = () => {
    setShow(false);
    setUsuarioSeleccionado(null); 
  };

  const handleShow = (usuario) => {
    setUsuarioSeleccionado(usuario); 
    setShow(true);
  };

  const actualizarUsuarios = (usuarioEditado) => {
    const nuevosUsuarios = usuarios.map((user) =>
      user.id === usuarioEditado.id ? usuarioEditado : user
    );
    setUsuarios(nuevosUsuarios);
    localStorage.setItem('userData', JSON.stringify(nuevosUsuarios));

    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Los datos se actulizaron correctamente.',
    });
    
  };

  const eliminarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter((user) => user.id !== id);
    setUsuarios(nuevosUsuarios);
    localStorage.setItem('userData', JSON.stringify(nuevosUsuarios));
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Los datos se eliminaron correctamente.',
    });

  };

  useEffect(() => {
    const users = obtenerUsuarios();
    setUsuarios(users);
  }, []);

  return (
    <div className="container-fluid mt-4">
    <h1 className="text-center mb-4">Lista de Usuarios Registrados</h1>
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10">
        <div className="table-responsive">
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
              {usuarios.length > 0 ? (
                usuarios.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.usuario}</td>
                    <td>{user.nombre}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="row d-flex justify-content-evenly ">
                        <button
                          className="btn btn-primary btn-sm me-2 col-sm-12 mt-1" style={{width:"70px"}}
                          onClick={() => handleShow(user)}
                        >
                          Editar
                        </button>
                        <button className="btn btn-danger btn-sm col-sm-12 mt-1" onClick={() => eliminarUsuario(user.id)}  style={{width:"70px"}} >Eliminar</button>
                      </div>
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
        </div>
      </div>
    </div>
    {usuarioSeleccionado && (
      <ModalAdmin
        show={show}
        handleClose={handleClose}
        usuario={usuarioSeleccionado}
        actualizarUsuario={actualizarUsuarios}
      />
    )}
  </div>
  );
}

export default Admin;
