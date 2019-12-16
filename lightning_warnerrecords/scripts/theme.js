(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/theme"],{

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scripts/components/Parallax.js":
/*!********************************************!*\
  !*** ./src/scripts/components/Parallax.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/scripts/store.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/scripts/events/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Parallax =
/*#__PURE__*/
function () {
  function Parallax(elems) {
    var _this = this;

    _classCallCheck(this, Parallax);

    _defineProperty(this, "run", function (_ref) {
      var current = _ref.current;
      _this.state.current = current;

      _this.animateElems();
    });

    _defineProperty(this, "intersectRatio", function (height, top, bottom, duration, isTop, isBottom) {
      var progress = (_this.state.current - top) / (_store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh * 2) + 0.5;
      /*const start = top - store.bounds.wh
      const end = (store.bounds.wh + bottom + height) * duration
       let progress
      let progressEnd
       if (isTop) {
        progressEnd = store.bounds.wh - (store.bounds.wh - height) + end 
      } else if (isBottom) {
        progressEnd = end + store.bounds.wh - start
      } else {
        progressEnd = end + store.bounds.wh + height
      }
       progress = Math.abs(start / progressEnd)
      progress = math.norm(progress, 0, 1)*/

      return {
        progress: progress
      };
    });

    _defineProperty(this, "onResize", function () {
      _this.state.isResizing = true;

      _this.updateCache();

      _this.state.isResizing = false;
    });

    this.elems = elems;
    this.cache = null;
    this.stickies = null;
    this.state = {
      isResizing: false
    };
    this.init();
  }

  _createClass(Parallax, [{
    key: "animateElems",
    value: function animateElems() {
      for (var i = 0; i < this.cache.length; i++) {
        var _this$cache$i = this.cache[i],
            height = _this$cache$i.height,
            top = _this$cache$i.top,
            bottom = _this$cache$i.bottom,
            tl = _this$cache$i.tl,
            duration = _this$cache$i.duration,
            isTop = _this$cache$i.isTop,
            isBottom = _this$cache$i.isBottom;

        var _this$isVisible = this.isVisible(top, bottom),
            isVisible = _this$isVisible.isVisible,
            start = _this$isVisible.start,
            end = _this$isVisible.end;

        if (isVisible || this.state.isResizing) {
          var _this$intersectRatio = this.intersectRatio(height, top, bottom, duration, isTop, isBottom),
              progress = _this$intersectRatio.progress;

          tl.progress(progress);
        }
      }

      for (var _i = 0; _i < this.stickies.length; _i++) {
        var _this$stickies$_i = this.stickies[_i],
            el = _this$stickies$_i.el,
            _top = _this$stickies$_i.top,
            _bottom = _this$stickies$_i.bottom,
            _height = _this$stickies$_i.height;

        var _this$isVisible2 = this.isVisible(_top, _bottom),
            _isVisible = _this$isVisible2.isVisible;

        if (_isVisible) {
          var translate = this.state.current - _top;
          var transform = Math.min(Math.max(translate, 0), _height - _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh);

          var _progress = transform / (_height - _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh);

          el.style.transform = "translate3d(0, ".concat(transform, "px, 0)");
          el.style.willChange = 'transform';
        }
      }
    }
  }, {
    key: "isVisible",
    value: function isVisible(top, bottom) {
      var current = this.state.current;
      var start = top - current;
      var end = bottom - current;
      var isVisible = start < _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh && end > 0;
      return {
        isVisible: isVisible,
        start: start,
        end: end
      };
    }
  }, {
    key: "getCache",
    value: function getCache() {
      var _this2 = this;

      if (this.elems) {
        this.cache = [];
        this.elems.forEach(function (el) {
          if (el.dataset.animateMobile === undefined && _store__WEBPACK_IMPORTED_MODULE_0__["default"].isDevice) return;
          var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
            paused: true
          });
          var from = JSON.parse(el.dataset.from);

          var to = _objectSpread({}, JSON.parse(el.dataset.to), {}, {
            ease: 'linear',
            duration: 1
          });

          tl.fromTo(el, from, to);
          tl.progress(1);
          var cache = {};

          var _el$getBoundingClient = el.getBoundingClientRect(),
              top = _el$getBoundingClient.top,
              bottom = _el$getBoundingClient.bottom,
              height = _el$getBoundingClient.height;

          tl.progress(0);
          var offsetTop = 0;
          var offsetBottom = 0;
          cache.isBottom = bottom >= _store__WEBPACK_IMPORTED_MODULE_0__["default"].scrollHeight;
          cache.isTop = top < _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh;
          cache.el = el;
          cache.tl = tl;
          cache.duration = el.dataset.duration || 1; // Top

          if (cache.isTop) {
            cache.top = _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh + offsetTop;
          } else {
            cache.top = top - offsetTop;
          } // Bottom


          if (cache.isTop) {
            cache.bottom = bottom;
          } else if (cache.isBottom && !cache.isTop) {
            cache.bottom = bottom - _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh;
          } else {
            cache.bottom = bottom + offsetBottom;
          } // Height


          if (cache.isBottom) {
            cache.height = 0;
          } else {
            cache.height = height;
          }

          _this2.cache.push(cache);
        });
      }
    }
  }, {
    key: "getStickies",
    value: function getStickies() {
      var _this3 = this;

      this.stickies = [];
      var wh = _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh;
      var elems = document.querySelectorAll('[data-stick]');
      elems.forEach(function (el) {
        var parent = el.closest('[data-stick-parent]');

        var _parent$getBoundingCl = parent.getBoundingClientRect(),
            top = _parent$getBoundingCl.top,
            bottom = _parent$getBoundingCl.bottom,
            height = _parent$getBoundingCl.height;

        var line = el.querySelector('.js-scroll-line');

        _this3.stickies.push({
          el: el,
          top: top,
          bottom: bottom,
          height: height,
          line: line
        });
      });
    }
  }, {
    key: "updateCache",
    value: function updateCache() {
      this.elems.forEach(function (elem) {
        var _elem$getBoundingClie = elem.getBoundingClientRect(),
            top = _elem$getBoundingClie.top,
            bottom = _elem$getBoundingClie.bottom;

        Object.assign(elem, {
          top: top > _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh ? top : _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh,
          bottom: bottom,
          height: bottom - top
        });
      });
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].on('tick', this.run);
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].on('resize', this.onResize);
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].off('tick', this.run);
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].off('resize', this.onResize);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeListeners();
      this.cache = null;
      this.elems = null;
      this.state = null;
    }
  }, {
    key: "init",
    value: function init() {
      this.getCache();
      this.getStickies();
      this.addListeners();
    }
  }]);

  return Parallax;
}();

/* harmony default export */ __webpack_exports__["default"] = (Parallax);

/***/ }),

/***/ "./src/scripts/components/SmoothScroll.js":
/*!************************************************!*\
  !*** ./src/scripts/components/SmoothScroll.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store.js */ "./src/scripts/store.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/scripts/events/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var SmoothScroll =
/*#__PURE__*/
function () {
  function SmoothScroll() {
    _classCallCheck(this, SmoothScroll);

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["bindAll"])(this, 'run', 'resize');
    this.el = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].dom.scroll || document.querySelector('[data-smooth]');
    this.elems = null;
    this.current = 0;
    this.threshold = 100;
    this.sections = null;
  }

  _createClass(SmoothScroll, [{
    key: "init",
    value: function init(elems) {
      this.elems = elems || document.querySelectorAll('[data-smooth-item]');
      this.getSections();
      this.on();
    }
  }, {
    key: "update",
    value: function update(elems) {
      this.elems = elems || document.querySelectorAll('[data-smooth-item]');
      this.getSections();
    }
  }, {
    key: "clean",
    value: function clean() {
      this.elems = this.sections = null;
    }
  }, {
    key: "run",
    value: function run(_ref) {
      var current = _ref.current;
      this.current = current;
      this.transformSections();
    }
  }, {
    key: "transformSections",
    value: function transformSections() {
      if (!this.sections) return;
      var resize = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].flags.resize;

      for (var i = 0; i < this.sections.length; i++) {
        var section = this.sections[i];

        var _this$isVisible = this.isVisible(section),
            isVisible = _this$isVisible.isVisible,
            transform = _this$isVisible.transform;

        if (isVisible || resize) {
          section.out = false;
          section.el.style.transform = this.getTransform(transform);
        } else if (!section.out) {
          section.out = true;
          section.el.style.transform = this.getTransform(transform);
        }
      }
    }
  }, {
    key: "isVisible",
    value: function isVisible(_ref2) {
      var top = _ref2.top,
          bottom = _ref2.bottom,
          offset = _ref2.offset,
          speed = _ref2.speed;
      var wh = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh;
      var translate = this.current * speed;
      var transform = translate - offset;
      var start = top + offset - translate;
      var end = bottom + offset - translate;
      var isVisible = start < this.threshold + wh && end > -this.threshold;
      return {
        isVisible: isVisible,
        transform: transform
      };
    }
  }, {
    key: "getTransform",
    value: function getTransform(transform) {
      return "translate3d(0, ".concat(-transform, "px, 0)");
    }
  }, {
    key: "getVars",
    value: function getVars(el) {
      var wh = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh;
      var speed = el.dataset.speed || 1;

      var _el$getBoundingClient = el.getBoundingClientRect(),
          top = _el$getBoundingClient.top,
          bottom = _el$getBoundingClient.bottom,
          height = _el$getBoundingClient.height;

      var centering = wh / 2 - height / 2;
      var offset = top < wh ? 0 : (top - centering) * speed - (top - centering);
      var scrollable = height > wh;
      return {
        speed: speed,
        top: top,
        bottom: bottom,
        offset: offset,
        scrollable: scrollable
      };
    }
  }, {
    key: "getSections",
    value: function getSections() {
      var _this = this;

      if (!this.elems) return;
      this.sections = null;
      this.sections = [];
      this.elems.forEach(function (el) {
        el.style.transform = 'translate3d(0, 0, 0)';

        var _this$getVars = _this.getVars(el),
            speed = _this$getVars.speed,
            top = _this$getVars.top,
            bottom = _this$getVars.bottom,
            scrollable = _this$getVars.scrollable,
            offset = _this$getVars.offset;

        _this.sections.push({
          el: el,
          top: top,
          bottom: bottom,
          offset: offset,
          speed: speed,
          scrollable: scrollable,
          out: true
        });

        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].dom.sections = _this.sections;
      }); // console.log(this.sections)
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this2 = this;

      if (!this.sections) return;
      this.sections.forEach(function (section) {
        section.el.style.transform = 'translate3d(0, 0, 0)';

        var _this2$getVars = _this2.getVars(section.el),
            top = _this2$getVars.top,
            bottom = _this2$getVars.bottom,
            offset = _this2$getVars.offset;

        Object.assign(section, {
          top: top,
          bottom: bottom,
          offset: offset
        });
      });
      this.transformSections();
    }
  }, {
    key: "on",
    value: function on() {
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].on('tick', this.run);
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].on('resize', this.resize);
    }
  }, {
    key: "off",
    value: function off() {
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].off('tick', this.run);
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].off('resize', this.resize);
    }
  }]);

  return SmoothScroll;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SmoothScroll());

/***/ }),

/***/ "./src/scripts/components/index.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/index.js ***!
  \*****************************************/
