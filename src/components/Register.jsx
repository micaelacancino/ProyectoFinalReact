import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import imagenregister from "../assets/img/imagenregister.webp";
import { agregarUsuario, obtenerUsuarios } from '../database.js';


function Register() {



  const [formulario, setFormulario ] = useState({ 
    nombre: "",
    usuario: "",
    email:  "",
    contraseña:  "",
    confirmarContraseña: "",
    check: false,
  });

  

  const handleChange =(e) =>{
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value === "check" ? e.target.checked : e.target.value,
    })
  }

  const handleSubmit =(e) => {
    e.preventDefault();

    if(!formulario.email=== "" || !formulario.usuario==="" || !formulario.email==="" || !formulario.contraseña || !formulario.confirmarContraseña ){
      alert("debe completar los campos obligatorios!")
    }
    if(!formulario.check){
      alert("Debe aceptar los terminos y condiciones!")
    }

    if(formulario.contraseña.length < 5){
      alert("la contraseña debe contener mas caracteres")
    }

    if (formulario.contraseña !== formulario.confirmarContraseña) {
      alert("Las contraseñas no coinciden.");
     
    }
    
    agregarUsuario(formulario);

    alert("Usuario registrado correctamente.");
    console.log(obtenerUsuarios());

    

    
  }

  return (
    <>
          <section className="container my-5">
            
            
            <article className="row">
              <div className="d-none d-lg-block col-lg-6">
                <img
                  src={imagenregister}
                  alt="imagen de un cocinero con muchos cupcake"
                  className="imgRegistro rounded-4 img-fluid"
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
                  type="text"
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
                  Ingresar
                </button>
               


             
              </div>
    
              <hr />
    
              <div>
              
                <button type="button" className="btn btn-outline-primary w-100">
                  <i className="bi bi-facebook"></i> Registrarse con Facebook
                </button>
                <button type="button" className="btn btn-outline-danger w-100 mt-3">
                  <i className="bi bi-google"></i> Registrase con Google
                </button>
              </div>
                </form>
              </div>
            </article>
          </section>
    
     
            
        </>
  )
}

export default Register