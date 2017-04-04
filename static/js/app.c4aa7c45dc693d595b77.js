webpackJsonp([1],{

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        type: String,
        message: String,
        duration: Number,
        position: {
            type: String,
            default: 'bottom-right'
        },
        container: String
    },
    data: function data() {
        return {
            isActive: false,
            positions: {
                'top-right': {
                    enter: 'Down',
                    leave: 'Up'
                },
                'top': {
                    enter: 'Down',
                    leave: 'Up'
                },
                'top-left': {
                    enter: 'Down',
                    leave: 'Up'
                },
                'bottom-right': {
                    enter: 'Up',
                    leave: 'Down'
                },
                'bottom': {
                    enter: 'Up',
                    leave: 'Down'
                },
                'bottom-left': {
                    enter: 'Up',
                    leave: 'Down'
                }
            }
        };
    },

    computed: {
        transition: function transition() {
            switch (this.position) {
                case 'top-right':
                case 'top':
                case 'top-left':
                    return {
                        enter: 'fadeInDown',
                        leave: 'fadeOutUp'
                    };
                case 'bottom-right':
                case 'bottom':
                case 'bottom-left':
                    return {
                        enter: 'fadeInUp',
                        leave: 'fadeOutDown'
                    };
            }
        }
    },
    methods: {
        close: function close() {
            var _this = this;

            clearTimeout(this.timer);
            this.isActive = false;

            setTimeout(function () {
                _this.$destroy();
                _this.$el.remove();
            }, 150);
        },
        show: function show() {
            var _this2 = this;

            if (this.hasChild(this.parent)) {
                setTimeout(function () {
                    return _this2.show();
                }, 500);
                return;
            }
            this.insertEl();
            this.isActive = true;
            this.timer = setTimeout(function () {
                return _this2.close();
            }, this.duration);
        }
    },
    mounted: function mounted() {
        this.show();
    }
});

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Icon__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Icon___default.a);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CheckboxGroup__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CheckboxGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CheckboxGroup__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Checkbox___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__CheckboxGroup___default.a; });





