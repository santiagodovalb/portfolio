import React from "react";
import styles from "./Experiencia.module.css";
import exp from "../Data/Exp.js";
import Bullets from "../Componentes/Bullets";

export default function Experiencia () {
  return (
    <div className={styles.content}>
      <h1>Experiencia</h1>
      <div className={styles.list}>
        {exp.map((element) => {
          return (
            <Bullets title={element.title} desc={element.desc} place={element.place} />
          );
        })}
      </div>
    </div>
  );
}
