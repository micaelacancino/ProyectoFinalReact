import HomePage from "./pages/Home/HomePage";
import DetalleCurso from "./pages/detalleCurso/DetalleCurso.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import {
  guardarUsuarioLogueado,
  obtenerCompras,
  obtenerCursos,
  obtenerUsuarioLogueado,
} from "./helpers/bdLocal";
import Carrito from "./pages/carrito/Carrito";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/error404";
import Nosotros from "./components/team";

function App() {
  const [cursosAlmacenados, setCursosAlmacenados] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [compras, setCompras] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  useEffect(() => {
    const cursosGuardados = obtenerCursos();
    setCursosAlmacenados(cursosGuardados);

    const comprasGuardados = obtenerCompras();
    setCompras(comprasGuardados);
  }, []);

  useEffect(() => {
    const usuarioLog = obtenerUsuarioLogueado();
    setUsuarioLogueado(usuarioLog);

    guardarUsuarioLogueado(usuarioLog);
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage cursosAlmacenados={cursosAlmacenados} />}
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
              <Carrito
                carrito={carrito}
                setCarrito={setCarrito}
                compras={compras}
                setCompras={setCompras}
                usuarioLogueado={usuarioLogueado}
              ></Carrito>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
