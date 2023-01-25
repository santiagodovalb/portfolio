import React from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className={styles.links}>
      <Link to="/">
        <span className={pathname === "/" ? styles.active : ""}>Perfil</span>
      </Link>
      <Link to="/proyectos">
        <span className={pathname === "/proyectos" ? styles.active : ""}>
          Proyectos
        </span>
      </Link>
      <Link to="/experiencia">
        <span className={pathname === "/experiencia" ? styles.active : ""}>
          Experiencia
        </span>
      </Link>
      <Link to="/contacto">
        <span className={pathname === "/contacto" ? styles.active : ""}>
          Contacto
        </span>
      </Link>
    </div>
  );
}
