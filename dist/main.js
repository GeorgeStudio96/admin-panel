/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./src/modules/changePermissions.js\");\n/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ \"./src/modules/editUsers.js\");\n/* harmony import */ var _modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filterUsers */ \"./src/modules/filterUsers.js\");\n/* harmony import */ var _modules_sortUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sortUser */ \"./src/modules/sortUser.js\");\n/* harmony import */ var _modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/searchUsers */ \"./src/modules/searchUsers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_2__.UserService\r\n\r\nuserService.getUsers().then(data => {\r\n    console.log(data)\r\n    ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.render)(data)\r\n})\r\n\r\n;(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_0__.addUsers)()\r\n;(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)()\r\n;(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)()\r\n;(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUser)()\r\n;(0,_modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__.filterUsers)()\r\n;(0,_modules_sortUser__WEBPACK_IMPORTED_MODULE_7__.sortUser)()\r\n;(0,_modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__.searchUser)()\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUsers\": () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst addUsers = () => {\n    const form = document.querySelector('form')\n    const formName = document.getElementById('form-name')\n    const formEmail = document.getElementById('form-email')\n    const children = document.getElementById('form-children')\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n\n        if (!form.dataset.method) {\n            const user = {\n                // id: formName.value,\n                name: formName.value,\n                email: formEmail.value,\n                children: children.checked,\n                permissions: false\n            }\n\n            userService.addUser(user).then(() => {\n                userService.getUser().then(users => {\n                    ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n                    form.reset()\n                })\n            })\n        }\n    })\n\n\n}\n\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/changePermissions.js":
/*!******************************************!*\
  !*** ./src/modules/changePermissions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePermissions\": () => (/* binding */ changePermissions)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\n\nconst changePermissions = () => {\n    const tBody = document.getElementById('table-body')\n\n    tBody.addEventListener('click', (e) => {\n        if (e.target.closest('.form-check-input')) {\n            const checkStatus = e.target.checked\n            console.log(checkStatus, 'check')\n            const tr = e.target.closest('tr')\n            const id = tr.dataset.id\n            console.log(id)\n\n            userService.changePermissionsUser(id, { permissions: checkStatus })\n                .then(res => console.log(res))\n        }\n\n\n    })\n}\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermissions.js?");

/***/ }),

