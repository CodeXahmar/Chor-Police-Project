import React, { useState } from "react";
import styles from "./Room.module.css";
import { useNavigate } from "react-router-dom";

function Room({ same }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function checkRoomId() {
    if (text === same) {
      alert("Correct Room ID was Entered");
      navigate("/avatar");
    } else {
      alert("Invalid Room ID was Entered");
    }
  }

  function handleChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h4 className={styles.title}>Chor Police</h4>
      </div>
      <div className={styles.container}>
        <h4 className={styles.heading}>Create or Join Room</h4>
        <div className={styles["input-field"]}>
          <input onChange={handleChange} type="text" placeholder="Room ID" />
        </div>
      </div>
      <div className={styles.btns}>
        <button onClick={checkRoomId} className={styles["join-btn"]}>
          Join Room
        </button>
        <p>or</p>
        <button
          onClick={() => navigate("/id")}
          className={styles["create-btn"]}
        >
          Create Room
        </button>
      </div>
    </div>
  );
}

export default Room;
