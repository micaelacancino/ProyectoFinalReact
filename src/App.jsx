
//import './App.css'
import HomePage from "./pages/Home/HomePage";
import DetalleCurso from "./pages/Home/detalleCurso/DetalleCurso";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerCursos } from "./helpers/bdLocal";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


  const [cursosAlmacenados, setCursosAlmacenados] = useState([]);

  useEffect(() => {
    const cursosGuardados = obtenerCursos();
    setCursosAlmacenados(cursosGuardados);
  }, []);

  function App() {
    return (
      <>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route
            
              path="/"
              element={
                <HomePage cursosAlmacenados={cursosAlmacenados}></HomePage>
              }/>
            <Route
              path="/detalleCurso/:id"
              element={<DetalleCurso cursosAlmacenados={cursosAlmacenados}></DetalleCurso>}
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }
export default App;

