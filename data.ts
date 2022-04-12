import { SiNextdotjs, SiExpress, SiMongodb, SiFramer } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const Data = {
  Projects: [
    {
      Name: "Decor",
      Github: "https://github.com/sachinpasi/Decor-Frontend",
      Website: "https://decor-frontend.vercel.app/",
      Description:
        "Decor is Luxury Ecommerce Store, with Full-Fledged Admin Panel.",
      Stack: [
        { Icon: SiNextdotjs, Link: "https://nextjs.org/" },
        { Icon: SiExpress, Link: "https://expressjs.com/" },
        { Icon: FaNodeJs, Link: "https://nodejs.org/en/" },
        { Icon: SiMongodb, Link: "https://www.mongodb.com/" },
        { Icon: SiFramer, Link: "https://www.framer.com/motion/" },
      ],
      Image: "/images/decor.png",
    },
    {
      Name: "Resume Builder",
      Github: "https://github.com/sachinpasi/Resume-Builder",
      Website: "https://resume-builder-three.vercel.app/",
      Description: "Resume Builder is Web Application to Build Modern Resume.",
      Stack: [{ Icon: SiNextdotjs, Link: "https://nextjs.org/" }],
      Image: "/images/resume-builder.png",
    },
  ],
};
