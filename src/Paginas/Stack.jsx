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

export default function Stack() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Stack</h1>
      <div className={styles.grid}>
        <img src={react} alt="react" />
        <img src={node} alt="node" />
        <img src={redux} alt="redux" />
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={mongo} alt="mongo" />
        <img src={mysql} alt="mysql" />
        <img src={bootstrap} alt="bootsrap" />
      </div>
    </div>
  );
}
