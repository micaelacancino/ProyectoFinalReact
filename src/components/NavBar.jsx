import React, { useEffect, useState } from 'react';
import logo1 from "../assets/imagen1.png";
import "../css/navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { usuario } from '../helpers/usuario';

function NavBar({usuarioLogueado, setUsuarioLogueado}) {
 
    const navigate = useNavigate(); 
    const handleLogout = () => {
        sessionStorage.removeItem("sesion");
        setUsuarioLogueado(null);
        navigate("/");
      };
    
 

 

 

  return (
    <>
      <div>
        <nav className="navbar container-fluid navbar-expand-lg">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              <img src={logo1} alt="logo-speakMaster" className="logohead" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item jost">
                  <Link to={"/"} className="nav-link font text-dark" aria-current="page">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item jost">
                  <Link to={"/nosotros"} className="nav-link text-dark" href="">Nosotros</Link>
                </li>
                <li className="nav-item jost">
                  <Link to={"*"} className="nav-link text-dark" href="">Certificaciones</Link>
                </li>
                <li className="nav-item jost">
                  <Link to={"*"} className="nav-link text-dark" href="">Contacto</Link>
                </li>
                {usuarioLogueado  && (
                  <li className="nav-item jost mx-2">
                    <button
                      type="button"
                      className="btn btn-danger btn-lg mt-1"
                      onClick={handleLogout}
                    >
                      Salir
                    </button>
                  </li>
                )   }
                {!usuarioLogueado && (
                    <>
                     <li className="nav-item jost mx-2">
                        <Link
                         to={"/login"}
                          type="button"
                          className="btn btn-info btn-lg mt-1"
                       >
                          Iniciar Sesion
                        </Link>
                      </li>
                      <li className="nav-item jost mx-2">
                        <Link
                          to={"/registro"}
                          type="button"
                          className="btn btn-info btn-lg mt-1"
                        >
                          Registrarse
                       </Link>
                      </li>
                    </>
                 ) }
                 
               
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}


export default NavBar;



