import React from "react";
import styles from "./Experiencia.module.css";
import exp from "../Data/Exp.js";
import Card from "../Componentes/Card.jsx";

export default function Experiencia ({ lang }) {

  return (
    <div className={styles.content}>
      <h1>{lang === 'spa' ? 'Experiencia' : 'Experience'}</h1>
      <div className={styles.list}>
        {exp[lang].map((element) => {
          return (
            <Card
              key={element.title}
              years={element.years}
              companyName={element.place}
              achievements={element.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
