

import Footer from "./components/Footer"
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home/HomePage";
import { useEffect, useState } from "react";
import { obtenerCursos } from "./helpers/bdLocal";
import DetalleCurso from "./pages/Home/detalleCurso/DetalleCurso";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [cursosAlmacenados, setCursosAlmacenados] = useState([]);

  useEffect(() => {
    const cursosGuardados = obtenerCursos();
    setCursosAlmacenados(cursosGuardados);
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
              element={<DetalleCurso cursosAlmacenados={cursosAlmacenados}></DetalleCurso>}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  



export default App;



