import React from "react";
import styles from "./ID.module.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";

function ID(props) {
  const navigate = useNavigate();
  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h4 className={styles.title}>Chor Police</h4>
      </div>
      <div className={styles.container}>
        <div className={styles["inner-container"]}>
          <h4 className={styles.box}>Room ID:</h4>
          <div>
            <h4 className={styles.box}>#{props.id}</h4>
          </div>
        </div>
        <div className={styles["btn-container"]}>
          <button
            onClick={() => navigate("/avatar")}
            className={styles["continue-btn"]}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ID;
