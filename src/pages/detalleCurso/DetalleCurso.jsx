import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agregarCursoCarrito, guardarCarrito } from "../../helpers/bdLocal";
import Swal from "sweetalert2";

function DetalleCurso({
  cursosAlmacenados,
  carrito,
  setCarrito,
  usuarioLogueado,
}) {
  const { id } = useParams();

  const curso = cursosAlmacenados.find((c) => id == c.id);
  const cursoAgregado = carrito.find((c) => c.id == curso.id);

  const navegacion = useNavigate();

  const agregarCurso = () => {
    if (!usuarioLogueado) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Debe iniciar sesión antes de añadir un curso al carrito",
        showConfirmButton: false,
        timer: 3500,
      });
      return;
    } else {
      const carritoAux = carrito;
      const carritoActual = agregarCursoCarrito(curso, carritoAux);
      setCarrito(carritoActual);
      guardarCarrito(carritoActual);

      Swal.fire({
        title: "Curso añadido al carrito",
        text: "¿Qué deseas hacer ahora?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Ir al carrito",
        cancelButtonText: "Seguir comprando",
      }).then((result) => {
        if (result.isConfirmed) {
          navegacion("/carrito");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navegacion("/");
        }
      });
    }
  };

  return (
    <section className="container mainSection">
      <div className="container mt-5">
        <article className="row align-items-center">
          <div className="col-12 col-md-8 text-center text-md-start">
            <h2>{curso?.nombreCurso}</h2>
            <h4 className="my-4 text-start">{curso?.descripcionBreve}</h4>

            <div className="card p-4 shadow-sm mt-4">
              <h3 className="fw-bold mb-4">Este curso incluye:</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-camera-video me-2"></i>
                  <strong>211 recursos descargables </strong>
                </li>
                <li className="mb-2">
                  <i className="bi bi-download me-2"></i>
                  <strong>68 horas de vídeo bajo demanda</strong>
                </li>
                <li className="mb-2">
                  <i className="bi bi-phone me-2"></i>
                  <strong>Acceso en dispositivos móviles y TV</strong>
                </li>
                <li>
                  <i className="bi bi-award me-2"></i>
                  <strong>Certificado de finalización</strong>
                </li>
                <li className="mt-5 ms-2">
                  <h4>${curso?.precio} </h4>
                </li>
              </ul>
              <div className="d-flex justify-content-end">
                {!cursoAgregado && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={agregarCurso}
                  >
                    Agregar al carrito
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center mt-5 pt-4">
            <img
              src={curso?.imagen}
              alt="Curso de Inglés"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </article>
      </div>

      <div className="container mt-5 mb-4">
        <div className="card p-4 shadow-sm">
          <h2 className="fw-bold mb-4">Lo que aprenderás</h2>

          <div className="row">
            <div className="col-md-4">
              <p>✓ correcta pronunciación </p>
              <p>✓ fonética</p>
            </div>

            <div className="col-md-4">
              <p>✓ gramática</p>
              <p>✓ comprensión auditiva.</p>
            </div>
            <div className="col-md-4">
              <p>✓ expresiones comunes.</p>
              <p>✓ vocabulario clave </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DetalleCurso;
