import React from "react";

function FiltroCategoria({categoria, setCategoria, setBusqueda }) {


  const handleCategoriaChange = (event) => {
    setBusqueda("")
    setCategoria(event.target.value);
  };
  return (
    <div className="mt-4 text-center">
      <h5>Categorías</h5>
      <select
        value={categoria}
        onChange={handleCategoriaChange}
        className="form-select"
      >
        <option value="" disabled>
          Selecciona un idioma
        </option>
        <option value="ingles">Inglés</option>
        <option value="frances">Francés</option>
        <option value="italiano">Italiano</option>
      </select>
    </div>
  );
}

export default FiltroCategoria;
