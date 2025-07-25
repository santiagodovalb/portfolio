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
                  ? "CV Santiago Doval 2023 - ES.pdf"
                  : "CV Santiago Doval 2023 - EN.pdf"
              }
              download
            >
              <button style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ height: "30px" }}
                  src={downlaod}
                  alt="download icon"
                />
                <span style={{ margin: 0, fontWeight: "bold" }}>{lang === "spa" ? "Descargar CV" : "Download CV"}</span>
              </button>
            </a>
          </div>
          <img className={styles.profile} src={profile} alt="myself" />
        </div>
        <p className={styles.about}>
          {lang === "spa"
            ? "Desarrollador full-stack en formación permanente. Me interesa participar de proyectos desafiantes que me hagan crecer humana y profesionalmente, aprovechando el potencial de las herramientas más demandadas de la industria."
            : "I'm interested in challenging projects that will make me grow on a human and professional level, taking advantage of the industrie's most in-demand technologies."}
          <br />
        </p>
      </div>
    </div>
  );
}

export default Perfil;
