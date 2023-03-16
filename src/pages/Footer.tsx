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
              <Image className="image" src={facebook} alt="" />
              <Image className="image" src={instagram} alt="" />
              <Image className="image" src={youtube} alt="" />
            </div>
            <div>
              <div className="title">HEMCO</div>
              <div className="text">hemco@gmail.com</div>
              <div className="text">1234 5678</div>
              <div className="description">
                <div>Mothithang</div>
                <div>Thimphu</div>
                <div>11001</div>
                <div>Bhutan</div>
              </div>
            </div>
          </div>
          <div className="lower">
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet felis nisl, sed gravida turpis pretium non. Aenean ac lacus sit amet mauris faucibus elementum ut eu neque. Morbi hendrerit tincidunt mi, in faucibus nunc pulvinar sed. Maecenas egestas libero vel est volutpat.</div>
            <div className="text">© 2023 HEMCo. All Rights Reserved.</div>
          </div>
        </div>
      </div>
  );
}

export default Footer;