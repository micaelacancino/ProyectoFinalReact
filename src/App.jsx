//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home/HomePage";
import { useEffect, useState } from "react";
import {
  guardarUsuarioLogueado,
  obtenerCompras,
  obtenerCursos,
  obtenerUsuarioLogueado,
} from "./helpers/bdLocal";
import DetalleCurso from "./pages/detalleCurso/DetalleCurso";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./pages/carrito/Carrito";

function App() {
  const [cursosAlmacenados, setCursosAlmacenados] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [compras, setCompras] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  useEffect(() => {
    const cursosGuardados = obtenerCursos();
    setCursosAlmacenados(cursosGuardados);

  const comprasGuardados = obtenerCompras();
   setCompras(comprasGuardados)
  }, []);

  useEffect(() => {
    const usuarioLog = obtenerUsuarioLogueado();
    setUsuarioLogueado(usuarioLog);

    guardarUsuarioLogueado(usuarioLog);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage cursosAlmacenados={cursosAlmacenados}></HomePage>
            }
          />
          <Route
            path="/detalleCurso/:id"
            element={
              <DetalleCurso
                cursosAlmacenados={cursosAlmacenados}
                usuarioLogueado={usuarioLogueado}
                carrito={carrito}
                setCarrito={setCarrito}
              ></DetalleCurso>
            }
          />
          <Route
            path="/carrito"
            element={
              <Carrito carrito={carrito} setCarrito={setCarrito} compras={compras} setCompras={setCompras} usuarioLogueado={usuarioLogueado} ></Carrito>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
