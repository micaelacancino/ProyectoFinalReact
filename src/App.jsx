//import './App.css'
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Register from "./components/Register.jsx";
import { useEffect, useState } from "react";
import { obtenerCursos } from "./helpers/bdLocal";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [cursosAlmacenados, setCursosAlmacenados] = useState([]);

  useEffect(() => {
    const cursosGuardados = obtenerCursos();
    setCursosAlmacenados(cursosGuardados);
  }, []);

  return (
    <>
    <Router>
      <Route path="/navbar" element={<Navbar />} />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/" element={<HomePage cursosAlmacenados={cursosAlmacenados}/>}/>
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
    
   

    </>
  );
    

}



export default App;