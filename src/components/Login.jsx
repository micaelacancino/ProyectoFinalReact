import React from 'react'
import "../styles/login.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import imagenlogin from "../assets/img/imagenlogin.webp";

function Login() {
  return (
    <>
      <section class="container my-5">
        
        
        <article class="row">
          <div class="d-none d-lg-block col-lg-6">
            <img
              src={imagenlogin}
              alt="imagen de un cocinero con muchos cupcake"
              class="imgRegistro rounded-4 img-fluid"
            />
          </div>

          <div
            class="contenedorregistro col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center"
          >
            <form class="formregistro px-3 px-md-4 py-3 shadow rounded-2">
            <div className="mb-3">
            <h3 className="text-center">Inicio de sesión</h3>
            <label className="form-label">Usuario</label>
            <input
              type="text"
              name="usuario"
              className="casilla form-control"
              placeholder="Ingrese su nombre de usuario"
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

          <div className="text-center">
            <button type="submit" className="btn btn-secondary w-100">
              Ingresar
            </button>
            <a href="#" className="text-center d-block mt-2">¿Olvidaste tu contraseña?</a>
          </div>

          <hr />

          <div>
            <p className="text-center">
              ¿Aún no tienes cuenta? <a href="#">Regístrate aquí</a>
            </p>

            <button type="button" className="btn btn-outline-primary w-100">
              <i className="bi bi-facebook"></i> Iniciar sesión con Facebook
            </button>
            <button type="button" className="btn btn-outline-danger w-100 mt-3">
              <i className="bi bi-google"></i> Iniciar sesión con Google
            </button>
          </div>
            </form>
          </div>
        </article>
      </section>

 
        
    </>
  );
}

export default Login;