/*! exports provided: SmoothScroll, Parallax, Landing, Waves, Careers, Artists, News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmoothScroll */ "./src/scripts/components/SmoothScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return _SmoothScroll__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Parallax */ "./src/scripts/components/Parallax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parallax", function() { return _Parallax__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sections_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/Landing */ "./src/scripts/components/sections/Landing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Landing", function() { return _sections_Landing__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _sections_Waves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/Waves */ "./src/scripts/components/sections/Waves.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Waves", function() { return _sections_Waves__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _sections_Careers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/Careers */ "./src/scripts/components/sections/Careers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Careers", function() { return _sections_Careers__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _sections_Artists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/Artists */ "./src/scripts/components/sections/Artists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Artists", function() { return _sections_Artists__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _sections_News__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/News */ "./src/scripts/components/sections/News.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "News", function() { return _sections_News__WEBPACK_IMPORTED_MODULE_6__["default"]; });


 // Section Components








/***/ }),

/***/ "./src/scripts/components/sections/Artists.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/sections/Artists.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var _animations_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/Title */ "./src/scripts/components/sections/animations/Title.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import store from '../store.js'



 // import gsap from 'gsap'

var Artists =
/*#__PURE__*/
function () {
  function Artists(el) {
    _classCallCheck(this, Artists);

    _events__WEBPACK_IMPORTED_MODULE_0__["Events"].bindAll(this, ['in', 'out', 'onMouseEnter', 'onMouseLeave']);
    this.el = el;
    this.video = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('video.artists-video', this.el);
    this.artists = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qsa"])('.artists__letter__list__item', this.el);
    this.title = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.artists__title', this.el);
    this.selectedArtistA = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.artists__selected-artist--a .artists__selected-artist__inner', this.el);
    this.selectedArtistB = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.artists__selected-artist--b .artists__selected-artist__inner', this.el);
    this.selectedArtistAName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.artists__selected-artist--a .artists__selected-artist__inner__name', this.el);
    this.selectedArtistBName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.artists__selected-artist--b .artists__selected-artist__inner__name', this.el);
    this.transitioned = false;
    this.titleTimeline = new _animations_Title__WEBPACK_IMPORTED_MODULE_2__["default"](this.el);
    this.initVideo();
    this.initArtists();
    this.addEvents();
  }

  _createClass(Artists, [{
    key: "addEvents",
    value: function addEvents() {
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('artistsIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('artistsOut', this.out);
    }
  }, {
    key: "initArtists",
    value: function initArtists() {
      var _this = this;

      _toConsumableArray(this.artists).forEach(function (artist) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["listener"])(artist, 'a', 'mouseenter', _this.onMouseEnter);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["listener"])(artist, 'a', 'mouseleave', _this.onMouseLeave);
      });
    }
  }, {
    key: "initVideo",
    value: function initVideo() {
      var _this2 = this;

      var playPromise = this.video.play();
      playPromise.then(function () {
        _this2.video.pause();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(e) {
      if (!this.transitioned) return;
      var artist = e.currentTarget;
      var duration = 0.4;
      artist.classList.add('is-active');
      this.selectedArtistAName.innerHTML = e.currentTarget.innerHTML;
      if (this.artistHoverTimeline && this.artistHoverTimeline.isActive()) return;
      this.artistHoverTimeline = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
      this.artistHoverTimeline.to(this.title, duration, {
        rotateX: -90,
        ease: 'linear.easeNone'
      }, 0);
      this.artistHoverTimeline.to(this.selectedArtistA, duration, {
        rotateX: 0,
        ease: 'linear.easeNone'
      }, 0.25);
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(e) {
      var artist = e.currentTarget;
      artist.classList.remove('is-active'); // const tl = gsap.timeline()
      // tl.to(this.selectedArtist, 1, {
      //     rotateX: -90,
      //     ease: 'linear.none'
      // }, 0)
      // tl.to(this.title, 1, {
      //     rotateX: 0,
      //     ease: 'linear.none'
      // }, 0)
    }
  }, {
    key: "in",
    value: function _in() {
      this.video.play();
      if (this.transitioned) return;
      this.titleTimeline["in"]();
      this.transitioned = true;
    }
  }, {
    key: "out",
    value: function out() {
      this.video.pause();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('artistsIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('artistsOut', this.out);
    }
  }]);

  return Artists;
}();

/* harmony default export */ __webpack_exports__["default"] = (Artists);

/***/ }),

/***/ "./src/scripts/components/sections/Careers.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/sections/Careers.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var _animations_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/Title */ "./src/scripts/components/sections/animations/Title.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import store from '../store.js'


 // import gsap from 'gsap'

var Careers =
/*#__PURE__*/
function () {
  function Careers(el) {
    _classCallCheck(this, Careers);

    _events__WEBPACK_IMPORTED_MODULE_0__["Events"].bindAll(this, ['in', 'out']);
    this.el = el;
    this.started = false;
    this.video = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('video.careers-video', this.el);
    this.titleTimeline = new _animations_Title__WEBPACK_IMPORTED_MODULE_2__["default"](this.el);
    this.addEvents();
    this.initVideo();
  }

  _createClass(Careers, [{
    key: "addEvents",
    value: function addEvents() {
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('careersIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('careersOut', this.out);
    }
  }, {
    key: "initVideo",
    value: function initVideo() {
      var _this = this;

      var playPromise = this.video.play();
      playPromise.then(function () {
        _this.video.pause();
      })["catch"](function (error) {
        // Automatic playback failed.
        // Show a UI element to let the user manually start playback.
        console.log(error);
      });
    }
  }, {
    key: "in",
    value: function _in() {
      this.video.play();
      if (this.transitioned) return;
      this.titleTimeline["in"]();
      this.transitioned = true;
    }
  }, {
    key: "out",
    value: function out() {
      this.video.pause();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('careersIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('careersOut', this.out);
    }
  }]);

  return Careers;
}();

/* harmony default export */ __webpack_exports__["default"] = (Careers);

/***/ }),

/***/ "./src/scripts/components/sections/Landing.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/sections/Landing.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import store from '../store.js'




var Landing =
/*#__PURE__*/
function () {
  function Landing(el) {
    _classCallCheck(this, Landing);

    _events__WEBPACK_IMPORTED_MODULE_0__["Events"].bindAll(this, ['in', 'out', 'muteVideo', 'unmuteVideo', 'muteToggle']);
    this.el = el;
    this.video = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('video.landing-video', this.el);
    this.muteToggleBtn = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.landing__mute-toggle', this.el);
    this.muteToggleBtnText = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('span', this.muteToggleBtn);
    this.addEvents();
    this.initVideo();
  }

  _createClass(Landing, [{
    key: "addEvents",
    value: function addEvents() {
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('landingIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('landingOut', this.out);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('muteLandingVideo', this.muteVideo);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('unmuteLandingVideo', this.unmuteVideo);
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["listener"])(this.muteToggleBtn, 'a', 'click', this.muteToggle);
    }
  }, {
    key: "initVideo",
    value: function initVideo() {
      // this.createVolumeTimeline()
      // console.log(this.video)
      this.video.play();
    }
  }, {
    key: "in",
    value: function _in() {
      this.unmuteVideo();
    }
  }, {
    key: "out",
    value: function out() {
      if (this.muting) return;
      this.muteVideo();
    }
  }, {
    key: "muteToggle",
    value: function muteToggle() {
      if (this.muteToggleBtnText.innerHTML === 'off') {
        this.muteToggleBtnText.innerHTML = 'on';
        this.video.muted = false;

        if (!this.lowPassFilter) {
          this.createLowPassFilter();
          this.createVolumeTimeline();
        }

        return;
      }

      this.muteToggleBtnText.innerHTML = 'off';
      this.video.muted = true;
    }
  }, {
    key: "createLowPassFilter",
    value: function createLowPassFilter() {
      this.lowPassFilter = true;
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      var audioCtx = new AudioContext(); //set up the different audio nodes we will use for the app

      var biquadFilter = audioCtx.createBiquadFilter(); // connect the nodes together

      var source = audioCtx.createMediaElementSource(this.video);
      source.connect(biquadFilter);
      biquadFilter.connect(audioCtx.destination); // Manipulate the Biquad filter

      biquadFilter.type = 'lowpass';
      biquadFilter.frequency.value = 22050;
      this.biquadFilter = biquadFilter;
    }
  }, {
    key: "createVolumeTimeline",
    value: function createVolumeTimeline() {
      this.volumeTimeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        paused: true
      }).fromTo(this.biquadFilter.frequency, 1, {
        value: 90
      }, {
        value: 22050,
        ease: 'expo.in',
        immediateRender: false
      }, 0).fromTo(this.video, 1, {
        volume: 0.5
      }, {
        volume: 1,
        ease: 'expo.in',
        immediateRender: false
      }, 0);
    }
  }, {
    key: "muteVideo",
    value: function muteVideo() {
      if (!this.volumeTimeline) return; // console.log('Mute Landing Video')

      this.muting = true;
      this.volumeTimeline.pause();
      if (this.unmuteTween) this.unmuteTween.kill();
      this.muteTween = this.volumeTimeline.tweenFromTo(this.volumeTimeline.duration(), 0, {
        ease: 'expo.inOut',
        callbackScope: this // onComplete: () => {  console.log('pause'); this.video.pause() },

      });
    }
  }, {
    key: "unmuteVideo",
    value: function unmuteVideo() {
      if (!this.volumeTimeline) return; // console.log('Unmute Landing Video')

      this.muting = false;
      this.volumeTimeline.pause();
      if (this.muteTween) this.muteTween.kill();
      this.unmuteTween = this.volumeTimeline.tweenFromTo(0, this.volumeTimeline.duration(), {
        ease: 'expo.inOut',
        callbackScope: this // onStart: () => { console.log('play'); this.video.play() },

      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.video.pause();
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('landingIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('landingOut', this.out);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('muteLandingVideo', this.muteVideo);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('unmuteLandingVideo', this.unmuteVideo);
    }
  }]);

  return Landing;
}();

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./src/scripts/components/sections/News.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/sections/News.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var _animations_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/Title */ "./src/scripts/components/sections/animations/Title.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import store from '../store.js'


 // import gsap from 'gsap'

var News =
/*#__PURE__*/
function () {
  function News(el) {
    _classCallCheck(this, News);

    _events__WEBPACK_IMPORTED_MODULE_0__["Events"].bindAll(this, ['in', 'out']);
    this.el = el;
    this.transitioned = false;
    this.titleTimeline = new _animations_Title__WEBPACK_IMPORTED_MODULE_2__["default"](this.el);
    this.addEvents();
  }

  _createClass(News, [{
    key: "addEvents",
    value: function addEvents() {
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('newsIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('newsOut', this.out);
    }
  }, {
    key: "in",
    value: function _in() {
      if (this.transitioned) return;
      this.titleTimeline["in"]();
      this.transitioned = true;
    }
  }, {
    key: "out",
    value: function out() {}
  }, {
    key: "destroy",
    value: function destroy() {
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('newsIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('newsOut', this.out);
    }
  }]);

  return News;
}();

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./src/scripts/components/sections/Waves.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/sections/Waves.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import store from '../store.js'

 // import gsap from 'gsap'

var Waves =
/*#__PURE__*/
function () {
  function Waves(el) {
    _classCallCheck(this, Waves);

    _events__WEBPACK_IMPORTED_MODULE_0__["Events"].bindAll(this, ['in', 'out']);
    this.el = el;
    this.started = false;
    this.video = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('video.waves-video', this.el); // console.dir(this.video)

    this.addEvents();
    this.initVideo();
  }

  _createClass(Waves, [{
    key: "addEvents",
    value: function addEvents() {
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('wavesIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].on('wavesOut', this.out);
    }
  }, {
    key: "initVideo",
    value: function initVideo() {
      var _this = this;

      var playPromise = this.video.play();
      playPromise.then(function () {
        _this.video.pause();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "in",
    value: function _in() {
      this.video.play();
    }
  }, {
    key: "out",
    value: function out() {
      this.video.pause();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('wavesIn', this["in"]);
      _events__WEBPACK_IMPORTED_MODULE_0__["Events"].off('wavesOut', this.out);
    }
  }]);

  return Waves;
}();

/* harmony default export */ __webpack_exports__["default"] = (Waves);

/***/ }),

/***/ "./src/scripts/components/sections/animations/Title.js":
/*!*************************************************************!*\
  !*** ./src/scripts/components/sections/animations/Title.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/scripts/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Title =
/*#__PURE__*/
function () {
  function Title(el) {
    var onCompleteCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Title);

    this.el = el;
    this.onCompleteCallback = onCompleteCallback;
    this.weAre = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.title__we-are', this.el);
    this.weAreInner = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.title__we-are__inner', this.el);
    this.text = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.title__text', this.el);
    this.textInner = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.title__text__inner', this.el);
    this.createTimeline();
  }

  _createClass(Title, [{
    key: "createTimeline",
    value: function createTimeline() {
      var duration = 1.5;
      this.timeline = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
        paused: true
      }).fromTo(this.weAre, duration, {
        y: "200%"
      }, {
        y: "0%",
        ease: 'expo.out',
        immediateRender: true
      }, 0).fromTo(this.text, duration, {
        y: "300%"
      }, {
        y: "0%",
        ease: 'expo.out',
        immediateRender: true
      }, 0.05).fromTo(this.weAreInner, duration, {
        y: "-100%"
      }, {
        y: "0%",
        ease: 'expo.out',
        immediateRender: true
      }, 0).fromTo(this.textInner, duration, {
        y: "-100%"
      }, {
        y: "0%",
        ease: 'expo.out',
        immediateRender: true
      }, 0.05);
    }
  }, {
    key: "in",
    value: function _in() {
      var _this = this;

      // console.log('title in')
      if (this.outTween) this.outTween.kill();
      this.timeline.pause().timeScale(1);
      this.inTween = this.timeline.tweenFromTo(0, this.timeline.duration(), {
        ease: 'expo.out',
        onComplete: function onComplete() {
          _this.text.style.overflow = 'visible';
        },
        delay: 0.2
      });
    }
  }, {
    key: "out",
    value: function out() {
      // console.log('title out')
      if (this.inTween) this.inTween.kill();
      this.timeline.pause().timeScale(5);
      this.outTween = this.timeline.tweenFromTo(this.timeline.duration(), 0, {
        ease: 'expo.out'
      });
    }
  }]);

  return Title;
}();

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/scripts/events/Events.js":
/*!**************************************!*\
  !*** ./src/scripts/events/Events.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unseenco_e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unseenco/e */ "./node_modules/@unseenco/e/dist/e.min.js");
/* harmony import */ var _unseenco_e__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unseenco_e__WEBPACK_IMPORTED_MODULE_0__);

var Events = new _unseenco_e__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./src/scripts/events/Mouse.js":
/*!*************************************!*\
  !*** ./src/scripts/events/Mouse.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/scripts/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ "./src/scripts/events/Events.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var GlobalMouse =
/*#__PURE__*/
function () {
  function GlobalMouse() {
    var _this = this;

    _classCallCheck(this, GlobalMouse);

    _defineProperty(this, "onMove", function (e) {
      var _this$getPos = _this.getPos(e),
          x = _this$getPos.x,
          y = _this$getPos.y,
          target = _this$getPos.target;

      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].emit('mousemove', {
        x: x,
        y: y,
        target: target,
        e: e
      });
    });

    _defineProperty(this, "onDown", function (e) {
      var _this$getPos2 = _this.getPos(e),
          x = _this$getPos2.x,
          y = _this$getPos2.y,
          target = _this$getPos2.target;

      _this.state.on = x;
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].emit('mousedown', {
        x: x,
        y: y,
        target: target
      });
    });

    _defineProperty(this, "onUp", function (e) {
      var _this$getPos3 = _this.getPos(e),
          x = _this$getPos3.x,
          target = _this$getPos3.target;

      var state = _this.state;
      state.off = x;
      var isClick = Math.abs(state.on - state.off) > 10;
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].emit('mouseup', {
        x: x,
        target: target,
        isClick: isClick
      });
    });

    _defineProperty(this, "onClick", function (e) {
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].emit('click', e);
    });

    this.state = {
      on: 0,
      off: 0,
      coords: {
        x: 0,
        y: 0
      }
    };
    this.events = {
      move: _store__WEBPACK_IMPORTED_MODULE_0__["default"].isDevice ? 'touchmove' : 'mousemove',
      down: _store__WEBPACK_IMPORTED_MODULE_0__["default"].isDevice ? 'touchstart' : 'mousedown',
      up: _store__WEBPACK_IMPORTED_MODULE_0__["default"].isDevice ? 'touchend' : 'mouseup'
    };
    this.on();
  }

  _createClass(GlobalMouse, [{
    key: "on",
    value: function on() {
      var _this$events = this.events,
          move = _this$events.move,
          down = _this$events.down,
          up = _this$events.up;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["listener"])(window, 'a', move, this.onMove);
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["listener"])(window, 'a', down, this.onDown);
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["listener"])(window, 'a', up, this.onUp);
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["listener"])(window, 'a', 'click', this.onClick);
    }
  }, {
    key: "getPos",
    value: function getPos(e) {
      var x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      var y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
      var target = e.target;
      return {
        x: x,
        y: y,
        target: target
      };
    }
  }]);

  return GlobalMouse;
}();

