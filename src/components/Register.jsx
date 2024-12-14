import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import imagenregister from "../assets/img/imagenregister.webp";

function Register() {
  return (
    <>
          <section class="container my-5">
            
            
            <article class="row">
              <div class="d-none d-lg-block col-lg-6">
                <img
                  src={imagenregister}
                  alt="imagen de un cocinero con muchos cupcake"
                  class="imgRegistro rounded-4 img-fluid"
                />
              </div>
    
              <div
                class="contenedorregistro col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center"
              >
                <form class="formregistro px-3 px-md-4 py-3 shadow rounded-2">

                
                <div className="mb-3">
                <h3 className="text-center">Registro</h3>

                <div className="mb-3">
               
               <label className="form-label">Nombre y Apellido</label>
               <input
                 type="text"
                 name="usuario"
                 className="casilla form-control"
                 placeholder="Enzo Perez"
               />
             </div>

             
                <label className="form-label">Usuario</label>
                <input
                  type="text"
                  name="usuario"
                  className="casilla form-control"
                  placeholder="Ingrese su nombre de usuario"
                />
              </div>

              <div className="mb-3">
               
                <label className="form-label">Correo Electronico </label>
                <input
                  type="text"
                  name="usuario"
                  className="casilla form-control"
                  placeholder="Correo@electronico.com"
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  name="contraseña"
                  className="casilla form-control"
                  placeholder="Ingrese su contraseña"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirmar Contraseña</label>
                <input
                  type="password"
                  name="contraseña"
                  className="casilla form-control"
                  placeholder="Ingrese nuevamente su contraseña"
                />
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