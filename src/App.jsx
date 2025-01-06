import HomePage from "./pages/Home/HomePage";
import DetalleCurso from "./pages/detalleCurso/DetalleCurso.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { obtenerCompras, obtenerCursos } from "./helpers/bdLocal";
import Carrito from "./pages/carrito/Carrito";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ComprasUsuarios from "./components/ComprasUsuarios.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Error from "./components/Error.jsx";
import ScrollTop from "./common/ScrollTop.jsx";

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
    checkSession();
  }, []);

  const checkSession = () => {
    const sesionGuardada = sessionStorage.getItem("sesion");
    if (sesionGuardada) {
      setUsuarioLogueado(JSON.parse(sesionGuardada));
    } else {
      setUsuarioLogueado(null);
    }
  };

  return (
    <>
      <Router>
        <NavBar
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
        <ScrollTop />
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
          <Route
            path="/login"
            element={
              <Login
                usuarioLogueado={usuarioLogueado}
                setUsuarioLogueado={setUsuarioLogueado}
              />
            }
          />
          <Route path="/registro" element={<Register />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route
            path="/compras"
            element={<ComprasUsuarios compras={compras} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
