import React from "react";

function FiltroCategoria({selectedCategory, setSelectedCategory, setBusqueda }) {


  const handleCategoryChange = (event) => {
    setBusqueda("")
    setSelectedCategory(event.target.value);
  };
  return (
    <div>
      <h5>Categorías</h5>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
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
