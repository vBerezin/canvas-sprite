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
/******/ 	__webpack_require__.p = "/assets\\build-dev/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/section-xbox/index.js":
/*!******************************************!*\
  !*** ./src/blocks/section-xbox/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_on_scroll_per_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/on-scroll-per-frame */ "./src/blocks/section-xbox/scripts/on-scroll-per-frame.js");
/* harmony import */ var _scripts_animate_loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/animate-loop */ "./src/blocks/section-xbox/scripts/animate-loop.js");
/* harmony import */ var _scripts_on_scroll_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/on-scroll-animate */ "./src/blocks/section-xbox/scripts/on-scroll-animate.js");




/***/ }),

/***/ "./src/blocks/section-xbox/scripts/animate-loop.js":
/*!*********************************************************!*\
  !*** ./src/blocks/section-xbox/scripts/animate-loop.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_canvas_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~components/canvas-sprite */ "./src/components/canvas-sprite/index.js");


(function () {
  var section = document.querySelector('.js-section-xbox-2');
  if (!section) return false;
  var canvas = section.querySelector('canvas');
  if (!canvas) return false;
  var placeholder = section.querySelector('[data-rel="placeholder"]');
  var _canvas$dataset = canvas.dataset,
      img = _canvas$dataset.img,
      frames = _canvas$dataset.frames;
  var sprite = new _components_canvas_sprite__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, img, frames);

  sprite.onLoad = function () {
    if (placeholder) placeholder.parentNode.removeChild(placeholder);
    return sprite.animate(true);
  };

  return sprite;
})();

/***/ }),

/***/ "./src/blocks/section-xbox/scripts/on-scroll-animate.js":
/*!**************************************************************!*\
  !*** ./src/blocks/section-xbox/scripts/on-scroll-animate.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_canvas_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~components/canvas-sprite */ "./src/components/canvas-sprite/index.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~scripts/utils */ "./src/scripts/utils/index.js");



(function () {
  var section = document.querySelector('.js-section-xbox-3');
  if (!section) return false;
  var canvas = section.querySelector('canvas');
  if (!canvas) return false;
  var placeholder = section.querySelector('[data-rel="placeholder"]');
  var _canvas$dataset = canvas.dataset,
      img = _canvas$dataset.img,
      frames = _canvas$dataset.frames;
  var sprite = new _components_canvas_sprite__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, img, frames);
  var lastScroll = 0;
  var animated = false;

  sprite.onLoad = function () {
    var onScroll = function onScroll() {
      var offset = Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_1__["getOffset"])(section);
      var windowMiddle = window.scrollY + window.innerHeight / 2;
      var sectionBottom = offset.top + section.offsetHeight;

      if (windowMiddle < offset.top || windowMiddle > sectionBottom) {
        animated = false;
        lastScroll = windowMiddle;
        return false;
      }

      if (animated) return false;
      animated = true;

      if (windowMiddle > lastScroll) {
        return sprite.animate(false, 1000, false);
      }

      return sprite.animate(false, 1000, true);
    };

    window.addEventListener('scroll', onScroll);
    if (placeholder) placeholder.parentNode.removeChild(placeholder);
    return sprite.render(0);
  };

  return sprite;
})();

/***/ }),

/***/ "./src/blocks/section-xbox/scripts/on-scroll-per-frame.js":
/*!****************************************************************!*\
  !*** ./src/blocks/section-xbox/scripts/on-scroll-per-frame.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_canvas_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~components/canvas-sprite */ "./src/components/canvas-sprite/index.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~scripts/utils */ "./src/scripts/utils/index.js");



(function () {
  var section = document.querySelector('.js-section-xbox-1');
  if (!section) return false;
  var canvas = section.querySelector('canvas');
  if (!canvas) return false;
  var info = section.querySelector('[data-rel="frame.info"]');
  var placeholder = section.querySelector('[data-rel="placeholder"]');
  var _canvas$dataset = canvas.dataset,
      img = _canvas$dataset.img,
      frames = _canvas$dataset.frames;
  var sprite = new _components_canvas_sprite__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, img, frames);

  sprite.onLoad = function () {
    var offset = Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_1__["getOffset"])(section);

    var onScroll = function onScroll() {
      var windowMiddle = window.scrollY + window.innerHeight / 2;

      if (windowMiddle > offset.top && windowMiddle < offset.top + section.offsetHeight) {
        var scrollSize = windowMiddle - offset.top;
        var step = section.offsetHeight / frames;
        var frameIndex = Math.round(scrollSize / step);
        info.innerText = frameIndex;
        return sprite.render(frameIndex);
      }

      return false;
    };

    window.addEventListener('scroll', onScroll);
    if (placeholder) placeholder.parentNode.removeChild(placeholder);
    return sprite.render(0);
  };

  return sprite;
})();

