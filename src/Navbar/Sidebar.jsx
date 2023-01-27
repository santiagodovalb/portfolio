import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Sidebar.module.css'

export default function Sidebar({ isShowSidebar, setIsShowSidebar, lang }) {

  const { pathname } = useLocation();

  useEffect(() => {}, [isShowSidebar])

  return (
    <div className={`${styles.sidebar} ${ isShowSidebar ? '': styles.exit }`}>
      <Link onClick={() => setIsShowSidebar(false)} to="/">
        <span className={pathname === "/" ? styles.active : ""}>{lang === 'spa' ? 'Perfil' : 'Profile'}</span>
      </Link>
      <Link onClick={() => setIsShowSidebar(false)} to="/proyectos">
        <span className={pathname === "/proyectos" ? styles.active : ""}>
          {lang === 'spa' ? 'Proyectos' : 'Projects'}
        </span>
      </Link>
      <Link onClick={() => setIsShowSidebar(false)} to="/experiencia">
        <span className={pathname === "/experiencia" ? styles.active : ""}>
          {lang === 'spa' ? 'Experiencia' : 'Experience'}
        </span>
      </Link>
      <Link onClick={() => setIsShowSidebar(false)} to="/stack">
        <span className={pathname === "/stack" ? styles.active : ""}>
          Stack
        </span>
      </Link>
      <Link onClick={() => setIsShowSidebar(false)} to="/contacto">
        <span className={pathname === "/contacto" ? styles.active : ""}>
          {lang === 'spa' ? 'Contacto' : 'Contact'}
        </span>
      </Link>
    </div>
  )
}
