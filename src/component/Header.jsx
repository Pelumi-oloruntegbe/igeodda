import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex lg:px-20 px-4 lg:py-10 py-4 w-screen items-center justify-between">
      <div className="">
        <Link to="/" className="text-2xl uppercase">
          Igeodda <span className="lowercase">Inc</span>
        </Link>
      </div>
      <div className="lg:flex hidden gap-5">
        <Link to="/" className=" text-lg font-medium ">
          Home
        </Link>
        <Link to="/ourservices" className=" text-lg font-medium">
          Services
        </Link>
        <Link to="/careerspage" className=" text-lg font-medium">
          Careers
        </Link>
        <Link to="/gallery" className=" text-lg font-medium">
          Gallery
        </Link>

        <Link to="/contactpage" className=" text-lg font-medium">
          Contact Us
        </Link>
        <Link to="/resources" className=" text-lg font-medium">
          Resources
        </Link>
        <Link to="/resources" className=" text-lg font-medium">
          Blog
        </Link>
      </div>
      <div className="lg:hidden flex" onClick={toggleMenu}>
        {isOpen ? (
          <CgClose className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 bg-white py-8 px-2 z-20 flex flex-col text-start w-[90%] rounded-md">
          <div className="flex flex-col px-2 gap-4 justify-center items-center">
            <Link to="/">
              <span className="">Home</span>
            </Link>
            <Link to='/ourservices' className="">
              <span>Our Services</span>
            </Link>
            <Link to="/careerspage">
              <span className="">Careers</span>
            </Link>
            <Link to="/gallery">
              <span className="">Gallery</span>
            </Link>
            <Link to="/contactpage">
              <span className="">Contact us</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
