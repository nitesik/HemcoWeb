import Link from "next/link";
import { useState } from "react";
import hamburger from "../Images/hamburger.png"
import close from "../Images/close.png"
import Image from "next/image";

function MobileNav() {

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <div className="nav mobileNav">
      <div className="inner-nav">
        <Link href={"/"} className="header">HEMCO</Link>
        {menuOpened ? <Image onClick={() => setMenuOpened(false)} className="image" src={close} alt="hamburger" /> : <Image onClick={() => setMenuOpened(true)} className="image" src={hamburger} alt="hamburger" />}
      </div>
      {menuOpened && <div className="nav-components">
        <div className="innerNav-components">
          <Link onClick={() => setMenuOpened(false)} href="/" className="text">HOME</Link>
          <Link onClick={() => setMenuOpened(false)} href="/AboutUs" className="text">ABOUT</Link>
          <Link onClick={() => setMenuOpened(false)} href="/WhatWeDo" className="text">WHAT WE DO</Link>
          <Link onClick={() => setMenuOpened(false)} href="/KeyWorks" className="text">KEY WORKS</Link>
          <Link onClick={() => setMenuOpened(false)} href="/TalkToUs" className="text">TALK TO US</Link>
        </div>
      </div>}
    </div>
  )
}

function Nav({scrollY, current, setCurrent} : any) {


  return (
    <div>
      <MobileNav />
      <div className={`${scrollY <= 50 ? "top" : "nav"} desktopNav`}>
        <Link onClick={() => setCurrent("Home")} href={"/"} className="logo">HEMCO</Link>
        <div className="navComponents">
          <Link className={current === "Home" ? "select" : ""} onClick={() => setCurrent("Home")} href="/">HOME</Link>
          <Link className={current === "AboutUs" ? "select" : ""} onClick={() => setCurrent("AboutUs")} href="/AboutUs">ABOUT US</Link>
          <Link className={current === "WhatWeDo" ? "select" : ""} onClick={() => setCurrent("WhatWeDo")} href="/WhatWeDo">WHAT WE DO</Link>
          <Link className={current === "KeyWorks" ? "select" : ""} onClick={() => setCurrent("KeyWorks")} href={"/KeyWorks"}>Key Works</Link>
        </div>
        <Link href={"/TalkToUs"} className="button" onClick={() => setCurrent("")}>TALK TO US</Link>
      </div>
    </div>
  )
}

export default Nav;