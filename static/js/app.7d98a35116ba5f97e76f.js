webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Icon__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Icon___default.a);

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        type: String,
        message: String,
        duration: {
            type: Number,
            default: 6500
        },
        position: {
            type: String,
            default: 'top-right'
        },
        container: String
    },
    data: function data() {
        return {
            isShow: false,
            positionsEnter: {
                'top-right': 'Right',
                'top': 'Down',
                'top-left': 'Left',
                'bottom-right': 'Right',
                'bottom': 'Up',
                'bottom-left': 'Left'
            },
            positionsLeave: {
                'top-right': 'Right',
                'top': 'Up',
                'top-left': 'Left',
                'bottom-right': 'Right',
                'bottom': 'Down',
                'bottom-left': 'Left'
            }
        };
    },

    computed: {
        transitionEnter: function transitionEnter() {
            if (this.transition) return this.transition;
            return 'fadeIn' + this.positionsEnter[this.position];
        },
        transitionLeave: function transitionLeave() {
            if (this.transition) return this.transition;
            return 'fadeOut' + this.positionsLeave[this.position];
        }
    },
    methods: {
        handleClose: function handleClose() {
            var _this = this;

            setTimeout(function () {
                _this.close();
            }, 100);
        },
        close: function close() {
            var _this2 = this;

            clearTimeout(this.timer);
            this.isShow = false;
            setTimeout(function () {
                _this2.$destroy();
                _this2.$el.remove();
            }, 1000);
        }
    },
    mounted: function mounted() {
        var _this3 = this;

        this.isShow = true;
        this.timer = setTimeout(function () {
            return _this3.close();
        }, this.duration);
    }
});

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CheckboxGroup__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CheckboxGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CheckboxGroup__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Checkbox___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__CheckboxGroup___default.a; });





/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(244);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'hash',
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: __webpack_require__(215)
        },
        {
            path: '/table',
            name: 'Table',
            component: __webpack_require__(216)
        }
    ]
}));


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_switch__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_notification__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_checkbox__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_radio__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_table__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notify__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_toast__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_config__ = __webpack_require__(84);













var components = [__WEBPACK_IMPORTED_MODULE_0__components_icon__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__components_switch__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__components_notification__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__components_checkbox__["a" /* Checkbox */], __WEBPACK_IMPORTED_MODULE_3__components_checkbox__["b" /* CheckboxGroup */], __WEBPACK_IMPORTED_MODULE_4__components_radio__["a" /* Radio */], __WEBPACK_IMPORTED_MODULE_4__components_radio__["b" /* RadioGroup */], __WEBPACK_IMPORTED_MODULE_4__components_radio__["c" /* RadioButton */], __WEBPACK_IMPORTED_MODULE_5__components_table__["a" /* Table */], __WEBPACK_IMPORTED_MODULE_5__components_table__["b" /* TableColumn */]];

var install = function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (install.installed) return;

    __WEBPACK_IMPORTED_MODULE_8__utils_config__["a" /* default */].setDefaultContentElement(options.defaultContentElement);
    __WEBPACK_IMPORTED_MODULE_8__utils_config__["a" /* default */].setDefaultIconType(options.defaultIconType);

    components.map(function (component) {
        Vue.component(component.name, component);
    });

    Vue.prototype.$notify = __WEBPACK_IMPORTED_MODULE_6__components_notify__["a" /* default */];
    Vue.prototype.$toast = __WEBPACK_IMPORTED_MODULE_7__components_toast__["a" /* default */];
};