/* harmony default export */ __webpack_exports__["default"] = (new GlobalMouse());

/***/ }),

/***/ "./src/scripts/events/Orientation.js":
/*!*******************************************!*\
  !*** ./src/scripts/events/Orientation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/scripts/store.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events */ "./src/scripts/events/Events.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Orientation =
/*#__PURE__*/
function () {
  function Orientation() {
    _classCallCheck(this, Orientation);

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["bindAll"])(this, 'onOrentationChange');
    this.init();
  }

  _createClass(Orientation, [{
    key: "onOrientationChange",
    value: function onOrientationChange() {
      var dom = _store__WEBPACK_IMPORTED_MODULE_0__["default"].dom;

      if (dom.body.classList.contains('is-orientation-changed')) {
        dom.body.classList.remove('is-orientation-changed');
      } else {
        dom.body.classList.add('is-orientation-changed');
      }

      _Events__WEBPACK_IMPORTED_MODULE_1__["default"].emit('orientationchange');
    }
  }, {
    key: "on",
    value: function on() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["listener"])(window, 'orientationchange', this.onOrientationChange);
    }
  }, {
    key: "init",
    value: function init() {
      this.on();
    }
  }]);

  return Orientation;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Orientation());

/***/ }),

/***/ "./src/scripts/events/Raf.js":
/*!***********************************!*\
  !*** ./src/scripts/events/Raf.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/scripts/store.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ "./src/scripts/events/Events.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Raf =
/*#__PURE__*/
function () {
  function Raf() {
    var _this = this;

    _classCallCheck(this, Raf);

    _defineProperty(this, "onMove", function (_ref) {
      var y = _ref.y,
          x = _ref.x,
          target = _ref.target;
      _this.mouse.x = x;
      _this.mouse.y = y;
      _this.mouse.target = target;
    });

    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["bindAll"])(this, 'tick', 'onScroll', 'onMove', 'reset');
    this.target = 0;
    this.current = 0;
    this.currentRounded = 0;
    this.mouse = {
      x: 0,
      y: 0,
      target: null
    };
    this.ease = 0.115;
    this.init();
  }

  _createClass(Raf, [{
    key: "tick",
    value: function tick() {
      var flags = _store__WEBPACK_IMPORTED_MODULE_1__["default"].flags;
      this.current = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["lerp"])(this.current, this.target, this.ease);
      this.currentRounded = Math.round(this.current * 100) / 100;

      if (!flags.scrolled && this.currentRounded > 0) {
        flags.scrolled = true;
      }

      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].emit('tick', {
        target: this.target,
        current: this.currentRounded,
        mouse: this.mouse
      });
    }
  }, {
    key: "clampTarget",
    value: function clampTarget() {
      this.target = Math.min(Math.max(this.target, 0), _store__WEBPACK_IMPORTED_MODULE_1__["default"].bounds.scroll);
    }
  }, {
    key: "onScroll",
    value: function onScroll(_ref2) {
      var y = _ref2.y;
      this.target += y;
      this.clampTarget();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.target = this.current = this.currentRounded = 0;
    }
  }, {
    key: "on",
    value: function on() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.add(this.tick);
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].on('scroll', this.onScroll);
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].on('resetScroll', this.reset);
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].on('mousemove', this.onMove);
    }
  }, {
    key: "init",
    value: function init() {
      this.on();
    }
  }]);

  return Raf;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Raf());

/***/ }),

/***/ "./src/scripts/events/Resize.js":
/*!**************************************!*\
  !*** ./src/scripts/events/Resize.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/scripts/store.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ "./src/scripts/events/Events.js");
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scroll */ "./src/scripts/events/Scroll.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Resize =
/*#__PURE__*/
function () {
  function Resize() {
    _classCallCheck(this, Resize);

    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["bindAll"])(this, 'onResize');
    this.init();
  }

  _createClass(Resize, [{
    key: "onResize",
    value: function onResize() {
      var flags = _store__WEBPACK_IMPORTED_MODULE_1__["default"].flags,
          bounds = _store__WEBPACK_IMPORTED_MODULE_1__["default"].bounds;
      flags.resize = true;
      bounds.ww = window.innerWidth;
      bounds.wh = window.innerHeight;
      _Scroll__WEBPACK_IMPORTED_MODULE_3__["default"].setScrollBounds();
      this.setAspect();
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].emit('resize');
      flags.resize = false;
    }
  }, {
    key: "setAspect",
    value: function setAspect() {
      var bounds = _store__WEBPACK_IMPORTED_MODULE_1__["default"].bounds,
          dom = _store__WEBPACK_IMPORTED_MODULE_1__["default"].dom,
          flags = _store__WEBPACK_IMPORTED_MODULE_1__["default"].flags;

      if (bounds.height <= bounds.width) {
        dom.body.classList.remove('is-portrait');
        dom.body.classList.add('is-landscape');
        flags.landscape = true;
      } else {
        dom.body.classList.remove('is-landscape');
        dom.body.classList.add('is-portrait');
        flags.landscape = false;
      }
    }
  }, {
    key: "on",
    value: function on() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["listener"])(window, 'a', 'resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.onResize, 200));
    }
  }, {
    key: "init",
    value: function init() {
      this.setAspect();
      this.on();
    }
  }]);

  return Resize;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Resize());

/***/ }),

/***/ "./src/scripts/events/Scroll.js":
/*!**************************************!*\
  !*** ./src/scripts/events/Scroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/scripts/store.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events */ "./src/scripts/events/Events.js");
/* harmony import */ var _VS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VS */ "./src/scripts/events/VS.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // import Pointer from './Pointer'




