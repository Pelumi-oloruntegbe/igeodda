import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import img from "../assets/d1.png"
import img2 from "../assets/d2.png";
import img3 from "../assets/d3.png";
import img4 from "../assets/d4.png";
import img5 from "../assets/d7.png";
import img6 from "../assets/dd.png";

const Gallery = () => {
  return (
    <div className="w-screen">
      <Header />
      <div className="flex flex-col gap-3 lg:px-20 px-3 pt-8 pb-5">
        <span className="lg:text-5xl text-2xl font-semibold">
          Employment Gallery
        </span>
        <span className="lg:text-base text-sm lg:w-[50rem]">
          Welcome to the Employment Gallery at IGEODDA Inc. Here, you can view
          pictures of our professional workers in action, showcasing their
          dedication and expertise across various roles within our company.
        </span>
      </div>
      <div className="flex lg:flex-row flex-col lg:px-20 px-3 justify-between gap-4 lg:gap-0">
        <img
          src={img}
          alt=""
          className="lg:w-[22rem] w-full h-[20rem] rounded-md hover:scale-105 transition-all duration-300 ease-in-out transform"
        />
        <img
          src={img2}
          alt=""
          className="lg:w-[22rem] w-full h-[20rem] rounded-md hover:scale-105 transition-all duration-300 ease-in-out transform"
        />
        <img
          src={img3}
          alt=""
          className="lg:w-[22rem] w-full h-[20rem] rounded-md hover:scale-105 transition-all duration-300 ease-in-out transform"
        />
      </div>
      <div className="flex lg:flex-row flex-col lg:px-20 px-3  justify-between mt-4 gap-4 lg:gap-0">
        <img
          src={img4}
          alt=""
          className="lg:w-[22rem] w-full h-[20rem] rounded-md hover:scale-105 transition-all duration-300 ease-in-out transform"
        />
        <img
          src={img5}
          alt=""
          className="lg:w-[22rem] w-full h-[20rem] rounded-md hover:scale-105 transition-all duration-300 ease-in-out transform"
        />
        <img
          src={img6}
          alt=""
          className="lg:w-[22rem] w-full h-[20rem] rounded-md hover:scale-105 transition-all duration-300 ease-in-out transform"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Gallery
