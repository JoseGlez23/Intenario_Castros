// src/components/SuperiorBar.jsx
import "../SuperiorBar.css";
import "@fontsource/open-sans";
import { useAuth } from "../context/AuthContext"; // Importar el contexto de autenticación

function SuperiorBar() {
  const { adminName, logout } = useAuth(); // Obtener el nombre del administrador y el logout

  return (
    <div className="superior-bar">
      <div className="superior-text">BIENVENIDO {adminName.toUpperCase()}</div>
      <button className="superior-button" onClick={logout}>
        CERRAR SESIÓN
      </button>
    </div>
  );
}

export default SuperiorBar;
