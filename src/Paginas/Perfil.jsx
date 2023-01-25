import React from "react";
import styles from "./Perfil.module.css";
import profile from "../common/profile.jpeg";
import downlaod from "../common/download.svg";

function Perfil() {
  const handleClick = () => {};

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <span className={styles.title}>Santiago Doval</span>
        <span className={styles.subtitle}>Desarollador full-stack</span>
        <a href="CV-Santiago-Doval-2023.pdf" download>
          <button onClick={handleClick}>
            <img
              style={{ height: "30px" }}
              src={downlaod}
              alt="download icon"
            />
            <span>Descargar CV</span>
          </button>
        </a>
        <p>
          Desarrollador full-stack en formación permanente. Me interesa
          participar de proyectos desafiantes que me hagan crecer humana y
          profesionalmente, aprovechando el potencial de las herramientas mas
          demandadas de la industria. 
          <br />
          <br />
          Creo que todas las personas deben
          incursionar en distintas áreas del conocimiento y tener un abanico
          amplio de intereses y conocimientos; así se puede tener una formación
          integral que permita encarar las tareas desde una perspectiva amplia.
          Mi experiencia en la música me aporta un set de habilidades blandas
          ideal para encarar el trabajo desde la creatividad y la colaboración
          en equipo, pilares para establecer un ambiente que lleve a conseguir
          buenas ideas y resultados.
        </p>
      </div>
      <img src={profile} alt="myself" />
    </div>
  );
}

export default Perfil;
