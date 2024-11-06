import React from "react";
import Header from "../component/Header";
import Google from "../assets/Google.png";
import { LiaUserLockSolid } from "react-icons/lia";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import Time from "../assets/Time.png";
import Whatsapp from "../assets/Whatsapp.png";
import Apple from "../assets/Apple.png";
import Microsoft from "../assets/Microsoft.png";
import Location from "../assets/Location.png";
import { Link } from "react-router-dom";

import Footer from "../component/Footer";

const JobDetailsPage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center py-10 gap-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 px-6 py-8 bg-[#0DCAF0]/40 rounded-xl">
            <span className="font-semibold text-2xl">
              Personal Support Worker (PSW)
            </span>
            <span className="w-[25rem] text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              adipisci fugiat, pariatur, eveniet consequuntur eos officiis ea
              esse tenetur{" "}
            </span>
            <span className="font-medium text-xl">Job description</span>
            <span className="flex flex-col gap-6 p-5 rounded-md bg-white w-fit">
              <span className="flex gap-2">
                <span className="">
                  <LiaUserLockSolid className="w-6 h-6" />
                </span>
                <span className="font-medium">Employment Type:</span>
                <span className="text-[#0DCAF0]">Full Time</span>
              </span>
              <span className="flex gap-2">
                <span className="">
                  <CiLocationOn className="w-6 h-6" />
                </span>
                <span className="font-medium">Location:</span>
                <span className="text-[#0DCAF0]">United Kingdom</span>
              </span>
              <span className="flex gap-2">
                <span className="">
                  <CiClock2 className="w-6 h-6" />
                </span>
                <span className="font-medium">Date Posted:</span>
                <span className="text-[#0DCAF0]">13th December, 2024</span>
              </span>
              <span className="flex gap-2">
                <span className="">
                  <BsBriefcase className="w-6 h-6" />
                </span>
                <span className="font-medium">Experience:</span>
                <span className="text-[#0DCAF0]">3+ Years</span>
              </span>
              <span className="flex gap-2">
                <span className="">
                  <FiDollarSign className="w-6 h-6" />
                </span>
                <span className="font-medium">Salary:</span>
                <span className="text-[#0DCAF0]">30k - 35k per annum</span>
              </span>
            </span>
          </div>
          <span className=" h-[20rem] rounded-xl bg-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1593.0254131163736!2d3.359306869298209!3d6.58655631319154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b936d4d03e241%3A0x38eb2d8e4065d26c!2sOpe%20oredugba!5e0!3m2!1sen!2sng!4v1716740532347!5m2!1sen!2sng"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-xl opacity-80 "
            ></iframe>
          </span>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <span className="font-medium text-3xl">Job description:</span>
          <span className="w-[40rem] text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            nobis! Obcaecati alias est vitae nostrum! Dolorem aliquam eligendi
            cumque laboriosam cupiditate voluptatum perferendis culpa officia
            reprehenderit earum, similique molestiae laborum!
          </span>
          <span className="font-medium text-2xl">
            Duties & Responsibilities:
          </span>
          <span className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
          </span>
          <span className="font-medium text-2xl">Skills & Qualifications:</span>
          <span className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
            <span className="flex gap-3 items-center">
              <span className="rounded-full p-1 bg-[#0DCAF0]">
                <FaCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </span>
          </span>
          <Link
            to="/jobapplication"
            className="p-3 bg-[#0DCAF0] rounded-md w-fit"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="flex flex-col gap-4 px-32">
          <span className="text-3xl font-semibold text-center ">
            Related Jobs
          </span>
          <span className="text-xl font-light text-center mb-8">
            Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas
            dolor ut. At interdum amet id duis pulvinar quis massa elit. Amet
            quam commodo est pulvinar vitae.
          </span>
        </span>
        <div className="flex gap-12 py-10 ">
          <span className="rounded-t-xl shadow-3xl ">
            <span className="px-6 pt-8 pb-5 flex flex-col gap-3">
              <span className="text-xl font-medium">
                Personal Support Worker (PSW)
              </span>
              <span className="flex gap-2 items-center">
                <img src={Time} alt="" className="w-6 h-6" />
                <span>Posted 7 hours ago</span>
              </span>
              <span className="flex gap-32 items-center">
                <span className="p-2 bg-[#0DCAF0]/20 rounded-md text-[#0DCAF0]">
                  Full time
                </span>
                <span>$22k - $32k</span>
              </span>
            </span>
            <hr className="w-full h-1"></hr>
            <span className="px-6 pt-3 pb-5 flex flex-col gap-3">
              <span className="p-2 bg-[#0DCAF0] rounded-md w-fit text-white">
                Apply now
              </span>
            </span>
          </span>
          <span className="rounded-t-xl shadow-3xl ">
            <span className="px-6 pt-8 pb-5 flex flex-col gap-3">
              <span className="text-xl font-medium">
                Personal Support Worker (PSW)
              </span>
              <span className="flex gap-2 items-center">
                <img src={Time} alt="" className="w-6 h-6" />
                <span>Posted 7 hours ago</span>
              </span>
              <span className="flex gap-32 items-center">
                <span className="p-2 bg-[#0DCAF0]/20 rounded-md text-[#0DCAF0]">
                  Full time
                </span>
                <span>$22k - $32k</span>
              </span>
            </span>
            <hr className="w-full h-1"></hr>
            <span className="px-6 pt-3 pb-5 flex flex-col gap-3">
              <span className="p-2 bg-[#0DCAF0] rounded-md w-fit text-white">
                Apply now
              </span>
            </span>
          </span>
          <span className="rounded-t-xl shadow-3xl ">
            <span className="px-6 pt-8 pb-5 flex flex-col gap-3">
              <span className="text-xl font-medium">
                Personal Support Worker (PSW)
              </span>
              <span className="flex gap-2 items-center">
                <img src={Time} alt="" className="w-6 h-6" />
                <span>Posted 7 hours ago</span>
              </span>
              <span className="flex gap-32 items-center">
                <span className="p-2 bg-[#0DCAF0]/20 rounded-md text-[#0DCAF0]">
                  Full time
                </span>
                <span>$22k - $32k</span>
              </span>
            </span>
            <hr className="w-full h-1"></hr>
            <span className="px-6 pt-3 pb-5 flex flex-col gap-3">
              <span className="p-2 bg-[#0DCAF0] rounded-md w-fit text-white">
                Apply now
              </span>
            </span>
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetailsPage;
