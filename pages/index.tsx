import gsap from "gsap";
import Link from "next/link";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Cursor from "../Components/Cursor/Cursor";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Line from "../Components/Line";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Head from "next/head";

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const Main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isNavOpen) {
      gsap.to(Main.current, {
        left: "60%",
        transition: "all 1.5s ease",
      });
    } else {
      gsap.to(Main.current, {
        left: "0",
        transition: "all 1.5s ease",
      });
    }
  }, [isNavOpen]);

  return (
    <>
      <Head>
        <title>Sachin Pasi</title>
      </Head>
      <Cursor />
      {/* <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} /> */}
      <div
        ref={Main}
        id="main"
        className="relative left-0 w-11/12  md:w-4/5 max-w-[1200px] opacity-100 my-30 mx-auto min-h-screen"
      >
        <Header />
        <Line  />
        <Projects />
        <Line />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
