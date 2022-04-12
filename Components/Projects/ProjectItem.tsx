import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ Name, Website, Description, Stack, src }: any) => {
  return (
    <div
      style={{
        flex: "1 0 41%",
      }}
      className="py-[60px] flex self-start border-t border-[#eeeeee]  w-2/4 align-top flex-col  gap-y-8  project "
    >
      <div>
        <h3 className="font-IvyMode text-3xl font-semibold my-[6px]">{Name}</h3>
        <h4 className="text-xs my-8 mt-5 font-Freight uppercase font-medium tracking-wide flex items-center gap-x-4">
          <Link href={Website ? Website : "/"}>
            <a className="border-b border-[#979797] inline-block self-start link">
              website
            </a>
          </Link>
          <Link href="/">
            <a className="border-b border-[#979797] inline-block self-start link">
              GitHub
            </a>
          </Link>
        </h4>
        <p className="leading-[1.5em] text-[13.5px] ">{Description}</p>
        <div className="mt-6 text-xl text-black flex items-center gap-x-4  ">
          {Stack?.map(({ Icon, Link }: any, i: any) => (
            <IconComponent Icon={Icon} href={Link} key={i} />
          ))}
        </div>
      </div>
      <div className="w-full h-[539px] relative">
        {src && (
          <Image
            src={src}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectItem;

const IconComponent = ({ Icon, href }: any) => (
  <Link href={href}>
    <a className="link">
      <Icon />
    </a>
  </Link>
);
