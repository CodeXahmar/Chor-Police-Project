import React from "react";
import styles from "./Lobby.module.css"; 


function Lobby(props) {
  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h3>Lobby!</h3>
        <h3>#{props.id}</h3>
      </div>

      <h3 className={styles.team}>Teams:</h3>
      <div className={styles.container}>
        <div className={styles.avatars}>
          <img src="./Images/1.jpg" alt="avatar" />
          <p className={styles.names}>MASAB</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/2.jpg" alt="avatar" />
          <p className={styles.names}>BOBBY</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/3.jpg"alt="avatar" />
          <p className={styles.names}>LUQMAN</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/4.jpg" alt="avatar" />
          <p className={styles.names}>SABIR</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/5.jpg" alt="avatar" />
          <p className={styles.names}>AHMAR</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/6.jpg" alt="avatar" />
          <p className={styles.names}>HAMMAD</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/7.jpg" alt="avatar" />
          <p className={styles.names}>TALHA</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/8.jpg" alt="avatar" />
          <p className={styles.names}>DANISH</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/1.jpg" alt="avatar" />
          <p className={styles.names}>ALYAN</p>
        </div>{" "}
        <div className={styles.avatars}>
          <img src="./Images/4.jpg" alt="avatar" />
          <p className={styles.names}>HASHIR</p>
        </div>
        <p className={styles.sbr}>Ruko Zara Sabr Karo!</p>
      </div>
    </div>
  );
}

export default Lobby;
