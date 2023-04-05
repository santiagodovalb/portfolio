import React from 'react';
import styles from './Bullets.module.css'

export default function Bullets ({ title, desc, place}) {
  return (
    <div className={styles.bullet}>
        <h2>• {title}</h2>
        <h3>{place}</h3>
        <ul>{desc.map(item => <li>{item}</li>)}</ul>
    </div>
  )
}
