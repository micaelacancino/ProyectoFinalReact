import React from 'react'
import logo1 from "../assets/imagen1.png"
import "../css/navbar.css"
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <>
    <div>
       <nav className="navbar container-fluid navbar-expand-lg">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <img src= {logo1} alt="logo-speakMaster" className="logohead"/>
                </Link>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="menu">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item jost">
                            <Link to={"/"} className="nav-link font text-white" aria-current="page" href="">Inicio</Link>
                        </li>
                        <li className="nav-item jost">
                            <a className="nav-link text-white" href="">Nosotros</a>
                        </li>
                        <li className="nav-item jost">
                            <a className="nav-link text-white" href="">Cursos</a>
                        </li>
                        <li className="nav-item jost">
                            <a className="nav-link text-white" href="">Contacto</a>
                        </li> 
                        <li className="nav-item jost mx-2">
                            <Link to={"/login"} type="button" className="btn btn-secondary btn-lg mt-1"> Iniciar Sesion </Link>
                        </li>

                        <li className="nav-item jost mx-2">
                        <Link to={"/registro"} type="button" className="btn btn-secondary btn-lg mt-1"> Registrarse </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
    </>
  )
}

export default NavBar
