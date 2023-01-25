import React from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ lang }) {
  console.log(lang)
  const { pathname } = useLocation();
  return (
    <div className={styles.links}>
      <Link to="/">
        <span className={pathname === "/" ? styles.active : ""}>{lang === 'spa' ? 'Perfil' : 'Profile'}</span>
      </Link>
      <Link to="/proyectos">
        <span className={pathname === "/proyectos" ? styles.active : ""}>
          {lang === 'spa' ? 'Proyectos' : 'Projects'}
        </span>
      </Link>
      <Link to="/experiencia">
        <span className={pathname === "/experiencia" ? styles.active : ""}>
          {lang === 'spa' ? 'Experiencia' : 'Experience'}
        </span>
      </Link>
      <Link to="/contacto">
        <span className={pathname === "/contacto" ? styles.active : ""}>
          {lang === 'spa' ? 'Contacto' : 'Contact'}
        </span>
      </Link>
    </div>
  );
}
