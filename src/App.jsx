import HomePage from "./pages/Home/HomePage";
import DetalleCurso from "./pages/Home/detalleCurso/DetalleCurso";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { obtenerCursos } from "./helpers/bdLocal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Error404 from "./components/error404"
import Nosotros from "./components/team"

function App() {
  const [cursosAlmacenados, setCursosAlmacenados] = useState([]);

  useEffect(() => {
    const cursosGuardados = obtenerCursos();
    setCursosAlmacenados(cursosGuardados);
  }, []);

  return (
    <>
=======
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage cursosAlmacenados={cursosAlmacenados} />}
          />
          <Route
            path="/detalleCurso/:id"
            element={<DetalleCurso cursosAlmacenados={cursosAlmacenados} />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
