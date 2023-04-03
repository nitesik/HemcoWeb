import styles from "../styles/TalkToUsStyles.module.css";

function TalkToUs() {

  return (
    <div className={styles.container}>
      <div className={styles.firstComponent}>
        <div className={styles.innerFirstComponent}>
          <div>
            <div className={styles.text}>CALL</div>
            <div className={styles.header}>17110410</div>
          </div>
          <div>
            <div className={styles.text}>EMAIL</div>
            <div className={styles.header}>hemc2010@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={styles.address}>
        <div className={styles.left}>
          <iframe
            className={styles.location}
            loading="lazy"
            height="100%"
            width="100%"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBxCCpSPfjecgyoN-iwjmwBtdRWEZbQnH4&q=hemco+thimphu">
          </iframe>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>HEMCo</div>
          <div className={styles.text}>Post box 342</div>
          <div className={styles.text}>Mothithang</div>
          <div className={styles.text}>Thimphu</div>
          <div className={styles.text}>Bhutan</div>
        </div>
      </div>
    </div>
  )
}

export default TalkToUs;