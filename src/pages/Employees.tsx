import styles from "../styles/Employees.module.css";

export default function Employees() {
  return (
    <main className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.subContainer}>
          <h1>Dr. BN Bhatarai</h1>
          <h3>Agriculture Expert</h3>
        </div>
        <div className={styles.subContainer}>
          <h1>Mr. Mahendra Chhetri</h1>
          <h3>Managing Director</h3>
        </div>
        <div className={styles.subContainer}>
          <h1>Mr. IR Dulal</h1>
          <h3>Water Supply Expert</h3>
        </div>
        <div className={styles.subContainer}>
          <h1>Ms. Sumanga Upreti</h1>
          <h3>Architect</h3>
        </div>
        <div className={styles.subContainer}>
          <h1>Mr. Megay Penjor</h1>
          <h3>Social Expert</h3>
        </div>
        <div className={styles.subContainer}>
          <h1>Mr. Dallu Rai</h1>
          <h3>Finance</h3>
        </div>
        <div className={styles.subContainer}>
          <h1>Mr. Sujan Giri</h1>
          <h3>Assistant Communication Officer</h3>
        </div>
      </div>
    </main>
  );
}
