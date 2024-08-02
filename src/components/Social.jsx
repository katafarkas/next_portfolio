import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/",
  },
  { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
];

/*
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>

*/

const Social = () => {
  return (
    <>
      <a href="https://github.com/katafarkas" target="blank">
        <div className="social-container github">
          <div className="icon-holder">
            <i className="fa fa-github position-absolute"></i>
          </div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/kata-farkas" target="blank">
        <div className="social-container linkedin">
          <div className="icon-holder">
            <i className="fa fa-linkedin position-absolute"></i>
          </div>
        </div>
      </a>
    </>
  );
};

export default Social;
