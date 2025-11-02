import { NavLink } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const NavPathName = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); // estado del toggle

  const toggleMenu = () => setMenuOpen(!menuOpen); // alternar menú

  return (
    <nav className="nav">
      {/* Botón hamburguesa visible en móvil */}
      <button className="nav__toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav__ul ${menuOpen ? "active" : ""}`}>
      <li><NavLink to="/inicio" className="nav__links" onClick={() => setMenuOpen(false)}>Inicio</NavLink></li>
        <li><NavLink to="/protectoras" className="nav__links" onClick={() => setMenuOpen(false)}>Protectoras</NavLink></li>
        <li><NavLink to="/recetas" className="nav__links" onClick={() => setMenuOpen(false)}>Recetas</NavLink></li>
        <li><NavLink to="/consejos" className="nav__links" onClick={() => setMenuOpen(false)}>Consejos</NavLink></li>

        {!isLoggedIn && (
          <>
            <li><NavLink to="/login" className="nav__links" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
            <li><NavLink to="/register" className="nav__links" onClick={() => setMenuOpen(false)}>Register</NavLink></li>
          </>
        )}

        {isLoggedIn && (
          <>
            <li><NavLink to="/perfil" className="nav__links" onClick={() => setMenuOpen(false)}>Perfil</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  );
};