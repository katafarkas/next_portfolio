import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Image from "next/image";
import PortfolioModal from "./modal/PortfolioModal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(1);

  const projectToModal = PortfolioData.find(
    (data) => data.id === selectedProject
  );

  const handleModal = (id) => {
    setGetModal(true);
    setSelectedProject(id);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, title, image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className={
                          item.current
                            ? "tab-content current-content"
                            : "tab-content"
                        }
                        onClick={() => handleModal(id)}
                      >
                        {item.current && (
                          <div className="current-project">
                            <span>Currently working on</span>
                          </div>
                        )}
                        <Image
                          className="preview-image"
                          src={image}
                          alt="portfolio project demo"
                        />
                        <h3>
                          <span className="conent-title">{title}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && (
        <PortfolioModal project={projectToModal} setGetModal={setGetModal} />
      )}
    </>
  );
};

export default Portfolio;
