import React from "react";
import styles from './Proyecto.module.css'

export default function Proyecto({ name, desc, url, img }) {
  return (
    <a href={url} className={styles.cards} target='_blank'>
      <img src={img} alt='snippet' />
      <div className={styles.text}>
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
    </a>
  );
}
