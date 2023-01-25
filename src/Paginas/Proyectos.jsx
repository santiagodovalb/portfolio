import React from "react";
import styles from "./Proyectos.module.css";
import Proyecto from "../Componentes/Proyecto";
import proyectos from "../Data/Proyectos";

export default function Proyectos() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Proyectos</h1>
      <div className={styles.grid}>
        {proyectos.map((proyecto) => {
          return (
            <div className={styles.element}>
              <Proyecto
                name={proyecto.name}
                desc={proyecto.desc}
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
