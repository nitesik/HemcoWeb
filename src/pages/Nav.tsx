import Link from "next/link";
import { useState } from "react";
import hamburger from "../Images/hamburger.png";
import close from "../Images/close.png";
import Image from "next/image";

function MobileNav() {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <div className="nav mobileNav">
      <div className="inner-nav">
        <Link href={"/"} className="header">
          HEMCO
        </Link>
        {menuOpened ? (
          <Image
            onClick={() => setMenuOpened(false)}
            className="image"
            src={close}
            alt="hamburger"
          />
        ) : (
          <Image
            onClick={() => setMenuOpened(true)}
            className="image"
            src={hamburger}
            alt="hamburger"
          />
        )}
      </div>
      {menuOpened && (
        <div className="nav-components">
          <div className="innerNav-components">
            <Link
              onClick={() => setMenuOpened(false)}
              href="/"
              className="text"
            >
              HOME
            </Link>
            <Link
              onClick={() => setMenuOpened(false)}
              href="/AboutUs"
              className="text"
            >
              ABOUT
            </Link>
            <Link
              onClick={() => setMenuOpened(false)}
              href="/WhatWeDo"
              className="text"
            >
              WHAT WE DO
            </Link>
            <Link
              onClick={() => setMenuOpened(false)}
              href="/KeyWorks"
              className="text"
            >
              KEY WORKS
            </Link>

            <Link
              onClick={() => setMenuOpened(false)}
              href="/Employees"
              className="text"
            >
              EMPLOYEES
            </Link>

            <Link
              onClick={() => setMenuOpened(false)}
              href="/TalkToUs"
              className="text"
            >
              TALK TO US
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

interface props {
  scrollY: boolean;
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}

function Nav({ scrollY, current, setCurrent }: props) {

  return (
    <div>
      <MobileNav />
      <div className={`${scrollY ? "top" : "nav"} desktopNav`}>
        <Link onClick={() => setCurrent("Home")} href={"/"} className="logo">
          HEMCO
        </Link>
        <div className="navComponents">
          <Link className={current === "" ? "select" : ""} href="/">
            HOME
          </Link>
          <Link
            className={current === "AboutUs" ? "select" : ""}
            href="/AboutUs"
          >
            ABOUT US
          </Link>
          <Link
            className={current === "WhatWeDo" ? "select" : ""}
            href="/WhatWeDo"
          >
            WHAT WE DO
          </Link>
          <Link
            className={current === "KeyWorks" ? "select" : ""}
            href={"/KeyWorks"}
          >
            KEY WORKS
          </Link>
          <Link
            className={current === "Employees" ? "select" : ""}
            href={"/Employees"}
          >
            EMPLOYEES{" "}
          </Link>
        </div>
        <Link href={"/TalkToUs"} className="button">
          TALK TO US
        </Link>
      </div>
    </div>
  );
}

export default Nav;
