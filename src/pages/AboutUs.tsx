
import Image from "next/image";
import styles from "../styles/AboutUs.module.css";
import logo from "../Images/logo.svg";
import connection from "../Images/connection.png"
import partners from "../Images/partners.png"
import work_tools from "../Images/work-tools.png"
import help_desk from "../Images/help-desk.png"

function AboutUs() {

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.innerIntro}>
          <div className={styles.text}>ABOUT US</div>
          <div className={styles.header}>We believe constructions can be beautiful</div>
        </div>
      </div>
      <div className={styles.firstComponent}>
        <div className={styles.innerFirstComponent}>
          <Image className={styles.logo} src={logo} alt="logo" />
          <div className={styles.text}>Himalaya Engineering and Management Consultancy (HEMCo) was founded in 2009 as a partnership of national professional Engineers with extensive working experience in various fields. HEMCo has a strong Engineering team, capable and experienced in various fields, the members having worked for many years in different organizations has gathered wide range of experience.</div>
          <br />
          <div className={styles.text}>HEMCo has established permanent associations with International firms to implement complex projects, introduce new designs and technology and transfer of knowledge to the national staffs to build local capacity.  The principle of HEMCo partnership is to maintain a strong Engineering team with up-to-date expertise for efficient utilization in national infrastructure development.</div>

          <Image className={styles.image} src={connection} alt="connection" />
          <div className={styles.header}>Organization and Establishment</div>
          <div className={styles.text}>As a Government - licensed Engineering Consultancy firm, the competence of HEMCo is established and recognized.
          </div>
          <br />
          <div className={styles.text} style={{fontWeight: 700}}>The core strength of HEMCo is a permanent team of professionals. HEMCo is established in Thimphu with an office, library, communication facilities, computers and other professional equipment. The team also has huge knowledge on construction management, training of people in managing projects, computer aided design, procurement and Arbitration.</div>
        </div>
      </div>
      <div className={styles.secondComponent}>
        <div className={styles.innerSecondComponent}>
          <div className={styles.header}>
            HEMCo, based on its staffs' years of professional experiences and knowledge aims to provide services in the following fields:
          </div>
          <ol>
            <li>Architectural and engineering services mostly comprising buildings such as Offices, residences, commercial, industrial, hospitals, schools and other institutional buildings</li>
            <li>Planning, survey and designs of farm, feeder roads, highways and bridges</li>
            <li>Carry out feasibility studies, environmental, social studies and geotechnical studies</li>
            <li>Prepare and carry out retrofitting of existing structures</li>
            <li>Provide management services and supervision for implementation of projects</li>
            <li>Preparation of tender documents, Bill of Quantities and specifications</li>
            <li>Training of practicing engineers on contract management, supervision, procurement, and computer aided designs such as AutoCAD, STAAD, LisCAD, Microsoft Project etc.</li>
            <li>Preliminary or detail estimate of building(s) providing upto-date valuation corresponding to the market rate escalation or depreciation.</li>
          </ol>
          <div className={styles.text}>The team members of the firm have sound experience in the above discipline and where ever require the firm will seek expertise with the associated external firms.</div>
        </div>
      </div>
      <div className={styles.thirdComponent}>
        <div className={styles.innerThirdComponent}>
          <div className={styles.header}>Our principles</div>
          <ul>
            <li className={styles.text}>HEMCo is conversant with local conditions and regulations for detailed design of civil works in accordance with sound practice and national requirements.</li>
            <li className={styles.text}>HEMCo is familiar with overcoming constraints in the Kingdom's construction industry, particularly concerning the availability of a skilled workforce, the range of construction equipment, and genuine as well as substandard building materials.  Knowledge of these constraints contribute to specifying successful outcomes in advance and ensuring success in supervision</li>
          </ul>
          <div className={styles.iconGroup}>
            <div>
              <Image src={help_desk} alt="" />
              <div className={styles.title}>We've got your back</div>
            </div>
            <div>
              <Image src={partners} alt="" />
              <div className={styles.title}>Teamwork makes the dream work</div>
            </div>
            <div>
              <Image src={work_tools} alt="" />
              <div className={styles.title}>We'll find a way</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;