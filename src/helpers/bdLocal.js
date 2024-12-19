import { cursos } from "./cursos";

 export const obtenerCursos = () => {
  const cursosAlmacenados = JSON.parse(localStorage.getItem("cursos"));
  return cursosAlmacenados || cursos
};
