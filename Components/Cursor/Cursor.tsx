import gsap, { Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";

const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const HandleCircleMovement = (e: any) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: Linear.easeNone,
      });
      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: Linear.easeNone,
      });
    };

    const HandleHover = (e: any) => {
      gsap.to(cursor.current, {
        scale: 0.5,
        duration: 0.3,
      });
      gsap.to(follower.current, {
        scale: 3,
        duration: 0.3,
      });
    };

    const HandleUnHover = (e: any) => {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 0.3,
      });
      gsap.to(follower.current, {
        scale: 1,
        duration: 0.3,
      });
    };

    document.querySelectorAll(".link , .button").forEach((el) => {
      el.addEventListener("mouseenter", HandleHover);
      el.addEventListener("mouseleave", HandleUnHover);
    });

    document.addEventListener("mousemove", HandleCircleMovement);
  }, [cursor, follower]);
  return (
    <>
      <div
        ref={cursor}
        className="fixed w-4 h-4 select-none pointer-events-none z-[5000] rounded-full mix-blend-difference bg-black"
      ></div>
      <div
        ref={follower}
        className="fixed h-8 w-8 select-none pointer-events-none z-[1000] rounded-full -left-2 -top-6 bg-black bg-opacity-50 "
      ></div>
    </>
  );
};

export default Cursor;