var Scroll =
/*#__PURE__*/
function () {
  function Scroll() {
    _classCallCheck(this, Scroll);

    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["bindAll"])(this, 'onEvent', 'onScroll', 'onResize', 'setScrollBounds');
    this.currentSectionID = 0;
    this.lastSectionID = null;
    this.init();
  }

  _createClass(Scroll, [{
    key: "setScrollBounds",
    value: function setScrollBounds() {
      var dom = _store__WEBPACK_IMPORTED_MODULE_0__["default"].dom,
          bounds = _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds;
      var height = dom.scroll.getBoundingClientRect().height;
      bounds.scroll = height > bounds.wh ? height - bounds.wh : 0;
    } // TODO Handle pages other than home

  }, {
    key: "onEvent",
    value: function onEvent(e) {
      if (_store__WEBPACK_IMPORTED_MODULE_0__["default"].flags.locked || !_store__WEBPACK_IMPORTED_MODULE_0__["default"].dom.sections) return;
      var wh = _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh;
      var delta = e.deltaY * -1;

      if (Math.abs(delta) > 50 && _store__WEBPACK_IMPORTED_MODULE_0__["default"].flags.allowScroll) {
        // +1 = scrolling down
        // -1 = scrolling up
        this.direction = Math.sign(delta); // Prevent emitting scroll event if attempting to scroll beyond bounds

        if (this.direction === -1 && this.currentSectionID === 0) return;
        if (this.direction === 1 && this.currentSectionID === _store__WEBPACK_IMPORTED_MODULE_0__["default"].dom.sections.length - 1) return; // Prevent scroll before we emit event

        _store__WEBPACK_IMPORTED_MODULE_0__["default"].flags.allowScroll = false; // Allow scrolling again after timeout

        setTimeout(function () {
          _store__WEBPACK_IMPORTED_MODULE_0__["default"].flags.allowScroll = true;
        }, 250);
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].emit('scroll', {
          y: wh * this.direction
        });
        this.handleSections(this.direction);
      }
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      // Pointer.run()
      _Events__WEBPACK_IMPORTED_MODULE_1__["default"].emit('scroll', {
        y: window.scrollY
      });
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var wh = _store__WEBPACK_IMPORTED_MODULE_0__["default"].bounds.wh;
      console.log(wh * this.currentSectionID);
      _Events__WEBPACK_IMPORTED_MODULE_1__["default"].emit('resetScroll');
      _Events__WEBPACK_IMPORTED_MODULE_1__["default"].emit('scroll', {
        y: wh * this.currentSectionID
      });
    }
  }, {
    key: "on",
    value: function on() {
      var flags = _store__WEBPACK_IMPORTED_MODULE_0__["default"].flags;

      if (flags.smooth) {
        this.vs = new _VS__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.vs.on(this.onEvent);
        _Events__WEBPACK_IMPORTED_MODULE_1__["default"].on('resize', this.onResize);
      } else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["listener"])(window, 'a', 'scroll', this.onScroll, true);
      }
    }
  }, {
    key: "handleSections",
    value: function handleSections() {
      // Update current and last section IDs
      this.lastSectionID = this.currentSectionID;
      this.currentSectionID += this.direction; // Update current and last sections

      this.currentSection = _store__WEBPACK_IMPORTED_MODULE_0__["default"].dom.sections[this.currentSectionID];
      this.lastSection = _store__WEBPACK_IMPORTED_MODULE_0__["default"].dom.sections[this.lastSectionID]; // Emit 'in' event for current setcion

      _Events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("".concat(this.currentSection.el.dataset.sectionId, "In")); // Emit 'out' event for current setcion

      _Events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("".concat(this.lastSection.el.dataset.sectionId, "Out"));
    }
  }, {
    key: "init",
    value: function init() {
      this.on();
    }
  }]);

  return Scroll;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Scroll());

/***/ }),

/***/ "./src/scripts/events/VS.js":
/*!**********************************!*\
  !*** ./src/scripts/events/VS.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/scripts/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ "./src/scripts/events/Events.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var event_id = 'vs';

var VS =
/*#__PURE__*/
function () {
  function VS() {
    var _this = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, VS);

    _defineProperty(this, "onWheel", function (e) {
      var _this$opts = _this.opts,
          firefoxMultiplier = _this$opts.firefoxMultiplier,
          mouseMultiplier = _this$opts.mouseMultiplier;
      var event = _this.event;
      event.deltaY = e.wheelDeltaY || e.deltaY * -1;

      if (_store__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox && e.deltaMode === 1) {
        event.deltaY *= firefoxMultiplier;
      }

      event.deltaY *= mouseMultiplier;

      _this.emit(e);
    });

    _defineProperty(this, "onTouchStart", function (e) {
      var touch = e.targetTouches ? e.targetTouches[0] : e;
      _this.touchY = touch.pageY;
    });

    _defineProperty(this, "onTouchMove", function (e) {
      var touchMultiplier = _this.options.touchMultiplier;
      var event = _this.event;
      var touch = e.targetTouches ? e.targetTouches[0] : e;
      event.deltaY = (touch.pageY - _this.touchY) * touchMultiplier;
      _this.touchY = touch.pageY;

      _this.emit(e);
    });

    this.el = window;
    this.opts = Object.assign({
      mouseMultiplier: _store__WEBPACK_IMPORTED_MODULE_0__["default"].isWindows ? 0.8 : 0.45,
      touchMultiplier: 3,
      firefoxMultiplier: 90
    }, opts);
    this.event = {
      y: 0,
      deltaY: 0
    };
    this.touchY = null;
  }

  _createClass(VS, [{
    key: "emit",
    value: function emit(e) {
      var event = this.event;
      event.y += event.deltaY;
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].emit(event_id, {
        y: event.y,
        deltaY: event.deltaY,
        originalEvent: e
      });
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["listener"])(this.el, 'a', 'wheel', this.onWheel, true);
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["listener"])(this.el, 'r', 'wheel', this.onWheel, true);
    }
  }, {
    key: "on",
    value: function on(callback) {
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].on(event_id, callback);
      this.addListeners();
    }
  }, {
    key: "off",
    value: function off(callback) {
      _Events__WEBPACK_IMPORTED_MODULE_2__["default"].off(event_id, callback);
      this.removeListeners();
    }
  }]);

  return VS;
}();

/* harmony default export */ __webpack_exports__["default"] = (VS);

/***/ }),

/***/ "./src/scripts/events/index.js":
/*!*************************************!*\
  !*** ./src/scripts/events/index.js ***!
  \*************************************/
/*! exports provided: Events, GlobalScroll, GlobalRaf, GlobalResize, GlobalOrientation, GlobalMouse, VS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events */ "./src/scripts/events/Events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return _Events__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scroll */ "./src/scripts/events/Scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalScroll", function() { return _Scroll__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Raf */ "./src/scripts/events/Raf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalRaf", function() { return _Raf__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Resize */ "./src/scripts/events/Resize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalResize", function() { return _Resize__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Orientation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Orientation */ "./src/scripts/events/Orientation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalOrientation", function() { return _Orientation__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Mouse */ "./src/scripts/events/Mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalMouse", function() { return _Mouse__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _VS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VS */ "./src/scripts/events/VS.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VS", function() { return _VS__WEBPACK_IMPORTED_MODULE_6__["default"]; });






 // import Pointer from './Pointer'




/***/ }),

/***/ "./src/scripts/gl/Elem.js":
/*!********************************!*\
  !*** ./src/scripts/gl/Elem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/scripts/events/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/scripts/store.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/scripts/gl/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var _default =
/*#__PURE__*/
function (_Object3D) {
  _inherits(_default, _Object3D);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["bindAll"])(this, 'onResize');
      this.args = args;
      this.el = this.args.el;
      this.name = this.args.name;
      this.loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
      this.onResize();
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].on('resize', this.onResize);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var rect = this.el.getBoundingClientRect();
      this.bounds = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
      };
      this.updateSize();
      this.updatePosition();
    }
  }, {
    key: "calculateUnitSize",
    value: function calculateUnitSize() {
      var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.position.z;
      var vFov = _index__WEBPACK_IMPORTED_MODULE_3__["default"].camera.fov * Math.PI / 180;
      var height = 2 * Math.tan(vFov / 2) * distance;
      var width = height * _index__WEBPACK_IMPORTED_MODULE_3__["default"].camera.aspect;
      return {
        width: width,
        height: height
      };
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      this.camUnit = this.calculateUnitSize(_index__WEBPACK_IMPORTED_MODULE_3__["default"].camera.position.z - this.position.z);
      var _store$bounds = _store__WEBPACK_IMPORTED_MODULE_2__["default"].bounds,
          ww = _store$bounds.ww,
          wh = _store$bounds.wh;
      var x = this.bounds.width / ww;
      var y = this.bounds.height / wh;

      if (!x || !y) {
        return;
      }

      this.scale.x = this.camUnit.width * x;
      this.scale.y = this.camUnit.height * y;
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(pos) {
      var y = pos;
      var _store$bounds2 = _store__WEBPACK_IMPORTED_MODULE_2__["default"].bounds,
          ww = _store$bounds2.ww,
          wh = _store$bounds2.wh;
      var _this$bounds = this.bounds,
          left = _this$bounds.left,
          top = _this$bounds.top;
      this.position.x = -(this.camUnit.width / 2) + this.scale.x / 2;
      this.position.y = this.camUnit.height / 2 - this.scale.y / 2;
      this.position.x += left / ww * this.camUnit.width;
      this.position.y -= (top - y) / wh * this.camUnit.height;
    }
  }, {
    key: "onTick",
    value: function onTick(current) {
      this.updatePosition(current);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.parent && this.parent.remove(this);
    }
  }]);

  return _default;
}(three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]);



/***/ }),

/***/ "./src/scripts/gl/PlanePool.js":
/*!*************************************!*\
  !*** ./src/scripts/gl/PlanePool.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/scripts/gl/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/scripts/gl/components/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PlanePool =
/*#__PURE__*/
function () {
  function PlanePool() {
    _classCallCheck(this, PlanePool);

    this.planes = {};
  }

  _createClass(PlanePool, [{
    key: "fromDom",
    value: function fromDom(el) {
      var name = el.dataset.glId;
      var component = el.dataset.glComponent;
      var plane = this.planes[name];

      if (plane) {
        _index__WEBPACK_IMPORTED_MODULE_0__["default"].scene.add(plane);
      } else {
        if (component) {
          new _components__WEBPACK_IMPORTED_MODULE_1__[component]().init({
            el: el,
            name: name
          });
        } else {
          new _components__WEBPACK_IMPORTED_MODULE_1__["Plane"]().init({
            el: el,
            name: name
          });
        }
      }
    }
  }, {
    key: "remove",
    value: function remove(plane) {
      plane.destroy();
    }
  }]);

  return PlanePool;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PlanePool());

/***/ }),

/***/ "./src/scripts/gl/components/Artists.js":
/*!**********************************************!*\
  !*** ./src/scripts/gl/components/Artists.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Artists; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./src/scripts/store.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _Elem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Elem */ "./src/scripts/gl/Elem.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/scripts/gl/index.js");
/* harmony import */ var _PlanePool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PlanePool */ "./src/scripts/gl/PlanePool.js");
/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders */ "./src/scripts/gl/shaders/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneBufferGeometry"](1, 1, 1, 1);
var material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
  transparent: true,
  fragmentShader: _shaders__WEBPACK_IMPORTED_MODULE_6__["artistsFragment"],
  vertexShader: _shaders__WEBPACK_IMPORTED_MODULE_6__["vertex"]
});

