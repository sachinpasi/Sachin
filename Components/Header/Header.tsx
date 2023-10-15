import React from "react";

const Header = () => {
  return (
    <header className="w-full  flex flex-col justify-center py-8 min-h-[85vh] md:min-h-[90vh] relative -mt-4">
      <h3 className=" text-[0.9em] uppercase  tracking-[1px]">
        Hi! My name is Sachin Pasi
      </h3>
      <h1 className=" text-[3.5em] md:text-[6.5em] my-8 font-IvyMode font-black md:font-semibold leading-tight">
        I solve problems through design and technology.
      </h1>
      <p className="leading-[1.5em]  max-w-[1600px] font-IvyMode  tracking-wider ">
        From{" "}
        <a
          className="border-b py-1 border-[#000] hover:border-[#fe184f]"
          href="/work/category:website"
        >
          web design &amp; front-end development
        </a>
        {"  "}→ I create work that sits at the intersection of art, design and
        technology.
      </p>
      <button className=" bg-transparent border-none flex items-center absolute -bottom-1 md:bottom-4 group link">
        <div className="w-14 h-14 border border-black  rounded-full relative mr-6">
          <svg
            style={{
              transition: "all 0.5s ease",
            }}
            className="absolute -left-2/4 top-0 h-14 w-14 object-contain text-black group-hover:-left-[35%] "
            viewBox="0 0 72 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.7071 8.67732C72.0976 8.28679 72.0976 7.65363 71.7071 7.2631L65.3431 0.899141C64.9526 0.508617 64.3195 0.508617 63.9289 0.899141C63.5384 1.28967 63.5384 1.92283 63.9289 2.31336L69.5858 7.97021L63.9289 13.6271C63.5384 14.0176 63.5384 14.6508 63.9289 15.0413C64.3195 15.4318 64.9526 15.4318 65.3431 15.0413L71.7071 8.67732ZM8.75098e-08 8.97021L71 8.97021L71 6.97021L-8.75098e-08 6.97021L8.75098e-08 8.97021Z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <a
          className="text-2xl font-IvyMode tracking-wide"
          href="/Sachin's Resume.pdf"
          download
        >
          Resume
        </a>
      </button>
    </header>
  );
};

export default Header;
