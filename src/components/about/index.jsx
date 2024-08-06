import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../../public/assets/img/cv.webp";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.jpg";
import Image from "next/image";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div>
          {/* Personal Info Starts */}

          <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
            personal infos
          </h3>

          <div className="d-block d-sm-none">
            <Image
              src={heroImgMobile}
              className="img-fluid main-img-mobile"
              alt="about avatar"
            />
          </div>
          {/* image for mobile menu */}

          <div className="w-100">
            <PersonalInfo />
          </div>
          {/* End personal info */}

          <a
            className="button mt-4"
            target="blank"

            href="https://drive.google.com/file/d/1CssCyc-r-aBP-15AqEHOMrXdhilCg8DN/view?usp=sharing"
            download
          >
            <span className="button-text">Download CV</span>
            <span className="button-icon fa fa-download"></span>
          </a>

          {/* End download button */}
        </div>

        <hr className="separator" />

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
              My Main Skills
            </h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-12 m-15px-tb mb-5">
            <div className="resume-box">
              <p>
                Originally, I started my career in economics, but after a few
                years, I felt too limited and wanted to do something more
                creative. I was always interested in web development; even as a
                child, I created simple pages with web builder platforms, so I
                thought I might give it a try and learn a bit of web
                development. Initially, I explored it in my free time as a
                hobby, then I completed a course at a BME-accredited school
                called WebUni, specializing in frontend development,
                particularly in React and JavaScript. Eventually, I decided to
                fully commit to web development and secured my first full-time
                job at a marketing agency as a frontend developer. In this role,
                I was responsible for collaborating with designers to implement
                complete page designs and creating reusable and maintainable
                components for projects such as portfolio pages, webshops, and
                small quiz and marketing games.
              </p>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <div className="col-lg-6 m-15px-tb">
              <div className="resume-box">
                <Experience />
              </div>
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