/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Pagination__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Pagination___default.a);

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(427),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(420),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(419),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(439),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(438),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(431),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(430),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(440),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(428),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(433),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(426),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(435),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(422),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(434),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(423),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(436),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(437),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(425),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(429),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(421),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(424),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', {
    staticClass: "title is-spaced"
  }, [_vm._v("Customizing theme with Sass")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "bash"
  }, [_vm._v("Not public yet.")])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }],
    staticClass: "mt-16"
  }, [_c('code', {
    staticClass: "bash"
  }, [_vm._v("npm install bulma")])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "sass"
  }, [_vm._v(_vm._s(_vm.sass))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "sass"
  }, [_vm._v(_vm._s(_vm.sassFinal))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "javascript"
  }, [_vm._v(_vm._s(_vm.importing))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    staticClass: "title is-spaced"
  }, [_vm._v("Global options")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Global options should be set inside an object on Buefy initialization, like so:")]), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "javascript"
  }, [_vm._v(_vm._s(_vm.globalOptions))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Using FontAwesome")]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('code', [_vm._v("defaultIconType: 'fa'")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle is-6 mt-16"
  }, [_vm._v("Don't forget to include FontAwesome")]), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "html"
  }, [_vm._v(_vm._s(_vm.fontAwesome || _vm.html))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Customizing the default container of floating Notices")]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('code', [_vm._v("defaultContentElement: '#app-main'")]), _vm._v(" "), _vm._m(10)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "mb-16"
  }, [_vm._v("If you're familiar with "), _c('a', {
    attrs: {
      "href": "http://sass-lang.com/"
    }
  }, [_vm._v("Sass")]), _vm._v(" and want to "), _c('strong', [_vm._v("customize")]), _vm._v(" Buefy with your own theme, follow these steps:")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "subtitle"
  }, [_c('span', {
    staticClass: "mr-8"
  }, [_vm._v("1")]), _vm._v(" Install Buefy and Bulma via npm")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "mt-16"
  }, [_vm._v("or clone the repository: "), _c('a', {
    attrs: {
      "href": "https://github.com/rafaelpimpa/buefy",
      "target": "_blank"
    }
  }, [_vm._v("https://github.com/rafaelpimpa/buefy")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "mt-16"
  }, [_vm._v("or clone the repository: "), _c('a', {
    attrs: {
      "href": "https://github.com/jgthms/bulma",
      "target": "_blank"
    }
  }, [_vm._v("https://github.com/jgthms/bulma")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "subtitle"
  }, [_c('span', {
    staticClass: "mr-8"
  }, [_vm._v("2")]), _vm._v(" Set your variables with Sass")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "mb-16"
  }, [_c('strong', [_vm._v("Tip:")]), _vm._v(" You can see all Bulma's variables "), _c('a', {
    attrs: {
      "href": "http://bulma.io/documentation/overview/variables/",
      "target": "_blank"
    }
  }, [_vm._v("here")]), _vm._v(".")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "subtitle"
  }, [_c('span', {
    staticClass: "mr-8"
  }, [_vm._v("3")]), _vm._v(" Import Bulma and Buefy styles "), _c('em', [_vm._v("after")]), _vm._v(" having set your variables")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "subtitle"
  }, [_c('span', {
    staticClass: "mr-8"
  }, [_vm._v("4")]), _vm._v(" Import and use Buefy. You can also enable individual components")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "mb-16"
  }, [_vm._v("By default Buefy uses "), _c('a', {
    attrs: {
      "href": "https://material.io/icons/",
      "target": "_blank"
    }
  }, [_vm._v("Material Icons")]), _vm._v(", if you want to swap to "), _c('a', {
    attrs: {
      "href": "http://fontawesome.io/",
      "target": "_blank"
    }
  }, [_vm._v("FontAwesome")]), _vm._v(", use this option:")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "mb-16"
  }, [_vm._v("If you're creating an admin, dashboard panel or desktop app, you probably don't want to have those floating Notices (Toasts & Snackbars) "), _c('strong', [_vm._v("overlapping")]), _vm._v(" the menu or anything else.\n        Change the default container with the following option:")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "mt-16"
  }, [_vm._v("Stay aware that this also changes the "), _c('code', [_vm._v("position")]), _vm._v(" of the Notices from "), _c('code', [_vm._v("fixed")]), _vm._v(" to "), _c('code', [_vm._v("absolute")]), _vm._v(". It means that the container "), _c('em', [_vm._v("should")]), _vm._v(" be "), _c('code', [_vm._v("fixed")]), _vm._v(".")])
}]}

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "documentation"
  }, [_c('section', {
    staticClass: "hero is-primary"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "hero-foot"
  }, [_c('nav', {
    staticClass: "tabs is-boxed"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('ul', [_c('router-link', {
    attrs: {
      "to": "/documentation/installation",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("Installation")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/documentation/notices",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("Notices")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/documentation/form-elements",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("Form Elements")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/documentation/navigation",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("Navigation")])])], 1)])])])]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Documentation")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Learn everything you need to start using Buefy ;)")])])])
}]}

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "mode": "out-in",
      "appear": "",
      "appear-active-class": _vm.transition.enter,
      "enter-active-class": _vm.transition.enter,
      "leave-active-class": _vm.transition.leave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "toast",
    class: _vm.type
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pagination",
    class: [_vm.position, _vm.size]
  }, [_c('a', {
    staticClass: "pagination-previous",
    class: {
      'is-disabled': !_vm.hasPrev
    },
    on: {
      "click": _vm.prev
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "chevron_left",
      "both": ""
    }
  })], 1), _vm._v(" "), _c('a', {
    staticClass: "pagination-next",
    class: {
      'is-disabled': !_vm.hasNext
    },
    on: {
      "click": _vm.next
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "chevron_right",
      "both": ""
    }
  })], 1), _vm._v(" "), (!_vm.simple) ? _c('ul', {
    staticClass: "pagination-list"
  }, [(_vm.hasFirst) ? _c('li', [_c('a', {
    staticClass: "pagination-link",
    on: {
      "click": _vm.first
    }
  }, [_vm._v("1")])]) : _vm._e(), _vm._v(" "), (_vm.hasFirstEllipsis) ? _c('li', [_c('span', {
    staticClass: "pagination-ellipsis"
  }, [_vm._v("…")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pagesInRange), function(page) {
    return _c('li', [_c('a', {
      staticClass: "pagination-link",
      class: {
        'is-current': page.isCurrent
      },
      on: {
        "click": page.click
      }
    }, [_vm._v(_vm._s(page.number))])])
  }), _vm._v(" "), (_vm.hasLastEllipsis) ? _c('li', [_c('span', {
    staticClass: "pagination-ellipsis"
  }, [_vm._v("…")])]) : _vm._e(), _vm._v(" "), (_vm.hasLast) ? _c('li', [_c('a', {
    staticClass: "pagination-link",
    on: {
      "click": _vm.last
    }
  }, [_vm._v(_vm._s(_vm.pageCount))])]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.simple) ? _c('small', {
    staticClass: "info"
  }, [_vm._v("\n        " + _vm._s(_vm.firstItem) + "-" + _vm._s(_vm.current * _vm.perPage) + " / " + _vm._s(_vm.total) + "\n    ")]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "radio radio-button button",
    class: [_vm.isChecked ? _vm.type : '', {
      'is-disabled': _vm.disabled
    }],
    on: {
      "click": _vm.changed
    }
  }, [_vm._t("default"), _vm._v(" "), _c('input', {
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "checked": _vm.isChecked,
      "value": this.label
    }
  })], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "tooltip",
    class: [_vm.type, _vm.position, _vm.multilineSize, {
      'is-rounded': _vm.rounded,
      'is-animated': _vm.animated,
      'is-always': _vm.always,
      'is-multiline': _vm.multilined,
      'is-dashed': _vm.dashed
    }],
    attrs: {
      "data-label": _vm.label
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "switch",
    class: {
      'is-disabled': _vm.disabled
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newValue),
      expression: "newValue"
    }],
    class: {
      'is-on-off': _vm.isOnOff
    },
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": Array.isArray(_vm.newValue) ? _vm._i(_vm.newValue, null) > -1 : (_vm.newValue)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.newValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.newValue = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.newValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.newValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "message",
    class: _vm.type
  }, [(_vm.title) ? _c('div', {
    staticClass: "message-header"
  }, [_c('p', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.closable) ? _c('button', {
    staticClass: "delete",
    on: {
      "click": _vm.close
    }
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "message-body"
  }, [(_vm.icon && _vm.showIcon) ? _c('b-icon', {
    class: _vm.type,
    attrs: {
      "icon": _vm.icon,
      "both": "",
      "size": "is-large"
    }
  }) : _vm._e(), _vm._v(" "), _c('p', [_vm._t("default")], 2)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title mb-48"
  }, [_vm._v("Componentes")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Dialog")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.alertDialog
    }
  }, [_vm._v("Alert")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.alertDialogWTitle
    }
  }, [_vm._v("Alert with title")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.confirmDialog
    }
  }, [_vm._v("Confirm")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.confirmDialogCustomWCallback
    }
  }, [_vm._v("Confirm customized")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.confirmDialogCustom
    }
  }, [_vm._v("Confirm customized with callback")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Snackbar")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.snackbar
    }
  }, [_vm._v("Default Snackbar")]), _vm._v(" "), _c('button', {
    staticClass: "button is-info",
    on: {
      "click": _vm.infoSnackbar
    }
  }, [_vm._v("Snackbar Blue Action")]), _vm._v(" "), _c('button', {
    staticClass: "button is-warning",
    on: {
      "click": _vm.warningSnackbar
    }
  }, [_vm._v("Snackbar Yellow Action")]), _vm._v(" "), _c('button', {
    staticClass: "button is-danger",
    on: {
      "click": _vm.dangerSnackbar
    }
  }, [_vm._v("Snackbar Red Action")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Toast")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.toast
    }
  }, [_vm._v("Toast")]), _vm._v(" "), _c('button', {
    staticClass: "button is-success",
    on: {
      "click": _vm.successToast
    }
  }, [_vm._v("Toast Success")]), _vm._v(" "), _c('button', {
    staticClass: "button is-danger",
    on: {
      "click": _vm.dangerToast
    }
  }, [_vm._v("Toast Danger")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Notification")]), _vm._v(" "), _c('b-notification', [_vm._v("\n            Default notification\n        ")]), _vm._v(" "), _c('b-notification', {
    attrs: {
      "type": "is-success"
    }
  }, [_vm._v("\n            Success notification\n        ")]), _vm._v(" "), _c('b-notification', {
    attrs: {
      "type": "is-success",
      "show-icon": ""
    }
  }, [_vm._v("\n            Success notification with icon\n        ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Message")]), _vm._v(" "), _c('b-message', {
    attrs: {
      "title": "Hello World"
    }
  }, [_vm._v("\n            Default message\n        ")]), _vm._v(" "), _c('b-message', {
    attrs: {
      "title": "Hello World",
      "type": "is-danger"
    }
  }, [_vm._v("\n            Danger message\n        ")]), _vm._v(" "), _c('b-message', {
    attrs: {
      "title": "Hello World",
      "type": "is-danger",
      "show-icon": ""
    }
  }, [_vm._v("\n            Danger message with icon\n        ")]), _vm._v(" "), _c('b-message', {
    attrs: {
      "type": "is-danger"
    }
  }, [_vm._v("\n            Danger message body only — automatically non-closable\n        ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Switch")]), _vm._v(" "), _c('div', {
    staticClass: "mb-8"
  }, [_c('b-switch', [_vm._v("Default")]), _vm._v(" "), _c('b-switch', {
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('b-switch', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("Disabled Checked")])], 1), _vm._v(" "), _c('div', [_c('b-switch', {
    attrs: {
      "is-on-off": ""
    }
  }, [_vm._v("On / Off")]), _vm._v(" "), _c('b-switch', {
    attrs: {
      "is-on-off": "",
      "disabled": ""
    }
  }, [_vm._v("On / Off Disabled")]), _vm._v(" "), _c('b-switch', {
    attrs: {
      "is-on-off": "",
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("On / Off Disabled Checked")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Checkbox")]), _vm._v(" "), _c('b-checkbox', {
    model: {
      value: (_vm.checkbox),
      callback: function($$v) {
        _vm.checkbox = $$v
      },
      expression: "checkbox"
    }
  }, [_vm._v(_vm._s(_vm.checkbox))]), _vm._v(" "), _c('b-checkbox', {
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('b-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("Disabled Checked")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Checkbox Group")]), _vm._v(" "), _c('b-checkbox-group', {
    model: {
      value: (_vm.checkboxGroup),
      callback: function($$v) {
        _vm.checkboxGroup = $$v
      },
      expression: "checkboxGroup"
    }
  }, [_c('b-checkbox', {
    attrs: {
      "label": "Kobe"
    }
  }, [_vm._v("Kobe")]), _vm._v(" "), _c('b-checkbox', {
    attrs: {
      "label": "James"
    }
  }, [_vm._v("James")]), _vm._v(" "), _c('b-checkbox', {
    attrs: {
      "label": "Wade"
    }
  }, [_vm._v("Wade")]), _vm._v(" "), _c('b-checkbox', {
    attrs: {
      "label": "Kyle",
      "disabled": ""
    }
  }, [_vm._v("Kyle")])], 1), _vm._v("\n        " + _vm._s(_vm.checkboxGroup) + "\n\n        "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Radio Group")]), _vm._v(" "), _c('b-radio-group', {
    model: {
      value: (_vm.radioGroup),
      callback: function($$v) {
        _vm.radioGroup = $$v
      },
      expression: "radioGroup"
    }
  }, [_c('b-radio', {
    attrs: {
      "label": "Kobe"
    }
  }, [_vm._v("Kobe")]), _vm._v(" "), _c('b-radio', {
    attrs: {
      "label": "James"
    }
  }, [_vm._v("James")]), _vm._v(" "), _c('b-radio', {
    attrs: {
      "label": "Wade"
    }
  }, [_vm._v("Wade")]), _vm._v(" "), _c('b-radio', {
    attrs: {
      "label": "Kyle",
      "disabled": ""
    }
  }, [_vm._v("Kyle")])], 1), _vm._v("\n        " + _vm._s(_vm.radioGroup) + "\n\n        "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Radio Group — Button")]), _vm._v(" "), _c('b-radio-group', {
    model: {
      value: (_vm.radioGroupButton),
      callback: function($$v) {
        _vm.radioGroupButton = $$v
      },
      expression: "radioGroupButton"
    }
  }, [_c('b-radio-button', {
    attrs: {
      "type": "is-danger",
      "label": "Nop"
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "clear"
    }
  }), _vm._v("Nop")], 1), _vm._v(" "), _c('b-radio-button', {
    attrs: {
      "type": "is-success",
      "label": "Yep"
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "done"
    }
  }), _vm._v("Yep")], 1), _vm._v(" "), _c('b-radio-button', {
    attrs: {
      "label": "Default"
    }
  }, [_vm._v("Default")]), _vm._v(" "), _c('b-radio-button', {
    attrs: {
      "label": "Disabled",
      "disabled": ""
    }
  }, [_vm._v("Disabled")])], 1), _vm._v("\n        " + _vm._s(_vm.radioGroupButton) + "\n\n        "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Pagination")]), _vm._v(" "), _c('b-pagination', {
    attrs: {
      "total": 200,
      "current": _vm.pagination
    },
    on: {
      "change": _vm.pageChanged
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('b-pagination', {
    attrs: {
      "total": 200,
      "current": _vm.pagination,
      "position": "is-centered"
    },
    on: {
      "change": _vm.pageChanged
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('b-pagination', {
    attrs: {
      "total": 200,
      "current": _vm.pagination,
      "position": "is-right"
    },
    on: {
      "change": _vm.pageChanged
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('b-pagination', {
    attrs: {
      "total": 200,
      "current": _vm.pagination,
      "size": "is-small"
    },
    on: {
      "change": _vm.pageChanged
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('b-pagination', {
    attrs: {
      "total": 200,
      "current": _vm.pagination,
      "size": "is-medium"
    },
    on: {
      "change": _vm.pageChanged
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('b-pagination', {
    attrs: {
      "total": 200,
      "current": _vm.pagination,
      "size": "is-large"
    },
    on: {
      "change": _vm.pageChanged
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('b-pagination', {
    attrs: {
      "total": 200,
      "current": _vm.pagination,
      "simple": ""
    },
    on: {
      "change": _vm.pageChanged
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Tooltip")]), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Tooltip left",
      "dashed": ""
    }
  }, [_vm._v("Dashed tooltip")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Tooltip left",
      "position": "is-left"
    }
  }, [_c('button', {
    staticClass: "button is-dark"
  }, [_vm._v("Left")])]), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Tooltip top"
    }
  }, [_c('button', {
    staticClass: "button is-dark"
  }, [_vm._v("Top (default)")])]), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Tooltip bottom",
      "position": "is-bottom"
    }
  }, [_c('button', {
    staticClass: "button is-dark"
  }, [_vm._v("Bottom")])]), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Tooltip right",
      "position": "is-right"
    }
  }, [_c('button', {
    staticClass: "button is-dark"
  }, [_vm._v("Right")])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Tooltip small multilined",
      "multilined": "",
      "multiline-size": "is-small"
    }
  }, [_c('button', {
    staticClass: "button is-dark"
  }, [_vm._v("Small Multiline")])]), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Tooltip multilined, probably because it's too long",
      "multilined": ""
    }
  }, [_c('button', {
    staticClass: "button is-dark"
  }, [_vm._v("Medium Multiline (default)")])]), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Tooltip large multilined, because it's really long to be on a medium size. Did I tell you it's really long? Not sure.",
      "position": "is-bottom",
      "multilined": "",
      "multiline-size": "is-large"
    }
  }, [_c('button', {
    staticClass: "button is-dark"
  }, [_vm._v("Large Bottom Multiline")])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Maybe you like a little animation",
      "position": "is-right",
      "animated": ""
    }
  }, [_c('button', {
    staticClass: "button"
  }, [_vm._v("Animated")])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Primary is the default color"
    }
  }, [_c('button', {
    staticClass: "button"
  }, [_vm._v("Default")])]), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "You prefer dark?",
      "type": "is-dark"
    }
  }, [_c('button', {
    staticClass: "button"
  }, [_vm._v("Dark")])]), _vm._v(" "), _c('b-tooltip', {
    attrs: {
      "label": "Or light?",
      "type": "is-light"
    }
  }, [_c('button', {
    staticClass: "button"
  }, [_vm._v("Light")])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "appear": "",
      "appear-active-class": "fadeIn",
      "enter-active-class": "fadeIn",
      "leave-active-class": "fadeOut"
    }
  }, [(_vm.isActive) ? _c('div', {
    staticClass: "dialog modal is-active"
  }, [_c('div', {
    staticClass: "modal-background",
    on: {
      "click": _vm.cancel
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "appear": "",
      "appear-active-class": "zoomIn",
      "enter-active-class": "zoomIn"
    }
  }, [(_vm.isActive) ? _c('div', {
    staticClass: "modal-card"
  }, [(_vm.title) ? _c('header', {
    staticClass: "modal-card-head"
  }, [_c('p', {
    staticClass: "modal-card-title"
  }, [_vm._v(_vm._s(_vm.title))])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "modal-card-body",
    class: {
      'is-titleless': !_vm.title
    }
  }, [(_vm.icon && _vm.showIcon) ? _c('b-icon', {
    attrs: {
      "icon": _vm.icon,
      "color": _vm.type,
      "both": "",
      "size": "is-large"
    }
  }) : _vm._e(), _vm._v(" "), _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })], 1), _vm._v(" "), _c('footer', {
    staticClass: "modal-card-foot"
  }, [(_vm.canCancel) ? _c('a', {
    staticClass: "button is-light",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), _vm._v(" "), _c('a', {
    staticClass: "button",
    class: _vm.type,
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])]) : _vm._e()])], 1) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "b-table"
  }, [_c('table', {
    staticClass: "table",
    class: {
      'is-bordered': _vm.bordered, 'is-striped': _vm.striped, 'is-narrow': _vm.narrow
    }
  }, [_vm._t("default"), _vm._v(" "), _c('thead', [_c('tr', [(_vm.checkable) ? _c('th', {
    staticClass: "checkbox-cell"
  }, [_c('b-checkbox', {
    attrs: {
      "value": _vm.isAllChecked
    },
    on: {
      "change": function($event) {
        _vm.checkAll($event)
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.columns), function(column) {
    return _c('th', {
      class: {
        'is-current-sort': column.isCurrentSort, 'is-sortable': column.isSortable
      },
      style: ({
        width: column.width + 'px'
      }),
      on: {
        "click": function($event) {
          _vm.sort(column)
        }
      }
    }, [_c('div', {
      staticClass: "th-wrap",
      class: {
        'is-numeric': column.isNumeric
      }
    }, [_vm._v("\n                        " + _vm._s(column.label) + "\n                        "), _c('b-icon', {
      class: {
        'is-reverse': column.isReverse, 'is-visible': column.isCurrentSort
      },
      attrs: {
        "icon": "arrow_upward",
        "both": "",
        "size": "is-small"
      }
    })], 1)])
  })], 2)]), _vm._v(" "), _c('tbody', {
    style: ({
      height: _vm.height + 'px'
    })
  }, _vm._l((_vm.visibleData), function(item, index) {
    return _c('tr', {
      class: {
        'is-selected': item === _vm.selectedItem
      },
      on: {
        "click": function($event) {
          _vm.selectItem(item)
        },
        "dblclick": function($event) {
          _vm.$emit('dblclick', item)
        }
      }
    }, [(_vm.checkable) ? _c('td', {
      staticClass: "checkbox-cell"
    }, [_c('b-checkbox', {
      attrs: {
        "value": _vm.isItemChecked(item)
      },
      on: {
        "change": function($event) {
          _vm.checkItem(item, $event)
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm._l((_vm.columns), function(column) {
      return _c('td', {
        class: {
          'has-text-right': column.isNumeric
        },
        style: ({
          width: column.width + 'px'
        })
      }, [_vm._l((item), function(cell, key) {
        return (key === column.field) ? [_vm._v("\n                        " + _vm._s(cell) + "\n                    ")] : _vm._e()
      })], 2)
    })], 2)
  }))], 2), _vm._v(" "), _c('div', {
    staticClass: "level"
  }, [_c('div', {
    staticClass: "level-left"
  }, [_c('div', {
    staticClass: "level-item"
  }, [(_vm.checkable && this.checkedItems.length > 0) ? _c('p', [_vm._v("(" + _vm._s(this.checkedItems.length) + ")")]) : _vm._e()])]), _vm._v(" "), (_vm.paginated) ? _c('div', {
    staticClass: "level-right"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_c('b-pagination', {
    attrs: {
      "total": _vm.newData.length,
      "per-page": _vm.perPage,
      "simple": _vm.simplePagination,
      "current": _vm.currentPage
    },
    on: {
      "change": _vm.pageChanged
    }
  })], 1)]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "checkbox",
    class: {
      'is-disabled': _vm.disabled
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newValue),
      expression: "newValue"
    }],
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "checked": Array.isArray(_vm.newValue) ? _vm._i(_vm.newValue, null) > -1 : (_vm.newValue)
    },
    on: {
      "change": function($event) {
        _vm.$emit('change', _vm.newValue, $event)
      },
      "__c": function($event) {
        var $$a = _vm.newValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.newValue = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.newValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.newValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notices"
  }, [_c('nav', {
    staticClass: "nav has-shadow"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "nav-left"
  }, [_c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "snackbar"
    }
  }, [_vm._v("Snackbar")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "toast"
    }
  }, [_vm._v("Toast")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "notification"
    }
  }, [_vm._v("Notification")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "message"
    }
  }, [_vm._v("Message")])], 1)])])])
},staticRenderFns: []}

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "nav"
  }, [_c('div', {
    staticClass: "nav-left"
  }, [_c('router-link', {
    staticClass: "nav-item title is-4 is-brand",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_c('strong', [_vm._v("Buefy")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "nav-center"
  }, [_c('a', {
    staticClass: "nav-item",
    attrs: {
      "href": "https://github.com/rafaelpimpa/buefy",
      "target": "_blank"
    }
  }, [_c('b-icon', {
    attrs: {
      "type": "fa",
      "icon": "github"
    }
  })], 1), _vm._v(" "), _c('a', {
    staticClass: "nav-item",
    attrs: {
      "href": "https://twitter.com/rafaelpimpa",
      "target": "_blank"
    }
  }, [_c('b-icon', {
    attrs: {
      "type": "fa",
      "icon": "twitter"
    }
  })], 1)]), _vm._v(" "), _c('span', {
    staticClass: "nav-toggle",
    class: {
      'is-active': _vm.isMenuActive
    },
    on: {
      "click": function($event) {
        _vm.isMenuActive = !_vm.isMenuActive
      }
    }
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')]), _vm._v(" "), _c('div', {
    staticClass: "nav-right nav-menu",
    class: {
      'is-active': _vm.isMenuActive
    }
  }, [_c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/documentation"
    }
  }, [_vm._v("Documentation")]), _vm._v(" "), _c('div', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "button is-twitter is-outlined",
    on: {
      "click": _vm.tweet
    }
  }, [_c('b-icon', {
    staticClass: "mr-4",
    attrs: {
      "type": "fa",
      "icon": "twitter"
    }
  }), _vm._v(" Tweet\n                    ")], 1)])], 1)])]), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('footer', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('p', [_vm._v("Made with "), _c('b-icon', {
    attrs: {
      "icon": "favorite",
      "color": "is-danger"
    }
  }), _vm._v(" by "), _c('a', {
    attrs: {
      "href": "https://twitter.com/rafaelpimpa",
      "target": "_blank"
    }
  }, [_vm._v("Rafael Beraldo")]), _vm._v(".")], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "field has-addons"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button",
    attrs: {
      "href": "https://github.com/rafaelpimpa/buefy",
      "target": "_blank"
    }
  }, [_c('b-icon', {
    staticClass: "mr-4",
    attrs: {
      "type": "fa",
      "icon": "github"
    }
  }), _vm._v(" GitHub\n                        ")], 1)]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button is-twitter",
    attrs: {
      "href": "https://twitter.com/rafaelpimpa",
      "target": "_blank"
    }
  }, [_c('b-icon', {
    staticClass: "mr-4",
    attrs: {
      "type": "fa",
      "icon": "twitter"
    }
  }), _vm._v(" Twitter\n                        ")], 1)])])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "mb-0"
  }, [_c('small', [_vm._v("The source code is licensed "), _c('a', {
    attrs: {
      "href": "http://opensource.org/licenses/mit-license.php",
      "target": "_blank"
    }
  }, [_vm._v("MIT")]), _vm._v(".")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('small', [_vm._v("The website content is licensed "), _c('a', {
    attrs: {
      "href": "http://creativecommons.org/licenses/by-nc-sa/4.0/",
      "target": "_blank"
    }
  }, [_vm._v("CC ANS 4.0")]), _vm._v(".")])])
}]}

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-unselectable",
    class: [_vm.size, _vm.color]
  }, [_c('i', {
    class: [_vm.type, _vm.type === 'fa' ? ("fa-" + _vm.newIcon) : null]
  }, [_vm._v(_vm._s(_vm.type === 'mdi' ? _vm.newIcon : null))])])
},staticRenderFns: []}

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "radio",
    class: {
      'is-disabled': _vm.disabled
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "checked": _vm.isChecked,
      "value": this.label
    },
    on: {
      "change": _vm.changed
    }
  }), _vm._v(" "), _c('span', [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "notification",
    class: _vm.type
  }, [(_vm.closable) ? _c('button', {
    staticClass: "delete",
    on: {
      "click": _vm.close
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon && _vm.showIcon) ? _c('b-icon', {
    attrs: {
      "icon": _vm.icon,
      "both": "",
      "size": "is-large"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "radio-group field",
    class: _vm.isRadioButtonGroup ? 'has-addons' : 'is-grouped'
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "mode": "out-in",
      "appear": "",
      "appear-active-class": _vm.transition.enter,
      "enter-active-class": _vm.transition.enter,
      "leave-active-class": _vm.transition.leave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "snackbar"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), (_vm.actionText) ? _c('div', {
    staticClass: "action",
    class: _vm.type,
    on: {
      "click": _vm.action
    }
  }, [_c('button', {
    staticClass: "button is-dark"
  }, [_vm._v(_vm._s(_vm.actionText))])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', {
    staticClass: "title is-spaced"
  }, [_vm._v("Quick Start")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "bash"
  }, [_vm._v("Not public yet.")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('p', {
    staticClass: "mb-16"
  }, [_c('b', [_vm._v("Note:")]), _vm._v(" Already includes Bulma — with this purple theme you're looking at — if you want to use your own theme / variables go to the "), _c('router-link', {
    attrs: {
      "to": "/documentation/installation/customization"
    }
  }, [_vm._v("customization section")]), _vm._v(".")], 1), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "javascript"
  }, [_vm._v(_vm._s(_vm.importing))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('p', {
    staticClass: "mb-16"
  }, [_c('b', [_vm._v("Note:")]), _vm._v(" By default Buefy uses "), _c('a', {
    attrs: {
      "href": "https://material.io/icons/",
      "target": "_blank"
    }
  }, [_vm._v("Material Icons")]), _vm._v(", if you want to swap to "), _c('a', {
    attrs: {
      "href": "http://fontawesome.io/",
      "target": "_blank"
    }
  }, [_vm._v("FontAwesome")]), _vm._v(", go to the "), _c('router-link', {
    attrs: {
      "to": "/documentation/installation/customization"
    }
  }, [_vm._v("customization section")]), _vm._v(".")], 1), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlight",
      rawName: "v-highlight"
    }]
  }, [_c('code', {
    staticClass: "html"
  }, [_vm._v(_vm._s(_vm.materialIcons || _vm.html))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "subtitle"
  }, [_c('span', {
    staticClass: "mr-8"
  }, [_vm._v("1")]), _vm._v(" Install via npm")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "subtitle"
  }, [_c('span', {
    staticClass: "mr-8"
  }, [_vm._v("2")]), _vm._v(" Import and use Buefy. You can also enable individual components")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "subtitle"
  }, [_c('span', {
    staticClass: "mr-8"
  }, [_vm._v("3")]), _vm._v(" Include Material Icons")])
}]}

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "installation"
  }, [_c('nav', {
    staticClass: "nav has-shadow"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "nav-left"
  }, [_c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "quick-start"
    }
  }, [_vm._v("Quick Start")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "customization"
    }
  }, [_vm._v("Customization")])], 1)])]), _vm._v(" "), _c('section', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('router-view')], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "checkbox-group field is-grouped"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(441);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'hash',
    linkActiveClass: 'is-active',
    // scrollBehavior(to, from, savedPosition) {
    //     console.log(to, from)
    //     return { y: 50 }
    //     // return desired position
    //     //{ y: 0 }
    // },
    routes: [
        {
            path: '/',
            component: __webpack_require__(394)
        },
        {
            path: '/documentation',
            component: __webpack_require__(395),
            children: [
                {
                    path: 'installation',
                    component: __webpack_require__(397),
                    children: [
                        {
                            path: 'quick-start',
                            component: __webpack_require__(398)
                        },
                        {
                            path: 'customization',
                            component: __webpack_require__(396)
                        },
                        {
                            path: '',
                            redirect: 'quick-start'
                        }
                    ]
                },
                {
                    path: 'notices',
                    component: __webpack_require__(400),
                    children: [
                        {
                            path: 'snackbar',
                            component: __webpack_require__(402)
                        },
                        {
                            path: 'toast',
                            component: __webpack_require__(403)
                        },
                        {
                            path: 'notification',
                            component: __webpack_require__(401)
                        },
                        {
                            path: 'message',
                            component: __webpack_require__(399)
                        },
                        {
                            path: '',
                            redirect: 'snackbar'
                        }
                    ]
                },
                {
                    path: '',
                    redirect: 'installation'
                }
            ]
        }
    ]
}));


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_checkbox__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_radio__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_table__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_message__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_notification__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pagination__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_switch__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tooltip__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dialog__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_snackbar__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_toast__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_config__ = __webpack_require__(93);
















