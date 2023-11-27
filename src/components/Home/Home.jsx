import React from "react";
import styles from "./Home.module.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
 
  }
  const navigate = useNavigate();
  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h4 className={styles.title}>Chor Police</h4>
      </div>
      <div className={styles.container}>
        <h4 className={styles.name}>Enter Your Name:</h4>
        <div>
          <input
            className={styles.input_field}
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Your Name"
          ></input>
        </div>
      </div>
      <div className={styles.button}>
        <button
          onClick={() => navigate("/room")}
          className={styles["submit-btn"]}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
