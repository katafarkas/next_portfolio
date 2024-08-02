"use strict";
exports.id = 556;
exports.ids = [556];
exports.modules = {

/***/ 4275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/next_portfolio/_next/static/media/cancel.25908147.svg","height":512,"width":512});

/***/ }),

/***/ 6029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/next_portfolio/_next/static/media/img-mobile.a1d4e436.jpg","height":728,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAgC//xAAeEAACAQMFAAAAAAAAAAAAAAACAwEABBIREzFRYv/aAAgBAQABPwBTDYdwGi9pb4H1lK8uuK//xAAXEQADAQAAAAAAAAAAAAAAAAAAAkFx/9oACAECAQE/AFun/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJCcf/aAAgBAwEBPwBpw//Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 9830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SocialShare = [
    {
        iconName: "fa fa-facebook",
        link: "https://www.facebook.com/"
    },
    {
        iconName: "fa fa-twitter",
        link: "https://twitter.com/"
    },
    {
        iconName: "fa fa-youtube",
        link: "https://www.youtube.com/"
    },
    {
        iconName: "fa fa-dribbble",
        link: "https://dribbble.com/"
    }
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

*/ const Social = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "https://github.com/katafarkas",
                target: "blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "social-container github",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "icon-holder",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-github position-absolute"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "https://www.linkedin.com/in/kata-farkas",
                target: "blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "social-container linkedin",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "icon-holder",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-linkedin position-absolute"
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);


/***/ }),

/***/ 201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/about/Achievements.jsx


const achievementsContent = [
    {
        title: "8+",
        subTitle1: "years of",
        subTitle2: "experience"
    },
    {
        title: "30+",
        subTitle1: "completed",
        subTitle2: "projects"
    },
    {
        title: "2100+",
        subTitle1: "arena",
        subTitle2: "rating"
    },
    {
        title: "1",
        subTitle1: "ring to rule them all"
    }
];
const Achievements = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "row",
        children: achievementsContent.map((val, i)=>/*#__PURE__*/ _jsx("div", {
                className: "col-6",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "box-stats no-plus with-margin",
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            className: "poppins-font position-relative",
                            children: val.title
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "open-sans-font m-0 position-relative text-uppercase",
                            children: [
                                val.subTitle1,
                                " ",
                                /*#__PURE__*/ _jsx("span", {
                                    className: "d-block",
                                    children: val.subTitle2
                                })
                            ]
                        })
                    ]
                })
            }, i))
    });
};
/* harmony default export */ const about_Achievements = ((/* unused pure expression or super */ null && (Achievements)));

;// CONCATENATED MODULE: ./src/components/about/Education.jsx


