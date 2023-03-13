import React from "react";
import styles from "./Stack.module.css";
import react from "../common/react.svg";
import node from "../common/node.svg";
import bootstrap from "../common/bootstrap.svg";
import redux from "../common/redux.svg";
import html from "../common/html.svg";
import mongo from "../common/mongo.svg";
import css from "../common/css.svg";
import mysql from "../common/mysql.svg";
import typescript from '../common/typescript.svg'

export default function Stack() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Stack</h1>
      <div className={styles.grid}>
        <div className={styles.tech}>
        <img src={react} alt="react" />
        <span>React</span>
        </div>
        <div className={styles.tech}>
        <img src={node} alt="node" />
        <span>Node</span>
        </div>
        <div className={styles.tech}>
        <img src={typescript} alt="node" />
        <span>TypeScript</span>
        </div>
        <div className={styles.tech}>
        <img src={redux} alt="redux" />
        <span>Redux</span>
        </div>
        <div className={styles.tech}>
        <img src={html} alt="html" />
        <span>HTML 5</span>
        </div>
        <div className={styles.tech}>
        <img src={css} alt="css" />
        <span>CSS</span>
        </div>
        <div className={styles.tech}>
        <img src={mongo} alt="mongo" />
        <span>MongoDB</span>
        </div>
        <div className={styles.tech}>
        <img src={mysql} alt="mysql" />
        <span>MySQL</span>
        </div>
        <div className={styles.tech}>
        <img src={bootstrap} alt="bootsrap" />
        <span>Bootstrap</span>
        </div>
      </div>
    </div>
  );
}
