import React from "react";

const experienceContent = [
  {
    year: "2023 - 2024",
    position: "Frontend web developer / QA",
    companyName: "Four Creation Kft. - Szeged",
    details: `
Frontend web developer / QA position at a young and 
rapidly growing marketing/advertising agency. 
Exciting projects with prominent local and national 
brands.`,
  },
  {
    year: "2022 - 2023",
    position: "Freelancer",
    details: `Completing smaller project under mentorship.`,
  },
  {
    year: "2022",
    position: "Webuni - BME - Budapest",
    details: `Web development training with a specialization in 
React.`,
  },
  {
    year: "2020 - 2022",
    position: "Economist position",
    companyName: "Praxis Kft. - Szeged",
    details: `At first, I worked in the economic sector. I quickly realized it is not my cup of tea, and I would like to do something more creative.`,
  },
  {
    year: "2018 - 2020",
    position: "Vásárhelyi Pál Highschool - Szeged",
    details: `Post-secondary education with a degree in 
economics.`,
  },
  {
    year: "2014 - 2018",
    position: "Kada Elek Highschool - Kecskemét",
    details: `Graduated in economics and information technology.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