const educationContent = [
    {
        year: "2019",
        degree: "Certified Game Developer",
        institute: "Planet Taxi",
        details: `Advanced Game Programmer course`
    },
    {
        year: "2014 - 2017",
        degree: "BACHELOR'S DEGREE",
        institute: "University of Szeged",
        details: `Computer Science Engineer`
    },
    {
        year: "2010 - 2014",
        institute: "Bolyai J\xe1nos High School",
        details: `Specializing in advanced computer science and mathematics`
    }
];
const Education = ()=>{
    return /*#__PURE__*/ _jsx("ul", {
        children: educationContent.map((val, i)=>/*#__PURE__*/ _jsxs("li", {
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "icon",
                        children: /*#__PURE__*/ _jsx("i", {
                            className: "fa fa-briefcase"
                        })
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: "time open-sans-font text-uppercase",
                        children: val.year
                    }),
                    /*#__PURE__*/ _jsxs("h5", {
                        className: "poppins-font text-uppercase",
                        children: [
                            val.degree,
                            /*#__PURE__*/ _jsx("span", {
                                className: "place open-sans-font",
                                children: val.institute
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "open-sans-font",
                        children: val.details
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_Education = ((/* unused pure expression or super */ null && (Education)));

;// CONCATENATED MODULE: ./src/components/about/Experience.jsx


const experienceContent = [
    {
        year: "2023 - 2024",
        position: "Frontend web developer",
        companyName: "Four Creation Kft. - Szeged",
        details: `
Frontend web developer position at a young and 
rapidly growing marketing/advertising agency. 
Exciting projects with prominent local and national 
brands.`
    },
    {
        year: "2022 - 2023",
        position: "Freelancer",
        details: `Completing minor project details under mentorship.`
    },
    {
        year: "2022",
        position: "Webuni - BME - Budapest",
        details: `Web development training with a specialization in 
React.`
    },
    {
        year: "2020 - 2022",
        position: "Economist position",
        companyName: "Praxis Kft. - Szeged",
        details: `At first, I worked in the economic sector. I quickly realized that I had only started this under external influence, and I can envision myself in IT.`
    },
    {
        year: "2018 - 2020",
        position: "V\xe1s\xe1rhelyi P\xe1l Highschool - Szeged",
        details: `Post-secondary education with a degree in 
economics.`
    },
    {
        year: "2014 - 2018",
        position: "Kada Elek Highschool - Kecskem\xe9t",
        details: `High school diploma with a specialization in 
economics and information technology.`
    }
];
const Experience = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: experienceContent.map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-briefcase"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "time open-sans-font text-uppercase",
                        children: val.year
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        className: "poppins-font text-uppercase",
                        children: [
                            val.position,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "place open-sans-font",
                                children: val.companyName
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "open-sans-font",
                        children: val.details
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_Experience = (Experience);

;// CONCATENATED MODULE: ./src/components/about/PersonalInfo.jsx


const personalInfoContent = [
    {
        meta: "first name",
        metaInfo: "Kata",
        hasColor: ""
    },
    {
        meta: "last name",
        metaInfo: "Farkas",
        hasColor: ""
    },
    {
        meta: "Age",
        metaInfo: "25 Years",
        hasColor: ""
    },
    {
        meta: "Nationality",
        metaInfo: "Hungarian",
        hasColor: ""
    },
    {
        meta: "Address",
        metaInfo: "Malm\xf6",
        hasColor: ""
    },
    {
        meta: "Email",
        metaInfo: "farkaskata99@gmail.com",
        hasColor: ""
    },
    {
        meta: "languages",
        metaInfo: "English, German, Hungarian",
        hasColor: ""
    }
];
const PersonalInfo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "about-list list-unstyled open-sans-font",
        children: personalInfoContent.map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "title",
                        children: [
                            val.meta,
                            ": "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`,
                        children: val.metaInfo
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_PersonalInfo = (PersonalInfo);

;// CONCATENATED MODULE: ./src/components/about/Skills.jsx


const skillsContent = [
    {
        skillName: "JAVASCRIPT"
    },
    {
        skillName: "TYPESCRIPT"
    },
    {
        skillName: "REACT"
    },
    {
        skillName: "NEXT.JS"
    },
    {
        skillName: "NODE.JS"
    },
    {
        skillName: "Cypress"
    },
    {
        skillName: "Tailwind CSS"
    },
    {
        skillName: "Material UI"
    }
];
const Skills = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: skillsContent.map((val, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-6 col-md-3 mb-3 mb-sm-5 justify-center d-flex justify-content-center align-items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: "skill-badge text-uppercase open-sans-font text-center mt-2 mt-sm-4",
                    children: val.skillName
                })
            }, i))
    });
};
/* harmony default export */ const about_Skills = (Skills);

;// CONCATENATED MODULE: ./public/assets/img/cv.webp
/* harmony default export */ const cv = ({"src":"/next_portfolio/_next/static/media/cv.8d18d6ce.webp","height":570,"width":440,"blurDataURL":"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADwAQCdASoGAAgAAkA4JaQAAueG5J524AAA/uev/u31nxJH/WrQw1mCGuHVjZAA","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./public/assets/img/hero/img-mobile.jpg
var img_mobile = __webpack_require__(6029);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/about/index.jsx










const index = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "main-content ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-uppercase custom-title mb-0 ft-wt-600",
                            children: "personal infos"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "d-block d-sm-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: img_mobile/* default */.Z,
                                className: "img-fluid main-img-mobile",
                                alt: "about avatar"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-100",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(about_PersonalInfo, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "button mt-4",
                            target: "blank",
                            href: "https://drive.google.com/file/d/1vqwQvEQ8pwe1thJNQaKDhIINjNTm-uWh/view?usp=sharing",
                            download: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "button-text",
                                    children: "Download CV"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "button-icon fa fa-download"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "separator"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600",
                                children: "My Main Skills"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(about_Skills, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "separator mt-1"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: "text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600",
                                children: [
                                    "Experience ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "&"
                                    }),
                                    " Education"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12 m-15px-tb mb-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "resume-box",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Originally, I started my career in economics, but after a few years, I felt too limited and wanted to do something more creative. I was always interested in web development; even as a child, I created simple pages with web builder platforms, so I thought I might give it a try and learn a bit of web development. Initially, I explored it in my free time as a hobby, then I completed a course at a BME-accredited school called WebUni, specializing in frontend development, particularly in React and JavaScript. Eventually, I decided to fully commit to web development and secured my first full-time job at a marketing agency as a frontend developer. In this role, I was responsible for collaborating with designers to implement complete page designs and creating reusable and maintainable components for projects such as portfolio pages, webshops, and small quiz and marketing games."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-100 d-flex justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 m-15px-tb",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "resume-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(about_Experience, {})
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const about = (index);


/***/ }),

/***/ 3192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_img_hero_img_mobile_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6029);
/* harmony import */ var _public_assets_img_cancel_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4275);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(201);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);







const heroContent = {
    heroImage: "/assets/img/hero/hero.jpg",
    heroHatImage: "/assets/img/hero/hero.jpg",
    heroMobileImage: _public_assets_img_hero_img_mobile_jpg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    heroTitleName: "kata farkas",
    heroDescriptionsTitle: "Frontend Developer",
    heroDescriptions: `from Hungary, living in Malmö. I like to create modern and intuitive web products... and sushi.`,
    heroBtn: "more about me"
};
const Hero = ({ setSelectedIndex  })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function toggleModalOne() {
        setIsOpen(!isOpen);
    }
    const handleHover = (isHovered)=>{
        const div = document.querySelector("#hero-image");
        if (div) {
            const newImage = isHovered ? `url(${heroContent.heroHatImage})` : `url(${heroContent.heroImage})`;
            div.style.backgroundImage = newImage;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleHover(true);
        setTimeout(()=>{
            handleHover(false);
        }, 0.1);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row home-details-container align-items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "hero-image",
                        className: "col-lg-4 bg position-fixed d-none d-lg-block",
                        style: {
                            backgroundImage: `url(${heroContent.heroImage})`,
                            transition: "background-image 0.3s ease-in-out"
                        },
                        onMouseOver: ()=>handleHover(true),
                        onMouseOut: ()=>handleHover(false)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    src: heroContent.heroMobileImage,
                                    className: "object-cover img-fluid main-img-mobile d-sm-block d-lg-none",
                                    alt: "hero man",
                                    preloadImages: true
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "text-uppercase poppins-font",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Hello! I am"
                                        }),
                                        heroContent.heroTitleName,
                                        "!"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "open-sans-font",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: heroContent.heroDescriptionsTitle
                                        }),
                                        " ",
                                        heroContent.heroDescriptions
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "open-sans-font",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "red",
                                            onMouseOver: ()=>handleHover(true),
                                            onMouseOut: ()=>handleHover(false),
                                            onClick: ()=>setSelectedIndex(1),
                                            children: "Read more about me"
                                        }),
                                        ", or check out the little",
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "red",
                                            onMouseOver: ()=>handleHover(true),
                                            onMouseOut: ()=>handleHover(false),
                                            onClick: ()=>setSelectedIndex(3),
                                            children: [
                                                "game I wrote",
                                                " "
                                            ]
                                        }),
                                        "to test if I would be a good fit in your team :)"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-sm-6 col-12 mt-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "button",
                                                onClick: ()=>setSelectedIndex(3),
                                                onMouseOver: ()=>handleHover(true),
                                                onMouseOut: ()=>handleHover(false),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "button-text",
                                                        children: "EYT - test"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "button-icon fa fa-gamepad"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-sm-6 col-12 mt-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "button",
                                                onClick: ()=>setSelectedIndex(1),
                                                onMouseOver: ()=>handleHover(true),
                                                onMouseOut: ()=>handleHover(false),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "button-text",
                                                        children: heroContent.heroBtn
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "button-icon fa fa-arrow-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                isOpen: isOpen,
                onRequestClose: toggleModalOne,
                contentLabel: "My dialog",
                className: "custom-modal dark hero",
                overlayClassName: "custom-overlay dark",
                closeTimeoutMS: 500,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "close-modal",
                            onClick: toggleModalOne,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                src: _public_assets_img_cancel_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                alt: "close icon"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "box_inner about",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title-section text-start text-sm-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                children: [
                                                    "ABOUT ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "ME"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "title-bg",
                                                children: "Resume"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_about__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 1393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ portfolio_Portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(5973);
;// CONCATENATED MODULE: ./public/assets/img/portfolio/4c.png
/* harmony default export */ const _4c = ({"src":"/next_portfolio/_next/static/media/4c.e6d6dbe0.png","height":919,"width":1863,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAYUlEQVR42jWKQQqAIBBFvf+JOkMFtQqTECIKLVIwCBudmWzRX/zFe0+YaVyV7NW8bhYAQggpJWYWnVrAH8nvxDxKqbVGxE88zhp/ZWeJKMZYvlDCLIa2WewJJfqH8Q519QJyCVocDDWuigAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/agrar.png
/* harmony default export */ const agrar = ({"src":"/next_portfolio/_next/static/media/agrar.c8fea43f.png","height":792,"width":1197,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AMXKzsXM1M/Z5drl893p+dvo+dfk+Nbj+ABRanlqhJNrjaGHprybts6RsMuMqsaJp8IAe4eMkp2Ze4t9fIptg41mhY9ugIlqcHs9AC1PXUReYUdhVlhqUWFwT3KBanWBZmRzUAAWQ1kAPFQrSV2SmaCTmaAgRFoRP1YoSFyO4z/XXzr1kQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/axfina.png
/* harmony default export */ const axfina = ({"src":"/next_portfolio/_next/static/media/axfina.dd131666.png","height":715,"width":1268,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ADm44x+y5QGs6CSr6y2p7y+m8iGe8DKd9QBMwN9iweRIueU0seYAre5SlcaBl7gEovUAZcrdhM/kb8fkP7niLrXnx8rPgabKAKfxAE3L1mLM21PG3DS+3li939Xj7GK45QCr6QApzc4fydEixdQlwtclvtsAs9kRteAotOTTwEmm4MC0UgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/epic.png
/* harmony default export */ const epic = ({"src":"/next_portfolio/_next/static/media/epic.ab21c1d5.png","height":921,"width":1862,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWElEQVR42iXGsQ2AIBBA0RMODnIV0oihkyC9zEAna8j+E0jCyy8+TFdKdynEfMY4c94LRJhaa98YOWe3OzS0CQHLU+vb+xGCNtYyo1KwEJk1qLVUSqIEgB+46gb7AIpt4AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/mizo.png
/* harmony default export */ const mizo = ({"src":"/next_portfolio/_next/static/media/mizo.49407c9b.png","height":919,"width":1863,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AARLmSJSmwBDn5mw0aW71wA9oEZxpml/pgAMSJcAPJl3ncvj7PPk7vOrvdoQZKV2ka8Ab4GmOmafscDc///0//fp3eXxAEKfA0iYAEtsoUJxpGV+sdXb573I3WB/tQBFmBJMmQeuNTiqVfsJAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/necta.png
/* harmony default export */ const necta = ({"src":"/next_portfolio/_next/static/media/necta.f9bb6e3c.png","height":772,"width":1506,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42mNQUlKKjIwMDg62d3CQk5ZiYBBVV1GWkZFmsLKyysjIaKyvc/APnZBstaszqMjPioFFmCEtLS0/Pz8yLJRBw3R+cdCtlRVVMb4MDCwMycnJcXFxlhbmDAwMMdYqPYlG7royfBIyABt9GmsGSxj7AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/components/portfolio/portfolioData.js






const PortfolioData = [
    {
        id: 1,
        title: "Four Creation Website",
        image: _4c,
        link: "https://fourcreation.hu/",
        description: "Besides the homepage, I created my workplace’s website entirely by myself, with the help of senior mentoring. My workplace was a young and dynamically growing marketing and advertising agency. I worked closely with designers, advertising professionals, and senior IT colleagues."
    },
    {
        id: 2,
        title: "T\xf3tkoml\xf3si Agr\xe1r Website",
        image: agrar,
        description: "I created the website of this local agricultural company entirely by myself, with the help of senior mentoring and in close collaboration with designers. This website is currently not available."
    },
    {
        id: 3,
        title: "Axfina Website",
        link: "https://www.axfina.com/",
        image: axfina,
        description: "This website was already completed and available when I received minor repair and modification tasks related to it."
    },
    {
        id: 4,
        title: "Epic Creations Website",
        link: "https://epiccreations.hu/",
        image: epic,
        description: "I created this website entirely by myself, with the help of senior mentoring and in close collaboration with designers. The client was a Hungarian company manufacturing film props, whose work has appeared in blockbuster movies such as Dune, Uncharted and Poor Things. This site featured the most challenging animations I had worked on up to that point."
    },
    {
        id: 5,
        title: "Mizo Mini Quiz",
        link: "https://tejutazo.mizo.hu/quiz",
        image: mizo,
        description: "I created this mini quiz game for children for an already completed website based on the provided design plans. The client is Hungary's largest dairy manufacturer and distributor. This work was part of a campaign for a newly launched product."
    },
    {
        id: 6,
        title: "Necta Food Website",
        link: "https://www.nectafood.hu/",
        image: necta,
        description: "I created this webshop using the Shopify framework, with the help of mentoring, based on the completed design plans. The client was a newly established local company that manufactured and distributed healthy, nutritious instant soups and drink powders."
    }
];
/* harmony default export */ const portfolioData = (PortfolioData);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/assets/img/cancel.svg
var cancel = __webpack_require__(4275);
;// CONCATENATED MODULE: ./src/components/portfolio/modal/PortfolioModal.jsx





const PortfolioModal = ({ project , setGetModal  })=>{
    console.log(project);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    "data-aos": "fade",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "heading mb-2",
                            children: project.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "modal__details",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [
                                    project.link && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-12 col-sm-6 mt-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa fa-external-link pr-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "preview-link",
                                                target: "_blank",
                                                rel: "noopener noreferrer nofollow",
                                                href: project.link,
                                                children: "Link"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 col-sm-12 mt-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: project.description
                                        })
                                    }),
                                    project.descriptionBold && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 col-sm-12 mt-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: project.descriptionBold
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const modal_PortfolioModal = (PortfolioModal);

;// CONCATENATED MODULE: ./src/components/portfolio/Portfolio.jsx






const Portfolio = ()=>{
    const [getModal, setGetModal] = (0,external_react_.useState)(false);
    const [selectedProject, setSelectedProject] = (0,external_react_.useState)(1);
    const projectToModal = portfolioData.find((data)=>data.id === selectedProject);
    const handleModal = (id)=>{
        setGetModal(true);
        setSelectedProject(id);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "portfolio-main",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.Tabs, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tab-container",
                                children: portfolioData.map((item)=>{
                                    const { id , title , image , delayAnimation  } = item;
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        "data-aos": "fade-right",
                                        "data-aos-delay": delayAnimation,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: item.current ? "tab-content current-content" : "tab-content",
                                            onClick: ()=>handleModal(id),
                                            children: [
                                                item.current && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "current-project",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Currently working on"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "preview-image",
                                                    src: image,
                                                    alt: "portfolio project demo"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "conent-title",
                                                        children: title
                                                    })
                                                })
                                            ]
                                        })
                                    }, id);
                                })
                            })
                        })
                    })
                })
            }),
            getModal && /*#__PURE__*/ jsx_runtime_.jsx(modal_PortfolioModal, {
                project: projectToModal,
                setGetModal: setGetModal
            })
        ]
    });
};
/* harmony default export */ const portfolio_Portfolio = (Portfolio);


/***/ }),

/***/ 1281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ switch_SwitchDark)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/assets/img/sun.png
/* harmony default export */ const sun = ({"src":"/next_portfolio/_next/static/media/sun.e8a19ea6.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASklEQVR42l2NwQ2AMAzEHB4VI5SVskI3yMrtLmCJRxFyHvFJl8BBACkQmlM0LmmUBpwMlgw3IOnKLcstv8HEYFfmW9lHu1oE/7cPkP0RT+u5jqgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./utils/theme.js
function handleSwitchValue(value) {
    if (value) {
        localStorage.setItem("theme-color", "dark");
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    } else {
        localStorage.setItem("theme-color", "light");
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
}
/* harmony default export */ const theme = (handleSwitchValue);

;// CONCATENATED MODULE: ./src/components/switch/SwitchDark.jsx





const SwitchDark = ()=>{
    const [isDark, setIsDark] = (0,external_react_.useState)(false);
    const handleLabelClick = ()=>{
        if (isDark) {
            theme(true);
            setIsDark(false);
        } else {
            theme(false);
            setIsDark(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: `theme-switcher-label d-flex  ${isDark ? "active" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "checkbox",
                onClick: handleLabelClick,
                className: "theme-switcher"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "switch-handle",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "light-text",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: sun,
                            alt: "swicher",
                            className: "filter_1",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "dark-text",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-moon-o",
                            "aria-hidden": "true"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const switch_SwitchDark = (SwitchDark);


/***/ }),

/***/ 5532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Wrapper = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;