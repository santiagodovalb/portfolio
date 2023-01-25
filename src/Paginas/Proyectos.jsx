import React from "react";
import styles from "./Proyectos.module.css";
import Proyecto from "../Componentes/Proyecto";
import proyectos from "../Data/Proyectos";

export default function Proyectos({ lang }) {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{lang === 'spa' ? 'Proyectos' : 'Projects'}</h1>
      <div className={styles.grid}>
        {proyectos.map((proyecto) => {
          return (
            <div className={styles.element}>
              <Proyecto
                name={proyecto.name}
                desc={lang === 'spa' ? proyecto.descSpa : proyecto.descEng}
                url={proyecto.url}
                img={proyecto.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