/***/ "./src/modules/editUsers.js":
/*!**********************************!*\
  !*** ./src/modules/editUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editUser\": () => (/* binding */ editUser)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst editUser = () => {\n    const tBody = document.getElementById('table-body')\n    const form = document.querySelector('form')\n    const formName = document.getElementById('form-name')\n    const formEmail = document.getElementById('form-email')\n    const children = document.getElementById('form-children')\n\n    tBody.addEventListener('click', (e) => {\n\n        if (e.target.closest('.btn-edit')) {\n            const tr = e.target.closest('tr')\n            const id = tr.dataset.id\n            userService.getUser(id)\n                .then(res => {\n\n                    formName.value = res.name\n                    formEmail.value = res.email\n                    children.checked = res.children\n                })\n            form.dataset.method = id\n        }\n    })\n\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n\n        if (form.dataset.method) {\n            const user = {\n                // id: formName.value,\n                name: formName.value,\n                email: formEmail.value,\n                children: children.checked,\n                permissions: false\n            }\n\n            console.log(user)\n            console.log(form.dataset.method)\n            const idUser = form.dataset.method\n            console.log(idUser)\n\n\n\n\n            userService.editUser(idUser, user)\n                .then(() => {\n                    userService.getUser()\n                        .then(users => {\n                            ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n                            form.reset()\n                            form.removeAttribute('data-method')\n                        })\n\n                })\n\n        }\n    })\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUsers.js?");

/***/ }),

/***/ "./src/modules/filterUsers.js":
/*!************************************!*\
  !*** ./src/modules/filterUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterUsers\": () => (/* binding */ filterUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\n\nconst filterUsers = () => {\n    console.log('filter users')\n\n    const btnIsChildren = document.getElementById('btn-isChildren')\n    const btnIsPermissions = document.getElementById('btn-isPermissions')\n    const btnIsAll = document.getElementById('btn-isAll')\n\n\n    btnIsChildren.addEventListener('click', () => {\n        userService.filterUser('children')\n            .then(res => (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(res))\n    })\n\n    btnIsPermissions.addEventListener('click', () => {\n        userService.filterUser('permissions')\n            .then(res => (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(res))\n    })\n\n    btnIsAll.addEventListener('click', () => {\n        userService.getUsers()\n            .then(res => (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(res))\n    })\n\n} \n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filterUsers.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (fn, ms) => {\n\n    let timeout;\n    return function () {\n        const fnCall = () => {\n            fn.apply(this, arguments)\n        }\n        clearTimeout(timeout);\n        timeout = setTimeout(fnCall, ms)\n    }\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/removeUsers.js":
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeUsers\": () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst removeUsers = () => {\n    const tBody = document.getElementById('table-body')\n\n    tBody.addEventListener('click', (e) => {\n\n        if (e.target.closest('.btn-remove')) {\n            const tr = e.target.closest('tr')\n            const id = tr.dataset.id\n\n            userService.removeUser(id)\n                .then(res => userService.getUser().then(users => {\n                    ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n                }))\n        }\n    })\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n    const tBody = document.getElementById('table-body')\r\n    tBody.innerHTML = ''\r\n\r\n    console.log(tBody)\r\n\r\n    users.forEach(user => {\r\n        tBody.insertAdjacentHTML('beforeend', `\r\n        <tr data-id=${user.id}>\r\n        <th scope=\"row\">${user.id}</th>\r\n        <td>${user.name}</td>\r\n        <td>${user.email}</td>\r\n        <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n        <td>\r\n            <div class=\"form-check form-switch\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n                    id=\"form-children\" ${user.permissions ? 'checked' : ''}>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n                    <i class=\"bi-pencil-square\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n                    <i class=\"bi-person-x\"></i>\r\n                </button>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n        `)\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/searchUsers.js":
/*!************************************!*\
  !*** ./src/modules/searchUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchUser\": () => (/* binding */ searchUser)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\n\n\nconst searchUser = () => {\n    console.log('search')\n    const searchInput = document.getElementById('search-input')\n\n\n    const debounceSearch = () => {\n        let searchInputVal = searchInput.value\n\n        userService.getSearchUser(searchInputVal)\n            .then(res => (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(res))\n    }\n\n\n    const setDebounceSearch = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)(debounceSearch, 1000)\n\n    searchInput.addEventListener('input', setDebounceSearch)\n\n\n}\n\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/searchUsers.js?");

/***/ }),

/***/ "./src/modules/sortUser.js":
/*!*********************************!*\
  !*** ./src/modules/sortUser.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortUser\": () => (/* binding */ sortUser)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst sortUser = () => {\n    const sortIsChildren = document.getElementById('sort-is-children')\n\n    let isSort = false;\n\n    sortIsChildren.addEventListener('click', () => {\n        userService.getSortUser({\n            name: 'children',\n            value: isSort ? 'asc' : 'desc'\n        })\n            .then(res => (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(res))\n\n        isSort = !isSort\n\n    })\n\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/sortUser.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserService\": () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\n\n    // async handleResponse(url, options) {\n    //     try {\n    //         const res = await fetch(url, options)\n    //         if (!res.ok) {\n    //             throw new Error(`Запрос выполнен не верно, ${res.status}`)\n    //         }\n\n    //         return await res.json()\n\n    //     } catch (error) {\n    //         console.error(error)\n    //         throw error\n    //     }\n    // }\n\n\n    // async getData(url, params) {\n\n    //     const urlParams = new URLSearchParams(params)\n    //     const requestUrl = `${url}?${urlParams.toString()}`\n    //     const options = {\n    //         method: 'GET'\n    //     }\n\n    //     return await handleResponse(requestUrl, options)\n    // }\n\n    // async sendData(url, data) {\n    //     const options = {\n    //         method: 'POST',\n    //         headers: {\n    //             'Content-Type': 'application/json',\n    //         },\n    //         body: JSON.stringify(data),\n    //     }\n\n    //     return await handleResponse(url, options);\n    // }\n\n\n\n\n    constructor() {\n        this.url = 'http://localhost:4545'\n    }\n\n\n\n    async getUsers() {\n        const res = await fetch(`${this.url}/users`)\n        return await res.json()\n    }\n\n    async addUser(user) {\n        const res = await fetch('http://localhost:4545/users', {\n            method: 'POST',\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(user)\n        })\n        return await res.json()\n    }\n\n    async removeUser(id) {\n        const res = await fetch(`http://localhost:4545/users/${id}`, {\n            method: 'DELETE'\n        })\n        return await res.json()\n    }\n\n    async changePermissionsUser(id, data) {\n        const res = await fetch(`http://localhost:4545/users/${id}`, {\n            method: 'PATCH',\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        })\n        return await res.json()\n    }\n\n    async getUser(id) {\n        const res = await fetch(`http://localhost:4545/users/${id}`)\n        return await res.json()\n    }\n\n    async editUser(id, user) {\n        const res = await fetch(`http://localhost:4545/users/${id}`, {\n            method: 'PUT',\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(user)\n        })\n\n        return res.json()\n    }\n\n\n    async filterUser(filterOption) {\n        const res = await fetch(`http://localhost:4545/users?${filterOption}=true`)\n        return await res.json()\n    }\n\n\n    async getSortUser(sortOption) {\n        const res = await fetch(`http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`)\n        return res.json()\n    }\n\n    async getSearchUser(inputValue) {\n        const res = await fetch(`http://localhost:4545/users?q=${inputValue}`)\n        return res.json()\n    }\n\n\n\n\n\n} \n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;