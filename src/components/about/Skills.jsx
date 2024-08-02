import React from "react";

const skillsContent = [
  { skillName: "JAVASCRIPT" },
  { skillName: "TYPESCRIPT" },
  { skillName: "REACT" },
  { skillName: "NEXT.JS" },
  { skillName: "NODE.JS" },
  { skillName: "Cypress" },
  { skillName: "Tailwind CSS" },
  { skillName: "Material UI" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div
          className="col-6 col-md-3 mb-3 mb-sm-5 justify-center d-flex justify-content-center align-items-center"
          key={i}
        >
          <h6 className="skill-badge text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
