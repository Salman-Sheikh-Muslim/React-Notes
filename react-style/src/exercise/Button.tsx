import React from "react";
import styles from "./Buttons.module.css";

function Button() {
  return (
    <div>
      <button className={[styles.btn, styles["btn-primary"]].join(" ")}>
        Button
      </button>
    </div>
  );
}

export default Button;
