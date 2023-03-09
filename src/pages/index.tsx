import styles from "../styles/HomeStyles.module.css";
import { type NextPage } from "next";
import Image from "next/image";

import logo from "../Images/logo.svg";
import compass from "../Images/compass.png";
import hassle from "../Images/hassle-free.png";
import support from "../Images/support.png";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.innerIntro}>
          <Image className={styles.image} src={logo} alt="icon" />
          <div className={styles.text}>Himalayan Engineering & Management Co.</div>
          <div className={styles.header}>Are you looking to get the best out of your goals?</div>
          <div className={styles.description}>We provide competent project planning, design, supervision and implementation as well as to provide technical and managerial support to Government bodies and private clients. The competence of its staff, its commitment to high standards and its proven ability to manage complex assignments and projects even in technically challenging and difficult geographical environments were proven by their past experiences</div>
        </div>
      </div>
      <div className="outer-triangle"><div className="triangle"></div></div>
      <div className={styles.features}>
        <div className={styles.innerFeatures}>
          <div className={styles.column}>
            <Image className={styles.image} src={compass} alt="feature"></Image>
            <div className={styles.header}>Plan for a bright future</div>
            <div className={styles.description}>Helping someone plan for a bright future requires a combination of goal-setting, planning, financial management, education and career development, and ongoing support. By working together, we can help the team we're working with to achieve their goals and build a brighter future.</div>
          </div>
          <div className={styles.column}>
            <Image className={styles.image} src={hassle} alt="feature"></Image>
            <div className={styles.header}>Remove the hassle</div>
            <div className={styles.description}>Helping someone remove their hassle requires a collaborative effort and a willingness to support and encourage one another. By working together, the team can help the person overcome their challenges and achieve success.</div>
          </div>
          <div className={styles.column}>
            <Image className={styles.image} src={support} alt="feature"></Image>
            <div className={styles.header}>Support when you need it</div>
            <div className={styles.description}>Overall, supporting an individual is about being there for them, listening to them, providing resources and encouragement, collaborating with them, and celebrating their successes. By working together as a team, individuals can feel more supported, valued, and motivated to achieve their goals.</div>
          </div>
        </div>
      </div>
      <div className={styles.thirdComponent}>
        <div className={styles.innerThirdComponent}>
          <div className={styles.left}> 
            <div className={styles.header}>We love working with agencies</div>
            <Link href={"/KeyWorks"} className={styles.button}>GET INSPIRED</Link>
          </div>
          <div className={styles.right}>
            <div className={styles.header}>More than just engineers</div>
            <div className={styles.description}>As engineers, we bring a unique set of technical skills and knowledge to the table. But we are more than just engineers; we are also problem solvers, innovators, and creators who use our expertise to tackle complex challenges and improve the world around us</div>
            <Link href={"/WhatWeDo"} className={styles.button}>WHAT WE DO</Link>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Home;
