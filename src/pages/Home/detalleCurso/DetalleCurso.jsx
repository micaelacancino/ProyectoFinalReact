import React from 'react'
import { useParams } from 'react-router-dom'

function DetalleCurso({cursosAlmacenados}) {

const {id} =  useParams();

const curso = cursosAlmacenados.find(c =>  id == c.id )

  return (
    <section class="container">
    <div class="container mt-5">
      <article class="row align-items-center">
        <div class="col-12 col-md-8 text-center text-md-start">
          <h2>{curso.nombreCurso}</h2>
          <h4 class="my-4 text-start">{curso.descripcionBreve}</h4>

          <div class="card p-4 shadow-sm mt-4">
            <h3 class="fw-bold mb-4">Este curso incluye:</h3>
            <ul class="list-unstyled">
              <li class="mb-2">
                <i class="bi bi-camera-video me-2"></i>
                <strong>211 recursos descargables </strong>
              </li>
              <li class="mb-2">
                <i class="bi bi-download me-2"></i>
                <strong>68 horas de vídeo bajo demanda</strong>
              </li>
              <li class="mb-2">
                <i class="bi bi-phone me-2"></i>
                <strong>Acceso en dispositivos móviles y TV</strong>
              </li>
              <li>
                <i class="bi bi-award me-2"></i>
                <strong>Certificado de finalización</strong>
              </li>
              <li class="mt-5 ms-2">
                <h4>{curso.precio} </h4>
              </li>
            </ul>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-secondary">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 text-center mt-5 pt-4">
          <img
            src={curso.imagen}
            alt="Curso de Inglés"
            class="img-fluid rounded shadow-sm"
          />
        </div>
      </article>
    </div>

    <div class="container mt-5">
      <div class="card p-4 shadow-sm">
        <h2 class="fw-bold mb-4">Lo que aprenderás</h2>

        <div class="row">
          <div class="col-md-4">
            <p>✓ correcta pronunciación </p>
            <p>✓ fonética</p>
          </div>

          <div class="col-md-4">
            <p>✓ gramática</p>
            <p>✓ comprensión auditiva.</p>
          </div>
          <div class="col-md-4">
            <p>✓ expresiones comunes.</p>
            <p>✓ vocabulario clave </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DetalleCurso