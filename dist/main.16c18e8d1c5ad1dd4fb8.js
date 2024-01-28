/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burder.js":
/*!**************************!*\
  !*** ./src/js/burder.js ***!
  \**************************/
/***/ (function() {

const burgerBtn = document.querySelector('.header__burger-container');
const menuContainer = document.querySelector('.header__container');
function handleToggleMenu() {
  menuContainer.classList.toggle('header__container_type_active');
  this.classList.toggle('active');
}
;
burgerBtn.addEventListener('click', handleToggleMenu);

/***/ }),

/***/ "./src/js/tariffs.js":
/*!***************************!*\
  !*** ./src/js/tariffs.js ***!
  \***************************/
/***/ (function() {

const priceCurrency = document.querySelectorAll('.tariff__price-currency');
const priceValue = document.querySelectorAll('.tariff__price-value');
const pricePeriod = document.querySelectorAll('.tariff__price-period');
const tariff = document.querySelectorAll('.tariff');
const dollarRate = 90;
const euroRate = 95;
priceCurrency.forEach(currency => {
  currency.addEventListener('click', function () {
    if (currency.innerHTML === '$') {
      priceCurrency.forEach(x => {
        x.innerHTML = '₽';
      }, priceValue.forEach(x => {
        x.innerHTML = x.innerHTML * dollarRate;
      }));
    } else if (currency.innerHTML === '₽') {
      priceCurrency.forEach(x => {
        x.innerHTML = '€';
      }, priceValue.forEach(x => {
        x.innerHTML = Math.round(x.innerHTML / euroRate);
      }));
    } else {
      priceCurrency.forEach(x => {
        x.innerHTML = '$';
      }, priceValue.forEach(x => {
        x.innerHTML = Math.round(x.innerHTML * euroRate / dollarRate);
      }));
    }
  });
});
pricePeriod.forEach(period => {
  period.addEventListener('click', function () {
    if (period.innerHTML === '/Months') {
      pricePeriod.forEach(x => {
        x.innerHTML = '/Day';
      }, priceValue.forEach(x => {
        x.innerHTML = Math.round(x.innerHTML / 30);
      }));
    } else {
      pricePeriod.forEach(x => {
        x.innerHTML = '/Months';
      }, priceValue.forEach(x => {
        x.innerHTML = x.innerHTML * 30;
      }));
    }
  });
});

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/btn-arrow.png */ "./src/images/btn-arrow.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap\" rel=\"stylesheet\">  \n  <title>Price-table</title>\n</head>\n<body class=\"page\">\n  <div class=\"page__container\">\n\n  \n    <header class=\"header\">\n      <a href=\"#\" class=\"header__logo-link\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Логотип\" class=\"header__logo-icon\">\n        <span class=\"header__logo-name\">Test Task</span>\n      </a>\n      <div class=\"header__burger-container\">\n        <span class=\"header__burger-span\"></span>\n        <span class=\"header__burger-span\"></span>\n        <span class=\"header__burger-span\"></span>\n      </div>\n      <div class=\"header__container\">\n            \n        <nav class=\"header__nav\">\n          <ul class=\"header__list\">\n            <li class=\"header__list-item\">\n              <a href=\"#\" class=\"header__link\">\n                About us\n              </a>\n            </li>\n            <li class=\"header__list-item\">\n              <a href=\"#\" class=\"header__link\">\n                Features\n              </a>\n            </li>\n            <li class=\"header__list-item\">\n              <a href=\"#\" class=\"header__link header__link_active\">\n                Pricing\n              </a>\n            </li>\n            <li class=\"header__list-item\">\n              <a href=\"#\" class=\"header__link\">\n                Product\n              </a>\n            </li>\n            <li class=\"header__list-item\">\n              <a href=\"#\" class=\"header__link header__link_type_active\">\n                Contact\n              </a>\n            </li>\n          </ul>\n        </nav>\n\n        <div class=\"header__auth auth\">\n          <a href=\"#\" class=\"header__link auth__login\">Login</a>\n          <a href=\"#\" class=\"header__link auth__singup\">Sign Up</a>\n        </div>\n\n      </div>\n    </header>\n\n    <main class=\"main\">\n\n      <h1 class=\"page__title\">\n        Instantly Connect with&nbsp;Your&nbsp;Leads\n      </h1>\n\n      <section class=\"tariffs\">\n\n        <div class=\"tariff\">\n          <div class=\"tariff__description\">\n            <h2 class=\"tariff__title\">Basic Survival</h2>\n            <div class=\"tariff__price-container\">\n              <span class=\"tariff__price-currency\">$</span>\n              <span class=\"tariff__price-value\">30</span>\n              <span class=\"tariff__price-period\">/Months</span>\n            </div>\n            <span class=\"tariff__description-text\">Get Torque’s basic plan to&nbsp;optimise you lead generation process.</span>\n          </div>\n\n          <div class=\"tariff__features\">\n            <span class=\"tariff__features-heading\">Core Features</span>\n            <span class=\"tariff__plan\">Basic</span>\n            <ul class=\"tariff__features-list\">\n              <li class=\"tariff__features-item\">\n                Email addresses\n              </li>\n              <li class=\"tariff__features-item\">\n                Phone numbers\n              </li>\n              <li class=\"tariff__features-item\">\n                Unlimited Lists\n              </li>\n            </ul>\n          </div>\n          <button class=\"tariff__btn\">Start Free Trial</button>\n        </div>\n\n        <div class=\"tariff tariffs__second\">\n          <div class=\"tariff__description tariffs__second-description\">\n            <h2 class=\"tariff__title\">Mission Professional</h2>\n            <div class=\"tariff__price-container\">\n              <span class=\"tariff__price-currency\">$</span>\n              <span class=\"tariff__price-value\">276</span>\n              <span class=\"tariff__price-period\">/Months</span>\n            </div>\n            <span class=\"tariff__description-text\">Get Torque’s basic plan to&nbsp;optimise you lead generation process.</span>\n          </div>\n\n          <div class=\"tariff__features\">\n            <span class=\"tariff__features-heading\">Core Features</span>\n            <span class=\"tariff__plan\">Boost Tools</span>\n            <ul class=\"tariff__features-list\">\n              <li class=\"tariff__features-item tariff__features-item_old\">\n                Email addresses\n              </li>\n              <li class=\"tariff__features-item tariff__features-item_old\">\n                Phone numbers\n              </li>\n              <li class=\"tariff__features-item tariff__features-item_old\">\n                Unlimited Lists\n              </li>\n              <li class=\"tariff__features-item\">\n                Export contacts\n              </li>\n              <li class=\"tariff__features-item\">\n                Prospecting\n              </li>\n              <li class=\"tariff__features-item\">\n                50MB Per File Attachment\n              </li>\n              \n            </ul>\n          </div>\n          <button class=\"tariff__btn tariffs__second-btn\">\n            Get Started\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"tariffs__second-btn-arrow\">\n          </button>\n        </div>\n\n        <div class=\"tariff\">\n          <div class=\"tariff__description\">\n            <h2 class=\"tariff__title\">Rocketship Premium</h2>\n            <div class=\"tariff__price-container\">\n              <span class=\"tariff__price-currency\">$</span>\n              <span class=\"tariff__price-value\">420</span>\n              <span class=\"tariff__price-period\">/Months</span>\n            </div>\n            <span class=\"tariff__description-text\">Get Torque’s basic plan to&nbsp;optimise you lead generation process.</span>\n          </div>\n\n          <div class=\"tariff__features\">\n            <span class=\"tariff__features-heading\">Core Features</span>\n            <span class=\"tariff__plan\">Super Fuel</span>\n            <ul class=\"tariff__features-list\">\n              <li class=\"tariff__features-item tariff__features-item_old\">\n                Email addresses\n              </li>\n              <li class=\"tariff__features-item tariff__features-item_old\">\n                Phone numbers\n              </li>\n              <li class=\"tariff__features-item tariff__features-item_old\">\n                Unlimited Lists\n              </li>\n              <li class=\"tariff__features-item tariff__features-item_old\">\n                Export contacts\n              </li>\n              <li class=\"tariff__features-item tariff__features-item_old\">\n                Prospecting\n              </li>\n              <li class=\"tariff__features-item tariff__features-item_old\">\n                50MB Per File Attachment\n              </li>\n              <li class=\"tariff__features-item\">\n                Basic analytics\n              </li>\n              \n            </ul>\n          </div>\n          <button class=\"tariff__btn\">Start Free Trial</button>\n        </div>\n\n      </section>\n\n    </main>\n  </div>\n</body>\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/index.sass":
/*!*******************************!*\
  !*** ./src/styles/index.sass ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/btn-arrow.png":
/*!**********************************!*\
  !*** ./src/images/btn-arrow.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "128c2736b6025b31032e.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "98a58e36b47037a678e4.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.sass */ "./src/styles/index.sass");
/* harmony import */ var _js_burder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/burder */ "./src/js/burder.js");
/* harmony import */ var _js_burder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_burder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_tariffs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/tariffs */ "./src/js/tariffs.js");
/* harmony import */ var _js_tariffs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_tariffs__WEBPACK_IMPORTED_MODULE_4__);





}();
/******/ })()
;
//# sourceMappingURL=main.16c18e8d1c5ad1dd4fb8.js.map