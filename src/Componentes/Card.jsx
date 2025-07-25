import React from 'react';
import styles from './Card.module.css';

const Card = ({ years, companyName, achievements }) => (
    <div className={styles.card}>
        <h2 className={styles.jobTitle}>{companyName}</h2>
        <h3 className={styles.years}>{years}</h3>
        <ul className={styles.achievements}>
            {achievements && achievements.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </div>
);

export default Card;
