import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import imagenregister from "../assets/img/imagenregister.webp";
import { agregarUsuario, obtenerUsuarios } from '../database.js';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Register() {
  const navigate = useNavigate(); 
  const [formulario, setFormulario ] = useState({ 
    nombre: "",
    usuario: "",
    email:  "",
    contraseña:  "",
    confirmarContraseña: "",
    check: false,
  });

  const[usuarios,setUsuarios] = useState([]);

  useEffect(()=>{
    const usuariosRegistrados = obtenerUsuarios()

    setUsuarios(usuariosRegistrados);
    
  });
 
  
  
  
  const handleChange =(e) =>{
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value === "check" ? e.target.checked : e.target.value,
    })
  }
  
  const handleSubmit =(e) => {
    e.preventDefault();
    
    const usuarioExistente= usuarios.find((usuario)=>usuario.email === formulario.email)
    
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nombreRegex.test(formulario.nombre)) {
      Swal.fire({
        icon: "error",
        title: "Algo salió mal",
        text: "El nombre solo puede contener letras y espacios.",
      });
      return;
    }

    if (
      !formulario.nombre.trim() ||
      !formulario.usuario.trim() ||
      !formulario.email.trim() ||
      !formulario.contraseña.trim() ||
      !formulario.confirmarContraseña.trim()
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salio mal',
        text: 'Debe completar todos los campos',
      });
      return; 
    }



    if(usuarioExistente)
      {
        Swal.fire({
          icon: 'error',
          title: 'Algo salio mal',
          text: 'El correo ya esta en uso',
        });
        return;
      }
   
    

    if(formulario.contraseña.length < 5){
      Swal.fire({
        icon: 'error',
        title: 'Algo salio mal',
        text: 'La contraseña debe contener mas caracteres',
      });
      return;
    }

    if (formulario.contraseña !== formulario.confirmarContraseña) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salio mal',
        text: 'Las contraseñas no coinciden',
      });
      return;
     
    }

    if(!formulario.check){
      Swal.fire({
        icon: 'error',
        title: 'Algo salio mal',
        text: 'Debe aceptar los terminos y condiciones',
      });
      return;
    }
    
    agregarUsuario(formulario);
    
    

   
    Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Los datos se registraron correctamente.',
        });
        navigate("/login")
        return;
       
  }

  
  return (
    <>
          <section className="container my-5">
            
            
            <article className="row">
              <div className="d-none d-lg-block col-lg-6">
                <img
                  src={imagenregister}
                  alt="imagen de un chico y una chica ingresando al mundo de los cursos"
                  className="imgRegistro rounded-4 img-fluid"
                  style={{height:"80vh"}}
                />
              </div>
    
              <div
                className="contenedorregistro col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center"
              >
                <form className="formregistro px-3 px-md-4 py-3 shadow rounded-2" onSubmit={handleSubmit}>

                
                <div className="mb-3">
                <h3 className="text-center">Registro</h3>

                <div className="mb-3">
                
                <label className="form-label">Nombre y Apellido</label>
                <input
                  type="text"
                  name="nombre"
                  className="casilla form-control"
                  placeholder="Enzo Perez"
                  value={formulario.nombre}
                  onChange={handleChange}
                />
              </div>
              </div>

           
                <label className="form-label">Usuario</label>
                <input
                  type="text"
                  name="usuario"
                  className="casilla form-control"
                  placeholder="Ingrese su nombre de usuario"
                  value={formulario.usuario}
                  onChange={handleChange}
                />
            

              <div className="mb-3">
               
                <label className="form-label">Correo Electronico </label>
                <input
                  type="email"
                  name="email"
                  className="casilla form-control"
                  placeholder="Correo@electronico.com"
                  value={formulario.email}
                  onChange={handleChange}
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  name="contraseña"
                  className="casilla form-control"
                  placeholder="Ingrese su contraseña"
                  value={formulario.contraseña}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirmar Contraseña</label>
                <input
                  type="password"
                  name="confirmarContraseña"
                  className="casilla form-control"
                  placeholder="Ingrese nuevamente su contraseña"
                  value={formulario.confirmarContraseña}
                  onChange={handleChange}
                />
              </div>

              <div className="form-check mb-3">
              <input
              className="form-check-input"
              type="checkbox"
              name="check"
              value={formulario.check}
              onChange={handleChange}
              
              />
            <label className="form-check-label text-body-secondary  ">
              Acepto la Política de Privacidad y los Términos del Servicio
            </label>
            </div>
    
              <div className="text-center">
                <button type="submit" className="btn btn-secondary w-100">
                  Crear cuenta
                </button>       
              </div>
              <hr />
              <div> 
             <Link to={"*"} type="button" className="btn btn-outline-primary w-100">
                  <i className="bi bi-facebook" > Registrarse con Facebook</i> 
                </Link>
                
                <Link to={"*"} type="button" className="btn btn-outline-danger w-100 mt-3">
                  <i className="bi bi-google"> Registrarse con Google</i> 
                </Link>
              </div>
                </form>
              </div>
            </article>
          </section>  
        </>
  )
}

export default Register