var components = {
    Checkbox: __WEBPACK_IMPORTED_MODULE_0__components_checkbox__["a" /* Checkbox */],
    CheckboxGroup: __WEBPACK_IMPORTED_MODULE_0__components_checkbox__["b" /* CheckboxGroup */],
    Icon: __WEBPACK_IMPORTED_MODULE_3__components_icon__["a" /* default */],
    Message: __WEBPACK_IMPORTED_MODULE_4__components_message__["a" /* default */],
    Notification: __WEBPACK_IMPORTED_MODULE_5__components_notification__["a" /* default */],
    Pagination: __WEBPACK_IMPORTED_MODULE_6__components_pagination__["a" /* default */],
    Radio: __WEBPACK_IMPORTED_MODULE_1__components_radio__["a" /* Radio */],
    RadioButton: __WEBPACK_IMPORTED_MODULE_1__components_radio__["b" /* RadioButton */],
    RadioGroup: __WEBPACK_IMPORTED_MODULE_1__components_radio__["c" /* RadioGroup */],
    Switch: __WEBPACK_IMPORTED_MODULE_7__components_switch__["a" /* default */],
    Table: __WEBPACK_IMPORTED_MODULE_2__components_table__["a" /* Table */],
    TableColumn: __WEBPACK_IMPORTED_MODULE_2__components_table__["b" /* TableColumn */],
    Tooltip: __WEBPACK_IMPORTED_MODULE_8__components_tooltip__["a" /* default */]
};

