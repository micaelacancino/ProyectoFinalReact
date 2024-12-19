import React from 'react'
import "../Css/Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo2 from "../assets/imagen2.png"

function Footer() {
  return (
    <div>
      <footer className="colorFooter" id="footer">
        <section className="container-fluid text-center">
            <article className="row my-4 my-md-3 pt-md-4">
                <div className="col-sm-12 col-md-3 mb-2 mb-md-0">
                    <img className="logoSize" src={logo2} alt="SpeakMaster" />
                </div>
                <div className="col-sm-12 col-md-3">
                    <h5 className="text-dark">Nosotros</h5>
                    <ul className="list-unstyled d-flex justify-content-center flex-md-column  ">
                        <li>
                            <a className=" pe-2 text-body-secondary" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} href="">Quienes Somos?</a>
                        </li>
                        <li>
                            <a className=" px-2 text-body-secondary" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} href="">Contáctanos</a>
                        </li>

                        <li>
                            <a className=" ps-2 ps-md-0 text-body-secondary" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} href="">Ayuda</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3">
                    <h5 className="text-dark">Nuestras Páginas</h5>
                    <ul className="list-unstyled d-flex justify-content-center flex-md-column">
                        <li>
                            <a className=" pe-2 text-body-secondary" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} href="">Cursos</a>
                        </li>
                        <li>
                            <a className="px-2 text-body-secondary" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} href="">Proyectos</a>
                        </li>

                        <li>
                            <a className="ps-2 ps-md-0 text-body-secondary" style={{ textDecoration: 'none', fontWeight: 100, fontSize: '18px' }} href="">Viajes al Exterior</a>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-12 col-md-3">
                    <h5 className=" mt-4 mt-md-0">Nuestras redes</h5>
                    <a className="socialSize" href=""><i className="bi bi-instagram text-dark"></i></a>
                    <a className="socialSize px-2" href=""><i className="bi bi-facebook text-dark"></i></a>
                    <a className="socialSize" href=""><i className="bi bi-twitter text-dark"></i></a>
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