/***/ }),

/***/ "./src/components/canvas-sprite/index.js":
/*!***********************************************!*\
  !*** ./src/components/canvas-sprite/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasSprite; });
function CanvasSprite(node, imgSrc, count) {
  var _this = this;

  this.canvas = node;
  this.currentFrame = 0;
  var sprite = new Image();
  var framesCount = +count;
  var ctx = this.canvas.getContext('2d');
  sprite.src = imgSrc;
  this.onLoad = null;
  this.onError = null;
  var interval;

  this.render = function () {
    var frameIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var frameHeight = _this.frameHeight,
        frameWidth = _this.frameWidth,
        _this$canvas = _this.canvas,
        width = _this$canvas.width,
        height = _this$canvas.height;
    var spriteLeft = 0;
    var spriteTop = 0;

    if (frameWidth > frameHeight) {
      // горизонтальный спрайт
      spriteLeft = Math.min(frameIndex * frameWidth, sprite.width - frameWidth);
    }

    if (frameHeight > frameWidth) {
      // вертикальный спрайт
      spriteTop = Math.min(frameIndex * frameHeight, sprite.height - frameHeight);
    }

    return window.requestAnimationFrame(function () {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(sprite, spriteLeft, spriteTop, frameWidth, frameHeight, 0, 0, width, height);
    });
  };

  this.next = function () {
    _this.currentFrame += 1;

    if (_this.currentFrame > framesCount) {
      _this.currentFrame = 0;
    }

    return _this.render(_this.currentFrame);
  };

  this.prev = function () {
    _this.currentFrame -= 1;

    if (_this.currentFrame < 0) {
      _this.currentFrame = framesCount;
    }

    return _this.render(_this.currentFrame);
  };

  this.animate = function () {
    var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    clearInterval(interval);
    _this.currentFrame = reverse ? framesCount : 0;

    if (reverse) {
      interval = setInterval(function () {
        if (!loop && _this.currentFrame === 0) {
          return clearInterval(interval);
        }

        return _this.prev();
      }, speed / framesCount);
    } else {
      interval = setInterval(function () {
        if (!loop && _this.currentFrame === framesCount) {
          return clearInterval(interval);
        }

        return _this.next();
      }, speed / framesCount);
    }
  };

  sprite.onload = function () {
    _this.frameHeight = sprite.height;
    _this.frameWidth = sprite.width / framesCount;
    _this.canvas.height = sprite.height;
    _this.canvas.width = _this.frameWidth;
    if (typeof _this.onLoad === 'function') return _this.onLoad();
    return _this.render(_this.currentFrame);
  };

  sprite.onerror = function () {
    if (typeof _this.onError === 'function') return _this.onError();
    throw new Error("Sprite ".concat(imgSrc, " not loaded"));
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_section_xbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~blocks/section-xbox */ "./src/blocks/section-xbox/index.js");



/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scripts/utils/getOffset.js":
/*!****************************************!*\
  !*** ./src/scripts/utils/getOffset.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @description - позиция относительно документа
 * */
/* harmony default export */ __webpack_exports__["default"] = (function (node) {
  if (!node) return false;
  var rect = node.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset - document.documentElement.clientTop,
    left: rect.left + window.pageXOffset - document.documentElement.clientLeft
  };
});

/***/ }),

/***/ "./src/scripts/utils/index.js":
/*!************************************!*\
  !*** ./src/scripts/utils/index.js ***!
  \************************************/
/*! exports provided: getOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getOffset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOffset */ "./src/scripts/utils/getOffset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return _getOffset__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ })

/******/ });
//# sourceMappingURL=index.js.map