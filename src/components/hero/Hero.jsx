import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.jpg";
import cancelImg from "../../../public/assets/img/cancel.svg";
import AboutMain from "../about";
import Image from "next/image";

const heroContent = {
  heroImage: "./assets/img/hero/hero.jpg",
  heroHatImage: "./assets/img/hero/hero.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "kata farkas",
  heroDescriptionsTitle: "Frontend Developer / QA",
  heroDescriptions: `from Hungary, living in Malmö. I like to create modern and intuitive digital products.`,
  heroBtn: "more about me",
};

const Hero = ({ setSelectedIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const handleHover = (isHovered) => {
    const div = document.querySelector("#hero-image");
    if (div) {
      const newImage = isHovered
        ? `url(${heroContent.heroHatImage})`
        : `url(${heroContent.heroImage})`;
      div.style.backgroundImage = newImage;
    }
  };

  useEffect(() => {
    handleHover(true);
    setTimeout(() => {
      handleHover(false);
    }, 0.1);
  }, []);

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          id="hero-image"
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
            transition: "background-image 0.3s ease-in-out",
          }}
          onMouseOver={() => handleHover(true)}
          onMouseOut={() => handleHover(false)}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={heroContent.heroMobileImage}
              className="object-cover img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
              preloadImages
              // style={{width:'100%',height:'100%'}}
            />
            <h1 className="text-uppercase poppins-font">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <span>Hello! I am</span>
              {heroContent.heroTitleName}!
            </h1>
            <p className="open-sans-font">
              <strong>{heroContent.heroDescriptionsTitle}</strong>{" "}
              {heroContent.heroDescriptions}
            </p>
            <p className="open-sans-font">
              <span
                className="red"
                onMouseOver={() => handleHover(true)}
                onMouseOut={() => handleHover(false)}
                onClick={() => setSelectedIndex(1)}
              >
                Read more about me
              </span>
              , or check out the little{" "}
              <span
                className="red"
                onMouseOver={() => handleHover(true)}
                onMouseOut={() => handleHover(false)}
                onClick={() => setSelectedIndex(3)}
              >
                game I wrote{" "}
              </span>
              to test if I would be a good fit in your team :)
            </p>

            <div className="row">
              <div className="col-sm-6 col-12 mt-3">
                <button
                  className="button"
                  onClick={() => setSelectedIndex(3)}
                  onMouseOver={() => handleHover(true)}
                  onMouseOut={() => handleHover(false)}
                >
                  <span className="button-text">KYT - test</span>
                  <span className="button-icon fa fa-gamepad"></span>
                </button>
              </div>
              <div className="col-sm-6 col-12 mt-3">
                <button
                  className="button"
                  onClick={() => setSelectedIndex(1)}
                  onMouseOver={() => handleHover(true)}
                  onMouseOut={() => handleHover(false)}
                >
                  <span className="button-text">{heroContent.heroBtn}</span>
                  <span className="button-icon fa fa-arrow-right"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-start text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <AboutMain />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
