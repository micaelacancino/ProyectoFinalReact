import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function ModalAdmin({ show, handleClose, usuario, actualizarUsuario }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    usuario: "",
    email: "",
  });

  useEffect(() => {
    if (usuario) {
      setFormulario(usuario);
    }
  }, [usuario]);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const validarFormulario = () => {
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formulario.nombre.trim() || !nombreRegex.test(formulario.nombre)) {
      Swal.fire({
        icon: "error",
        title: "Algo salió mal",
        text: "El nombre solo puede contener letras y espacios.",
      });
      return false;
    }

    if (!formulario.email.trim() || !emailRegex.test(formulario.email)) {
      Swal.fire({
        icon: "error",
        title: "Algo salió mal",
        text: "Por favor ingrese un correo electrónico válido.",
      });
      return false;
    }

    if (!formulario.usuario.trim()) {
      Swal.fire({
        icon: "error",
        title: "Algo salió mal",
        text: "El campo de usuario no puede estar vacío.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    actualizarUsuario(formulario);
    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: "Usuario actualizado correctamente.",
    });
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
            type="email"
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