var Artists =
/*#__PURE__*/
function (_Elem) {
  _inherits(Artists, _Elem);

  function Artists() {
    _classCallCheck(this, Artists);

    return _possibleConstructorReturn(this, _getPrototypeOf(Artists).apply(this, arguments));
  }

  _createClass(Artists, [{
    key: "init",
    value: function init(args) {
      _get(_getPrototypeOf(Artists.prototype), "init", this).call(this, args);

      var _store$bounds = _store__WEBPACK_IMPORTED_MODULE_1__["default"].bounds,
          ww = _store$bounds.ww,
          wh = _store$bounds.wh;
      this.geometry = geometry;
      this.material = material.clone();
      this.video = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["qs"])('video.artists-video', this.el);
      this.texture = new three__WEBPACK_IMPORTED_MODULE_0__["VideoTexture"](this.video);
      this.texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.texture.format = three__WEBPACK_IMPORTED_MODULE_0__["RGBFormat"];
      this.material.uniforms = {
        uTime: {
          value: 0
        },
        uTexture: {
          value: this.texture
        },
        uVelo: {
          value: 0
        }
      };
      this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](this.geometry, this.material);
      this.add(this.mesh);
      _index__WEBPACK_IMPORTED_MODULE_4__["default"].scene.add(this);
      _PlanePool__WEBPACK_IMPORTED_MODULE_5__["default"].planes[this.name] = this;
    }
  }, {
    key: "onTick",
    value: function onTick() {
      _get(_getPrototypeOf(Artists.prototype), "onTick", this).call(this);
    }
  }]);

  return Artists;
}(_Elem__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/scripts/gl/components/Careers.js":
/*!**********************************************!*\
  !*** ./src/scripts/gl/components/Careers.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Careers; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./src/scripts/store.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _Elem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Elem */ "./src/scripts/gl/Elem.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/scripts/gl/index.js");
/* harmony import */ var _PlanePool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PlanePool */ "./src/scripts/gl/PlanePool.js");
/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders */ "./src/scripts/gl/shaders/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








 // import gsap from 'gsap'

var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneBufferGeometry"](1, 1, 1, 1);
var material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
  transparent: true,
  fragmentShader: _shaders__WEBPACK_IMPORTED_MODULE_6__["careersFragment"],
  vertexShader: _shaders__WEBPACK_IMPORTED_MODULE_6__["vertex"]
});

var Careers =
/*#__PURE__*/
function (_Elem) {
  _inherits(Careers, _Elem);

  function Careers() {
    _classCallCheck(this, Careers);

    return _possibleConstructorReturn(this, _getPrototypeOf(Careers).apply(this, arguments));
  }

  _createClass(Careers, [{
    key: "init",
    value: function init(args) {
      var _this = this;

      _get(_getPrototypeOf(Careers.prototype), "init", this).call(this, args);

      var _store$bounds = _store__WEBPACK_IMPORTED_MODULE_1__["default"].bounds,
          ww = _store$bounds.ww,
          wh = _store$bounds.wh;
      this.geometry = geometry;
      this.material = material.clone();
      this.video = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["qs"])('video.careers-video', this.el);
      this.img = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["qs"])('img.careers-image', this.el); // console.log(this.img.width, this.img.height)

      this.imgTexture = this.loader.load(this.img.currentSrc || this.img.src, function (texture) {
        if (_this.el.dataset.nop2 !== undefined) {
          texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
          texture.generateMipmaps = false;
        }
      });
      this.videoTexture = new three__WEBPACK_IMPORTED_MODULE_0__["VideoTexture"](this.video);
      this.videoTexture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.videoTexture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.videoTexture.format = three__WEBPACK_IMPORTED_MODULE_0__["RGBFormat"];
      this.material.uniforms = {
        uTime: {
          value: 0
        },
        uVideoTexture: {
          value: this.videoTexture
        },
        uImageTexture: {
          value: this.imgTexture
        },
        uVelo: {
          value: 0
        },
        uScreenSize: {
          value: [ww, wh]
        },
        uVideoSize: {
          value: [this.video.videoWidth, this.video.videoHeight]
        },
        uImageSize: {
          value: [this.img.width, this.img.height]
        }
      };
      this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](this.geometry, this.material);
      this.add(this.mesh);
      _index__WEBPACK_IMPORTED_MODULE_4__["default"].scene.add(this);
      _PlanePool__WEBPACK_IMPORTED_MODULE_5__["default"].planes[this.name] = this;
    }
  }, {
    key: "onTick",
    value: function onTick() {
      _get(_getPrototypeOf(Careers.prototype), "onTick", this).call(this);
    }
  }]);

  return Careers;
}(_Elem__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/scripts/gl/components/Landing.js":
/*!**********************************************!*\
  !*** ./src/scripts/gl/components/Landing.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Landing; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./src/scripts/store.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _Elem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Elem */ "./src/scripts/gl/Elem.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/scripts/gl/index.js");
/* harmony import */ var _PlanePool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PlanePool */ "./src/scripts/gl/PlanePool.js");
/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders */ "./src/scripts/gl/shaders/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneBufferGeometry"](1, 1, 1, 1);
var material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
  transparent: true,
  fragmentShader: _shaders__WEBPACK_IMPORTED_MODULE_6__["fullScreenVideoFragment"],
  vertexShader: _shaders__WEBPACK_IMPORTED_MODULE_6__["vertex"]
});

var Landing =
/*#__PURE__*/
function (_Elem) {
  _inherits(Landing, _Elem);

  function Landing() {
    _classCallCheck(this, Landing);

    return _possibleConstructorReturn(this, _getPrototypeOf(Landing).apply(this, arguments));
  }

  _createClass(Landing, [{
    key: "init",
    value: function init(args) {
      _get(_getPrototypeOf(Landing.prototype), "init", this).call(this, args);

      var _store$bounds = _store__WEBPACK_IMPORTED_MODULE_1__["default"].bounds,
          ww = _store$bounds.ww,
          wh = _store$bounds.wh;
      this.geometry = geometry;
      this.material = material.clone();
      this.video = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["qs"])('video.landing-video', this.el);
      this.texture = new three__WEBPACK_IMPORTED_MODULE_0__["VideoTexture"](this.video);
      this.texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.texture.format = three__WEBPACK_IMPORTED_MODULE_0__["RGBFormat"];
      this.material.uniforms = {
        uTime: {
          value: 0
        },
        uTexture: {
          value: this.texture
        },
        uVelo: {
          value: 0
        },
        uScreenSize: {
          value: [ww, wh]
        },
        uVideoSize: {
          value: [this.video.videoWidth, this.video.videoHeight]
        }
      };
      this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](this.geometry, this.material);
      this.add(this.mesh);
      _index__WEBPACK_IMPORTED_MODULE_4__["default"].scene.add(this);
      _PlanePool__WEBPACK_IMPORTED_MODULE_5__["default"].planes[this.name] = this;
    }
  }, {
    key: "onTick",
    value: function onTick() {
      _get(_getPrototypeOf(Landing.prototype), "onTick", this).call(this);
    }
  }]);

  return Landing;
}(_Elem__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/scripts/gl/components/Plane.js":
/*!********************************************!*\
  !*** ./src/scripts/gl/components/Plane.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plane; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Elem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Elem */ "./src/scripts/gl/Elem.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/scripts/gl/index.js");
/* harmony import */ var _PlanePool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PlanePool */ "./src/scripts/gl/PlanePool.js");
/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shaders */ "./src/scripts/gl/shaders/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneBufferGeometry"](1, 1, 1, 1);
var material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
  transparent: true,
  fragmentShader: _shaders__WEBPACK_IMPORTED_MODULE_4__["rgbSplitFragment"],
  vertexShader: _shaders__WEBPACK_IMPORTED_MODULE_4__["vertex"]
});

var Plane =
/*#__PURE__*/
function (_Elem) {
  _inherits(Plane, _Elem);

  function Plane() {
    _classCallCheck(this, Plane);

    return _possibleConstructorReturn(this, _getPrototypeOf(Plane).apply(this, arguments));
  }

  _createClass(Plane, [{
    key: "init",
    value: function init(args) {
      var _this = this;

      _get(_getPrototypeOf(Plane.prototype), "init", this).call(this, args);

      this.geometry = geometry;
      this.material = material.clone();
      this.img = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["qs"])('img', this.el);
      this.texture = this.loader.load(this.img.currentSrc || this.img.src, function (texture) {
        if (_this.el.dataset.nop2 !== undefined) {
          texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
          texture.generateMipmaps = false;
        }
      });
      this.material.uniforms = {
        uTime: {
          value: 0
        },
        uTexture: {
          value: this.texture
        },
        uVelo: {
          value: 0
        }
      };
      this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](this.geometry, this.material);
      this.add(this.mesh);
      _index__WEBPACK_IMPORTED_MODULE_2__["default"].scene.add(this);
      _PlanePool__WEBPACK_IMPORTED_MODULE_3__["default"].planes[this.name] = this;
    }
  }, {
    key: "onTick",
    value: function onTick() {
      _get(_getPrototypeOf(Plane.prototype), "onTick", this).call(this);
    }
  }]);

  return Plane;
}(_Elem__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/scripts/gl/components/Waves.js":
/*!********************************************!*\
  !*** ./src/scripts/gl/components/Waves.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Waves; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./src/scripts/store.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _Elem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Elem */ "./src/scripts/gl/Elem.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/scripts/gl/index.js");
/* harmony import */ var _PlanePool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PlanePool */ "./src/scripts/gl/PlanePool.js");
/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders */ "./src/scripts/gl/shaders/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








 // import gsap from 'gsap'

var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneBufferGeometry"](1, 1, 1, 1);
var material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
  transparent: true,
  fragmentShader: _shaders__WEBPACK_IMPORTED_MODULE_6__["fullScreenVideoFragment"],
  vertexShader: _shaders__WEBPACK_IMPORTED_MODULE_6__["vertex"]
});

