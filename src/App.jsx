import Protectoras from "./pages/Protectoras"
import Recetas from "./pages/Recetas"
import Consejos from "./pages/Consejos"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Perfil from "./pages/Perfil"
import Inicio from "./pages/Inicio"

import { Routes, Route, NavLink } from "react-router"
import { PrivateRoute, GuestRoute } from "./components/PrivateRoute"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

import "./css/App.css"
import { NavPathName } from "./components/Nav"
import { Footer } from "./components/Footer"

function App() {
  const { isLoggedIn, logout } = useContext(AuthContext)

  return (
    <>
      <nav className="nav">
     <NavPathName/>
      </nav>

      <main className="main">
        <Routes>
         
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/protectoras" element={<Protectoras />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/consejos" element={<Consejos />} />

          <Route path="/login" element={
            <GuestRoute><Login /></GuestRoute>
          } />
          <Route path="/register" element={
            <GuestRoute><Register /></GuestRoute>
          } />
          <Route path="/perfil" element={
            <PrivateRoute><Perfil /></PrivateRoute>
          } />
        </Routes>
      </main>
      <Footer/>
   </>
  )
}

export default App