components.install = function (Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __WEBPACK_IMPORTED_MODULE_12__utils_config__["a" /* default */].setDefaultContentElement(options.defaultContentElement);
    __WEBPACK_IMPORTED_MODULE_12__utils_config__["a" /* default */].setDefaultIconType(options.defaultIconType);

    for (var componentName in components) {
        var component = components[componentName];

        if (component && componentName !== 'install') {
            Vue.component(component.name, component);
        }
    }

    Vue.prototype.$snackbar = __WEBPACK_IMPORTED_MODULE_10__components_snackbar__["a" /* default */];
    Vue.prototype.$toast = __WEBPACK_IMPORTED_MODULE_11__components_toast__["a" /* default */];
    Vue.prototype.$dialog = __WEBPACK_IMPORTED_MODULE_9__components_dialog__["a" /* default */];
};

/* harmony default export */ __webpack_exports__["a"] = (components);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(122)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(432),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highlight_js__);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3__src__["a" /* default */])


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].directive('highlight', {
    deep: true,
    bind: function (el, binding) {
        // on first bind, highlight all targets
        const targets = el.querySelectorAll('code')
        targets.forEach((target) => {
            // if a value is directly assigned to the directive, use this
            // instead of the element content.
            if (binding.value) {
                target.innerHTML = binding.value
            }
            __WEBPACK_IMPORTED_MODULE_4_highlight_js___default.a.highlightBlock(target)
        })
    },
    componentUpdated: function (el, binding) {
        // after an update, re-fill the content and then highlight
        const targets = el.querySelectorAll('code')
        targets.forEach((target) => {
            if (binding.value) {
                target.innerHTML = binding.value
                __WEBPACK_IMPORTED_MODULE_4_highlight_js___default.a.highlightBlock(target)
            }
        })
    }
})

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
})


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    data: function data() {
        return {
            isMenuActive: false
        };
    },

    methods: {
        tweet: function tweet() {
            var width = 575;
            var height = 400;
            var left = (window.screen.width - width) / 2;
            var top = (window.screen.height - height) / 2;
            var url = 'https://twitter.com/share?url=' + window.location.href + '&Buefy: lightweight Bulma UI components for Vue.js&hashtags=buefy&via=rafaelpimpa';
            var opts = 'status=1,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

            window.open(url, '', opts);
        }
    }
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            checkbox: true,
            checkboxGroup: ['Kobe'],
            radioGroup: 'Wade',
            radioGroupButton: 'James',
            pagination: 1
        };
    },

    methods: {
        pageChanged: function pageChanged(value) {
            this.pagination = value;
        },
        snackbar: function snackbar() {
            this.$snackbar.open({
                message: 'Default Snackbar, the button is a green \'OK\' and it closes'
            });
        },
        infoSnackbar: function infoSnackbar() {
            this.$snackbar.open({
                message: 'Snackbar with blue action and positioned on top',
                type: 'is-info',
                actionText: 'Retry',
                position: 'top',
                onAction: function onAction() {
                    return window.alert('Action clicked!');
                }
            });
        },
        warningSnackbar: function warningSnackbar() {
            this.$snackbar.open({
                message: 'Snackbar with yellow action and positioned on bottom',
                type: 'is-warning',
                position: 'bottom'
            });
        },
        dangerSnackbar: function dangerSnackbar() {
            this.$snackbar.open({
                message: 'Snackbar with red action and positioned on top-left',
                type: 'is-danger',
                actionText: 'Undo',
                position: 'top-left'
            });
        },
        toast: function toast() {
            this.$toast.open({
                message: 'Something happened.'
            });
        },
        successToast: function successToast() {
            this.$toast.open({
                message: 'Something happened correctly!',
                type: 'is-success'
            });
        },
        dangerToast: function dangerToast() {
            this.$toast.open({
                message: 'Something\'s not good, also I\'m on bottom.',
                position: 'bottom',
                type: 'is-danger'
            });
        },
        alertDialog: function alertDialog() {
            this.$dialog.alert({
                message: 'Everything looks <strong>fine</strong>!'
            });
        },
        alertDialogWTitle: function alertDialogWTitle() {
            this.$dialog.alert({
                title: 'Title Alert',
                message: 'I have a title! And a custom button!',
                confirmText: 'Cool!'
            });
        },
        confirmDialog: function confirmDialog() {
            this.$dialog.confirm({
                message: 'Continue on this task?'
            });
        },
        confirmDialogCustom: function confirmDialogCustom() {
            this.$dialog.confirm({
                title: 'Privacy Politics',
                message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit, ac scelerisque diam velit in nisl. Nunc maximus ex non laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim, augue purus placerat justo, sit amet porttitor dui metus in nisl. Nulla non leo placerat, porta metus eu, laoreet risus. Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus, sit amet sodales quam dui nec odio. Nullam porta mollis est. Quisque aliquet malesuada fringilla. Pellentesque volutpat lacus at ante posuere, non pulvinar ante porta. Proin viverra eu massa nec porta. Aliquam rhoncus velit quis sem hendrerit, ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac, eleifend venenatis ligula. Praesent molestie mauris sed elit posuere, non malesuada libero gravida. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
                cancelText: 'Disagree',
                confirmText: 'Agree',
                type: 'is-success'
            });
        },
        confirmDialogCustomWCallback: function confirmDialogCustomWCallback() {
            var _this = this;

            this.$dialog.confirm({
                title: 'Deleting account',
                message: 'Are you sure you want to <strong>delete</strong> your account? This action cannot be undone.',
                confirmText: 'Delete Account',
                type: 'is-danger',
                showIcon: true,
                onConfirm: function onConfirm() {
                    _this.$toast.open({
                        message: 'Account deleted!'
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            importing: 'import Vue from \'vue\'\nimport Buefy from \'buefy\'\n\nVue.use(Buefy)\n\n// OR\n\nVue.component(Buefy.Checkbox.name, Buefy.Checkbox)\nVue.component(Buefy.Table.name, Table.Checkbox)\n...',
            fontAwesome: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">',
            sass: '// Import Bulma\'s core\n@import "~bulma/sass/utilities/_all";\n\n// Set your colors\n$primary: #8c67ef;\n$primary-invert: findColorInvert($primary);\n$twitter: #4099FF;\n$twitter-invert: findColorInvert($twitter);\n$facebook: #4267B2;\n$facebook-invert: findColorInvert($facebook);\n$google-plus: #DB4437;\n$google-plus-invert: findColorInvert($google-plus);\n\n// Setup $colors to use as bulma classes (e.g. \'is-twitter\')\n$colors: (\n    white: ($white, $black),\n    black: ($black, $white),\n    light: ($light, $light-invert),\n    dark: ($dark, $dark-invert),\n    primary: ($primary, $primary-invert),\n    info: ($info, $info-invert),\n    success: ($success, $success-invert),\n    warning: ($warning, $warning-invert),\n    danger: ($danger, $danger-invert),\n    twitter: ($twitter, $twitter-invert),\n    facebook: ($facebook, $facebook-invert),\n    google-plus: ($google-plus, $google-plus-invert)\n);\n\n// Links\n$link: $primary;\n$link-invert: $primary-invert;\n$link-focus-border: $primary;\n',
            sassFinal: '... // Your variables\n\n@import "~bulma";\n@import "~buefy";',
            globalOptions: 'Vue.use(Buefy, {\n    option1: value,\n    option2: value,\n    ...\n})'
        };
    },

    filters: {
        html: function html(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }
    }
});

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            importing: 'import Vue from \'vue\'\nimport Buefy from \'buefy\'\nimport \'buefy/lib/css/buefy.css\'\n\nVue.use(Buefy)\n\n// OR\n\nVue.component(Buefy.Checkbox.name, Buefy.Checkbox)\nVue.component(Buefy.Table.name, Table.Checkbox)\n...',
            materialIcons: '<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">'
        };
    },

    filters: {
        html: function html(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }
    }
});

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bCheckbox',
    props: {
        value: Boolean,
        disabled: Boolean,
        name: String,
        checked: Boolean,
        label: [String, Number, Boolean]
    },
    data: function data() {
        return {
            newValue: this.value
        };
    },

    watch: {
        value: function value(_value) {
            this.newValue = _value;
        },
        newValue: function newValue(value) {
            this.$emit('input', value);
            this.$parent.isCheckboxGroup && this.$parent.updateValue();
        }
    },
    mounted: function mounted() {
        if (this.checked) {
            this.newValue = this.checked;
        }
    }
});

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bCheckboxGroup',
    props: {
        value: Array
    },
    data: function data() {
        return {
            checkedList: [],
            isCheckboxGroup: true
        };
    },

    methods: {
        updateValue: function updateValue() {
            var _this = this;

            this.checkedList = [];
            this.$children.forEach(function (child) {
                child.newValue && _this.checkedList.push(child.label);
            });
            this.$emit('input', this.checkedList);
        },
        initChecked: function initChecked() {
            var _this2 = this;

            this.$children.forEach(function (child) {
                if (_this2.value && _this2.value.indexOf(child.label) >= 0) {
                    child.newValue = true;
                }
            });
        }
    },
    mounted: function mounted() {
        this.initChecked();
    }
});

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["default"] = ({
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */]),
    props: {
        title: String,
        message: String,
        showIcon: Boolean,
        type: {
            type: String,
            default: 'is-primary'
        },
        confirmText: {
            type: String,
            default: 'OK'
        },
        cancelText: {
            type: String,
            default: 'Cancel'
        },
        canCancel: {
            type: Boolean,
            default: true
        },
        onConfirm: Function,
        onCancel: Function
    },
    data: function data() {
        return {
            isActive: true
        };
    },

    computed: {
        icon: function icon() {
            switch (this.type) {
                case 'is-info':
                    return 'info';
                case 'is-success':
                    return 'check_circle';
                case 'is-warning':
                    return 'warning';
                case 'is-danger':
                    return 'error';
                default:
                    return null;
            }
        }
    },
    methods: {
        confirm: function confirm() {
            if (this.onConfirm) {
                this.onConfirm();
            }
            this.close();
        },
        cancel: function cancel() {
            if (!this.canCancel) return;

            if (this.onCancel) {
                this.onCancel();
            }
            this.close();
        },
        close: function close() {
            var _this = this;

            this.isActive = false;

            setTimeout(function () {
                _this.$destroy();
                _this.$el.remove();
            }, 150);
        }
    },
    beforeMount: function beforeMount() {
        document.body.appendChild(this.$el);
    }
});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bIcon',
    props: {
        type: {
            type: String,
            default: 'mdi'
        },
        color: String,
        icon: String,
        both: Boolean,
        size: String
    },
    computed: {
        newIcon: function newIcon() {
            if (this.both) {
                return this.type === 'mdi' ? this.icon : this.equivalentIconOf(this.icon);
            } else {
                return this.icon;
            }
        }
    },
    methods: {
        equivalentIconOf: function equivalentIconOf(value) {
            switch (value) {
                case 'info':
                    return 'info-circle';
                case 'check_circle':
                    return 'check-circle';
                case 'warning':
                    return 'exclamation-triangle';
                case 'error':
                    return 'exclamation-circle';
                case 'arrow_upward':
                    return 'arrow-up';
                case 'chevron_right':
                    return 'angle-right';
                case 'chevron_left':
                    return 'angle-left';
                case 'keyboard_arrow_down':
                    return 'angle-down';
                default:
                    return null;
            }
        }
    }
});

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bMessage',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */]),
    props: {
        title: String,
        closable: {
            type: Boolean,
            default: true
        },
        type: String,
        showIcon: Boolean
    },
    data: function data() {
        return {
            isActive: true
        };
    },

    computed: {
        icon: function icon() {
            switch (this.type) {
                case 'is-info':
                    return 'info';
                case 'is-success':
                    return 'check_circle';
                case 'is-warning':
                    return 'warning';
                case 'is-danger':
                    return 'error';
                default:
                    return null;
            }
        }
    },
    methods: {
        close: function close() {
            this.isActive = false;
        }
    }
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bNotification',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */]),
    props: {
        closable: {
            type: Boolean,
            default: true
        },
        type: String,
        showIcon: Boolean
    },
    data: function data() {
        return {
            isActive: true
        };
    },

    computed: {
        icon: function icon() {
            switch (this.type) {
                case 'is-info':
                    return 'info';
                case 'is-success':
                    return 'check_circle';
                case 'is-warning':
                    return 'warning';
                case 'is-danger':
                    return 'error';
                default:
                    return null;
            }
        }
    },
    methods: {
        close: function close() {
            this.isActive = false;
        }
    }
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bPagination',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */]),
    props: {
        total: [Number, String],
        perPage: {
            type: [Number, String],
            default: 20
        },
        current: {
            type: [Number, String],
            default: 1
        },
        size: String,
        simple: Boolean,
        position: {
            type: String,
            default: ''
        }
    },
    computed: {
        pageCount: function pageCount() {
            return Math.ceil(this.total / this.perPage);
        },
        firstItem: function firstItem() {
            var firstItem = this.current * this.perPage - this.perPage + 1;
            return firstItem >= 0 ? firstItem : 0;
        },
        hasPrev: function hasPrev() {
            return this.current > 1;
        },
        hasFirst: function hasFirst() {
            return this.current > 3;
        },
        hasFirstEllipsis: function hasFirstEllipsis() {
            return this.current >= 5;
        },
        hasLast: function hasLast() {
            return this.current < this.pageCount - 2;
        },
        hasLastEllipsis: function hasLastEllipsis() {
            return this.current < this.pageCount - 2 && this.current <= this.pageCount - 4;
        },
        hasNext: function hasNext() {
            return this.current < this.pageCount;
        },
        pagesInRange: function pagesInRange() {
            var _this = this;

            if (this.simple) return;

            var left = Math.max(1, this.current - 1);
            var right = Math.min(this.current + 1, this.pageCount);

            var pages = [];

            var _loop = function _loop(i) {
                pages.push({
                    number: i,
                    isCurrent: _this.current === i,
                    click: function click() {
                        return _this.$emit('change', i);
                    }
                });
            };

            for (var i = left; i <= right; i++) {
                _loop(i);
            }
            return pages;
        }
    },
    watch: {
        pageCount: function pageCount(value) {
            if (this.current > value) {
                this.last();
            }
        }
    },
    methods: {
        prev: function prev() {
            this.$emit('change', this.current - 1);
        },
        first: function first() {
            this.$emit('change', 1);
        },
        last: function last() {
            this.$emit('change', this.pageCount);
        },
        next: function next() {
            this.$emit('change', this.current + 1);
        }
    }
});

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bRadio',
    props: {
        disabled: Boolean,
        name: String,
        label: [String, Number, Boolean]
    },
    data: function data() {
        return {
            isChecked: false
        };
    },

    methods: {
        changed: function changed() {
            this.$parent.updateValue(this.label);
        }
    }
});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bRadioButton',
    props: {
        type: {
            type: String,
            default: 'is-primary'
        },
        disabled: Boolean,
        name: String,
        label: [String, Number, Boolean]
    },
    data: function data() {
        return {
            isChecked: false,
            isRadioButton: true
        };
    },

    methods: {
        changed: function changed() {
            this.$parent.updateValue(this.label);
        }
    }
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bRadioGroup',
    props: {
        value: [String, Number, Boolean]
    },
    data: function data() {
        return {
            isRadioButtonGroup: false
        };
    },

    watch: {
        value: function value() {
            this.findChecked();
        }
    },
    methods: {
        updateValue: function updateValue(value) {
            this.$emit('input', value);
        },
        findChecked: function findChecked() {
            var _this = this;

            this.$children.forEach(function (child) {
                if (child.isRadioButton) {
                    _this.isRadioButtonGroup = true;
                }

                if (_this.value === child.label) {
                    child.isChecked = true;
                } else {
                    child.isChecked = false;
                }
            });
        }
    },
    mounted: function mounted() {
        this.findChecked();
    }
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_NoticeMixin_js__ = __webpack_require__(20);




