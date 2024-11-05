import { Link, useLocation } from "react-router-dom";
import "../Sidebar.css";
import LogoLlantera from "../assets/img/LlanteraLogo.png";
import '@fontsource/libre-baskerville';


function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={LogoLlantera} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/llantas"
            className={`nav-link ${location.pathname === "/llantas" ? "active" : ""}`}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link to="/nuevallanta" className={`nav-link ${location.pathname === '/nuevallanta' ? 'active' : ''}`}>AGREGAR</Link>
        </li>
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} style={{display: "none"}}>EDITAR</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
