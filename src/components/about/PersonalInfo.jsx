import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kata", hasColor: "" },
  { meta: "last name", metaInfo: "Farkas", hasColor: "" },
  { meta: "Age", metaInfo: "25 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Hungarian", hasColor: "" },
  { meta: "Address", metaInfo: "Malmö", hasColor: "" },
  { meta: "Email", metaInfo: "farkaskata99@gmail.com", hasColor: "" },
  { meta: "languages", metaInfo: "English, German, Hungarian", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
