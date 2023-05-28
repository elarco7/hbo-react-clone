"use strict";
exports.id = 831;
exports.ids = [831];
exports.modules = {

/***/ 8831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* binding */ HBOProvider),
/* harmony export */   "F1": () => (/* binding */ useStateContext)
/* harmony export */ });
/* unused harmony export StateContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
function useStateContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);
}
function HBOProvider({ children  }) {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isSideNavOpen , 1: setSideNav  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isAccountOpen , 1: setAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isSearchOpen , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const createUserAction = (e)=>{
        setUser(e.target.value);
    // console.log(user, "provider");
    };
    const setSideNavStatus = ()=>{
        setSideNav(!isSideNavOpen);
    };
    const setAccountStatus = ()=>{
        setAccount(!isAccountOpen);
    };
    const setSearchStatus = ()=>{
        setSearch(!isSearchOpen);
    };
    const hboProvider = {
        createUser: createUserAction,
        toggleSideNav: setSideNavStatus,
        toggleAccount: setAccountStatus,
        toggleSearch: setSearchStatus
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StateContext.Provider, {
        value: {
            user,
            isSideNavOpen,
            isAccountOpen,
            isSearchOpen,
            hboProvider
        },
        children: children
    });
}


/***/ })

};
;