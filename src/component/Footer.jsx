import React from "react";
import Logo from "../assets/JOBME.png";
import SocialIcons from "../assets/socialIcons.png";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
  return (
    <div className="border-y-2 lg:px-20 px-3 py-10 flex justify-between my-4 border-y-gray-300">
      <span className="flex flex-col gap-10">
        <span className="text-2xl uppercase">
          Igeodda <span className="lowercase">Inc</span>
        </span>
        <span className="flex gap-3 items-center">
          <span>Find us on :</span>
          <span>
            {" "}
            <img src={SocialIcons} alt="" />
          </span>
        </span>
      </span>
      
    </div>
  );
};

export default Footer;