/* harmony default export */ __webpack_exports__["a"] = ({
    version: '0.0.1',
    install: install
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(113)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(236),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"marca": "Hartmann-Emmerich",
		"veiculo": "CareOne Acid Reducer",
		"ano_inicial": "2013-11-09",
		"ano_final": "2016-07-21"
	},
	{
		"id": 2,
		"marca": "Mohr-Bogan",
		"veiculo": "Lysol",
		"ano_inicial": "2014-11-15",
		"ano_final": "2016-12-23"
	},
	{
		"id": 3,
		"marca": "Heaney, Murphy and Wunsch",
		"veiculo": "VALACYCLOVIR HYDROCHLORIDE",
		"ano_inicial": "2013-05-15",
		"ano_final": "2016-10-30"
	},
	{
		"id": 4,
		"marca": "Macejkovic-Morar",
		"veiculo": "CHILDRENS DIMETAPP COLD AND ALLERGY",
		"ano_inicial": "2012-06-29",
		"ano_final": "2016-07-26"
	},
	{
		"id": 5,
		"marca": "Upton and Sons",
		"veiculo": "Aplicare Antiseptic Chlorhexidine Gluconate",
		"ano_inicial": "2013-07-05",
		"ano_final": "2016-07-19"
	},
	{
		"id": 6,
		"marca": "Stroman LLC",
		"veiculo": "FUROSEMIDE",
		"ano_inicial": "2015-01-29",
		"ano_final": "2016-06-30"
	},
	{
		"id": 7,
		"marca": "Altenwerth Group",
		"veiculo": "Sulfacetamide Sodium and Prednisolone Sodium Phosphate",
		"ano_inicial": "2013-07-27",
		"ano_final": "2017-02-19"
	},
	{
		"id": 8,
		"marca": "Dicki Group",
		"veiculo": "Carisoprodol",
		"ano_inicial": "2012-06-05",
		"ano_final": "2016-09-16"
	},
	{
		"id": 9,
		"marca": "Nader-Rice",
		"veiculo": "LEADER HYDROCORTISONE",
		"ano_inicial": "2013-04-18",
		"ano_final": "2016-04-20"
	},
	{
		"id": 10,
		"marca": "Tromp, Pacocha and Lesch",
		"veiculo": "Panic Ease",
		"ano_inicial": "2015-01-31",
		"ano_final": "2016-03-23"
	},
	{
		"id": 11,
		"marca": "Towne-Towne",
		"veiculo": "Nite-TimeCOLD/FLU CHERRY",
		"ano_inicial": "2013-03-26",
		"ano_final": "2016-11-17"
	},
	{
		"id": 12,
		"marca": "Corwin-Monahan",
		"veiculo": "Listerine Whitening Anticavity Vibrant - Clean Mint",
		"ano_inicial": "2014-01-08",
		"ano_final": "2016-12-01"
	},
	{
		"id": 13,
		"marca": "Frami-Gaylord",
		"veiculo": "risperidone",
		"ano_inicial": "2013-01-30",
		"ano_final": "2016-08-09"
	},
	{
		"id": 14,
		"marca": "Turner-Parisian",
		"veiculo": "ALPRAZOLAM EXTENDED-RELEASE",
		"ano_inicial": "2013-02-21",
		"ano_final": "2017-02-07"
	},
	{
		"id": 15,
		"marca": "Balistreri-Cronin",
		"veiculo": "Microban",
		"ano_inicial": "2014-05-01",
		"ano_final": "2016-05-09"
	},
	{
		"id": 16,
		"marca": "Zieme-Mohr",
		"veiculo": "Allergy",
		"ano_inicial": "2014-12-13",
		"ano_final": "2016-05-12"
	},
	{
		"id": 17,
		"marca": "Gorczany Group",
		"veiculo": "Furosemide",
		"ano_inicial": "2015-02-18",
		"ano_final": "2016-12-24"
	},
	{
		"id": 18,
		"marca": "Green, Sauer and Feeney",
		"veiculo": "Lobelia Quercus",
		"ano_inicial": "2013-01-01",
		"ano_final": "2016-04-28"
	},
	{
		"id": 19,
		"marca": "Botsford Inc",
		"veiculo": "Ciprofloxacin",
		"ano_inicial": "2013-02-11",
		"ano_final": "2017-02-07"
	},
	{
		"id": 20,
		"marca": "Ratke, Hayes and Sporer",
		"veiculo": "Ciprofloxacin",
		"ano_inicial": "2014-05-14",
		"ano_final": "2016-08-02"
	},
	{
		"id": 21,
		"marca": "Purdy-Willms",
		"veiculo": "dg health cold and flu relief",
		"ano_inicial": "2014-03-30",
		"ano_final": "2016-11-02"
	},
	{
		"id": 22,
		"marca": "Kilback LLC",
		"veiculo": "OXYCODONE HYDROCHLORIDE",
		"ano_inicial": "2014-07-21",
		"ano_final": "2017-02-16"
	},
	{
		"id": 23,
		"marca": "Schiller LLC",
		"veiculo": "Epicoccum",
		"ano_inicial": "2015-01-30",
		"ano_final": "2016-11-14"
	},
	{
		"id": 24,
		"marca": "Gaylord-Friesen",
		"veiculo": "Long-Lasting Wicked Fresh - Spearmint Ice",
		"ano_inicial": "2013-06-10",
		"ano_final": "2016-05-05"
	},
	{
		"id": 25,
		"marca": "Wunsch-Windler",
		"veiculo": "St. Joseph Chewable Aspirin",
		"ano_inicial": "2014-01-27",
		"ano_final": "2016-08-06"
	},
	{
		"id": 26,
		"marca": "Gulgowski, Paucek and Leuschke",
		"veiculo": "Rivastigmine Tartrate",
		"ano_inicial": "2015-03-20",
		"ano_final": "2017-02-19"
	},
	{
		"id": 27,
		"marca": "Cummings-Cremin",
		"veiculo": "Bayer",
		"ano_inicial": "2012-11-17",
		"ano_final": "2017-02-14"
	},
	{
		"id": 28,
		"marca": "Murphy, Torphy and Nienow",
		"veiculo": "Up and Up Nicotine Polacrilex",
		"ano_inicial": "2014-06-18",
		"ano_final": "2017-01-13"
	},
	{
		"id": 29,
		"marca": "Kerluke Inc",
		"veiculo": "Hydroxyzine hydrochloride",
		"ano_inicial": "2015-02-16",
		"ano_final": "2017-02-08"
	},
	{
		"id": 30,
		"marca": "Daniel-Bauch",
		"veiculo": "Molds, Rusts and Smuts, Helminthosporium interseminatum",
		"ano_inicial": "2013-01-01",
		"ano_final": "2016-09-17"
	},
	{
		"id": 31,
		"marca": "Klein Group",
		"veiculo": "Pain Reliever",
		"ano_inicial": "2012-03-25",
		"ano_final": "2017-01-13"
	},
	{
		"id": 32,
		"marca": "Lindgren-Medhurst",
		"veiculo": "Glimepiride",
		"ano_inicial": "2012-09-20",
		"ano_final": "2016-08-08"
	},
	{
		"id": 33,
		"marca": "Flatley and Sons",
		"veiculo": "Venlafaxine Hydrochloride",
		"ano_inicial": "2015-02-22",
		"ano_final": "2016-11-03"
	},
	{
		"id": 34,
		"marca": "Huel, Simonis and Leffler",
		"veiculo": "Chloraseptic Warming Sore Throat",
		"ano_inicial": "2014-07-16",
		"ano_final": "2016-12-10"
	},
	{
		"id": 35,
		"marca": "Grant, Schuster and Nicolas",
		"veiculo": "Alcortin",
		"ano_inicial": "2013-11-25",
		"ano_final": "2016-11-07"
	},
	{
		"id": 36,
		"marca": "Rau, Moen and Heller",
		"veiculo": "JUNIPERUS ASHEI POLLEN",
		"ano_inicial": "2014-08-21",
		"ano_final": "2016-10-04"
	},
	{
		"id": 37,
		"marca": "Terry, Legros and Marquardt",
		"veiculo": "Nalfon",
		"ano_inicial": "2012-07-25",
		"ano_final": "2016-07-24"
	},
	{
		"id": 38,
		"marca": "Deckow, Kiehn and Walsh",
		"veiculo": "SABRIL",
		"ano_inicial": "2014-02-15",
		"ano_final": "2016-11-21"
	},
	{
		"id": 39,
		"marca": "Renner, Farrell and Rau",
		"veiculo": "Acyclovir",
		"ano_inicial": "2015-03-15",
		"ano_final": "2016-12-20"
	},
	{
		"id": 40,
		"marca": "Pagac-Emmerich",
		"veiculo": "Green Pepper",
		"ano_inicial": "2014-05-26",
		"ano_final": "2016-12-26"
	},
	{
		"id": 41,
		"marca": "Farrell, Bradtke and Walker",
		"veiculo": "TRICLOSAN",
		"ano_inicial": "2014-08-24",
		"ano_final": "2016-11-02"
	},
	{
		"id": 42,
		"marca": "Koelpin LLC",
		"veiculo": "Quetiapine Fumarate",
		"ano_inicial": "2013-12-03",
		"ano_final": "2016-12-02"
	},
	{
		"id": 43,
		"marca": "Kiehn, Hermann and Erdman",
		"veiculo": "Donnatal",
		"ano_inicial": "2013-06-08",
		"ano_final": "2016-12-04"
	},
	{
		"id": 44,
		"marca": "Wuckert-Spinka",
		"veiculo": "Mineral Creme",
		"ano_inicial": "2015-03-14",
		"ano_final": "2016-04-07"
	},
	{
		"id": 45,
		"marca": "Wehner, Casper and Welch",
		"veiculo": "Utah Juniper",
		"ano_inicial": "2014-09-14",
		"ano_final": "2017-01-21"
	},
	{
		"id": 46,
		"marca": "Bartoletti, Kunde and Lubowitz",
		"veiculo": "Benztropine Mesylate",
		"ano_inicial": "2012-05-13",
		"ano_final": "2016-12-28"
	},
	{
		"id": 47,
		"marca": "Vandervort-Nader",
		"veiculo": "Hydrogen Peroxide",
		"ano_inicial": "2014-08-24",
		"ano_final": "2017-01-06"
	},
	{
		"id": 48,
		"marca": "Bergstrom-Mosciski",
		"veiculo": "quetiapine fumarate",
		"ano_inicial": "2015-02-28",
		"ano_final": "2016-04-15"
	},
	{
		"id": 49,
		"marca": "Ryan Inc",
		"veiculo": "good neighbor pharmacy lice",
		"ano_inicial": "2012-05-06",
		"ano_final": "2016-05-10"
	},
	{
		"id": 50,
		"marca": "Turcotte-Torphy",
		"veiculo": "Terazosin hydrochloride",
		"ano_inicial": "2012-08-27",
		"ano_final": "2016-11-25"
	},
	{
		"id": 51,
		"marca": "Muller Inc",
		"veiculo": "Atenolol",
		"ano_inicial": "2014-11-12",
		"ano_final": "2016-07-18"
	},
	{
		"id": 52,
		"marca": "Jacobs LLC",
		"veiculo": "Apiol",
		"ano_inicial": "2014-04-25",
		"ano_final": "2016-04-22"
	},
	{
		"id": 53,
		"marca": "Brown LLC",
		"veiculo": "Sheer FluorX PEDO",
		"ano_inicial": "2014-03-28",
		"ano_final": "2016-07-13"
	},
	{
		"id": 54,
		"marca": "Weimann-Denesik",
		"veiculo": "IBU",
		"ano_inicial": "2015-02-13",
		"ano_final": "2017-03-10"
	},
	{
		"id": 55,
		"marca": "Dooley, Huels and King",
		"veiculo": "Nystatin",
		"ano_inicial": "2014-05-11",
		"ano_final": "2016-07-07"
	},
	{
		"id": 56,
		"marca": "Keeling-McDermott",
		"veiculo": "ENALAPRIL MALEATE",
		"ano_inicial": "2014-04-18",
		"ano_final": "2016-08-07"
	},
	{
		"id": 57,
		"marca": "Steuber-Ruecker",
		"veiculo": "Felodipine",
		"ano_inicial": "2012-04-20",
		"ano_final": "2016-06-30"
	},
	{
		"id": 58,
		"marca": "Trantow and Sons",
		"veiculo": "ESZOPICLONE",
		"ano_inicial": "2012-12-01",
		"ano_final": "2016-05-08"
	},
	{
		"id": 59,
		"marca": "McGlynn Group",
		"veiculo": "CEFACLOR",
		"ano_inicial": "2013-01-28",
		"ano_final": "2016-04-17"
	},
	{
		"id": 60,
		"marca": "Swaniawski-Stroman",
		"veiculo": "Prednisone",
		"ano_inicial": "2013-06-13",
		"ano_final": "2016-12-24"
	},
	{
		"id": 61,
		"marca": "Hills, Wisozk and Moore",
		"veiculo": "Zolmitriptan",
		"ano_inicial": "2012-08-12",
		"ano_final": "2016-06-09"
	},
	{
		"id": 62,
		"marca": "Runte LLC",
		"veiculo": "LBEL COULEUR LUXE AMPLIFIER XP",
		"ano_inicial": "2012-09-27",
		"ano_final": "2016-04-09"
	},
	{
		"id": 63,
		"marca": "Treutel-Homenick",
		"veiculo": "Foltabs 800",
		"ano_inicial": "2013-12-10",
		"ano_final": "2016-04-17"
	},
	{
		"id": 64,
		"marca": "Glover-Kilback",
		"veiculo": "Irbesartan",
		"ano_inicial": "2014-09-06",
		"ano_final": "2016-09-06"
	},
	{
		"id": 65,
		"marca": "Volkman-Deckow",
		"veiculo": "Bahia Grass",
		"ano_inicial": "2013-09-18",
		"ano_final": "2017-02-20"
	},
	{
		"id": 66,
		"marca": "Reynolds-Cole",
		"veiculo": "Acetaminophen",
		"ano_inicial": "2012-04-01",
		"ano_final": "2017-01-08"
	},
	{
		"id": 67,
		"marca": "Schimmel-Herman",
		"veiculo": "Headache",
		"ano_inicial": "2014-12-01",
		"ano_final": "2016-06-29"
	},
	{
		"id": 68,
		"marca": "Kemmer-Schroeder",
		"veiculo": "Cytarabine",
		"ano_inicial": "2013-06-23",
		"ano_final": "2016-08-21"
	},
	{
		"id": 69,
		"marca": "Hackett Group",
		"veiculo": "Candida Combo",
		"ano_inicial": "2014-06-11",
		"ano_final": "2017-03-14"
	},
	{
		"id": 70,
		"marca": "Stokes, Bechtelar and Wilderman",
		"veiculo": "VITALUMIERE",
		"ano_inicial": "2012-09-19",
		"ano_final": "2016-07-13"
	},
	{
		"id": 71,
		"marca": "Lind-Brakus",
		"veiculo": "Motion Sickness",
		"ano_inicial": "2013-04-13",
		"ano_final": "2016-12-25"
	},
	{
		"id": 72,
		"marca": "Shields and Sons",
		"veiculo": "GAMMAGARD",
		"ano_inicial": "2012-08-16",
		"ano_final": "2016-04-30"
	},
	{
		"id": 73,
		"marca": "Macejkovic, Boehm and Ankunding",
		"veiculo": "Happy Happy",
		"ano_inicial": "2012-05-22",
		"ano_final": "2016-12-18"
	},
	{
		"id": 74,
		"marca": "Gutmann Group",
		"veiculo": "COLLAGEN HD MAKE UP BASE",
		"ano_inicial": "2013-02-22",
		"ano_final": "2016-04-13"
	},
	{
		"id": 75,
		"marca": "Kirlin-Ortiz",
		"veiculo": "Alphaquin HP",
		"ano_inicial": "2013-06-21",
		"ano_final": "2016-07-01"
	},
	{
		"id": 76,
		"marca": "Kerluke-O'Keefe",
		"veiculo": "Aspirin",
		"ano_inicial": "2014-05-30",
		"ano_final": "2016-10-30"
	},
	{
		"id": 77,
		"marca": "Cremin, Nienow and Larkin",
		"veiculo": "equaline nicotine",
		"ano_inicial": "2012-08-12",
		"ano_final": "2016-09-24"
	},
	{
		"id": 78,
		"marca": "Breitenberg, Jacobson and Glover",
		"veiculo": "XtraCare Deep Cleaning Astringent",
		"ano_inicial": "2014-07-15",
		"ano_final": "2016-08-12"
	},
	{
		"id": 79,
		"marca": "Larson, Bergstrom and Fisher",
		"veiculo": "DawnMist Deodorant Bar No. 1/2",
		"ano_inicial": "2014-05-25",
		"ano_final": "2017-02-18"
	},
	{
		"id": 80,
		"marca": "Walsh and Sons",
		"veiculo": "Plavix",
		"ano_inicial": "2015-02-10",
		"ano_final": "2016-06-17"
	},
	{
		"id": 81,
		"marca": "Halvorson Group",
		"veiculo": "ACETAMINOPHEN and CODEINE",
		"ano_inicial": "2014-12-08",
		"ano_final": "2017-01-11"
	},
	{
		"id": 82,
		"marca": "Hodkiewicz, Collier and Lockman",
		"veiculo": "Mucor plumbeus",
		"ano_inicial": "2013-07-25",
		"ano_final": "2016-08-11"
	},
	{
		"id": 83,
		"marca": "Cartwright, Kemmer and Haley",
		"veiculo": "DermaCare",
		"ano_inicial": "2014-04-02",
		"ano_final": "2016-05-27"
	},
	{
		"id": 84,
		"marca": "Crona Group",
		"veiculo": "Bioelements",
		"ano_inicial": "2012-11-05",
		"ano_final": "2016-07-24"
	},
	{
		"id": 85,
		"marca": "Bednar, Friesen and Schaefer",
		"veiculo": "Travasol",
		"ano_inicial": "2012-08-19",
		"ano_final": "2016-09-07"
	},
	{
		"id": 86,
		"marca": "Barrows-Donnelly",
		"veiculo": "Fexofenadine Hydrochloride",
		"ano_inicial": "2013-06-07",
		"ano_final": "2017-01-31"
	},
	{
		"id": 87,
		"marca": "Casper, Roob and D'Amore",
		"veiculo": "Western Family",
		"ano_inicial": "2012-05-23",
		"ano_final": "2016-11-26"
	},
	{
		"id": 88,
		"marca": "Batz-Kautzer",
		"veiculo": "Turnip",
		"ano_inicial": "2012-12-07",
		"ano_final": "2016-10-11"
	},
	{
		"id": 89,
		"marca": "Quigley and Sons",
		"veiculo": "Tramadol Hydrochloride",
		"ano_inicial": "2012-09-26",
		"ano_final": "2016-10-08"
	},
	{
		"id": 90,
		"marca": "Brekke-Gutmann",
		"veiculo": "Clonidine Hydrochloride",
		"ano_inicial": "2013-08-15",
		"ano_final": "2016-11-13"
	},
	{
		"id": 91,
		"marca": "Adams, Bahringer and Funk",
		"veiculo": "Trichothecium roseum",
		"ano_inicial": "2012-06-30",
		"ano_final": "2016-07-27"
	},
	{
		"id": 92,
		"marca": "Raynor, Windler and Hoppe",
		"veiculo": "Chlorpromazine Hydrochloride",
		"ano_inicial": "2014-04-02",
		"ano_final": "2016-12-01"
	},
	{
		"id": 93,
		"marca": "Lind, Keeling and Powlowski",
		"veiculo": "ATORVASTATIN CALCIUM",
		"ano_inicial": "2012-11-02",
		"ano_final": "2016-10-30"
	},
	{
		"id": 94,
		"marca": "Terry, Friesen and Heidenreich",
		"veiculo": "Phoma glomerata",
		"ano_inicial": "2013-07-28",
		"ano_final": "2016-11-15"
	},
	{
		"id": 95,
		"marca": "Graham LLC",
		"veiculo": "Clindamycin hydrochloride",
		"ano_inicial": "2014-03-31",
		"ano_final": "2016-08-07"
	},
	{
		"id": 96,
		"marca": "Cormier Inc",
		"veiculo": "oxycodone hydrochloride",
		"ano_inicial": "2013-12-23",
		"ano_final": "2016-10-26"
	},
	{
		"id": 97,
		"marca": "Hayes and Sons",
		"veiculo": "Bupropion Hydrochloride",
		"ano_inicial": "2013-04-28",
		"ano_final": "2016-06-12"
	},
	{
		"id": 98,
		"marca": "Schneider-Friesen",
		"veiculo": "Mycophenolate Mofetil",
		"ano_inicial": "2014-11-01",
		"ano_final": "2016-10-15"
	},
	{
		"id": 99,
		"marca": "Bernhard Group",
		"veiculo": "White Oak Pollen",
		"ano_inicial": "2014-06-23",
		"ano_final": "2016-09-26"
	},
	{
		"id": 100,
		"marca": "Jakubowski, Kemmer and Gerhold",
		"veiculo": "SYNTHROID",
		"ano_inicial": "2012-03-24",
		"ano_final": "2016-03-23"
	}
];

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__(59);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3__src__["a" /* default */])

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
})


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            checkbox: true,
            checkboxGroup: ['Kobe'],
            radioGroup: 'Wade',
            radioGroupButton: 'James'
        };
    },

    methods: {
        notify: function notify() {
            this.$notify.open({
                message: 'This is a basic notify'
            });
        },
        successNotify: function successNotify() {
            this.$notify.success({
                message: 'This is a success notify',
                isSnackbar: true
            });
        },
        infoNotify: function infoNotify() {
            this.$notify.info({
                message: 'This is an info notify',
                position: 'top'
            });
        },
        warningNotify: function warningNotify() {
            this.$notify.warning({
                title: 'Título',
                message: 'This is a warning notify with title',
                position: 'bottom'
            });
        },
        dangerNotify: function dangerNotify() {
            this.$notify.danger({
                message: 'This is a danger notify',
                position: 'top-left'
            });
        },
        toast: function toast() {
            this.$toast.open({
                message: 'Alguma coisa aconteceu.'
            });
        },
        successToast: function successToast() {
            this.$toast.open({
                message: 'Alguma coisa aconteceu corretamente!',
                type: 'is-success'
            });
        },
        dangerToast: function dangerToast() {
            this.$toast.open({
                message: 'Alguma coisa deu errado.',
                type: 'is-danger'
            });
        },
        primaryToast: function primaryToast() {
            this.$toast.open({
                message: 'Alguma coisa aconteceu...',
                type: 'is-primary'
            });
        }
    }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_data_test_json__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_data_test_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_data_test_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_debounce__);





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            search: '',
            items: []
        };
    },

    computed: {
        tableData: function tableData() {
            if (this.search === '') return __WEBPACK_IMPORTED_MODULE_0__assets_data_test_json___default.a;

            return __WEBPACK_IMPORTED_MODULE_0__assets_data_test_json___default.a.filter(this.findInTable);
        }
    },
    methods: {
        findInTable: function findInTable(obj) {
            return obj.veiculo.toString().toLowerCase().indexOf(this.search.toLowerCase()) >= 0;
        },

        debounceSearch: __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default()(function (el) {
            this.search = el.target.value;
        }, 500),
        tableCheck: function tableCheck(items, item) {
            this.items = items;
        }
    }
});

