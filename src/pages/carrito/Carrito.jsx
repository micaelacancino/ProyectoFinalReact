import CursoCarrito from "./components/CursoCarrito";
import "../carrito/carrito.css";
import { useEffect } from "react";
import { guardarCompras, obtenerCarrito } from "../../helpers/bdLocal";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Carrito = ({
  carrito,
  setCarrito,
  compras,
  setCompras,
  usuarioLogueado,
}) => {
  useEffect(() => {
    const carritoActual = obtenerCarrito();
    setCarrito(carritoActual);
  }, []);

  const total = carrito.reduce((sum, curso) => {
    const precio = Number(curso.precio.replace(".", ""));
    return sum + precio;
  }, 0);

  const navegacion = useNavigate();

  const confirmarCompra = () => {
    const nuevaCompra = {
      cursos: carrito,
      usuario: usuarioLogueado.email,
      id: crypto.randomUUID(),
      total: total,
    };

    const comprasAux = compras;
    comprasAux.push(nuevaCompra);
    setCompras(comprasAux);
    guardarCompras(compras);
    setCarrito([])
    localStorage.removeItem("carrito")
    navegacion("/");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Compra confirmada. Redirigiendo al pago...",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const eliminarCurso = (id) => {
    const nuevoCarrito = carrito.filter(curso => curso.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };
  return (
    <section className="py-5 container">
      <div className="pt-lg-5 pb-2 pb-md-4">
        <h1 className="text-start titlePages">Carrito</h1>
      </div>
      <div className="row gy-2">
        <div className="col-lg-9">
          <p className="text-start border-bottom titlePages  fs-4">Cursos añadidos:</p>
          {carrito.length === 0 && <p>No se añadieron cursos al carrito</p>}

          <article className="px-2 py-4 p-md-4 d-flex flex-column gap-4 rounded-4">
            {carrito.map((c) => (
              <CursoCarrito key={c.id} curso={c} eliminarCurso={eliminarCurso} ></CursoCarrito>
            ))}
          </article>
        </div>
        <article className="col-lg-3 mt-5">
          {carrito.length > 0 && (
            <div className="card rounded-2 p-4">
              <div className="">
                <p className="mt-2 text-start fw-bold border-bottom">
                  Mi Compra
                </p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-column justify-content-between mt-3 fw-bold">
                  <span className="text-secondary">Total:</span>
                  <h3>${total}</h3>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="w-100 text-white btn btn-dark rounded-0 py-2 rounded-2 fw-bold"
                  onClick={confirmarCompra}
                >
                  Pagar
                </button>
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Carrito;
