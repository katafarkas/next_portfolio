import Image from "next/image";
import React from "react";
import CloseImg from "../../../../public/assets/img/cancel.svg";
import PortfolioData from "../portfolioData";

const PortfolioModal = ({ project, setGetModal }) => {
  console.log(project);
  return (
    <div className="modal_portfolio ">
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div className="modal__content">
        <div data-aos="fade">
          <h2 className="heading mb-2">{project.title}</h2>
          <div className="modal__details">
            <div className="row open-sans-font">
              {project.link && (
                <div className="col-12 col-sm-6 mt-2">
                  <i className="fa fa-external-link pr-2"></i>
                  <a
                    className="preview-link"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href={project.link}
                  >
                    Link
                  </a>
                </div>
              )}

              <div className="col-12 col-sm-12 mt-3">
                <p>{project.description}</p>
              </div>
              {project.descriptionBold && (
                <div className="col-12 col-sm-12 mt-3">
                  <p>
                    <strong>{project.descriptionBold}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
