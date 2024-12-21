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
    <div className="container">
    <h1 className="text-center mb-4">Lista de Usuarios Registrados</h1>
    <div className="row justify-content-center g-4 container-fluid">
  {usuarios.length > 0 ? (
    usuarios.map((user, index) => (
      <div key={index} className="col-12 col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm">
          <div className="card-header bg-dark text-white">
            <h5 className="card-title mb-0">Usuario #{index + 1}</h5>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <h6 className="text-muted mb-1">Usuario:</h6>
              <p className="mb-2">{user.usuario}</p>
              
              <h6 className="text-muted mb-1">Nombre:</h6>
              <p className="mb-2">{user.nombre}</p>
              
              <h6 className="text-muted mb-1">Email:</h6>
              <p>{user.email}</p>
            </div>
            
            <div className="d-flex gap-2 justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => handleShow(user)}
              >
                Editar
              </button>
              <button 
                className="btn btn-danger"
                onClick={() => eliminarUsuario(user.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="col-12">
      <div className="alert alert-info text-center">
        No hay usuarios registrados.
      </div>
    </div>
  )}
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
