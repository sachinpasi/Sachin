import Image from "next/image";
import Link from "next/link";
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="w-full">
      <div className="flex justify-between items-center flex-wrap  gap-x-6 ">
        <Link href="https://nextjs.org/">
          <a className="relative w-36  h-20 link">
            <Image src="/nextjs.svg" layout="fill" alt="" objectFit="contain" />
          </a>
        </Link>
        <Link href="https://expressjs.com/">
          <a className="relative w-36  h-28 link">
            <Image
              src="/expressjs.svg"
              layout="fill"
              alt=""
              objectFit="contain"
              objectPosition="center"
              className="flex justify-center items-center "
            />
          </a>
        </Link>
        <Link href="https://www.mongodb.com/">
          <a className="relative w-36  h-28 link">
            <Image
              src="/mongodb.svg"
              layout="fill"
              alt=""
              objectFit="contain"
              objectPosition="center"
              className="flex justify-center items-center grayscale invert-0"
            />
          </a>
        </Link>
        <Link href="https://nodejs.org/en/">
          <a className="relative w-36  h-28 link">
            <Image
              src="/nodejs.svg"
              layout="fill"
              alt=""
              objectFit="contain"
              objectPosition="center"
              className="flex justify-center items-center grayscale invert-0"
            />
          </a>
        </Link>
        <Link href="https://www.framer.com/motion/">
          <a className="relative w-36  h-28 link">
            <Image
              src="/framer.svg"
              layout="fill"
              alt=""
              objectFit="contain"
              objectPosition="center"
              className="flex justify-center items-center grayscale invert-0"
            />
          </a>
        </Link>
        <Link href="https://greensock.com/gsap/">
          <a
            style={{
              transition: "transfrom 0.3s cubic-bezier(0.34,1.66,0.64,1) ",
            }}
            className="relative w-36  h-28 link "
          >
            <Image
              src="/gsap.svg"
              layout="fill"
              alt=""
              objectFit="contain"
              objectPosition="center"
              className="flex justify-center items-center grayscale invert "
            />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Skills;
