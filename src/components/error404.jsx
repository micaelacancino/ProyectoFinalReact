import React from 'react'
import '../css/error404.css'
function Error404() {
  return (
    <div className="not-found-container">
    <h1 className="error-code">404</h1>
    <p className="error-message">La pagina que buscas no existe.</p>
    <a href="/" className="home-link">Volver</a>
  </div>
  )
}

export default Error404