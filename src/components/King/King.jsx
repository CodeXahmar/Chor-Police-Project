import React, { useState } from "react";
import styles from "./King.module.css";
import { useNavigate } from "react-router-dom";
import king from "./king.jpg";
function King() {
  const navigate=useNavigate();
  const [time, setTime] = useState(10);
  setTimeout(() => {
    if(time==0){
      navigate("/mod7")
    }
    if (time >= 1 && time <= 10) {
      setTime(time - 1);
    }
  }, 1000);
  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h4 className={styles.title}>You are:</h4>
      </div>
      <div className={styles.container}>
        <div className={styles["inner-container"]}>
          <h4 className={styles.box}>King</h4>
          <div>
            <h4 className={styles.box}>
              <img src={king} alt="king"></img>
            </h4>
          </div>
        </div>
        <h1>{time}</h1>
        <div className={styles["btn-container"]}></div>
      </div>
    </div>
  );
}

export default King;
