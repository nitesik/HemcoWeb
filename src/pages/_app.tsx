import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";

import "~/styles/globals.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";

const MyApp: AppType = ({ Component, pageProps }) => {

  const [scrollY, setScrollY] = useState<number>(0);
  const [current, setCurrent] = useState<string>("AboutUs");

  function getScrollY() {
    setScrollY(window.scrollY);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", getScrollY);
  });
  
  
  
  return (
    <div>
      <Nav scrollY={scrollY} setCurrent={setCurrent} current={current} />
      <Component {...pageProps} />
      <Banner />
      <Footer />
    </div>);
};

export default MyApp;
