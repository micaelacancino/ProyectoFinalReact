//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home/HomePage";
import { useEffect, useState } from "react";
import { obtenerCursos } from "./helpers/bdLocal";

function App() {
  const [cursosAlmacenados, setCursosAlmacenados] = useState([]);

  useEffect(() => {
    const cursosGuardados = obtenerCursos();
    setCursosAlmacenados(cursosGuardados);
  }, []);

  return (
    <>
      <HomePage cursosAlmacenados={cursosAlmacenados} ></HomePage>
    </>
  );
}

export default App;
