"use strict";
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 8965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ AuthCheck)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2607);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);





const AuthCheck = (component)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: activeUID , 1: setActiveUID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const storedUsers = local_storage__WEBPACK_IMPORTED_MODULE_3___default()("users");
        const activeUID = local_storage__WEBPACK_IMPORTED_MODULE_3___default()("activeUID");
        if (activeUID === null && storedUsers === null) {
            console.log("create an account first...");
            router.push("/create");
        } else {
            setUsers(storedUsers);
            setActiveUID(activeUID);
            console.log(storedUsers, "stored Users");
        }
    }, []);
    return users.length >= 1 && activeUID !== null ? component : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
        style: {
            color: "white",
            fontSize: "3rem",
            marginTop: "5rem"
        },
        children: [
            "ACTIVE UID IS NULL: ",
            activeUID
        ]
    });
};


/***/ }),

/***/ 2659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ MovieModel)
/* harmony export */ });
class MovieModel {
    constructor(movie){
        this.id = movie.id;
        this.title = movie.original_title;
        this.img_url = movie.poster_path;
    }
}


/***/ }),

/***/ 9337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ MediaRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6886);
/* harmony import */ var _Models_MovieModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2659);
/* harmony import */ var _utilities_ShuffleArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9046);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const MediaRow = (props)=>{
    const { 0: loadingData , 1: setLoadingData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: movies , 1: setMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setLoadingData(false);
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(props.db.url).then(function(response) {
            // handle success
            movies = response.data.results.map((movie)=>{
                return new _Models_MovieModel__WEBPACK_IMPORTED_MODULE_5__/* .MovieModel */ .Y(movie);
            });
            setMovies((0,_utilities_ShuffleArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(movies));
        }).catch(function(error) {
            // handle error
            console.log(error);
        }).finally(function() {
        // always executed
        });
    }, []);
    const loopComp = (component, iter)=>{
        const thumbnails = [];
        for(let i = 0; i < iter; i++){
            thumbnails.push(component);
        }
        return thumbnails;
    };
    const ThumbnailLayout = ()=>{
        return movies.map((movie)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "media-row__thumbnail ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `media-row__thumbnail-ctr ${props.dimensions} `,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: `${_utilities_constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].BASE_IMG_URL */ .Z.BASE_IMG_URL}${movie.img_url}`,
                            alt: "seiya",
                            layout: "fill"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "media-row__top-layer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-play"
                        })
                    })
                ]
            }, movie.id);
        });
    };
    const LoadingLayout = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `media-row__thumbnail-ctr ${props.dimensions} `,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "media-row__thumbnail-skeleton",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "media-row__thumbnail-skeleton-img"
                })
            })
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "media-row",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "media-row__title",
                    children: props.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "media-row__thumbnails",
                    children: loadingData ? loopComp(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingLayout, {}), 10) : loopComp(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThumbnailLayout, {}), movies.length)
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ shuffleArray)
/* harmony export */ });
function shuffleArray(array) {
    console.log(array, "array");
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [
            array[j],
            array[i]
        ];
    }
    return array;
}


/***/ }),

/***/ 6886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const _ = {
    DISCOVER_MOVIE_URL: "https://api.themoviedb.org/3/discover/movie?",
    BASE_IMG_URL: "https://image.tmdb.org/t/p/w500",
    POPULAR_TV_URL: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    API_KEY: "b6e1a0113c40018a4403661002ab1fde",
    ACTION_ID: 28,
    HORROR_ID: 27,
    SCI_FI_ID: 878,
    ADVENTURE_ID: 12
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_);


/***/ })

};
;