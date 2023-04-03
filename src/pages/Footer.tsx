import Image from "next/image";
import Link from "next/link";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";


function Footer() {

  
  return (
    <div className="footer">
        <div className="innerFooter">
          <div className="upper">
            <div>
              <div className="title">Information</div>
              <Link href={"/"}>HOME</Link>
              <Link href={"/AboutUs"}>ABOUT US</Link>
              <Link href={"/WhatWeDo"}>WHAT WE DO</Link>
              <Link href={"/KeyWorks"}>KEY WORKS</Link>
              <Link href={"/TalkToUs"}>CONTACT</Link>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/hemcoToursAndTreks/" target="_blank"><Image className="image" src={facebook} alt="" /></a>
              <Image style={{cursor: "not-allowed"}} className="image" src={instagram} alt="" />
              <Image style={{cursor: "not-allowed"}} className="image" src={youtube} alt="" />
            </div>
            <div>
              <div className="title">HEMCO</div>
              <div className="text">hemc2010@gmail.com</div>
              <div className="text">Post box 342</div>
              <div className="description">
                <div>Mothithang</div>
                <div>Thimphu</div>
                <div>Bhutan</div>
              </div>
            </div>
          </div>
          <div className="lower">
            <div className="text">HEMCO is a civil engineering company based in Thimphu, Bhutan. The company provides a wide range of services, including civil engineering, infrastructure development, project management, and construction. HEMCO's team of experienced professionals are committed to providing high-quality services that meet the needs of their clients. The company is dedicated to delivering projects on time and within budget, while maintaining the highest standards of safety and quality. HEMCO has established a strong reputation for excellence in the civil engineering industry in Bhutan, and is committed to contributing to the development and growth of the country.</div>
            <div className="text">© 2023 HEMCo. All Rights Reserved.</div>
          </div>
        </div>
      </div>
  );
}

export default Footer;