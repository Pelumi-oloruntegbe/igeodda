import React from "react";
import Header from "../component/Header";
import Hero from "../assets/Contact.png";
import { MdPhoneInTalk } from "react-icons/md";
import Footer from "../component/Footer";

const ContactPage = () => {
  return (
    <div className="w-screen">
      <Header />
      <div className="flex relative">
        <span className="absolute flex">
          <img src={Hero} alt="" className="lg:w-[1440px] w-screen h-[350px]" />
        </span>
        <span className="flex flex-col justify-center z-10 w-screen items-center h-[350px] text-white gap-2">
          <span className="text-3xl">Get In Touch With Us</span>
          <span className="text-lg">We want to hear from you</span>
        </span>
      </div>
      <div className="flex justify-center -mt-10">
        <div className="flex flex-col lg:p-6 p-3 rounded-md bg-[#DBF7FD] lg:w-fit w-screen gap-4 justify-center z-20">
          <span className="flex gap-6">
            <input
              type="text"
              placeholder="Name"
              className=" lg:w-64 w-40 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              className=" lg:w-64 w-40 p-2 rounded-md"
            />
          </span>
          <span className="flex gap-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="lg:w-64 w-40 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Subject"
              className="lg:w-64 w-40 p-2 rounded-md"
            />
          </span>
          <span className="flex gap-4">
            <input
              type="text"
              placeholder="Message"
              className="w-full h-32 p-2 rounded-md"
            />
          </span>
          <span className="text-center bg-[#0DCAF0] rounded-md w-full py-1 text-white">
            Send Message
          </span>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col px-3 lg:gap-24 gap-4 justify-center py-10">
        <span className="flex flex-col rounded-md shadow-3xl py-5 px-10 gap-5 items-center">
          <span className="rounded-full p-5 bg-[#DBF7FD] w-fit">
            <MdPhoneInTalk className="w-10 h-10 text-[#0DCAF0]" />
          </span>
          <span className="flex flex-col text-center">
            <span className="font-bold">Call us</span>
            <span className="text-sm font-light">
              Lorem ipsum dolor sit amet
            </span>
            <span className="text-xs text-[#0DCAF0]">+1-289-686-2681</span>
          </span>
        </span>
        <span className="flex flex-col rounded-md shadow-3xl py-5 px-10 gap-5 items-center">
          <span className="rounded-full p-5 bg-[#DBF7FD] w-fit">
            <MdPhoneInTalk className="w-10 h-10 text-[#0DCAF0]" />
          </span>
          <span className="flex flex-col text-center">
            <span className="font-bold">Email us</span>
            <span className="text-sm font-light">
              Lorem ipsum dolor sit amet
            </span>
            <span className="text-xs text-[#0DCAF0]">info@igeodda.com</span>
          </span>
        </span>
        
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