var Waves =
/*#__PURE__*/
function (_Elem) {
  _inherits(Waves, _Elem);

  function Waves() {
    _classCallCheck(this, Waves);

    return _possibleConstructorReturn(this, _getPrototypeOf(Waves).apply(this, arguments));
  }

  _createClass(Waves, [{
    key: "init",
    value: function init(args) {
      _get(_getPrototypeOf(Waves.prototype), "init", this).call(this, args);

      var _store$bounds = _store__WEBPACK_IMPORTED_MODULE_1__["default"].bounds,
          ww = _store$bounds.ww,
          wh = _store$bounds.wh;
      this.geometry = geometry;
      this.material = material.clone();
      this.video = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["qs"])('video.waves-video', this.el);
      this.texture = new three__WEBPACK_IMPORTED_MODULE_0__["VideoTexture"](this.video);
      this.texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.texture.format = three__WEBPACK_IMPORTED_MODULE_0__["RGBFormat"];
      this.material.uniforms = {
        uTime: {
          value: 0
        },
        uTexture: {
          value: this.texture
        },
        uVelo: {
          value: 0
        },
        uScreenSize: {
          value: [ww, wh]
        },
        uVideoSize: {
          value: [this.video.videoWidth, this.video.videoHeight]
        }
      };
      this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](this.geometry, this.material);
      this.add(this.mesh);
      _index__WEBPACK_IMPORTED_MODULE_4__["default"].scene.add(this);
      _PlanePool__WEBPACK_IMPORTED_MODULE_5__["default"].planes[this.name] = this;
    }
  }, {
    key: "onTick",
    value: function onTick() {
      _get(_getPrototypeOf(Waves.prototype), "onTick", this).call(this);
    }
  }]);

  return Waves;
}(_Elem__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/scripts/gl/components/index.js":
/*!********************************************!*\
  !*** ./src/scripts/gl/components/index.js ***!
  \********************************************/
/*! exports provided: Plane, Landing, Waves, Careers, Artists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Plane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plane */ "./src/scripts/gl/components/Plane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plane", function() { return _Plane__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing */ "./src/scripts/gl/components/Landing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Landing", function() { return _Landing__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Waves */ "./src/scripts/gl/components/Waves.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Waves", function() { return _Waves__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Careers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Careers */ "./src/scripts/gl/components/Careers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Careers", function() { return _Careers__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Artists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Artists */ "./src/scripts/gl/components/Artists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Artists", function() { return _Artists__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./src/scripts/gl/index.js":
/*!*********************************!*\
  !*** ./src/scripts/gl/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/scripts/events/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/scripts/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import PostFX from './PostFX'



var Gl =
/*#__PURE__*/
function () {
  function Gl() {
    var _this = this;

    _classCallCheck(this, Gl);

    _defineProperty(this, "run", function (_ref) {
      var target = _ref.target,
          current = _ref.current;
      var children = _this.scene.children;
      var state = _this.state;
      state.target = target;
      state.current = current;
      state.current2 += (state.target - state.current2) * 0.065;
      state.diff = (state.target - state.current2) * 0.00035;

      for (var i = 0; i < children.length; i++) {
        children[i].updatePosition(current);
        children[i].material.uniforms.uVelo.value = state.diff;
      }

      _this.render();
    });

    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["bindAll"])(this, 'onResize');
    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
    var _store$bounds = _store__WEBPACK_IMPORTED_MODULE_2__["default"].bounds,
        wh = _store$bounds.wh,
        ww = _store$bounds.ww;
    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](45, ww / wh, 0.1, 100);
    this.camera.position.z = 50;
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
      alpha: true,
      antialias: true
    });
    this.renderer.setPixelRatio(1.5);
    this.renderer.setSize(ww, wh);
    this.renderer.setClearColor(0xffffff, 0);
    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
    this.state = {
      target: 0,
      current: 0,
      current2: 0,
      threshold: 200
    };
    this.diff = 0;
  }

  _createClass(Gl, [{
    key: "render",
    value: function render() {
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "isVisible",
    value: function isVisible(_ref2, offset, speed) {
      var top = _ref2.top,
          bottom = _ref2.bottom;
      var _this$state = this.state,
          current = _this$state.current,
          threshold = _this$state.threshold;
      var translate = current * speed;
      var transform = translate - offset;
      var start = top + offset - translate;
      var end = bottom + offset - translate;
      var isVisible = start < threshold + _store__WEBPACK_IMPORTED_MODULE_2__["default"].bounds.wh && end > -threshold;
      return {
        isVisible: isVisible,
        transform: transform,
        start: start,
        end: end
      };
    }
  }, {
    key: "init",
    value: function init() {
      var domEl = this.renderer.domElement;
      domEl.classList.add('dom-gl');
      domEl.style.position = 'fixed';
      domEl.style.pointerEvents = 'none';
      domEl.style.top = 0;
      domEl.style.zIndex = -1;
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dom.body.appendChild(domEl);
      this.on();
    }
  }, {
    key: "on",
    value: function on() {
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].on('tick', this.run);
      _events__WEBPACK_IMPORTED_MODULE_1__["Events"].on('resize', this.onResize);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var _store$bounds2 = _store__WEBPACK_IMPORTED_MODULE_2__["default"].bounds,
          wh = _store$bounds2.wh,
          ww = _store$bounds2.ww; // console.log('wh', wh)

      this.renderer.domElement.width = ww;
      this.renderer.domElement.height = wh;
      this.camera.aspect = ww / wh; // Update the camera projection matrix

      this.camera.updateProjectionMatrix(); // Set the renderer size.

      this.renderer.setSize(ww, wh);
    }
  }]);

  return Gl;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Gl());

/***/ }),

/***/ "./src/scripts/gl/shaders/fragment/artists.frag":
/*!******************************************************!*\
  !*** ./src/scripts/gl/shaders/fragment/artists.frag ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision mediump float;\n\nuniform sampler2D uTexture;\nuniform float uVelo;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vec2 uv = vUv;\n\n    vec4 texture = texture2D(uTexture, uv);\n\n    // RGB shift\n    uv.y += 0.15 * uVelo;\n    if(uv.y < 1.) texture.g = texture2D(uTexture, uv).g;\n\n    uv.y += 0.10 * uVelo;\n    if(uv.y < 1.) texture.b = texture2D(uTexture, uv).b;\n\n    gl_FragColor = texture;\n}");

/***/ }),

/***/ "./src/scripts/gl/shaders/fragment/careers.frag":
/*!******************************************************!*\
  !*** ./src/scripts/gl/shaders/fragment/careers.frag ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision mediump float;\n\nuniform sampler2D uVideoTexture;\nuniform sampler2D uImageTexture;\nuniform float uVelo;\nuniform vec2 uScreenSize;\nuniform vec2 uVideoSize;\nuniform vec2 uImageSize;\n\nvarying vec2 vUv;\n\n// Credit to Jesper Landberg for the maths ( https://codepen.io/ReGGae/pen/aPpgbe )\nvec2 backgroundCoverUv( vec2 screenSize, vec2 imageSize, vec2 uv ) {\n\n    float screenRatio = screenSize.x / screenSize.y;\n    float imageRatio = imageSize.x / imageSize.y;\n\n    vec2 newSize = screenRatio < imageRatio\n        ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)\n        : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);\n\n    vec2 newOffset = (screenRatio < imageRatio\n        ? vec2((newSize.x - screenSize.x) / 2.0, 0.0)\n        : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;\n\n    return uv * screenSize / newSize + newOffset;\n\n}\n\nvoid main() {\n\n    vec2 videoUv = backgroundCoverUv(uScreenSize, uVideoSize, vUv);\n    vec2 imageUv = backgroundCoverUv(uScreenSize, uImageSize, vUv);\n\n    vec4 videoTexture = texture2D(uVideoTexture, videoUv);\n    vec4 imageTexture = texture2D(uImageTexture, imageUv);\n\n    // // RGB shift\n    // videoUv.y += 0.15 * uVelo;\n    // if(videoUv.y < 1.) videoTexture.g = texture2D(uVideoTexture, videoUv).g;\n\n    // videoUv.y += 0.10 * uVelo;\n    // if(videoUv.y < 1.) videoTexture.b = texture2D(uVideoTexture, videoUv).b;\n\n    gl_FragColor = mix(imageTexture, videoTexture, videoTexture.r);\n}");

/***/ }),

/***/ "./src/scripts/gl/shaders/fragment/full-screen-video.frag":
/*!****************************************************************!*\
  !*** ./src/scripts/gl/shaders/fragment/full-screen-video.frag ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision mediump float;\n\nuniform sampler2D uTexture;\nuniform float uVelo;\nuniform vec2 uScreenSize;\nuniform vec2 uVideoSize;\n\nvarying vec2 vUv;\n\n// Credit to Jesper Landberg for the maths ( https://codepen.io/ReGGae/pen/aPpgbe )\nvec2 backgroundCoverUv( vec2 screenSize, vec2 imageSize, vec2 uv ) {\n\n    float screenRatio = screenSize.x / screenSize.y;\n    float imageRatio = imageSize.x / imageSize.y;\n\n    vec2 newSize = screenRatio < imageRatio\n        ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)\n        : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);\n\n    vec2 newOffset = (screenRatio < imageRatio\n        ? vec2((newSize.x - screenSize.x) / 2.0, 0.0)\n        : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;\n\n    return uv * screenSize / newSize + newOffset;\n\n}\n\nvoid main() {\n\n    vec2 uv = backgroundCoverUv(uScreenSize, uVideoSize, vUv);\n\n    vec4 texture = texture2D(uTexture, uv);\n\n    // RGB shift\n    uv.y += 0.15 * uVelo;\n    if(uv.y < 1.) texture.g = texture2D(uTexture, uv).g;\n\n    uv.y += 0.10 * uVelo;\n    if(uv.y < 1.) texture.b = texture2D(uTexture, uv).b;\n\n    gl_FragColor = texture;\n}");

/***/ }),

/***/ "./src/scripts/gl/shaders/fragment/rgb-split.frag":
/*!********************************************************!*\
  !*** ./src/scripts/gl/shaders/fragment/rgb-split.frag ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision mediump float;\n\nuniform sampler2D uTexture;\nuniform float uVelo;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vec2 uv = vUv;\n\n    vec4 texture = texture2D(uTexture, uv);\n\n    // RGB shift\n    uv.y += 0.15 * uVelo;\n    if(uv.y < 1.) texture.g = texture2D(uTexture, uv).g;\n\n    uv.y += 0.10 * uVelo;\n    if(uv.y < 1.) texture.b = texture2D(uTexture, uv).b;\n\n    gl_FragColor = texture;\n}");

/***/ }),

/***/ "./src/scripts/gl/shaders/index.js":
/*!*****************************************!*\
  !*** ./src/scripts/gl/shaders/index.js ***!
  \*****************************************/
/*! exports provided: vertex, rgbSplitFragment, projectsFragment, btnFragment, fullScreenVideoFragment, careersFragment, artistsFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders */ "./src/scripts/gl/shaders/shaders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vertex", function() { return _shaders__WEBPACK_IMPORTED_MODULE_0__["vertex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "projectsFragment", function() { return _shaders__WEBPACK_IMPORTED_MODULE_0__["projectsFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "btnFragment", function() { return _shaders__WEBPACK_IMPORTED_MODULE_0__["btnFragment"]; });

/* harmony import */ var _fragment_rgb_split_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragment/rgb-split.frag */ "./src/scripts/gl/shaders/fragment/rgb-split.frag");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbSplitFragment", function() { return _fragment_rgb_split_frag__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _fragment_full_screen_video_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragment/full-screen-video.frag */ "./src/scripts/gl/shaders/fragment/full-screen-video.frag");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullScreenVideoFragment", function() { return _fragment_full_screen_video_frag__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _fragment_careers_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fragment/careers.frag */ "./src/scripts/gl/shaders/fragment/careers.frag");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "careersFragment", function() { return _fragment_careers_frag__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _fragment_artists_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fragment/artists.frag */ "./src/scripts/gl/shaders/fragment/artists.frag");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "artistsFragment", function() { return _fragment_artists_frag__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./src/scripts/gl/shaders/shaders.js":
/*!*******************************************!*\
  !*** ./src/scripts/gl/shaders/shaders.js ***!
  \*******************************************/
/*! exports provided: backgroundCoverUv, vertex, fragment, btnFragment, projectsFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundCoverUv", function() { return backgroundCoverUv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vertex", function() { return vertex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnFragment", function() { return btnFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsFragment", function() { return projectsFragment; });
var backgroundCoverUv = "\nvec2 backgroundCoverUv(vec2 screenSize, vec2 imageSize, vec2 uv) {\n    float screenRatio = screenSize.x / screenSize.y;\n    float imageRatio = imageSize.x / imageSize.y;\n\n    vec2 newSize = screenRatio < imageRatio\n    ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)\n    : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);\n\n    vec2 newOffset = (screenRatio < imageRatio\n        ? vec2((newSize.x - screenSize.x) / 2.0, 0.0)\n        : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;\n\n        return uv * screenSize / newSize + newOffset;\n    }\n    ";
var vertex = "\n    precision mediump float;\n\n    varying vec2 vUv;\n\n    void main(){\n        vec3 pos = position;\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n    }\n    ";
var fragment = "\n    precision mediump float;\n\n    uniform sampler2D uTexture;\n    uniform float uVelo;\n\n    varying vec2 vUv;\n\n    void main() {\n        vec2 uv = vUv;\n\n        vec4 texture = texture2D(uTexture, uv);\n\n        // RGB shift\n        uv.y += 0.15 * uVelo;\n        if(uv.y < 1.) texture.g = texture2D(uTexture, uv).g;\n\n        uv.y += 0.10 * uVelo;\n        if(uv.y < 1.) texture.b = texture2D(uTexture, uv).b;\n\n        gl_FragColor = texture;\n    }\n    ";
var btnFragment = "\n    precision mediump float;\n\n    uniform float uProgress;\n    uniform float uTime;\n    uniform float uBend;\n    uniform bool uOut;\n\n    varying vec2 vUv;\n\n    vec4 a = vec4(vec3(19.0, 0.73, 0.8), 0.);\n    vec4 b = vec4(vec3(19.0, 0.73, 0.8), 1.);\n\n    void main() {\n        vec2 uv = vUv;\n\n        float bending = (cos(uTime * .0015 + uv.y * 3.) + sin(uTime * .0015 + uv.x * 3.));\n        float effect = bending * uBend;\n\n        if (uOut) {\n            uv.y -= effect * 0.4;\n        } else {\n            uv.y += effect * 0.2;\n        }\n\n        float transition = step(uv.y, uProgress);\n        vec4 color = mix(a, b, transition);\n\n        gl_FragColor = color;\n    }\n    ";
var projectsFragment = "\n    precision mediump float;\n\n    uniform sampler2D uTex1;\n    uniform sampler2D uTex2;\n    uniform sampler2D uTex3;\n    uniform sampler2D uTex4;\n    uniform sampler2D uTex5;\n    uniform sampler2D uTex6;\n\n    uniform float uProgress1;\n    uniform float uProgress2;\n    uniform float uProgress3;\n\n    varying vec2 vUv;\n\n    void main() {\n        vec2 uv = vUv;\n\n        vec4 tex1 = texture2D(uTex1, uv);\n        vec4 tex2 = texture2D(uTex2, uv);\n        vec4 tex3 = texture2D(uTex3, uv);\n        vec4 tex4 = texture2D(uTex4, uv);\n        vec4 tex5 = texture2D(uTex5, uv);\n        vec4 tex6 = texture2D(uTex6, uv);\n\n        float progress1 = step(uv.y, uProgress1);\n        vec4 mask1 = mix(tex1, tex2, progress1);\n\n        float progress2 = step(uv.y, uProgress2);\n        vec4 mask2 = mix(mask1, tex3, progress2);\n\n        float progress3 = step(uv.y, uProgress3);\n        vec4 mask3 = mix(mask2, tex4, progress3);\n\n        gl_FragColor = mask3;\n    }\n    ";

/***/ }),

