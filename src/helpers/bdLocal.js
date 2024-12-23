import { cursos } from "./cursos";


export const obtenerCursos = () => {
  const cursosAlmacenados = JSON.parse(localStorage.getItem("cursos"));
  return cursosAlmacenados || cursos;
};

export const obtenerCarrito = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  return carrito || [];
};

export const guardarCarrito = (carrito) => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

export const agregarCursoCarrito = (curso, carrito) => {
  if (carrito.lenght == 0) {
    carrito.push(curso);
    return carrito;
  }

  const cursoBuscado = carrito.find((c) => c.id == curso.id);

  if (!cursoBuscado) {
    carrito.push(curso);
  }
  return carrito;
};

export const obtenerCompras = () => {
  const compras = JSON.parse(localStorage.getItem("compras"));
  return compras || [];
};

export const guardarCompras = (compras) => {
  localStorage.setItem("compras", JSON.stringify(compras));
};