/***/ }),
/* 65 */
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
/* 66 */
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
/* 67 */
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
                    return 'chevron-right';
                case 'chevron_left':
                    return 'chevron-left';
                default:
                    return null;
            }
        }
    }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(4);





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bNotification',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */]),
    props: {
        title: String,
        closable: Boolean,
        type: {
            type: String,
            default: 'is-default'
        },
        message: {
            type: String,
            default: ''
        },
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
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_NotifyMixin_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__(4);






/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_1__utils_NotifyMixin_js__["a" /* default */]],
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */]),
    props: {
        title: String
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
    beforeMount: function beforeMount() {
        var parent = void 0;
        parent = document.querySelector('.notifies.' + this.position);
        var container = document.querySelector(this.container) !== null ? document.querySelector(this.container) : document.body;
        if (!parent) {
            parent = document.createElement('div');
            parent.classList.add('notifies', this.position);
            container.appendChild(parent);
        }
        parent.appendChild(this.$el);
        if (this.container) {
            parent.style.position = 'absolute';
        }
    }
});

/***/ }),
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 73 */
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
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_sortBy__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_sortBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_sortBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TablePagination__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TablePagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TablePagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox__ = __webpack_require__(33);


var _components;






/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bTable',
    components: (_components = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_2__TablePagination___default.a.name, __WEBPACK_IMPORTED_MODULE_2__TablePagination___default.a), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_4__checkbox__["a" /* Checkbox */].name, __WEBPACK_IMPORTED_MODULE_4__checkbox__["a" /* Checkbox */]), _components),
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
        fullPagination: Boolean
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
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(4);





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bTablePagination',
    components: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */]),
    props: {
        total: [Number, String],
        perPage: [Number, String],
        currentPage: [Number, String],
        fullPagination: Boolean
    },
    computed: {
        pageCount: function pageCount() {
            return Math.ceil(this.total / this.perPage);
        },
        firstItem: function firstItem() {
            var firstItem = this.currentPage * this.perPage - this.perPage + 1;
            return firstItem >= 0 ? firstItem : 0;
        },
        hasPrev: function hasPrev() {
            return this.currentPage > 1;
        },
        hasFirst: function hasFirst() {
            return this.currentPage > 3 && this.fullPagination;
        },
        hasFirstEllipsis: function hasFirstEllipsis() {
            return this.currentPage >= 5 && this.fullPagination;
        },
        hasLast: function hasLast() {
            return this.currentPage < this.pageCount - 2 && this.fullPagination;
        },
        hasLastEllipsis: function hasLastEllipsis() {
            return this.currentPage < this.pageCount - 2 && this.currentPage <= this.pageCount - 4 && this.fullPagination;
        },
        hasNext: function hasNext() {
            return this.currentPage < this.pageCount;
        },
        pagesInRange: function pagesInRange() {
            var _this = this;

            if (!this.fullPagination) return;

            var left = Math.max(1, this.currentPage - 2);
            var right = Math.min(this.currentPage + 2, this.pageCount);

            var pages = [];

            var _loop = function _loop(i) {
                pages.push({
                    number: i,
                    isActive: _this.currentPage === i,
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
            if (this.currentPage > value) {
                this.last();
            }
        }
    },
    methods: {
        prev: function prev() {
            this.$emit('change', this.currentPage - 1);
        },
        first: function first() {
            this.$emit('change', 1);
        },
        last: function last() {
            this.$emit('change', this.pageCount);
        },
        next: function next() {
            this.$emit('change', this.currentPage + 1);
        }
    }
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_NotifyMixin_js__ = __webpack_require__(20);




/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_NotifyMixin_js__["a" /* default */]],
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
    beforeMount: function beforeMount() {
        var parent = void 0;
        parent = document.querySelector('.toasts.' + this.position);
        var container = document.querySelector(this.container) !== null ? document.querySelector(this.container) : document.body;
        if (!parent) {
            parent = document.createElement('div');
            parent.classList.add('toasts', this.position);
            container.appendChild(parent);
        }
        parent.appendChild(this.$el);
        if (this.container) {
            parent.style.position = 'absolute';
        }
    }
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Notification__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Notification___default.a);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Notify__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Notify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Notify__);