/***/ "./src/scripts/highway/AssetLoader.js":
/*!********************************************!*\
  !*** ./src/scripts/highway/AssetLoader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
*   Add any promises that need to be resolved before showing
*   the page by using the add( promise ) method.
*/
var AssetLoader = {
  promisesToLoad: [],
  load: function load() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$element = _ref.element,
        element = _ref$element === void 0 ? document.body : _ref$element,
        _ref$progress = _ref.progress,
        progress = _ref$progress === void 0 ? false : _ref$progress;

    this.element = element;
    this.addMedia();
    return this.loaded = new Promise(function (resolve) {
      if (progress) {
        _this.progressPromise(_this.promisesToLoad, progress).then(function () {
          _this.promisesToLoad = [];
          resolve();
        });
      } else {
        Promise.all(_this.promisesToLoad).then(function () {
          _this.promisesToLoad = [];
          resolve();
        });
      }
    });
  },
  add: function add(promise) {
    this.promisesToLoad.push(promise);
    return promise;
  },
  addMedia: function addMedia() {
    var _this2 = this;

    var images = this.element.querySelectorAll('img');

    var _loop = function _loop(i) {
      _this2.promisesToLoad.push(new Promise(function (resolve) {
        var imgEl = document.createElement('img');
        imgEl.addEventListener('load', resolve);
        imgEl.addEventListener('error', resolve);
        imgEl.src = images[i].src;
      }));
    };

    for (var i = 0; i < images.length; i++) {
      _loop(i);
    }

    var videos = this.element.querySelectorAll('video');

    var _loop2 = function _loop2(_i) {
      _this2.promisesToLoad.push(new Promise(function (resolve) {
        var videoEl = document.createElement('video');
        videoEl.addEventListener('loadedmetadata', resolve);
        videoEl.addEventListener('error', resolve);
        videoEl.src = videos[_i].src;
        videoEl.load();
      }));
    };

    for (var _i = 0; _i < videos.length; _i++) {
      _loop2(_i);
    } // TODO: check background images

  },
  progressPromise: function progressPromise(promises, tickCallback) {
    var len = promises.length;
    var progress = 0;

    function tick(promise) {
      promise.then(function () {
        progress++;
        tickCallback(progress, len);
      })["catch"](function (reason) {
        console.log(reason);
      });
      return promise;
    }

    return Promise.all(promises.map(tick));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AssetLoader);

/***/ }),

/***/ "./src/scripts/highway/animations/Fade.js":
/*!************************************************!*\
  !*** ./src/scripts/highway/animations/Fade.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./src/scripts/store.js");


var Fade = {
  "in": function _in(to) {
    return new Promise(function (resolve) {
      var duration = 1;
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].flags.locked = false;
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(to, duration, {
        opacity: 0
      }, {
        opacity: 1,
        ease: 'Expo.easeInOut',
        onComplete: function onComplete() {
          resolve();
        }
      });
    });
  },
  out: function out(from) {
    return new Promise(function (resolve) {
      var duration = 1;
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].flags.locked = true;
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(from, duration, {
        opacity: 0,
        ease: 'Expo.easeInOut',
        onComplete: function onComplete() {
          resolve();
        }
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Fade);

/***/ }),

/***/ "./src/scripts/highway/index.js":
/*!**************************************!*\
  !*** ./src/scripts/highway/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dogstudio_highway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dogstudio/highway */ "./node_modules/@dogstudio/highway/build/highway.js");
/* harmony import */ var _dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dogstudio_highway__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderers */ "./src/scripts/highway/renderers/index.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitions */ "./src/scripts/highway/transitions/index.js");

_dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default.a.initial = false;


/* harmony default export */ __webpack_exports__["default"] = (new _dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default.a.Core({
  renderers: {
    home: _renderers__WEBPACK_IMPORTED_MODULE_1__["HomeRenderer"],
    "default": _renderers__WEBPACK_IMPORTED_MODULE_1__["DefaultRenderer"]
  },
  transitions: {
    "default": _transitions__WEBPACK_IMPORTED_MODULE_2__["DefaultTransition"],
    home: _transitions__WEBPACK_IMPORTED_MODULE_2__["DefaultTransition"]
  }
}));

/***/ }),

/***/ "./src/scripts/highway/renderers/Default.js":
/*!**************************************************!*\
  !*** ./src/scripts/highway/renderers/Default.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dogstudio_highway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dogstudio/highway */ "./node_modules/@dogstudio/highway/build/highway.js");
/* harmony import */ var _dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dogstudio_highway__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./src/scripts/components/index.js");
/* harmony import */ var _AssetLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AssetLoader */ "./src/scripts/highway/AssetLoader.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events */ "./src/scripts/events/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var _gl_PlanePool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../gl/PlanePool */ "./src/scripts/gl/PlanePool.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/scripts/store.js");
/* harmony import */ var _gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../gl */ "./src/scripts/gl/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var DefaultRenderer =
/*#__PURE__*/
function (_Highway$Renderer) {
  _inherits(DefaultRenderer, _Highway$Renderer);

  function DefaultRenderer() {
    _classCallCheck(this, DefaultRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultRenderer).apply(this, arguments));
  }

  _createClass(DefaultRenderer, [{
    key: "onEnter",
    value: function onEnter() {
      this.el = this.wrap.lastElementChild;
    }
  }, {
    key: "onLeave",
    value: function onLeave() {}
  }, {
    key: "onEnterCompleted",
    value: function onEnterCompleted() {
      var _this = this;

      this.page = this.wrap.lastElementChild;
      _AssetLoader__WEBPACK_IMPORTED_MODULE_2__["default"].load({
        element: this.page
      }).then(function () {
        _this.handleSmoothScroll();

        if (document.readyState === 'complete') {
          _events__WEBPACK_IMPORTED_MODULE_3__["GlobalScroll"].setScrollBounds();

          _this.initPlanes();
        } else {
          Object(_utils__WEBPACK_IMPORTED_MODULE_4__["listener"])(window, 'a', 'load', function () {
            _events__WEBPACK_IMPORTED_MODULE_3__["GlobalScroll"].setScrollBounds();
            _components__WEBPACK_IMPORTED_MODULE_1__["SmoothScroll"].resize();

            _this.initPlanes();
          });
        }

        if (!_dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default.a.initial) {
          _gl__WEBPACK_IMPORTED_MODULE_7__["default"].init();
          _dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default.a.initial = true;
        }
      });
    }
  }, {
    key: "onLeaveCompleted",
    value: function onLeaveCompleted() {
      _events__WEBPACK_IMPORTED_MODULE_3__["GlobalRaf"].reset();
      this.removePlanes();
      if (this.parallax) this.parallax.destroy();
    }
  }, {
    key: "handleSmoothScroll",
    value: function handleSmoothScroll() {
      if (!_store__WEBPACK_IMPORTED_MODULE_6__["default"].flags.smooth) return;
      var elems = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["qsa"])('[data-smooth-item]');

      if (!_dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default.a.initial && elems) {
        _components__WEBPACK_IMPORTED_MODULE_1__["SmoothScroll"].init(elems);
      } else if (elems) {
        _components__WEBPACK_IMPORTED_MODULE_1__["SmoothScroll"].update(elems);
      } else {
        _components__WEBPACK_IMPORTED_MODULE_1__["SmoothScroll"].clean();
      }
    }
  }, {
    key: "initParallax",
    value: function initParallax() {
      var elems = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["qsa"])('[data-from]');
      if (elems) this.parallax = new _components__WEBPACK_IMPORTED_MODULE_1__["Parallax"](elems);
    }
  }, {
    key: "initPlanes",
    value: function initPlanes() {
      var elems = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["qsa"])('[data-gl-id]', this.el);

      if (elems) {
        for (var i = 0; i < elems.length; i++) {
          _gl_PlanePool__WEBPACK_IMPORTED_MODULE_5__["default"].fromDom(elems[i]);
        }
      }
    }
  }, {
    key: "removePlanes",
    value: function removePlanes() {
      for (var name in _gl_PlanePool__WEBPACK_IMPORTED_MODULE_5__["default"].planes) {
        _gl_PlanePool__WEBPACK_IMPORTED_MODULE_5__["default"].remove(_gl_PlanePool__WEBPACK_IMPORTED_MODULE_5__["default"].planes[name]);
      }
    }
  }]);

  return DefaultRenderer;
}(_dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default.a.Renderer);

/* harmony default export */ __webpack_exports__["default"] = (DefaultRenderer);

/***/ }),

/***/ "./src/scripts/highway/renderers/Home.js":
/*!***********************************************!*\
  !*** ./src/scripts/highway/renderers/Home.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default */ "./src/scripts/highway/renderers/Default.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/scripts/utils/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/scripts/components/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import store from '../../store'




