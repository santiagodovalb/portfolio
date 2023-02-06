import React from "react";
import styles from "./Perfil.module.css";
import profile from "../common/profile.png";
import downlaod from "../common/download.svg";

function Perfil({ lang }) {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <div className={styles.header}>
          <div className={styles.titles}>
            <span className={styles.title}>Santiago <br />Doval</span>
            <span className={styles.subtitle}>
              {lang === "spa"
                ? "Desarollador full-stack"
                : "Full-stack developer"}
            </span>
            <a
              href={
                lang === "spa"
                  ? "CV-Santiago-Doval-2023.pdf"
                  : "CV Santiago Doval EN.pdf"
              }
              download
            >
              <button>
                <img
                  style={{ height: "30px" }}
                  src={downlaod}
                  alt="download icon"
                />
                <span>{lang === "spa" ? "Descargar CV" : "Download CV"}</span>
              </button>
            </a>
          </div>
          <img className={styles.profile} src={profile} alt="myself" />
        </div>
        <p>
          {lang === "spa"
            ? "Desarrollador full-stack en formación permanente. Me interesa participar de proyectos desafiantes que me hagan crecer humana y profesionalmente, aprovechando el potencial de las herramientas mas demandadas de la industria."
            : "I'm interested in challenging projects that will make me grow on a human and professional level, taking advantage of the industrie's most in-demand technologies."}
          <br />
          <br />
          {lang === "spa"
            ? "Creo que todas las personas deben incursionar en distintas áreas del conocimiento y tener un abanico amplio de intereses; así se puede tener una formación integral que permita encarar las tareas desde una perspectiva amplia. Mi experiencia en la música me aporta un set de habilidades blandas ideal para encarar el trabajo desde la creatividad y la colaboración en equipo, pilares para establecer un ambiente que lleve a conseguir buenas ideas y resultados."
            : "I think everyone should have a broad spectrum of knowledge and practice a wide range of disciplines. My experience in the music world provides me with an ideal set of soft skills that allow me to tackle any task from a creative and collaborative standpoint, which I consider pillars for a good work environment that leads to the best experiences and results."}
        </p>
      </div>
    </div>
  );
}

export default Perfil;
