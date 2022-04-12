import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-baseline py-40">
      <a className="text-xl font-IvyMode flex items-center link">
        BACK TO TOP
        <svg
          viewBox="0 0 30 30"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-4 h-4 w-8 opacity-80 animate-bounce"
        >
          <path
            d="M16.5933 14.9812L29.3393 25.217C30.2202 25.9245 30.2202 27.0685 29.3393 27.7684L27.2212 29.4694C26.3402 30.1769 24.9157 30.1769 24.044 29.4694L15.0094 22.214L5.9747 29.4694C5.09372 30.1769 3.66917 30.1769 2.79756 29.4694L0.660731 27.776C-0.220244 27.0685 -0.220244 25.9245 0.660731 25.2245L13.4067 14.9887C14.2877 14.2737 15.7123 14.2737 16.5933 14.9812ZM13.4067 0.530607L0.66073 10.7664C-0.220245 11.4739 -0.220244 12.6179 0.66073 13.3179L2.77882 15.0188C3.65979 15.7263 5.08435 15.7263 5.95595 15.0188L14.9906 7.76342L24.0253 15.0188C24.9063 15.7263 26.3308 15.7263 27.2024 15.0188L29.3205 13.3179C30.2015 12.6104 30.2015 11.4664 29.3205 10.7664L16.5745 0.530606C15.7123 -0.176871 14.2877 -0.176871 13.4067 0.530607Z"
            fill="#000000"
          ></path>
        </svg>
      </a>
      <div className="text-right">
        <a
          className="text-2xl tracking-wide font-IvyMode link"
          href="mailto:sachinpasi2000@gmail.com"
        >
          Sachinpasi2000@gmail.com
        </a>
        <div className="mt-4 pt-4 border-t border-black flex items-center justify-end gap-x-5">
          <Link href="https://www.linkedin.com/in/sachin-pasi-7713191b6/">
            <a
              target="_blank"
              className="text-xl font-Freight link"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </Link>
          <Link href="https://github.com/sachinpasi">
            <a
              target="_blank"
              className="text-xl font-Freight link"
              rel="noopener noreferrer"
            >
              github
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
