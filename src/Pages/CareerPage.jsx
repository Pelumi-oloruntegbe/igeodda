import React from 'react'
import Header from '../component/Header';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';


const CareerPage = () => {
  
  return (
    <div className="w-screen">
      <Header />
      <div className="flex flex-col gap-3 lg:px-20 px-3 pt-8 pb-5">
        <span className="lg:text-5xl text-2xl font-semibold">Be part of our mission</span>
        <span className='text-base lg:w-[50rem]'>
          Welcome to the IGEODDA Inc. Careers page. We are currently seeking
          talented individuals to join our team. Below are our current job
          openings:
        </span>
      </div>
      <div className="lg:px-20 px-3 flex flex-col mb-20">
        <div className="flex justify-between border mt-10 lg:p-5 p-3 items-center rounded-xl shadow-3xl">
          <div className="flex lg:gap-3 gap-1 flex-col">
            <span className="font-semibold lg:text-lg text-base">Personal Support Worker (PSW)</span>
            <span className="text-sm lg:text-base">
              We are looking for dedicated and compassionate PSWs to provide
              high-quality care to our clients.
            </span>
          </div>
          <div className="flex flex-col">
            <Link
              to="/jobdetails"
              className="lg:p-2 p-3 bg-[#0DCAF0] rounded-md w-fit text-white"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="flex justify-between border mt-10 lg:p-5 p-3  items-center rounded-xl shadow-3xl">
          <div className="flex lg:gap-3 gap-1 flex-col">
            <span className="font-semibold lg:text-lg text-base">Nurse</span>
            <span className="">
              Join our team as a Nurse and provide healthcare services across
              various locations.
            </span>
          </div>
          <div className="flex flex-col">
            <Link
              to="/jobdetails"
              className="lg:p-2 p-3 bg-[#0DCAF0] rounded-md w-fit text-white"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="flex justify-between border mt-10 lg:p-5 p-3  items-center rounded-xl shadow-3xl">
          <div className="flex lg:gap-3 gap-1 flex-col">
            <span className="font-semibold lg:text-lg text-base">Nannies for Private Services</span>
            <span className="">
              We are looking for experienced and caring nannies to provide
              personalized care for children in private home settings.
            </span>
          </div>
          <div className="flex flex-col">
            <Link
              to="/jobdetails"
              className="lg:p-2 p-3 bg-[#0DCAF0] rounded-md w-fit text-white"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="flex justify-between border mt-10 lg:p-5 p-3  items-center rounded-xl shadow-3xl">
          <div className="flex lg:gap-3 gap-1 flex-col">
            <span className="font-semibold lg:text-lg text-base">
              Developmental Services Worker (DSW)
            </span>
            <span className="">
              We are hiring DSWs to support individuals with developmental
              disabilities.
            </span>
          </div>
          <div className="flex flex-col">
            <Link
              to="/jobdetails"
              className="lg:p-2 p-3 bg-[#0DCAF0] rounded-md w-fit text-white"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="flex justify-between border mt-10 lg:p-5 p-3  items-center rounded-xl shadow-3xl">
          <div className="flex lg:gap-3 gap-1 flex-col">
            <span className="font-semibold lg:text-lg text-base">Full Stack Developer</span>
            <span className="">
              We are seeking a Full Stack Developer to work on diverse projects
              involving both front-end and back-end technologies.
            </span>
          </div>
          <div className="flex flex-col">
            <Link
              to="/jobdetails"
              className="lg:p-2 p-3 bg-[#0DCAF0] rounded-md w-fit text-white"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CareerPage;
