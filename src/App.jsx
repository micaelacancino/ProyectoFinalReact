//import './App.css'
import "./styles/login.css"
import Login from "./components/Login";
import Admin from "./components/Admin";
import Register from "./components/register"

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        {/* Ruta para Admin */}
        <Route path="/admin" element={<Admin />} />

        {/* Ruta para Login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta para Register */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
