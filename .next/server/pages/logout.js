module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/logout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/logout.js":
/*!*************************!*\
  !*** ./pages/logout.js ***!
  \*************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ \"next-cookies\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Logout = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const logoutOnServer = async () => {\n      const router = next_router__WEBPACK_IMPORTED_MODULE_1___default.a;\n\n      try {\n        await fetch(`${\"https://mysterious-brushlands-37799.herokuapp.com\"}/user/logout`, {\n          method: \"POST\",\n          credentials: \"include\",\n          headers: {\n            \"Content-Type\": \"application/json\"\n          }\n        });\n        router.push(\"/login\");\n      } catch (err) {\n        console.log(err);\n      }\n    };\n\n    logoutOnServer();\n  }, []);\n  return null;\n};\n\nconst getServerSideProps = async context => {\n  const {\n    token\n  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(context);\n  const res = context.res;\n\n  if (!token) {\n    res.writeHead(302, {\n      Location: `/login`\n    });\n    res.end();\n  }\n\n  return {\n    props: {}\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dvdXQuanM/NzM3MCJdLCJuYW1lcyI6WyJMb2dvdXQiLCJ1c2VFZmZlY3QiLCJsb2dvdXRPblNlcnZlciIsInJvdXRlciIsInVzZVJvdXRlciIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInRva2VuIiwiY29va2llcyIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwicHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBR0EsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkJDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLGNBQWMsR0FBRyxZQUFZO0FBQ2pDLFlBQU1DLE1BQU0sR0FBR0Msa0RBQWY7O0FBQ0EsVUFBSTtBQUNGLGNBQU1DLEtBQUssQ0FBRSxHQUFFQyxtREFBdUIsY0FBM0IsRUFBMEM7QUFDbkRDLGdCQUFNLEVBQUUsTUFEMkM7QUFFbkRDLHFCQUFXLEVBQUUsU0FGc0M7QUFHbkRDLGlCQUFPLEVBQUU7QUFBRSw0QkFBZ0I7QUFBbEI7QUFIMEMsU0FBMUMsQ0FBWDtBQUtBTixjQUFNLENBQUNPLElBQVAsQ0FBWSxRQUFaO0FBQ0QsT0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsS0FaRDs7QUFhQVQsa0JBQWM7QUFDZixHQWZRLEVBZU4sRUFmTSxDQUFUO0FBZ0JBLFNBQU8sSUFBUDtBQUNELENBbEJEOztBQW9CTyxNQUFNWSxrQkFBa0IsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQ25ELFFBQU07QUFBRUM7QUFBRixNQUFZQyxtREFBTyxDQUFDRixPQUFELENBQXpCO0FBQ0EsUUFBTUcsR0FBRyxHQUFHSCxPQUFPLENBQUNHLEdBQXBCOztBQUVBLE1BQUcsQ0FBQ0YsS0FBSixFQUFXO0FBQ1RFLE9BQUcsQ0FBQ0MsU0FBSixDQUFjLEdBQWQsRUFBbUI7QUFBRUMsY0FBUSxFQUFHO0FBQWIsS0FBbkI7QUFDQUYsT0FBRyxDQUFDRyxHQUFKO0FBQ0Q7O0FBRUQsU0FBTztBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFQO0FBQ0QsQ0FWTTtBQVlRdEIscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2dvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBjb29raWVzIGZyb20gJ25leHQtY29va2llcydcblxuXG5jb25zdCBMb2dvdXQgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9nb3V0T25TZXJ2ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXJcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlNFUlZFUl9VUkx9L3VzZXIvbG9nb3V0YCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgfSlcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9XG4gICAgfVxuICAgIGxvZ291dE9uU2VydmVyKClcbiAgfSwgW10pXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHRva2VuIH0gPSBjb29raWVzKGNvbnRleHQpXG4gIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzXG5cbiAgaWYoIXRva2VuKSB7XG4gICAgcmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IGAvbG9naW5gIH0pXG4gICAgcmVzLmVuZCgpXG4gIH1cblxuICByZXR1cm4geyBwcm9wczoge30gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/logout.js\n");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-cookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIj82ZGI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29va2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-cookies\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });