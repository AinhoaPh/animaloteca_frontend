import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NavPathName = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    
    <nav className="nav">
    <ul className="nav__ul">
      <li><NavLink to="/protectoras" className="nav__links">Protectoras</NavLink></li>
      <li><NavLink to="/recetas" className="nav__links">Recetas</NavLink></li>
      <li><NavLink to="/consejos" className="nav__links">Consejos</NavLink></li>

      {!isLoggedIn && (
  <>
    <li><NavLink to="/login" className="nav__links">Login</NavLink></li>
    <li><NavLink to="/register" className="nav__links">Register</NavLink></li>
  </>
)}

{isLoggedIn && (
  <>
    <li><NavLink to="/perfil" className="nav__links">Perfil</NavLink></li>

  </>
)}

  
    </ul>
    </nav>
  );
};