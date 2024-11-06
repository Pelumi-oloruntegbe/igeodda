import React from "react";
import Header from "../component/Header";
import Hero from "../assets/b4.png";
import img from "../assets/s1.png";
import img2 from "../assets/s2.png";
import img3 from "../assets/d3.png";
import img4 from "../assets/d4.png";
import Footer from "../component/Footer";
import Vector1 from "../assets/Vector1.png";
import { GoDotFill } from "react-icons/go";

const ServicesPage = () => {
  return (
    <div className="w-screen">
      <span className="z-20">
        <Header />
      </span>
      <div className="flex relative">
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

      <div className="flex flex-col lg:px-20 px-3 lg:py-24 py-10 items-center  lg:gap-10">
        <div className="flex flex-col-reverse lg:flex-row py-7 gap-5">
          <div className="flex">
            <span className="flex w-[23rem] h-[25rem]">
              <img
                src={img}
                alt=""
                className="w-[23rem] h-[25rem] rounded-lg"
              ></img>
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-2xl font-semibold lg:w-[20rem]">
              Healthcare Excellence
            </span>
            <span className="text-base opacity-70">
              Our healthcare division stands as a beacon of quality and
              compassion. We offer a range of healthcare professionals who are
              well-trained and ready to address diverse healthcare needs with
              precision and empathy:
            </span>
            <span className="flex flex-col opacity-70 gap-1">
              <span className="flex ">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Our Registered Nurses (RNs)
                  </span>{" "}
                  are skilled in various medical environments, from acute care
                  settings to community health. They are adept at delivering
                  patient-centered care, administering medications, and
                  coordinating with other healthcare professionals to ensure the
                  highest standards of health services.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Personal Support Workers (PSWs)
                  </span>{" "}
                  provide essential support to individuals in their homes or
                  care facilities. They assist with daily living activities,
                  personal care, and emotional support, contributing
                  significantly to the quality of life for those they care for.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Developmental Support Workers (DSWs)
                  </span>{" "}
                  Specializing in support for individuals with developmental
                  disabilities, our DSWs are trained to offer tailored
                  assistance that promotes independence and enhances quality of
                  life.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">Our Cleaners</span>cleaning
                  professionals ensure that healthcare environments remain
                  sterile and safe. They follow rigorous protocols to maintain
                  high standards of cleanliness and hygiene.
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row py-7 gap-5">
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-2xl font-semibold w-[20rem]">
              IT Solutions and Innovation
            </span>
            <span className="text-base opacity-70">
              In the realm of IT, IGEODDA Inc. delivers cutting-edge solutions
              that drive business success. Our IT services are designed to meet
              the unique needs of your organization, backed by a team of experts
              who are dedicated to innovation and efficiency:
            </span>
            <span className="flex flex-col opacity-70 gap-1">
              <span className="flex ">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">Software Development:</span>{" "}
                  We create custom software solutions tailored to your business
                  needs, from web applications to mobile apps. Our development
                  team employs agile methodologies to ensure timely delivery and
                  high-quality results.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Cloud Services Integration:
                  </span>{" "}
                  Our experts help businesses transition to cloud-based systems,
                  optimizing their IT infrastructure for flexibility and
                  scalability. We offer solutions for cloud storage, computing,
                  and collaboration to enhance productivity.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    IT Service Management (ITSM):
                  </span>{" "}
                  We provide comprehensive ITSM solutions that streamline your
                  IT operations. Our services include incident management,
                  problem management, and change management, ensuring your IT
                  systems run smoothly and efficiently.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Customer Service Representatives:
                  </span>{" "}
                  Our Customer Service Representatives are trained to offer
                  exceptional support and assistance to your clients. They
                  handle inquiries, resolve issues, and ensure a positive
                  customer experience, contributing to your company's success.
                </span>
              </span>
            </span>
          </div>
          <div className="flex relative">
            <span className="flex w-[23rem] h-[25rem]">
              <img
                src={img2}
                alt=""
                className="w-[23rem] h-[25rem] rounded-lg"
              ></img>
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row py-7 gap-5">
          <div className="flex relative">
            <span className="flex w-[23rem] h-[25rem]">
              <img
                src={img3}
                alt=""
                className="w-[23rem] h-[25rem] rounded-lg"
              ></img>
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-2xl font-semibold w-[20rem]">
              Comprehensive Workforce Solutions:
            </span>
            <span className="text-base opacity-70">
              Our workforce solutions encompass a broad range of industries and
              roles, ensuring that we can meet your business’s specific needs:
            </span>
            <span className="flex flex-col opacity-70 gap-1">
              <span className="flex ">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">General Labour Workers:</span>{" "}
                  We provide skilled general labour workers for various
                  industries. They are trained to perform a wide range of tasks,
                  from manual labor to assembly line work, ensuring efficiency
                  and productivity on the job site.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">Factory Operators:</span> Our
                  factory operators are experienced in managing and operating
                  machinery in manufacturing environments. They are trained to
                  handle production processes safely and efficiently.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">Cleaners:</span> Beyond
                  healthcare, our cleaners ensure cleanliness and hygiene in
                  various settings, including office buildings, industrial
                  sites, and residential areas.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Logistical and Operational Support:
                  </span>{" "}
                  We provide skilled personnel to manage logistics and
                  operations, enhancing efficiency and productivity in your
                  business operations.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">Facility Management:</span>{" "}
                  Our facility management services ensure that your physical
                  environment is well-maintained, safe, and functional. We
                  handle everything from routine maintenance to specialized
                  facility needs.
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row py-7 gap-5">
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-2xl font-semibold w-[20rem]">
              Inclusivity and Training Program
            </span>
            <span className="text-base opacity-70">
              At IGEODDA Inc., we believe in fostering an inclusive environment
              where every employee can thrive. Our commitment to inclusivity is
              reflected in our hiring practices, training programs, and
              workplace culture. We ensure that all team members receive equal
              opportunities and support to excel in their roles.
            </span>
            <span className="flex flex-col opacity-70 gap-1">
              <span className="flex ">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Diverse Hiring Practices:{" "}
                  </span>{" "}
                  We actively seek to build a diverse team by considering
                  candidates from various backgrounds and experiences.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Inclusive Workplace Culture:
                  </span>{" "}
                  We foster a culture of respect and inclusion through ongoing
                  education, open dialogue, and supportive policies.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">
                    Professional Development Workshops:
                  </span>{" "}
                  Regular workshops on industry best practices, emerging trends,
                  and skill development.
                </span>
              </span>
              <span className="flex">
                <span className="">
                  <GoDotFill className="" />
                </span>
                <span className="text-sm">
                  <span className="font-semibold">Job-Specific Training:</span>{" "}
                  Providing detailed training for each role, ensuring that
                  employees are fully equipped to perform their duties with
                  expertise and confidence.
                </span>
              </span>
            </span>
          </div>
          <div className="flex relative">
            <span className="flex w-[23rem] h-[25rem]">
              <img
                src={img4}
                alt=""
                className="w-[23rem] h-[25rem] rounded-lg"
              ></img>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