function _open(propsData) {
    var NotifyComponent = __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].extend(__WEBPACK_IMPORTED_MODULE_2__Notify___default.a);
    return new NotifyComponent({
        el: document.createElement('div'),
        propsData: propsData
    });
}

/* harmony default export */ __webpack_exports__["a"] = ({
    open: function open(params) {
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, params);
        return _open(propsData);
    },
    info: function info(params) {
        var defaultParam = {
            type: 'is-info'
        };
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, params);
        return _open(propsData);
    },
    warning: function warning(params) {
        var defaultParam = {
            type: 'is-warning'
        };
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, params);
        return _open(propsData);
    },
    success: function success(params) {
        var defaultParam = {
            type: 'is-success'
        };
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, params);
        return _open(propsData);
    },
    danger: function danger(params) {
        var defaultParam = {
            type: 'is-danger'
        };
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, params);
        return _open(propsData);
    }
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RadioGroup__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RadioGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__RadioGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RadioButton__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RadioButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__RadioButton__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Radio___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__RadioGroup___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__RadioButton___default.a; });






/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Switch__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Switch__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Switch___default.a);

/***/ }),
/* 81 */
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
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableColumn_js__ = __webpack_require__(81);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Table___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__TableColumn_js__["a"]; });





/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Toast__ = __webpack_require__(228);
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
            type: 'is-dark'
        };
        var propsData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, params);
        return _open(propsData);
    }
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NotifyMixin__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_icon__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = ({
    setDefaultContentElement: function setDefaultContentElement(container) {
        __WEBPACK_IMPORTED_MODULE_0__NotifyMixin__["a" /* default */].props.container.default = container;
    },
    setDefaultIconType: function setDefaultIconType(iconPack) {
        __WEBPACK_IMPORTED_MODULE_1__components_icon__["a" /* default */].props.type.default = iconPack || 'mdi';
    }
});

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(232),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(235),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(234),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(243),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(237),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(239),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(242),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(238),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(230),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(241),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(231),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(233),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(240),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(229),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "mode": "out-in",
      "appear": "",
      "appear-active-class": _vm.transitionEnter,
      "enter-active-class": _vm.transitionEnter,
      "leave-active-class": _vm.transitionLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    staticClass: "toast animated",
    class: _vm.type
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 230 */
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
/* 231 */
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
/* 232 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Componentes")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Notify")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.notify
    }
  }, [_vm._v("Notify")]), _vm._v(" "), _c('button', {
    staticClass: "button is-success",
    on: {
      "click": _vm.successNotify
    }
  }, [_vm._v("Notify Success")]), _vm._v(" "), _c('button', {
    staticClass: "button is-info",
    on: {
      "click": _vm.infoNotify
    }
  }, [_vm._v("Notify Info")]), _vm._v(" "), _c('button', {
    staticClass: "button is-warning",
    on: {
      "click": _vm.warningNotify
    }
  }, [_vm._v("Notify Warning")]), _vm._v(" "), _c('button', {
    staticClass: "button is-danger",
    on: {
      "click": _vm.dangerNotify
    }
  }, [_vm._v("Notify Danger")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Notification")]), _vm._v(" "), _c('b-notification', {
    attrs: {
      "type": "is-success",
      "title": "Sucesso",
      "message": "Notificação com ícone.",
      "closable": "",
      "show-icon": ""
    }
  }), _vm._v(" "), _c('b-notification', {
    attrs: {
      "type": "is-primary",
      "title": "Notificação",
      "message": "Notificação sem ícone e não fechável."
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
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
  }, [_vm._v("Toast Danger")]), _vm._v(" "), _c('button', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.primaryToast
    }
  }, [_vm._v("Toast Primary")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
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
  }, [_vm._v("Kyle")])], 1), _vm._v("\n    " + _vm._s(_vm.checkboxGroup) + "\n\n    "), _c('hr'), _vm._v(" "), _c('h2', {
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
  }, [_vm._v("Kyle")])], 1), _vm._v("\n    " + _vm._s(_vm.radioGroup) + "\n\n    "), _c('hr'), _vm._v(" "), _c('h2', {
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
  }, [_vm._v("Disabled")])], 1), _vm._v("\n    " + _vm._s(_vm.radioGroupButton) + "\n")], 1)
},staticRenderFns: []}

/***/ }),
/* 233 */
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
  }, [(_vm.checkable && this.checkedItems.length > 0) ? _c('small', [_vm._v("(" + _vm._s(this.checkedItems.length) + ")")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "level-right"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_c('b-table-pagination', {
    attrs: {
      "total": _vm.newData.length,
      "per-page": _vm.perPage,
      "full-pagination": _vm.fullPagination,
      "currentPage": _vm.currentPage
    },
    on: {
      "change": _vm.pageChanged
    }
  })], 1)])])])
},staticRenderFns: []}

