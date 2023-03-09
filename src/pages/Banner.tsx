import Image from "next/image";
import Link from "next/link";
import arrow_right from "../../src/Images/arrow-right.png";


function Banner() {

  return (
    <Link href={"/TalkToUs"} className="banner">
        <div className="innerBanner">
          <div>
            <div className="text">FIND OUT MORE</div>
            <div className="header">Book a call at a time that suits you</div>
          </div>
          <Image className="image" src={arrow_right} alt="arrow"></Image>
        </div>
      </Link>
  )
}

export default Banner;