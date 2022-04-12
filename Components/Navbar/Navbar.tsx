import gsap from "gsap";
import Link from "next/link";
import React, { MutableRefObject, useRef } from "react";

interface Nav {
  setIsNavOpen: (value: boolean) => void;
  isNavOpen: boolean;
}

const Navbar = ({ isNavOpen, setIsNavOpen }: Nav) => {
  const Nav: MutableRefObject<HTMLDivElement> = useRef(null);

  const List: MutableRefObject<HTMLDivElement> = useRef(null);

  const Line1: MutableRefObject<HTMLDivElement> = useRef(null);
  const Line2: MutableRefObject<HTMLDivElement> = useRef(null);
  const Line3: MutableRefObject<HTMLDivElement> = useRef(null);

  const HandleToggle = () => {
    setIsNavOpen(!isNavOpen);
    if (isNavOpen) {
      gsap.to(Line1.current, {
        rotate: "0",
        top: "0px",
      });
      gsap.to(Line3.current, {
        rotate: "0",
        top: "0px",
      });
      gsap.to(Line2.current, {
        scaleX: "1",
      });

      gsap.to(Nav.current, {
        width: "45px",
      });

      gsap.to(List.current, {
        left: "-200px",
        opacity: "0",
      });
    } else {
      gsap.to(Line1.current, {
        rotate: "45",
        top: "7px",
      });
      gsap.to(Line3.current, {
        rotate: "-45",
        top: "-7px",
      });
      gsap.to(Line2.current, {
        scaleX: "0",
      });

      gsap.to(Nav.current, {
        width: "50%",
      });

      gsap.to(List.current, {
        left: "45px",
        opacity: "1",
      });
    }
  };

  const Scroll = (to: any) => {
    HandleToggle();

    setTimeout(() => {
      document.getElementById(to)?.scrollIntoView();
    }, 2000);
  };

  return (
    <div
      ref={Nav}
      style={Styles}
      className="fixed top-0 bottom-0 left-0 h-full w-[45px] border-r border-[#eeeeee]"
    >
      <button
        onClick={HandleToggle}
        className="relative left-[30px] top-[30px] h-[30px] w-[30px] button"
      >
        <div
          ref={Line1}
          style={{ transition: "all 0.3s ease" }}
          className="w-full h-[1px] bg-black relative my-[6px] top-0 "
        ></div>
        <div
          ref={Line2}
          style={{ transition: "all 0.2s ease" }}
          className="w-full h-[1px] bg-black relative my-[6px] top-0 "
        ></div>{" "}
        <div
          ref={Line3}
          style={{ transition: "all 0.3s ease" }}
          className="w-full h-[1px] bg-black relative my-[6px] top-0 "
        ></div>
      </button>

      <div
        ref={List}
        style={{
          transition: "all 2s ease",
        }}
        className="absolute w-full text-center border-l border-[#eeeeee] my-8 -ml-52 "
      >
        <li className="list-none my-[calc(100vh/6)] w-full ">
          <Link href="#about">
            <a className="text-4xl border-b border-black font-IvyMode link">
              About
            </a>
          </Link>
        </li>
        <li className="list-none my-[calc(100vh/6)] w-full ">
          <button onClick={() => Scroll("projects")}>
            <a className="text-4xl border-b border-black font-IvyMode link ">
              Projects
            </a>
          </button>
        </li>
        <li className="list-none my-[calc(100vh/6)] w-full ">
          <button onClick={() => Scroll("skills")}>
            <a className="text-4xl border-b border-black font-IvyMode link ">
              Skills
            </a>
          </button>
        </li>
      </div>
    </div>
  );
};

export default Navbar;

const Styles = {
  transition: "all 1.5s ease",
};
