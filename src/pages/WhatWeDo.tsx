import Image from "next/image";
import styles from "../styles/WhatWeDoStyles.module.css";
import engineers from "../Images/engineers.png";
import experience from "../Images/experience.png";
import task from "../Images/task.png";
import team from "../Images/team-building.png";

import environmentAssessment from "../Images/environment-assessment.png";
import structuralDesign from "../Images/structural-design.png";
import landSurveying from "../Images/land-surveying.png";
import architecturalDesign from "../Images/architectural-drawing.png";

function WhatWeDo() {

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.innerIntro}>
          <div className={styles.text}>WHAT WE DO</div>
          <div className={styles.header}>We help people build Beautiful Buildings</div>
        </div>
      </div>
      <div className={styles.firstComponent}>
        <div className={styles.innerFirstComponent}>
          <Image src={engineers} alt="" />
          <div className={styles.header}>We're more than just engineers...</div>
          <div className={styles.text}>We're problem solvers who use our technical expertise to create innovative solutions, and we're collaborators who work closely with other disciplines to bring ideas to life. As leaders in our field, we use our skills to make a positive impact on the world around us. We're also lifelong learners who are always seeking to expand our knowledge and skills, and as critical thinkers, we can analyze complex systems and identify areas for improvement. We're proud to be engineers, but we're so much more than that."</div>

          <div className={styles.iconGroup}>
            <div>
              <Image src={team} alt="" />
              <div className={styles.title}>Your HEMCo Team</div>
              <div className={styles.text}>HEMCo is a highly skilled and experienced engineering team that consistently delivers exceptional results. With a focus on innovation, quality, and customer satisfaction, they have earned a reputation as one of the most reliable and trusted engineering firms in the industry.</div>
            </div>
            <div>
              <Image src={task} alt="" />
              <div className={styles.title}>Planning</div>
              <div className={styles.text}>Effective planning is a crucial element in the success of any project. Without proper planning, projects can easily go off track, exceed their budget, miss their deadlines, or fail to meet their intended goals.</div>
            </div>
            <div>
              <Image src={experience} alt="" />
              <div className={styles.title}>Team performance</div>
              <div className={styles.text}>As an engineering team, we believe that working on a variety of projects over the years is essential to gaining experience and expanding our knowledge base. Every project we undertake is unique, with its own set of challenges and opportunities.</div>
            </div>
          </div>

        </div>

        
      </div>
      <div className={styles.secondComponent}>
        <div className={styles.innerSecondComponent}>
          <div className={styles.header}>We've worked with hundreds of small businesses. Business owners love our refreshing approach to business and how we use technology to make their lives easier and more fun. Here are some ways we can help you…</div>
        </div>
      </div>
      <div className="outer-triangle"><div className="triangle"></div></div>
      <div className={styles.thirdComponent}>
        <div className={styles.outerMenu}>
          <div className={styles.menu}>
            <div className={styles.text} onClick={() => document.getElementById("Environment")?.scrollIntoView({behavior: "smooth", block: "center"})}>Environment Assessment</div>
            <div className={styles.text} onClick={() => document.getElementById("Structural")?.scrollIntoView({behavior: "smooth", block: "center"})}>Structural Design</div>
            <div className={styles.text} onClick={() => document.getElementById("Architectural")?.scrollIntoView({behavior: "smooth", block: "center"})}>Architectural Design</div>
            <div className={styles.text} onClick={() => document.getElementById("Land")?.scrollIntoView({behavior: "smooth", block: "center"})}>Land Surveying</div>
          </div>
        </div>
        <div className={styles.outerFirstWork} style={{backgroundColor: "#f0eff3"}} id="Environment">
          <div className={styles.firstWork}>
            <div className={styles.header}>Environment Assessment</div>
            <div className={styles.lower}>
              <div className={styles.left}>
                <Image className={styles.image} src={environmentAssessment} alt="pic" />
              </div>
              <div className={styles.text}>Environmental assessment is a process of evaluating the potential environmental impacts of a proposed project or development. It involves analyzing the natural and human environment to identify potential impacts and ways to mitigate or avoid them. Environmental assessment is a crucial step in the planning and decision-making process for any project, as it helps to ensure that the project is sustainable and does not harm the environment or local communities.</div>
            </div>
          </div> 
        </div>
        <div className="outer-triangle"><div className="triangle" style={{borderTopColor: "#f0eff3"}}></div></div>
        <div className={styles.outerFirstWork} style={{backgroundColor: "white"}} id="Structural">
          <div className={styles.firstWork}>
            <div className={styles.header}>Structural Design</div>
            <div className={styles.lower}>
              <div className={styles.left}>
                <Image className={styles.image} src={structuralDesign} alt="pic" />
              </div>
              <div className={styles.text}>Structural design is a key component of the engineering field that focuses on the design and analysis of structures that support loads, such as buildings, bridges, towers, and other types of infrastructure. The main goal of structural design is to ensure that structures are safe, reliable, and can withstand the forces and loads that they will be exposed to over their expected lifespan.</div>
            </div>
          </div> 
        </div>
        <div className="outer-triangle" style={{backgroundColor: "#f0eff3"}}><div className="triangle" style={{borderTopColor: "white"}}></div></div>
        <div className={styles.outerFirstWork} style={{backgroundColor: "#f0eff3"}} id="Architectural">
          <div className={styles.firstWork}>
            <div className={styles.header}>Architectural Design</div>
            <div className={styles.lower}>
              <div className={styles.left}>
                <Image className={styles.image} src={architecturalDesign} alt="pic" />
              </div>
              <div className={styles.text}>Architectural design is a discipline within the field of architecture that involves the planning, design, and construction of buildings and other physical structures. Architectural design is a complex process that involves a range of considerations, including the aesthetic, functional, environmental, and social aspects of a project.</div>
            </div>
          </div> 
        </div>
        <div className="outer-triangle"><div className="triangle" style={{borderTopColor: "#f0eff3"}}></div></div>
        <div className={styles.outerFirstWork} style={{backgroundColor: "white"}} id="Land">
          <div className={styles.firstWork}>
            <div className={styles.header}>Land Surveying</div>
            <div className={styles.lower}>
              <div className={styles.left}>
                <Image className={styles.image} src={landSurveying} alt="pic" />
              </div>
              <div className={styles.text}>Land surveying is a process of measuring and mapping the physical features and boundaries of a piece of land. The main goal of land surveying is to determine the precise location, shape, and size of a piece of land, as well as its elevation and any natural or man-made features that may impact its use or development. Land surveying typically involves the use of various equipment and techniques, such as Global Positioning System (GPS) devices, total stations, and geographic information systems (GIS) software. </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo;