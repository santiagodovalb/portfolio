import React from "react";
import styles from "./Contacto.module.css";
import github from "../common/github.svg";
import linkedin from "../common/linkedin.svg";
import mail from '../common/mail.svg'

export default function Contacto() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Contacto</h1>
      <div className={styles.icons}>
        <a href='https://github.com/santiagodovalb' target='_blank'>
        <img src={github} alt="github" />
        </a>
        <a href='https://github.com/santiagodovalb' target='_blank'>
        <img src={linkedin} alt="github" />
        </a>
        <a href='mailto:santiagodovalb@gmail.com'>
        <img src={mail} alt="mail" />
        </a>
      </div>
    </div>
  );
}
