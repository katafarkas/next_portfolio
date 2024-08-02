"use strict";
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable react/no-unescaped-entities */ 

const finishes = [
    {
        finishTitle: "Wow, looks like Kata would love to work in your team! You should probably get in contact.",
        score: 131
    },
    {
        finishTitle: "According to my intricate calculations, Kata would seamlessly fit into your team, and he would love to conquer the world with you.",
        score: 118
    },
    {
        finishTitle: "Looks like you don't have enough retro music lover yet, your team would definitely benefit from Kata!",
        score: 125
    }
];
const questions = [
    {
        question: "Do you appreciate team members who enjoy handcrafted beers?"
    },
    {
        question: "Is it important to you to have a teammate who could eat any amount of sushi?"
    },
    {
        question: "Is it important to you to have a teammate skilled in WoW?"
    },
    {
        question: "Would you enjoy working with someone who prefers to party to the music of the 70s and 80s?"
    },
    {
        question: "Do you value collaborating with people who is a big fan of the band Ghost?"
    },
    {
        question: "Would you enhance your team with someone who would definitely be one of the shortest members on the team?"
    },
    {
        question: "Would you enjoy working with a big sitcom fan?"
    },
    {
        question: "Do you value collaborating with people who has a Duolingo streak of over 500+ days? (for real)"
    },
    {
        question: "Would you enjoy working with someone who, not at all behind, has just discovered the X-files series for herself?"
    },
    {
        question: "Would you enjoy working with a lifelong Harry Potter fan?"
    }
];
const shuffleArray = (array)=>{
    let shuffledArray = array.slice();
    for(let i = shuffledArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i]
        ];
    }
    return shuffledArray;
};
const Game = ()=>{
    const [gameStarted, setGameStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [gameFinished, setGameFinished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [aiProcessing, setAiProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [randomizedQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(shuffleArray(questions));
    const [opacity, setOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [questionIndex, setQuestionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const randomIndex = Math.floor(Math.random() * 3);
    const nextQuestion = ()=>{
        if (questionIndex == 9) {
            setGameFinished(true);
            setAiProcessing(true);
            setGameStarted(false);
            setTimeout(()=>{
                setAiProcessing(false);
            }, 3500);
            return;
        }
        setOpacity(0);
        setTimeout(()=>{
            setQuestionIndex((prevIndex)=>(prevIndex + 1) % questions.length);
            setOpacity(1);
        }, 500);
    };
    const restartGame = ()=>{
        setGameFinished(false);
        setGameStarted(false);
        setQuestionIndex(0);
        setOpacity(1);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container game-container d-flex align-items-start justify-content-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row game-box no-plus with-margin",
            children: !gameStarted && !gameFinished ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "poppins-font position-relative mb-4",
                        children: "Katafy Your Team - Test"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "poppins-font",
                        children: [
                            "The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "red",
                                children: "KYT - test"
                            }),
                            " helps you decide whether you should consider reaching out to to Kata."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "poppins-font",
                        children: [
                            "Simply answer the appearing questions with either",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "red",
                                children: '"Yes"'
                            }),
                            " or",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "red",
                                children: '"No"'
                            }),
                            " and the underlying",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "red",
                                children: " super-complicated AI"
                            }),
                            " will provide you with a team fit percentage between you and Kata."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "button mt-3",
                        onClick: ()=>setGameStarted(true),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "button-text",
                                children: "Let's start"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "button-icon fa fa-arrow-right"
                            })
                        ]
                    })
                ]
            }) : gameFinished ? aiProcessing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "lds-ellipsis",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                        children: [
                            "Thank you! ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "red",
                                children: "AI"
                            }),
                            " is working really hard...",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "red",
                                children: "beep... boop..."
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "percentage",
                        children: [
                            finishes[randomIndex].score,
                            "%"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: finishes[randomIndex].finishTitle
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-sm-6 text-center mt-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "button",
                                    onClick: restartGame,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "button-text",
                                            children: "Restart"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "button-icon fa fa-refresh"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-sm-6 text-center mt-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "button no-icon",
                                    onClick: ()=>window.location = "mailto:farkaskata99@gmail.com",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "button-text",
                                        children: "Get in contact"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    opacity: opacity,
                    transition: "opacity 0.3s ease-in-out"
                },
                children: [
                    randomizedQuestions[questionIndex] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: `${questionIndex + 1} / 10 - ${randomizedQuestions[questionIndex].question}`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-sm-6 text-center mt-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "button no-icon",
                                    onClick: nextQuestion,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "button-text",
                                        children: "Nope"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-sm-6 text-center mt-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "button game-yes",
                                    onClick: nextQuestion,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "button-text",
                                            children: "Yes"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "button-icon fa fa-check"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ 9610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5973);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3192);
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(201);
/* harmony import */ var _layout_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5532);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1690);
/* harmony import */ var _components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1393);
/* harmony import */ var _components_switch_SwitchDark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1281);
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9830);
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_wrapper__WEBPACK_IMPORTED_MODULE_5__, _components_Seo__WEBPACK_IMPORTED_MODULE_6__]);
([_layout_wrapper__WEBPACK_IMPORTED_MODULE_5__, _components_Seo__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const menuItem = [
    {
        icon: "fa-home",
        menuName: "Home"
    },
    {
        icon: "fa-user",
        menuName: "About"
    },
    {
        icon: "fa-briefcase",
        menuName: "Portfolio"
    },
    {
        icon: "fa-gamepad",
        menuName: "Game"
    }
];
const HomeDark = ()=>{
    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.querySelector("body").classList.remove("rtl");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                pageTitle: "Home Dark"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "yellow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_switch_SwitchDark__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Social__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                        selectedIndex: selectedIndex,
                        onSelect: (index)=>setSelectedIndex(index),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "header",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
                                    className: "icon-menu revealator-slideup revealator-once revealator-delay1",
                                    children: menuItem.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                            className: "icon-box",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: `fa ${item.icon}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: item.menuName
                                                })
                                            ]
                                        }, i))
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tab-panel_list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        className: "home ",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "container-fluid main-container container-home p-0 g-0",
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1200",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "color-block d-none d-lg-block"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    setSelectedIndex: setSelectedIndex
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        className: "about",
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_about__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        className: "portfolio professional",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "title-section text-start text-sm-center",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        children: [
                                                            "my ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "portfolio"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "title-bg",
                                                        children: "works"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        className: "game",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "title-section text-start text-sm-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        children: [
                                                            "DO I FIT IN YOUR ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "TEAM?"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "title-bg",
                                                        children: "Resume"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Game__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeDark);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;