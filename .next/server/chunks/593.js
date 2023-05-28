"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 7184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/HBOProvider.js
var HBOProvider = __webpack_require__(8831);
;// CONCATENATED MODULE: ./components/UI/UserAccount/UserAccount.js





const UserAccount = ()=>{
    const state = (0,HBOProvider/* useStateContext */.F1)();
    const loopComp = (component, iter)=>{
        const thumbnails = [];
        for(let i = 0; i < iter; i++){
            thumbnails.push(component);
        }
        return thumbnails;
    };
    const thumbnailLayout = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "account__watch-video",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "https://m.media-amazon.com/images/M/MV5BNDZlNzJiMzQtNzhjZi00MDMyLWFhZDUtNjc5NDhmMDdhYTAwXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_FMjpg_UX1000_.jpg",
                alt: "",
                layout: "fill"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "account__watch-overlay",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "account__watch-buttons",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "account__watch-circle",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-play"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "account__watch-circle",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-times"
                            })
                        })
                    ]
                })
            })
        ]
    });
    return(// add account--active
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `account ${state.isAccountOpen && "account--active"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "account__details",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "account__title",
                        children: "My List"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "account__watch-list",
                        children: loopComp(thumbnailLayout, 4)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "account__menu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "account__main",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "active",
                                children: "My List"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "side-nav__divider"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "account__main",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Account"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Sign Out"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/UI/SearchModal/SearchModal.js




const SearchModal = ()=>{
    const state = (0,HBOProvider/* useStateContext */.F1)();
    const loopComp = (component, iter)=>{
        const thumbnails = [];
        for(let i = 0; i < iter; i++){
            thumbnails.push(component);
        }
        return thumbnails;
    };
    const thumbnailLayout = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "search-modal__thumbnail",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-modal__thumbnail-ctr",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "https://m.media-amazon.com/images/M/MV5BMWUyZTg2YTEtYmY4ZS00MGRiLTk0YzctYmM4NzEwNjAwY2U2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
                    alt: "seiya",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-modal__top-layer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-play"
                })
            })
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `search-modal ${state.isSearchOpen && "search-modal--active"} `,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "search-modal__input-group",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "Search for a title",
                            className: "search-modal__input"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "search-modal__close-btn",
                            onClick: state.hboProvider.toggleSearch,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-times"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "search-modal__title",
                    children: "Popular Searches"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "search-modal__thumbnails",
                    children: loopComp(thumbnailLayout, 10)
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/UI/Header/Header.js






const Header = ()=>{
    const state = (0,HBOProvider/* useStateContext */.F1)();
    const closeModal = ()=>{
        let isSideNavOpen = state.isSideNavOpen;
        let isAccountOpen = state.isAccountOpen;
        if (isAccountOpen) {
            state.hboProvider.toggleAccount();
        }
        if (isSideNavOpen) {
            state.hboProvider.toggleSideNav();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `top-header ${(state.isSideNavOpen || state.isAccountOpen) && "top-header__menu-open"}`,
                onClick: closeModal,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "top-header__left-side",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "top-header__menu-btn",
                                onClick: state.hboProvider.toggleSideNav,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-bars"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "top-header__search-btn",
                                onClick: state.hboProvider.toggleSearch,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-search"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "top-header__logo"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "top-header__account",
                        onClick: state.hboProvider.toggleAccount,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "top-header__account-img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "https://randomuser.me/api/portraits/women/57.jpg",
                                    alt: "user image",
                                    className: "top-header__user-img",
                                    layout: "fill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "top-header__user-name",
                                children: "Kelly"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(UserAccount, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SearchModal, {})
        ]
    });
};

;// CONCATENATED MODULE: ./components/UI/SideNav/SideNav.js




const SideNav = ()=>{
    const state = (0,HBOProvider/* useStateContext */.F1)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `side-nav  ${state.isSideNavOpen && "side-nav--active"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "side-nav__close-btn",
                onClick: state.hboProvider.toggleSideNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-times"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "side-nav__main",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "active",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Series"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Movies"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Originals"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Just Added"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Last Chance"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Coming Soon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Trending Now"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "side-nav__divider"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "side-nav__main",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Action"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Animation"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Comedy"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Crime"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Documentaries"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Drama"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Fantasy & Sci-fi"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Horror"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "International"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Kids & Family"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Latino"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Music"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "News/Talk"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Reality"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Romance"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Shorts"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Sports"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Suspense"
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Layouts/MainLayout.js





function MainLayout(props) {
    const state = (0,HBOProvider/* useStateContext */.F1)();
    const closeModals = ()=>{
        let isSideNavOpen = state.isSideNavOpen;
        let isAccountOpen = state.isAccountOpen;
        if (isAccountOpen) {
            state.hboProvider.toggleAccount();
        }
        if (isSideNavOpen) {
            state.hboProvider.toggleSideNav();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            background: `linear-gradient(
        135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%
    )`,
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SideNav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "content-container",
                onClick: closeModals,
                children: props.children
            })
        ]
    });
}


/***/ }),

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ FeatureMedia)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FeatureMedia = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "featured-media",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                className: "featured-media__video",
                width: "100%",
                height: "100%",
                src: "https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=0&loop=1&start=16",
                title: "YouTube video player",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "featured-media__bg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "featured-media__container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "featured-media__title",
                            children: "Mortal Kombat"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "featured-media__playing",
                            children: "NOW PLAYING"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "featured-media__location",
                            children: "In theaters and on HBO MAX. Streaming throughout May 23rd."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "featured-media__buttons",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "featured-media__play-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-play"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "featured-media__info-btn",
                                    children: "MORE INFO"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ })

};
;