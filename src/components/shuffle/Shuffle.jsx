import styles from "./Shuffle.module.css";
import chor from "./chor.jpg";
import police from "./police.jpg";
import doctor from "./doctor.jpg";
import civilian from "./civilian.jpg";
import { useEffect, useState } from "react";

function GenerateNumber() {
  return Math.floor(Math.random() * 4);
}

function Shuffle() {
  const [time, setTime] = useState(10);
  setTimeout(() => {
    if (time >= 1 && time <= 10) {
      setTime(time - 1);
    }
  }, 1000);
  const UserStatus = [chor, police, doctor, civilian];
  const Status = ["chor", "police", "doctor", "civilian"];
  const [random, setRandomPic] = useState("");
  const [randomName, setRandomName] = useState("");

  function PicsGenerator() {
    const RandomCharacter = GenerateNumber();
    const UserRandomPic = UserStatus[RandomCharacter];
    const UserRandomName = Status[RandomCharacter];
    setRandomPic(() => UserRandomPic);
    setRandomName(() => UserRandomName);
  }

  useEffect(() => {
    PicsGenerator();
  }, []);

  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.nav}>
          <h4 className={styles.title}>You are:</h4>
        </div>
        <div className={styles.container}>
          <div className={styles["inner-container"]}>
            <h4 className={styles.box}> {randomName}</h4>
            <div>
              <h4 className={styles.box}>
                <img src={random} alt="random" />
              </h4>
            </div>
          </div>
          <h1>{time}</h1>
          <div className={styles["btn-container"]}></div>
        </div>
      </div>
    </div>
  );
}

export default Shuffle;