/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_NoticeMixin_js__["a" /* default */]],
    props: {
        actionText: {
            type: String,
            default: 'OK'
        },
        onAction: {
            type: Function,
            default: function _default() {
                this.close();
            }
        }
    },
    data: function data() {
        return {
            parent: null
        };
    },

    methods: {
        hasChild: function hasChild(parent) {
            return parent !== null && parent.childElementCount > 0;
        },
        insertEl: function insertEl() {
            this.parent.className = '';
            this.parent.classList.add('notices', this.position);
            this.parent.appendChild(this.$el);
        },
        action: function action() {
            this.onAction();
        }
    },
    beforeMount: function beforeMount() {
        var parent = void 0;
        parent = document.querySelector('.notices');

        var container = document.querySelector(this.container) !== null ? document.querySelector(this.container) : document.body;
        if (!parent) {
            parent = document.createElement('div');
        }
        this.parent = parent;
        if (this.container) {
            parent.style.position = 'absolute';
        }
        container.appendChild(parent);
    }
});

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bSwitch',
    props: {
        value: Boolean,
        disabled: Boolean,
        isOnOff: Boolean,
        name: String,
        checked: Boolean
    },
    data: function data() {
        return {
            newValue: this.value
        };
    },

    watch: {
        newValue: function newValue(value) {
            this.$emit('input', value);
        }
    },
    mounted: function mounted() {
        if (this.checked) {
            this.newValue = this.checked;
        }
    }
});

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_sortBy__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_sortBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_sortBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox__ = __webpack_require__(34);


