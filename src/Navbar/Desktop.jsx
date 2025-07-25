import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'

export default function Desktop({ lang }) {

  const { pathname } = useLocation();

  return (
    <div className={styles.links}>
      <Link to="/">
        <span className={pathname === "/" ? styles.active : ""}>{lang === 'spa' ? 'Perfil' : 'Profile'}</span>
      </Link>
      <Link to="/experiencia">
        <span className={pathname === "/experiencia" ? styles.active : ""}>
          {lang === 'spa' ? 'Experiencia' : 'Experience'}
        </span>
      </Link>
      <Link to="/stack">
        <span className={pathname === "/stack" ? styles.active : ""}>
          Stack
        </span>
      </Link>
      <Link to="/contacto">
        <span className={pathname === "/contacto" ? styles.active : ""}>
          {lang === 'spa' ? 'Contacto' : 'Contact'}
        </span>
      </Link>
    </div>
  )
}
