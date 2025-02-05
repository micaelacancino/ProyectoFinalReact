import React, { useState } from "react";
import logo1 from "../assets/imagen1.png";
import "../css/navbar.css";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ usuarioLogueado, setUsuarioLogueado }) {
  const [desplegarNavbar, setDesplegarNavbar] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("sesion");
    setUsuarioLogueado(null);
    navigate("/");
  };

  const toggleNavbar = () => {
    setDesplegarNavbar((prev) => !prev);
  };

  const handleAdmin = () => {
    navigate("/Admin");
  };

  const closeNavbar = () => {
    setDesplegarNavbar(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img src={logo1} alt="logo-speakMaster" className="logohead" />
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse ${desplegarNavbar ? "show" : "collapse"}`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link fw-bold" onClick={closeNavbar}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/nosotros"}
                className="nav-link fw-bold"
                onClick={closeNavbar}
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"*"} className="nav-link fw-bold" onClick={closeNavbar}>
                Certificaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/carrito"} className="nav-link" onClick={closeNavbar}>
                <i className="bi bi-cart-fill"></i>
              </Link>
            </li>
            {usuarioLogueado?.rol == "admin" && (
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={handleAdmin}
              >
                Admin
              </button>
            )}

            {usuarioLogueado ? (
              <li className="nav-item d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleLogout();
                    closeNavbar();
                  }}
                >
                  Salir
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item m-1">
                  <Link
                    to={"/login"}
                    className="btn btn-info"
                    onClick={closeNavbar}
                  >
                    Iniciar Sesión
                  </Link>
                </li>
                <li className="nav-item m-1">
                  <Link
                    to={"/registro"}
                    className="btn btn-info"
                    onClick={closeNavbar}
                  >
                    Registrarse
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