var _components;






/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bTable',
    components: (_components = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_2__pagination__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__pagination__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_4__checkbox__["a" /* Checkbox */].name, __WEBPACK_IMPORTED_MODULE_4__checkbox__["a" /* Checkbox */]), _components),
    props: {
        data: Array,
        height: [Number, String],
        bordered: Boolean,
        striped: Boolean,
        narrow: Boolean,
        selectable: Boolean,
        checkable: Boolean,
        defaultSort: String,
        paginated: Boolean,
        perPage: [Number, String],
        simplePagination: Boolean
    },
    data: function data() {
        return {
            columns: [],
            newData: this.data,
            selectedItem: {},
            checkedItems: [],
            currentPage: 1
        };
    },

    watch: {
        data: function data(value) {
            this.newData = value;
            this.resetCurrentSortColumn();
        }
    },
    computed: {
        visibleData: function visibleData() {
            if (!this.paginated) return this.newData;

            var currentPage = this.currentPage || 1;
            var perPage = this.perPage || 20;

            if (this.newData.length <= perPage) {
                return this.newData;
            } else {
                var start = (currentPage - 1) * perPage;
                var end = parseInt(start, 10) + parseInt(perPage, 10);
                return this.newData.slice(start, end);
            }
        },
        isAllChecked: function isAllChecked() {
            var _this = this;

            var isAllChecked = this.visibleData.some(function (currentVisibleItem) {
                return _this.checkedItems.indexOf(currentVisibleItem) < 0;
            });
            return !isAllChecked;
        }
    },
    methods: {
        sort: function sort(column) {
            if (!column.isSortable) return;

            if (!column.isCurrentSort) {
                this.resetCurrentSortColumn();
                column.isReverse = false;
                this.newData = __WEBPACK_IMPORTED_MODULE_1_lodash_sortBy___default()(this.newData, column.field);
            } else {
                column.isReverse = !column.isReverse;
                this.newData.reverse();
            }
            column.isCurrentSort = true;
        },
        resetCurrentSortColumn: function resetCurrentSortColumn() {
            this.columns.forEach(function (column) {
                column.isCurrentSort = false;
                column.isReverse = false;
            });
        },
        checkAll: function checkAll(isChecked) {
            var _this2 = this;

            this.visibleData.forEach(function (currentItem) {
                _this2.removeCheckedItem(currentItem);
                if (isChecked) {
                    _this2.checkedItems.push(currentItem);
                }
            });

            this.$emit('check', this.checkedItems);
            this.$emit('check-all');
        },
        checkItem: function checkItem(item, isChecked) {
            if (isChecked) {
                this.checkedItems.push(item);
            } else {
                this.removeCheckedItem(item);
            }

            this.$emit('check', this.checkedItems, item);
        },
        removeCheckedItem: function removeCheckedItem(item) {
            var index = this.checkedItems.indexOf(item);
            if (index >= 0) {
                this.checkedItems.splice(index, 1);
            }
        },
        isItemChecked: function isItemChecked(item) {
            return this.checkedItems.indexOf(item) >= 0;
        },
        selectItem: function selectItem(item, index) {
            if (!this.selectable || this.selectedItem.item === item) return;

            this.$emit('select', item, this.selectedItem.item);

            this.selectedItem = item;
        },
        pageChanged: function pageChanged(page) {
            this.currentPage = page > 0 ? page : 1;
        },
        initSort: function initSort() {
            var _this3 = this;

            this.columns.forEach(function (column) {
                if (column.field === _this3.defaultSort) {
                    _this3.sort(column);
                }
            });
        }
    },
    mounted: function mounted() {
        this.initSort();
    }
});

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_NoticeMixin_js__ = __webpack_require__(20);




