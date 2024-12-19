import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAdmin({ show, handleClose, usuario, actualizarUsuario }) {
  const [formulario, setFormulario] = useState({
    nombre: '',
    usuario: '',
    email: '',
  });

  useEffect(() => {
    if (usuario) {
      setFormulario(usuario); // Rellena el formulario con los datos del usuario seleccionado
    }
  }, [usuario]);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarUsuario(formulario); // Actualiza el usuario en la lista y localStorage
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Correo Electrónico</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Correo@electronico.com"
            value={formulario.email}
            onChange={handleChange}
       
          />
          <label className="form-label">Usuario</label>
          <input
            type="text"
            name="usuario"
            className="form-control"
            placeholder="Ingrese su nombre de usuario"
            value={formulario.usuario}
            onChange={handleChange}
          />
          <label className="form-label">Nombre y Apellido</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Enzo Perez"
            value={formulario.nombre}
            onChange={handleChange}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAdmin;
