import React from "react";
import styles from "./SummaryCard.module.css";

const SummaryCard = ({ title, value, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