/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_NoticeMixin_js__["a" /* default */]],
    props: {
        position: {
            type: String,
            default: 'top'
        },
        duration: {
            type: Number,
            default: 4000
        }
    },
    data: function data() {
        return {
            parent: null
        };
    },

    methods: {
        hasChild: function hasChild(parent) {
            return parent !== null && parent.childElementCount > 0;
        },
        insertEl: function insertEl() {
            this.parent.className = '';
            this.parent.classList.add('notices', 'is-toast', this.position);
            this.parent.appendChild(this.$el);
        }
    },
    beforeMount: function beforeMount() {
        var parent = void 0;
        parent = document.querySelector('.notices');

        var container = document.querySelector(this.container) !== null ? document.querySelector(this.container) : document.body;
        if (!parent) {
            parent = document.createElement('div');
        }
        this.parent = parent;
        if (this.container) {
            parent.style.position = 'absolute';
        }
        container.appendChild(parent);
    }
});

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bTooltip',
    props: {
        type: {
            type: String,
            default: 'is-primary'
        },
        label: String,
        position: {
            type: String,
            default: 'is-top'
        },
        always: Boolean,
        animated: Boolean,
        rounded: {
            type: Boolean,
            default: true
        },
        dashed: Boolean,
        multilined: Boolean,
        multilineSize: {
            type: String,
            default: 'is-medium'
        }
    }
});

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialog__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Dialog__);




