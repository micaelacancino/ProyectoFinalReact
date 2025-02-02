import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import imagenlogin from "../assets/img/imagenlogin.webp";
import { obtenerUsuarios } from '../database';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login({setUsuarioLogueado, usuarioLogueado}) {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const navigate = useNavigate(); 

  useEffect(( ) => {
    const usuariosLocal = obtenerUsuarios();
    setUsuarios(usuariosLocal);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
 
    if (email === "admin@admin.com" && contraseña === "admin123") {
      const adminUser = {
        email: "admin@admin.com",
        contraseña: "admin123",
        rol: "admin"
      };
      
      sessionStorage.setItem("sesion", JSON.stringify(adminUser));
      setUsuarioLogueado(adminUser);
      
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Bienvenido Admin',
      });
      
      navigate("/admin");
      return; 
    }


    const usuarioEncontrado = usuarios.find(
      usuario => usuario.email === email && usuario.contraseña === contraseña
    );

    if (usuarioEncontrado) {
      sessionStorage.setItem("sesion", JSON.stringify(usuarioEncontrado));
      setUsuarioLogueado(usuarioEncontrado);
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Bienvenido a SpeckMaster',
      });
  
      navigate("/");
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Credenciales incorrectas',
      });
    }
  };

  return (
    <>
      <section className="container my-5">
        <article className="row">
          <div className="d-none d-lg-block col-lg-6 ">
            <img
              src={imagenlogin}
              alt="imagen de un chico y una chica ingresando al mundo de los cursos"
              className="imgRegistro  img-fluid"
              style={{height:"70vh"}}
            />
          </div>

          <div className="contenedorregistro col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center" >
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
                <Link to={"*"}  className="text-center d-block mt-2">¿Olvidaste tu contraseña?</Link>
              </div>

              <hr />

              <div>
                <p className="text-center">
                  ¿Aún no tienes cuenta? <Link to={"/registro"} >Regístrate aquí</Link>
                </p>
                <Link to={"*"} type="button" className="btn btn-outline-primary w-100">
                  <i className="bi bi-facebook" > Iniciar Sesion con Facebook</i> 
                </Link>
                <Link to={"*"} type="button" className="btn btn-outline-danger w-100 mt-3">
                  <i className="bi bi-google"> Iniciar Sesion con Google</i> 
                </Link>
              </div>
            </form>
          </div>
        </article>
      </section>
    </>
  );
}

export default Login;