import React from "react";
import Header from "../component/Header";
import Hero from "../assets/b2.png";
import Vector1 from "../assets/b1.png";
import Photo from "../assets/Pexels Photo.png";
import Ellipse1 from "../assets/Ellipse 1.png";
import Footer from "../component/Footer";

const HomePage = () => {
  return (
    <div className="w-screen">
      <span className="z-20"><Header /></span>
      <div className="flex relative lg:px-0">
        <span className="absolute flex">
          <img src={Hero} alt="" className="lg:w-[1440px] w-screen h-[450px]" />
        </span>
        <div className="flex flex-col justify-center z-10 w-screen h-[440px] items-center gap-3 px-4">
          <span className="lg:text-5xl text-3xl font-bold text-white text-center">
            Welcome to IGEODDA Employment Agency
          </span>
          <span className="lg:text-2xl text-base text-white lg:w-[50rem] text-center">
            Your Gateway to Professional Employment Services.
          </span>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center px-3 lg:px-0 lg:pt-20 lg:pb-10 py-16 lg:py-0 lg:gap-7 gap-3 bg-[#f8f6f1]">
        <div className="flex relative">
          <span className="flex">
            <img
              src={Vector1}
              alt=""
              className="lg:w-[33rem] w-full lg:h-[30rem] rounded-lg"
            ></img>
          </span>
        </div>
        <div className="flex flex-col lg:gap-3 gap-1">
          <span className="text-2xl font-semibold lg:w-[20rem]">Overview</span>
          <span className="lg:text-lg text-base lg:w-[30rem] opacity-70">
            IGEODDA Inc. is a distinguished employment agency founded by
            professionals with deep expertise in healthcare and software
            engineering . Established through collaboration, our company
            represents a unique intersection of healthcare excellence and
            technological innovation. Our mission is to provide top-tier
            employment solutions by leveraging the extensive experience and
            comprehensive skills of our founding professionals.
          </span>
          <span className="p-3 bg-[#0DCAF0] rounded-md w-fit">
            Discover More
          </span>
        </div>
      </div>
      <div className="flex flex-col py-10 bg-[#f8f6f1]">
        <span className="text-center text-2xl text-[#0DCAF0]">
          Our Founders
        </span>
        <div className="flex lg:flex-row flex-col py-4 justify-center gap-6">
          <span className="flex flex-col p-4 border-r-2">
            <span className="flex justify-center">
              <img src={Ellipse1} alt="" className="h-16 w-16" />
            </span>
            <span className="flex justify-center text-[#0DCAF0] mt-8 text-2xl italic">
              Healthcare Professional
            </span>
            <span className="text-base lg:w-[30rem] font-light text-center mt-4 opacity-75">
              Our co-founder, a highly experienced healthcare worker, brings a
              wealth of knowledge in healthcare service delivery, patient care,
              and management. Their extensive background includes working in
              various capacities within both public and private healthcare
              sectors, where they have been instrumental in improving patient
              outcomes and implementing best practices in healthcare services.
            </span>
          </span>
          <span className="flex flex-col p-4">
            <span className="flex justify-center">
              <img src={Ellipse1} alt="" className="h-16 w-16" />
            </span>
            <span className="flex justify-center text-[#0DCAF0] mt-8 text-2xl italic">
              Software Engineer
            </span>
            <span className="text-base lg:w-[30rem] font-light text-center mt-4 opacity-75">
              Our co-founder, a highly experienced healthcare worker, brings a
              wealth of knowledge in healthcare service delivery, patient care,
              and management. Their extensive background includes working in
              various capacities within both public and private healthcare
              sectors, where they have been instrumental in improving patient
              outcomes and implementing best practices in healthcare services.
            </span>
          </span>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col py-10 lg:px-12 px-3 bg-[#0DCAF0]/50 items-center justify-center">
        <span className="flex flex-col gap-4">
          <span className="text-3xl font-semibold lg:w-[30rem] leading-10">
            Collaboration and Expertise
          </span>
          <span className="text-xl font-medium lg:w-[40rem]">
            The fusion of our founders’ expertise represents a strategic
            advantage for IGEODDA Inc. By combining healthcare and technology,
            we have established a unique employment agency that addresses the
            complex needs of both sectors. Our founders have consulted and
            collaborated with numerous organizations, contributing to projects
            that range from improving healthcare service delivery to advancing
            technological solutions. Their collective experience has shaped our
            approach to workforce solutions, ensuring that we deliver services
            that meet the highest standards of quality and effectiveness.
          </span>
        </span>
        <span>
          <img src={Photo} alt="" className="lg:h-[25rem]" />
        </span>
      </div>

      {/* <div className="flex flex-col gap-5 py-10 justify-center items-center">
        <span className="text-2xl font-semibold ">How it works?</span>
        <div className="flex flex-col">
          <div className="flex">
            <span className="flex flex-col gap-2">
              <span className="flex justify-center items-center">
                <span className=" opacity-0">
                  <img src={Line1} alt="" className="w-28 h-1" />
                </span>
                <span className="p-4 bg-[#0DCAF0]/20 w-fit rounded-md">
                  <img src={Vector6} alt="" className="w-[50px] h-[50px]" />
                </span>
                <span className="">
                  <img src={Line1} alt="" className="w-28 h-1" />
                </span>
              </span>
              <span className="text-xl font-semibold text-center">
                Create an account/Log In
              </span>
            </span>
            <span className="flex flex-col gap-2">
              <span className="flex justify-center items-center">
                <span className="">
                  <img src={Line1} alt="" className="w-28 h-1" />
                </span>
                <span className="p-4 bg-[#0DCAF0]/20 w-fit rounded-md">
                  <img src={Vector3} alt="" className="w-[50px] h-[50px]" />
                </span>
                <span className="">
                  <img src={Line1} alt="" className="w-28 h-1" />
                </span>
              </span>
              <span className="text-xl font-semibold text-center">
                Complete your profile
              </span>
            </span>
            <span className="flex flex-col gap-2">
              <span className="flex justify-center items-center">
                <span className="">
                  <img src={Line1} alt="" className="w-28 h-1" />
                </span>
                <span className="p-4 bg-[#0DCAF0]/20 w-fit rounded-md">
                  <img src={Vector4} alt="" className="w-[50px] h-[50px]" />
                </span>
                <span className="">
                  <img src={Line1} alt="" className="w-28 h-1" />
                </span>
              </span>
              <span className="text-xl font-semibold text-center">
                Find best Jobs & Talents
              </span>
            </span>
            <span className="flex flex-col gap-2">
              <span className="flex justify-center items-center">
                <span className="">
                  <img src={Line1} alt="" className="w-28 h-1" />
                </span>
                <span className="p-4 bg-[#0DCAF0]/20 w-fit rounded-md">
                  <img src={Vector5} alt="" className="w-[50px] h-[50px]" />
                </span>
                <span className=" opacity-0">
                  <img src={Line1} alt="" className="w-28 h-1" />
                </span>
              </span>
              <span className="text-xl font-semibold text-center">
                Apply for Jobs/Hire Talents
              </span>
            </span>
          </div>
        </div>
      </div> */}
      <div className="py-10 flex flex-col justify-center items-center bg-[#f8f6f1]">
        <span className="flex flex-col gap-4 lg:px-32 px-4">
          <span className="lg:text-2xl text-lg font-semibold text-center">
            Our Services
          </span>
          <span className="lg:text-xl text-base font-medium text-center">
            At IGEODDA Inc., we offer a broad spectrum of employment services,
            driven by our founder's commitment to excellence and innovation. Our
            services include:
          </span>
        </span>
        <div className="flex lg:flex-row flex-col py-4 justify-center gap-6 ">
          <span className="flex flex-col p-4 rounded-md shadow-3xl">
            <span className="flex justify-center text-[#0DCAF0] my-4 text-2xl italic">
              Healthcare Professional
            </span>
            <span className="text-base lg:w-[30rem] font-light text-center  opacity-75">
              Our co-founder, a highly experienced healthcare worker, brings a
              wealth of knowledge in healthcare service delivery, patient care,
              and management. Their extensive background includes working in
              various capacities within both public and private healthcare
              sectors, where they have been instrumental in improving patient
              outcomes and implementing best practices in healthcare services.
            </span>
          </span>
          <span className="flex flex-col p-4 rounded-md shadow-3xl">
            <span className="flex justify-center text-[#0DCAF0] my-4 text-2xl italic">
              Software Engineer
            </span>
            <span className="text-base lg:w-[30rem] font-light text-center  opacity-75">
              Our co-founder, a highly experienced healthcare worker, brings a
              wealth of knowledge in healthcare service delivery, patient care,
              and management. Their extensive background includes working in
              various capacities within both public and private healthcare
              sectors, where they have been instrumental in improving patient
              outcomes and implementing best practices in healthcare services.
            </span>
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
