/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/desandro-classie/classie.js":
/*!**************************************************!*\
  !*** ./node_modules/desandro-classie/classie.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * classie v1.0.1\n * class helper functions\n * from bonzo https://github.com/ded/bonzo\n * MIT license\n * \n * classie.has( elem, 'my-class' ) -> true/false\n * classie.add( elem, 'my-new-class' )\n * classie.remove( elem, 'my-unwanted-class' )\n * classie.toggle( elem, 'my-class' )\n */\n\n/*jshint browser: true, strict: true, undef: true, unused: true */\n/*global define: false, module: false */\n\n( function( window ) {\n\n'use strict';\n\n// class helper functions from bonzo https://github.com/ded/bonzo\n\nfunction classReg( className ) {\n  return new RegExp(\"(^|\\\\s+)\" + className + \"(\\\\s+|$)\");\n}\n\n// classList support for class management\n// altho to be fair, the api sucks because it won't accept multiple classes at once\nvar hasClass, addClass, removeClass;\n\nif ( 'classList' in document.documentElement ) {\n  hasClass = function( elem, c ) {\n    return elem.classList.contains( c );\n  };\n  addClass = function( elem, c ) {\n    elem.classList.add( c );\n  };\n  removeClass = function( elem, c ) {\n    elem.classList.remove( c );\n  };\n}\nelse {\n  hasClass = function( elem, c ) {\n    return classReg( c ).test( elem.className );\n  };\n  addClass = function( elem, c ) {\n    if ( !hasClass( elem, c ) ) {\n      elem.className = elem.className + ' ' + c;\n    }\n  };\n  removeClass = function( elem, c ) {\n    elem.className = elem.className.replace( classReg( c ), ' ' );\n  };\n}\n\nfunction toggleClass( elem, c ) {\n  var fn = hasClass( elem, c ) ? removeClass : addClass;\n  fn( elem, c );\n}\n\nvar classie = {\n  // full names\n  hasClass: hasClass,\n  addClass: addClass,\n  removeClass: removeClass,\n  toggleClass: toggleClass,\n  // short names\n  has: hasClass,\n  add: addClass,\n  remove: removeClass,\n  toggle: toggleClass\n};\n\n// transport\nif ( true ) {\n  // AMD\n  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {}\n\n})( window );\n\n\n//# sourceURL=webpack:///./node_modules/desandro-classie/classie.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var desandro_classie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! desandro-classie */ \"./node_modules/desandro-classie/classie.js\");\n/* harmony import */ var desandro_classie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(desandro_classie__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar navigation = function navigation() {\n  var menuToggle = document.querySelector('header .nav-toggle');\n  var header = document.querySelector('header'); // Handle Mobile Menu Button\n\n  var text = 'Menu';\n  menuToggle.addEventListener('click', function () {\n    desandro_classie__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(header, 'nav-responsive');\n    text = header.className === 'nav-responsive' ? 'Close' : 'Menu';\n    menuToggle.textContent = text;\n  });\n};\n\nnavigation();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });