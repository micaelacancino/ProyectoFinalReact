import React, { useEffect } from "react";
import { useState } from "react";
import { cursos } from "../../../helpers/cursos";
import ListaCursos from "./ListaCursos";

function FiltroCurso() {
  const [busqueda, setBusqueda] = useState("");
  const [cursosFiltrados, setCursosFiltrados] = useState([]);

  const filtrarCursosPorNombre = () => {
    const inputBusqueda = busqueda.toLowerCase().trim();

    if (inputBusqueda === "") {
      setCursosFiltrados([]);
    } else {
      const cursosEncontrados = cursos.filter((curso) =>
        curso.nombreCurso.toLowerCase().includes(inputBusqueda)
      );
      setCursosFiltrados(cursosEncontrados);
    }
  };

  useEffect(() => {
    filtrarCursosPorNombre();
  }, [busqueda]);
  console.log(busqueda);
  return (
    <>
    <div className="mb-5 text-center">
      <form>
        <input
          class="w-50 rounded-2 px-2 py-2"
          type="text"
          required
          placeholder="Buscar cursos...🔍"
          value={busqueda}
          id="inputBusqueda"
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </form>
    </div>
    <ListaCursos busqueda={busqueda} cursosFiltrados={cursosFiltrados} ></ListaCursos>
    </>
  );
}

export default FiltroCurso;
