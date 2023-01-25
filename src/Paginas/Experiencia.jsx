import React from "react";
import styles from "./Experiencia.module.css";
import exp from "../Data/Exp.js";
import Bullets from "../Componentes/Bullets";

export default function Experiencia ({ lang }) {

  return (
    <div className={styles.content}>
      <h1>{lang === 'spa' ? 'Experiencia' : 'Experience'}</h1>
      <div className={styles.list}>
        {exp[lang].map((element) => {
          return (
            <Bullets title={element.title} desc={element.desc} place={element.place} />
          );
        })}
      </div>
    </div>
  );
}
