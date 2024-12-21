import React, { useEffect } from "react";
import { useState } from "react";
import { cursos } from "../../../helpers/cursos";
import ListaCursos from "./ListaCursos";
import FiltroCategoria from "./FiltroCategoria";

function FiltroCurso({ cursosAlmacenados }) {
  const [busqueda, setBusqueda] = useState("");
  const [cursosFiltrados, setCursosFiltrados] = useState([]);
  const [categoria, setCategoria] = useState("");

  const filtrarCursosPorNombre = () => {
    if (categoria !== "") {
      setCategoria("");
    }
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
      <section class="container mt-5">
        <article class="row">
          <div class="col-12 col-md-3">
            <FiltroCategoria
              categoria={categoria}
              setCategoria={setCategoria}
              setBusqueda={setBusqueda}
            ></FiltroCategoria>{" "}
          </div>
          <div class="col-12 col-md-9 d-flex flex-column">
            <ListaCursos
              cursosAlmacenados={cursosAlmacenados}
              busqueda={busqueda}
              cursosFiltrados={cursosFiltrados}
              categoria={categoria}
            ></ListaCursos>
          </div>
        </article>
      </section>
    </>
  );
}

export default FiltroCurso;