var HomeRenderer =
/*#__PURE__*/
function (_DefaultRenderer) {
  _inherits(HomeRenderer, _DefaultRenderer);

  function HomeRenderer() {
    _classCallCheck(this, HomeRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeRenderer).apply(this, arguments));
  }

  _createClass(HomeRenderer, [{
    key: "onEnter",
    value: function onEnter() {
      _get(_getPrototypeOf(HomeRenderer.prototype), "onEnter", this).call(this);
    }
  }, {
    key: "onLeave",
    value: function onLeave() {
      _get(_getPrototypeOf(HomeRenderer.prototype), "onLeave", this).call(this);
    }
  }, {
    key: "onEnterCompleted",
    value: function onEnterCompleted() {
      _get(_getPrototypeOf(HomeRenderer.prototype), "onEnterCompleted", this).call(this);

      this.initLanding();
      this.initWaves();
      this.initCareers();
      this.initArtists();
      this.initNews(); // console.log(this.page)
    }
  }, {
    key: "onLeaveCompleted",
    value: function onLeaveCompleted() {
      _get(_getPrototypeOf(HomeRenderer.prototype), "onLeaveCompleted", this).call(this);

      if (this.landing) this.landing.destroy();
      if (this.waves) this.waves.destroy();
      if (this.careers) this.careers.destroy();
      if (this.artists) this.artists.destroy();
      if (this.news) this.news.destroy();
    }
  }, {
    key: "initLanding",
    value: function initLanding() {
      var el = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.section.landing', this.page);
      if (el) this.landing = new _components__WEBPACK_IMPORTED_MODULE_2__["Landing"](el);
    }
  }, {
    key: "initWaves",
    value: function initWaves() {
      var el = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.section.waves', this.page);
      if (el) this.waves = new _components__WEBPACK_IMPORTED_MODULE_2__["Waves"](el);
    }
  }, {
    key: "initCareers",
    value: function initCareers() {
      var el = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.section.careers', this.page);
      if (el) this.careers = new _components__WEBPACK_IMPORTED_MODULE_2__["Careers"](el);
    }
  }, {
    key: "initArtists",
    value: function initArtists() {
      var el = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.section.artists', this.page);
      if (el) this.artists = new _components__WEBPACK_IMPORTED_MODULE_2__["Artists"](el);
    }
  }, {
    key: "initNews",
    value: function initNews() {
      var el = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])('.section.news', this.page);
      if (el) this.news = new _components__WEBPACK_IMPORTED_MODULE_2__["News"](el);
    }
  }]);

  return HomeRenderer;
}(_Default__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (HomeRenderer);

/***/ }),

/***/ "./src/scripts/highway/renderers/index.js":
/*!************************************************!*\
  !*** ./src/scripts/highway/renderers/index.js ***!
  \************************************************/
/*! exports provided: DefaultRenderer, HomeRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default */ "./src/scripts/highway/renderers/Default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultRenderer", function() { return _Default__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/scripts/highway/renderers/Home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeRenderer", function() { return _Home__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/scripts/highway/transitions/Default.js":
/*!****************************************************!*\
  !*** ./src/scripts/highway/transitions/Default.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dogstudio_highway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dogstudio/highway */ "./node_modules/@dogstudio/highway/build/highway.js");
/* harmony import */ var _dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dogstudio_highway__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animations_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/Fade */ "./src/scripts/highway/animations/Fade.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DefaultTransition =
/*#__PURE__*/
function (_Highway$Transition) {
  _inherits(DefaultTransition, _Highway$Transition);

  function DefaultTransition() {
    _classCallCheck(this, DefaultTransition);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultTransition).apply(this, arguments));
  }

  _createClass(DefaultTransition, [{
    key: "in",
    value: function _in(_ref) {
      var to = _ref.to,
          from = _ref.from,
          done = _ref.done;
      _animations_Fade__WEBPACK_IMPORTED_MODULE_1__["default"]["in"](to).then(function () {
        from.remove();
        done();
      });
    }
  }, {
    key: "out",
    value: function out(_ref2) {
      var from = _ref2.from,
          done = _ref2.done;
      _animations_Fade__WEBPACK_IMPORTED_MODULE_1__["default"].out(from).then(function () {
        done();
      });
    }
  }]);

  return DefaultTransition;
}(_dogstudio_highway__WEBPACK_IMPORTED_MODULE_0___default.a.Transition);

/* harmony default export */ __webpack_exports__["default"] = (DefaultTransition);

/***/ }),

/***/ "./src/scripts/highway/transitions/index.js":
/*!**************************************************!*\
  !*** ./src/scripts/highway/transitions/index.js ***!
  \**************************************************/
/*! exports provided: DefaultTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default */ "./src/scripts/highway/transitions/Default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTransition", function() { return _Default__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/scripts/store.js":
/*!******************************!*\
  !*** ./src/scripts/store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sniffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sniffer */ "./node_modules/sniffer/index.js");
/* harmony import */ var sniffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sniffer__WEBPACK_IMPORTED_MODULE_0__);

var store = {
  dom: {
    body: document.body,
    scroll: document.querySelector('[data-smooth]'),
    sections: false
  },
  bounds: {
    ww: window.innerWidth,
    wh: window.innerHeight,
    scroll: 0
  },
  flags: {
    home: false,
    locked: true,
    dropdown: false,
    resize: false,
    allowScroll: true,
    windows: ["Win32", "Win64", "Windows", "WinCE"].indexOf(window.navigator.platform) !== -1
  }
};
Object.assign(store, sniffer__WEBPACK_IMPORTED_MODULE_0___default.a.getInfos());
store.flags.smooth = store.isDesktop;
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/scripts/theme.js":
/*!******************************!*\
  !*** ./src/scripts/theme.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sniffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sniffer */ "./node_modules/sniffer/index.js");
/* harmony import */ var sniffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sniffer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/scripts/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./src/scripts/events/index.js");
/* harmony import */ var _highway__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highway */ "./src/scripts/highway/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    _defineProperty(this, "onLoad", function () {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].flags.locked = false;
    });

    this.setup();
    this.init();
  }

  _createClass(App, [{
    key: "setup",
    value: function setup() {
      sniffer__WEBPACK_IMPORTED_MODULE_1___default.a.addClasses(_store__WEBPACK_IMPORTED_MODULE_2__["default"].dom.body);
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["listener"])(window, 'a', 'load', this.onLoad);
    }
  }, {
    key: "init",
    value: function init() {
      this.highwayEvents();
      this.logoLink();
    }
  }, {
    key: "highwayEvents",
    value: function highwayEvents() {
      _highway__WEBPACK_IMPORTED_MODULE_5__["default"].on('NAVIGATE_OUT', function () {
        var links = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["qsa"])('.js-site-link');
        links.forEach(function (link) {
          link.classList.remove('is-active');

          if (link.href === location.href) {
            link.classList.add('is-active');
          }
        });
      });
      _highway__WEBPACK_IMPORTED_MODULE_5__["default"].on('NAVIGATE_IN', function () {
        window.scrollTo(0, 0);
      });
    }
  }, {
    key: "logoLink",
    value: function logoLink() {
      _events__WEBPACK_IMPORTED_MODULE_4__["Events"].delegate('click', '.js-logo', function (e) {
        e.preventDefault();

        if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].flags.dropdown) {
          _highway__WEBPACK_IMPORTED_MODULE_5__["default"].redirect(location.origin, 'menu');
        } else {
          _highway__WEBPACK_IMPORTED_MODULE_5__["default"].redirect(location.origin);
        }
      });
    }
  }]);

  return App;
}();

new App();

/***/ }),

/***/ "./src/scripts/utils/bindAll.js":
/*!**************************************!*\
  !*** ./src/scripts/utils/bindAll.js ***!
  \**************************************/
/*! exports provided: bindAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return bindAll; });
function bindAll(object) {
  var functions = [].slice.call(arguments, 1);

  for (var i = 0; i < functions.length; i++) {
    var f = functions[i];
    object[f] = bind(object[f], object);
  }
}

function bind(func, context) {
  return function () {
    return func.apply(context, arguments);
  };
}

/***/ }),

/***/ "./src/scripts/utils/index.js":
/*!************************************!*\
  !*** ./src/scripts/utils/index.js ***!
  \************************************/
/*! exports provided: lerp, listener, normalize, visible, bindAll, qs, qsa, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lerp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lerp */ "./src/scripts/utils/lerp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return _lerp__WEBPACK_IMPORTED_MODULE_0__["lerp"]; });

/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener */ "./src/scripts/utils/listener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listener", function() { return _listener__WEBPACK_IMPORTED_MODULE_1__["listener"]; });

/* harmony import */ var _normalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize */ "./src/scripts/utils/normalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _normalize__WEBPACK_IMPORTED_MODULE_2__["normalize"]; });

/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visible */ "./src/scripts/utils/visible.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visible", function() { return _visible__WEBPACK_IMPORTED_MODULE_3__["visible"]; });

/* harmony import */ var _bindAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bindAll */ "./src/scripts/utils/bindAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _bindAll__WEBPACK_IMPORTED_MODULE_4__["bindAll"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selector */ "./src/scripts/utils/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "qs", function() { return _selector__WEBPACK_IMPORTED_MODULE_5__["qs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "qsa", function() { return _selector__WEBPACK_IMPORTED_MODULE_5__["qsa"]; });

/* harmony import */ var _wrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrap */ "./src/scripts/utils/wrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap__WEBPACK_IMPORTED_MODULE_6__["wrap"]; });









/***/ }),

/***/ "./src/scripts/utils/lerp.js":
/*!***********************************!*\
  !*** ./src/scripts/utils/lerp.js ***!
  \***********************************/
/*! exports provided: lerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
function lerp(a, b, n) {
  return a * (1 - n) + b * n;
}

/***/ }),

/***/ "./src/scripts/utils/listener.js":
/*!***************************************!*\
  !*** ./src/scripts/utils/listener.js ***!
  \***************************************/
/*! exports provided: listener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listener", function() { return listener; });
function listener(el, a, type, cb, p) {
  var passive = p === true ? {
    passive: true
  } : false;
  var action = a === 'a' ? 'add' : 'remove';
  return el[action + 'EventListener'](type, cb, passive);
}

/***/ }),

/***/ "./src/scripts/utils/normalize.js":
/*!****************************************!*\
  !*** ./src/scripts/utils/normalize.js ***!
  \****************************************/
/*! exports provided: normalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
function normalize(v, min, max) {
  return (v - min) / (max - min);
}

/***/ }),

/***/ "./src/scripts/utils/selector.js":
/*!***************************************!*\
  !*** ./src/scripts/utils/selector.js ***!
  \***************************************/
/*! exports provided: qs, qsa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qs", function() { return qs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qsa", function() { return qsa; });
var qs = function qs(s) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return o.querySelector(s);
};
var qsa = function qsa(s) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return o.querySelectorAll(s);
};

/***/ }),

/***/ "./src/scripts/utils/visible.js":
/*!**************************************!*\
  !*** ./src/scripts/utils/visible.js ***!
  \**************************************/
/*! exports provided: visible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visible", function() { return visible; });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store.js */ "./src/scripts/store.js");

function visible(_ref) {
  var top = _ref.top,
      bottom = _ref.bottom;
  var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var bounds = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].bounds;
  var translate = current * speed;
  var transform = translate - offset;
  var start = top + offset - translate;
  var end = bottom + offset - translate;
  var isVisible = start < threshold + bounds.height && end > -threshold;
  return {
    isVisible: isVisible,
    transform: transform,
    start: start,
    end: end
  };
}

/***/ }),

/***/ "./src/scripts/utils/wrap.js":
/*!***********************************!*\
  !*** ./src/scripts/utils/wrap.js ***!
  \***********************************/
/*! exports provided: wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
function wrap(value, min, max) {
  var v = value - min;
  var r = max - min;
  return (r + v % r) % r + min;
}

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************!*\
  !*** multi ./src/scripts/theme.js ./src/sass/style.scss ./node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\anusha\Desktop\office\warner-records-2\src\scripts\theme.js */"./src/scripts/theme.js");
__webpack_require__(/*! C:\Users\anusha\Desktop\office\warner-records-2\src\sass\style.scss */"./src/sass/style.scss");
module.exports = __webpack_require__(/*! C:\Users\anusha\Desktop\office\warner-records-2\node_modules\svg-spritemap-webpack-plugin\svg4everybody-helper.js */"./node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js");


/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=theme.js.map