/***/ }),
/* 234 */
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
/* 235 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-content level mb-0"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "level-right"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_c('p', [_c('strong', [_vm._v(_vm._s(_vm.tableData.length))]), _vm._v(" item(s)")])]), _vm._v(" "), _c('div', {
    staticClass: "level-item"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('p', {
    staticClass: "control has-icon is-expanded"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Pesquisar..."
    },
    on: {
      "input": _vm.debounceSearch
    }
  }), _vm._v(" "), _c('b-icon', {
    attrs: {
      "icon": "search"
    }
  })], 1)])])])]), _vm._v(" "), _c('b-table', {
    attrs: {
      "data": _vm.tableData,
      "checkable": "",
      "default-sort": "marca",
      "paginated": "",
      "per-page": "10"
    },
    on: {
      "check": _vm.tableCheck
    }
  }, [_c('b-table-column', {
    attrs: {
      "field": "marca",
      "label": "Marca",
      "sortable": "",
      "width": "280"
    }
  }), _vm._v(" "), _c('b-table-column', {
    attrs: {
      "field": "veiculo",
      "label": "Nome",
      "sortable": ""
    }
  }), _vm._v(" "), _c('b-table-column', {
    attrs: {
      "field": "ano_final",
      "label": "Data",
      "width": "180",
      "numeric": ""
    }
  })], 1), _vm._v(" "), _c('pre', [_vm._v(_vm._s(_vm.items))]), _vm._v(" "), _c('div', {
    staticClass: "card-content level mb-0"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "level-right"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_c('p', [_c('strong', [_vm._v(_vm._s(_vm.tableData.length))]), _vm._v(" item(s)")])]), _vm._v(" "), _c('div', {
    staticClass: "level-item"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('p', {
    staticClass: "control has-icon is-expanded"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Pesquisar..."
    },
    on: {
      "input": _vm.debounceSearch
    }
  }), _vm._v(" "), _c('b-icon', {
    attrs: {
      "icon": "search"
    }
  })], 1)])])])]), _vm._v(" "), _c('b-table', {
    attrs: {
      "data": _vm.tableData,
      "selectable": "",
      "default-sort": "marca",
      "paginated": "",
      "full-pagination": "",
      "per-page": "10"
    },
    on: {
      "check": _vm.tableCheck
    }
  }, [_c('b-table-column', {
    attrs: {
      "field": "marca",
      "label": "Marca",
      "sortable": "",
      "width": "280"
    }
  }), _vm._v(" "), _c('b-table-column', {
    attrs: {
      "field": "veiculo",
      "label": "Nome",
      "sortable": ""
    }
  }), _vm._v(" "), _c('b-table-column', {
    attrs: {
      "field": "ano_final",
      "label": "Data",
      "width": "180",
      "numeric": ""
    }
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "level-left"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_c('h2', {
    staticClass: "title is-4"
  }, [_vm._v("Multi-select e paginação simples")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "level-left"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_c('h2', {
    staticClass: "title is-4"
  }, [_vm._v("Paginação completa e linha selecionável")])])])
}]}

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('nav', {
    staticClass: "nav has-shadow"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "nav-left"
  }, [_c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_c('strong', [_vm._v("Buefy")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "nav-center"
  }, [_c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/table",
      "exact": ""
    }
  }, [_vm._v("Table (Data)")])], 1)])]), _vm._v(" "), _c('section', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('router-view')], 1)])])
},staticRenderFns: []}

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon",
    class: _vm.size
  }, [_c('i', {
    class: [_vm.type, _vm.type === 'fa' ? ("fa-" + _vm.newIcon) : null]
  }, [_vm._v(_vm._s(_vm.type === 'mdi' ? _vm.newIcon : null))])])
},staticRenderFns: []}

/***/ }),
/* 238 */
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
/* 239 */
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
    class: !_vm.showIcon ? _vm.type : null
  }, [(_vm.closable) ? _c('button', {
    staticClass: "delete",
    on: {
      "click": _vm.close
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon && _vm.showIcon) ? _c('b-icon', {
    class: _vm.type,
    attrs: {
      "icon": _vm.icon,
      "both": "",
      "size": "is-large"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [(_vm.title) ? _c('div', {
    staticClass: "title is-5"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table-pagination"
  }, [_c('ul', [_c('li', {
    staticClass: "item is-small",
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
  })], 1), _vm._v(" "), (_vm.hasFirst) ? _c('li', {
    staticClass: "item",
    on: {
      "click": _vm.first
    }
  }, [_vm._v("1")]) : _vm._e(), _vm._v(" "), (_vm.hasFirstEllipsis) ? _c('li', {
    staticClass: "item is-disabled is-small"
  }, [_vm._v("...")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pagesInRange), function(page) {
    return _c('li', {
      staticClass: "item",
      class: {
        'is-active': page.isActive
      },
      on: {
        "click": page.click
      }
    }, [_vm._v(_vm._s(page.number))])
  }), _vm._v(" "), (_vm.hasLastEllipsis) ? _c('li', {
    staticClass: "item is-disabled is-small"
  }, [_vm._v("...")]) : _vm._e(), _vm._v(" "), (_vm.hasLast) ? _c('li', {
    staticClass: "item",
    on: {
      "click": _vm.last
    }
  }, [_vm._v(_vm._s(_vm.pageCount))]) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "item is-small",
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
  })], 1)], 2), _vm._v(" "), (!_vm.fullPagination) ? _c('small', {
    staticClass: "info"
  }, [_vm._v("\n        " + _vm._s(_vm.firstItem) + "-" + _vm._s(_vm.currentPage * _vm.perPage) + " / " + _vm._s(_vm.total) + "\n    ")]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "radio-group field",
    class: _vm.isRadioButtonGroup ? 'has-addons' : 'is-grouped'
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "mode": "out-in",
      "appear": "",
      "appear-active-class": _vm.transitionEnter,
      "enter-active-class": _vm.transitionEnter,
      "leave-active-class": _vm.transitionLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    staticClass: "notification animated"
  }, [_c('button', {
    staticClass: "delete",
    on: {
      "click": _vm.handleClose
    }
  }), _vm._v(" "), (_vm.icon) ? _c('b-icon', {
    class: _vm.type,
    attrs: {
      "icon": _vm.icon,
      "both": "",
      "size": "is-large"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [(_vm.title) ? _c('div', {
    staticClass: "title is-5"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])], 1)])
},staticRenderFns: []}

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "checkbox-group field is-grouped"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ })
],[62]);
//# sourceMappingURL=app.7d98a35116ba5f97e76f.js.map