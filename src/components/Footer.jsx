import React from 'react'
import "../Css/Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo2 from "../assets/imagen2.png"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <footer className="colorFooter" id="footer">
            <section className="container-fluid text-center">
            <article className="row row-cols-1 row-cols-md-4">
                <div className="col-sm-12 col-md-3  mb-md-0">
                <Link to={"/"}><img className="logoSize" src={logo2} alt="SpeakMaster" /></Link>
                </div>
                <div className="col  mt-5 ">
                <h5 className="text-dark">Nosotros</h5>
                <ul className="list-unstyled flex-md-column">
                    <li>
                    <Link to={"/nosotros"} className="text-body-secondary fw-bold" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} >¿Quiénes Somos?</Link>
                    </li>
                    <li>
                    <Link to={"*"} className="text-body-secondary fw-bold" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} >Contáctanos</Link>
                    </li>
                    <li>
                    <Link to={"*"} className="text-body-secondary fw-bold" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} >Ayuda</Link>
                    </li>
                </ul>
                </div>
                <div className="col  mt-5 ">
                <h5 className="text-dark">Nuestras Páginas</h5>
                <ul className="list-unstyled flex-md-column">
                    <li>
                    <Link to={"*"} className="text-body-secondary fw-bold" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} >Cursos</Link>
                    </li>
                    <li>
                    <Link to={"*"} className="text-body-secondary fw-bold" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} >Proyectos</Link>
                    </li>
                    <li>
                    <Link to={"*"} className="text-body-secondary fw-bold" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} >Viajes al Exterior</Link>
                    </li>
                </ul>
                </div>
                <div className="col  mt-5 ">
                <h5>Nuestras redes</h5>
                <Link className="socialSize mx-1 fs-5" target="_blank" to={"*"}><i className="bi bi-instagram text-dark"></i></Link>
                <Link className="socialSize mx-1 fs-5" target="_blank" to={"*"}><i className="bi bi-twitter text-dark"></i></Link>
                <Link className="socialSize mx-1 fs-5" target="_blank" to={"*"}><i className="bi bi-facebook text-dark"></i></Link>
                </div>
            </article>
            </section>
            <p className="text-center border-none montserrat my-0 mt-2">
            &copy; 2024. Todos los derechos reservados
            </p>
        </footer>
        </div>
  )
}

export default Footer