import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalAdmin({ show, handleClose }) {

    
      const [formulario, setFormulario ] = useState({ 
        nombre: "",
        usuario: "",
        email:  "",
     
      });

      const handleChange =(e) =>{
        setFormulario({
          ...formulario,
          [e.target.name]: e.target.value, 
        })
      }

      const handleSubmit =(e) => {
        e.preventDefault();
      }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido Admin!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="" onSubmit={handleSubmit}>
          <label className="form-label">Correo Electronico</label>
          <input
            type="text"
            name="email"
            className="casilla form-control"
            placeholder="Correo@electronico.com"
            value={formulario.email}
                  onChange={handleChange}
          />
          <label className="form-label">Usuario</label>
          <input
            type="text"
            name="usuario"
            className="casilla form-control"
            placeholder="Ingrese su nombre de usuario"
            value={formulario.usuario}
            onChange={handleChange}
          />
          <label className="form-label">Nombre y Apellido</label>
          <input
            type="text"
            name="nombre"
            className="casilla form-control"
            placeholder="Enzo Perez"
            value={formulario.nombre}
             onChange={handleChange}
          />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdmin;