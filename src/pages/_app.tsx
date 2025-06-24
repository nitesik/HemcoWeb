import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"; 

import "~/styles/globals.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";

const MyApp: AppType = ({ Component, pageProps }) => {

  const [scrollY, setScrollY] = useState(false);
  const [current, setCurrent] = useState("/");

  const { asPath } = useRouter();
  
  function getScrollY() {
    setScrollY(window.scrollY <= 50);
  }
  
  useEffect(() => {
    setCurrent(asPath.slice(1));
  });

  useEffect(() => {
    window.addEventListener("scroll", getScrollY);
    document.head.title = "HEMCO" + asPath;
    return () => { window.removeEventListener("scroll", getScrollY); };
  }, []);
  
  return (
    <div>
      <Nav scrollY={scrollY} setCurrent={setCurrent} current={current!} />
      <Component {...pageProps} />
      <Banner />
      <Footer />
    </div>);
};

export default MyApp;
