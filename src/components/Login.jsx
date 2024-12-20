import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import imagenlogin from "../assets/img/imagenlogin.webp";
import { obtenerUsuarios } from '../database';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const navigate = useNavigate(); 

  useEffect(() => {
    const usuariosLocal = obtenerUsuarios();
    setUsuarios(usuariosLocal);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarioEncontrado = usuarios.find(
      usuario => usuario.email === email && usuario.contraseña === contraseña
    );
    console.log(usuarioEncontrado);

    if (usuarioEncontrado) {
      console.log('Usuario encontrado:', usuarioEncontrado);
      sessionStorage.setItem("sesion", JSON.stringify(usuarioEncontrado));
      navigate("/");
    } else {
      const usuarioAdmin = usuarios.find(
        usuario => usuario.email === "admin@admin.com" && usuario.contraseña === "admin123"
      );

      if (usuarioAdmin) {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Bienvenido Admin',
        });
        navigate("/admin"); 
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Credenciales incorrectas',
        });
      }
    }
  };

  return (
    <>
      <section className="container my-5">
        <article className="row">
          <div className="d-none d-lg-block col-lg-6">
            <img
              src={imagenlogin}
              alt="imagen de un cocinero con muchos cupcake"
              className="imgRegistro rounded-4 img-fluid"
            />
          </div>

          <div className="contenedorregistro col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
            <form className="formregistro px-3 px-md-4 py-3 shadow rounded-2" onSubmit={handleSubmit}>
              <div className="mb-3">
                <h3 className="text-center">Inicio de sesión</h3>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Ingrese su email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  name="contraseña"
                  className="form-control"
                  placeholder="Ingrese su contraseña"
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-secondary w-100">
                  Ingresar
                </button>
                <Link to={"/"} href="#" className="text-center d-block mt-2">¿Olvidaste tu contraseña?</Link>
              </div>

              <hr />

              <div>
                <p className="text-center">
                  ¿Aún no tienes cuenta? <Link to={"/registro"} href="#">Regístrate aquí</Link>
                </p>

                <button type="button" className="btn btn-outline-primary w-100">
                  <i className="bi bi-facebook m-1 mt-1">Iniciar sesión con Facebook</i> 
                </button>
                <button type="button" className="btn btn-outline-danger w-100 mt-3">
                  <i className="bi bi-google m-1 mt-1">Iniciar sesión con Google</i> 
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