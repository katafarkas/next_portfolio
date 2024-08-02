import React from "react";

const educationContent = [
  {
    year: "2019",
    degree: "Certified Game Developer",
    institute: "Planet Taxi",
    details: `Advanced Game Programmer course`,
  },
  {
    year: "2014 - 2017",
    degree: "BACHELOR'S DEGREE",
    institute: "University of Szeged",
    details: `Computer Science Engineer`,
  },
  {
    year: "2010 - 2014",
    institute: "Bolyai János High School",
    details: `Specializing in advanced computer science and mathematics`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
