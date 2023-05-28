"use strict";
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 3759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8831);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2607);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_4__);





function Login() {
    const state = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_2__/* .useStateContext */ .F1)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: loadingUsers , 1: setLoadingUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const storedUsers = local_storage__WEBPACK_IMPORTED_MODULE_4___default()("users");
        setLoadingUsers(true);
        if (storedUsers !== null) {
            setUsers(storedUsers);
            setLoadingUsers(false);
        }
    }, []);
    // useEffect(() => {
    //   console.log("registered users", users);
    // }, [users]);
    const selectUser = (user)=>{
        local_storage__WEBPACK_IMPORTED_MODULE_4___default()("activeUID", user.id);
        router.push({
            pathname: "/",
            query: {
                userName: user.user
            }
        });
    };
    const showUsers = ()=>{
        if (!loadingUsers) {
            return users.map((user)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "login-user__form",
                    onClick: ()=>selectUser(user),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "login-user__user-box",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://randomuser.me/api/portraits/women/57.jpg",
                                alt: "user pic",
                                className: "login-user__user-img"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "login-user__user-name",
                            children: user.user
                        })
                    ]
                }, user.id);
            });
        }
    };
    const createUser = ()=>{
        router.push("/create");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "login-user",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "login-user__top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "login-user__logo"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "login-user__title",
                        children: "Who Is Watching?"
                    })
                ]
            }),
            loadingUsers ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                style: {
                    color: "white",
                    fontSize: "3rem"
                },
                children: "LOADING"
            }) : showUsers(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "login-user__buttons",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "login-user__kid",
                    onClick: createUser,
                    children: "Create User"
                })
            })
        ]
    });
}


/***/ })

};
;