function open(propsData) {
    var DialogComponent = __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].extend(__WEBPACK_IMPORTED_MODULE_2__Dialog___default.a);
    return new DialogComponent({
        el: document.createElement('div'),
        propsData: propsData
    });
}

/* harmony default export */ __webpack_exports__["a"] = ({
    alert: function alert(params) {
        var defaultParam = {
            canCancel: false
        };
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, params);
        return open(propsData);
    },
    confirm: function confirm(params) {
        var defaultParam = {};
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, params);
        return open(propsData);
    }
});

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Message__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Message__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Message___default.a);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Notification__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Notification___default.a);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RadioGroup__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RadioGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__RadioGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RadioButton__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RadioButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__RadioButton__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Radio___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__RadioGroup___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__RadioButton___default.a; });






/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Snackbar__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Snackbar__);




function _open(propsData) {
    var SnackbarComponent = __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].extend(__WEBPACK_IMPORTED_MODULE_2__Snackbar___default.a);
    return new SnackbarComponent({
        el: document.createElement('div'),
        propsData: propsData
    });
}

/* harmony default export */ __webpack_exports__["a"] = ({
    open: function open(params) {
        var defaultParam = {
            type: 'is-success',
            duration: 4000
        };
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, params);
        return _open(propsData);
    }
});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Switch__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Switch__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Switch___default.a);

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'bTableColumn',

    props: {
        label: String,
        width: [Number, String],
        field: String,
        sortable: Boolean,
        numeric: Boolean
    },

    data: function data() {
        return {
            column: {}
        };
    },
    mounted: function mounted() {
        this.$parent.columns.push(this.column);
    },
    created: function created() {
        this.column = {
            label: this.label,
            width: this.width,
            field: this.field,
            isSortable: this.sortable,
            isNumeric: this.numeric
        };
    },
    render: function render(h) {
        return;
    }
});

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableColumn_js__ = __webpack_require__(89);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Table___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__TableColumn_js__["a"]; });





/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Toast__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Toast__);




function _open(propsData) {
    var ToastComponent = __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].extend(__WEBPACK_IMPORTED_MODULE_2__Toast___default.a);
    return new ToastComponent({
        el: document.createElement('div'),
        propsData: propsData
    });
}

/* harmony default export */ __webpack_exports__["a"] = ({
    open: function open(params) {
        var defaultParam = {
            type: 'is-dark',
            duration: 4000
        };
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, params);
        return _open(propsData);
    }
});

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tooltip__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Tooltip__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Tooltip___default.a);

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NoticeMixin__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_icon__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
    setDefaultContentElement: function setDefaultContentElement(container) {
        __WEBPACK_IMPORTED_MODULE_0__NoticeMixin__["a" /* default */].props.container.default = container;
    },
    setDefaultIconType: function setDefaultIconType(iconPack) {
        __WEBPACK_IMPORTED_MODULE_1__components_icon__["a" /* default */].props.type.default = iconPack || 'mdi';
    }
});

/***/ })

},[63]);
//# sourceMappingURL=app.c4aa7c45dc693d595b77.js.map