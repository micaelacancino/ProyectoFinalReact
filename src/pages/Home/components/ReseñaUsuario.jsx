import React from 'react';

function ReseñaUsuario({ reseña }) {
  return (
    <div className="reseña-card text-center p-3 border rounded" style={{ width: '18rem' }}>
        
      <div className="imgUser mb-3">
        <img
          src={reseña.imagen}
          className="rounded-circle"
          alt={reseña.nombreyApellido}
          style={{ width: '80px', height: '80px' }}
        />
      </div>
      <p className="fw-bold">{reseña.estrellas}</p>
      <div>
        <p className="mb-1">{reseña.nombreyApellido}</p>
        <p className="text-muted">{reseña.comentario}</p>
      </div>
    </div>
  );
}

export default ReseñaUsuario;