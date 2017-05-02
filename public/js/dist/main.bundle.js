webpackJsonp([1,4],{

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 192;


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(209);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .getFish()
            .subscribe(function (data) { return _this.fish = data; });
        this.dataService
            .getDailyCatch()
            .subscribe(function (data) { return _this.dailyCatch = data; });
    };
    AppComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.dataService
            .getDailyCatch()
            .subscribe(function (data) { return _this.dailyCatch = data; });
    };
    AppComponent.prototype.onAddLanded = function (landed) {
        var _this = this;
        this.dataService
            .landFish(landed)
            .subscribe(function (data) { return _this.dailyCatch = data; });
    };
    AppComponent.prototype.onToggleLandedSold = function (landed) {
        var _this = this;
        this.dataService
            .toggleLandedSold(landed)
            .subscribe(function (data) { return _this.dailyCatch = data; });
    };
    AppComponent.prototype.onRemoveLanded = function (landed) {
        var _this = this;
        this.dataService
            .deleteLandedById(landed._id)
            .subscribe(function (data) { return _this.dailyCatch = data; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(275),
        styles: [__webpack_require__(267)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__daily_catch_daily_catch_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_footer_my_footer_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_header_my_header_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landed_landed_component__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__my_header_my_header_component__["a" /* MyHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__daily_catch_daily_catch_component__["a" /* DailyCatchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__my_footer_my_footer_component__["a" /* MyFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__landed_landed_component__["a" /* LandedComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__daily_catch__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyCatchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DailyCatchComponent = (function () {
    function DailyCatchComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.toggleSold = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    DailyCatchComponent.prototype.onToggleLandedSold = function (landed) {
        this.toggleSold.emit(landed);
    };
    DailyCatchComponent.prototype.onRemoveLanded = function (landed) {
        this.remove.emit(landed);
    };
    return DailyCatchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__daily_catch__["a" /* DailyCatch */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__daily_catch__["a" /* DailyCatch */]) === "function" && _a || Object)
], DailyCatchComponent.prototype, "dailyCatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], DailyCatchComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _c || Object)
], DailyCatchComponent.prototype, "toggleSold", void 0);
DailyCatchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-daily-catch',
        template: __webpack_require__(276),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [])
], DailyCatchComponent);

var _a, _b, _c;
//# sourceMappingURL=daily-catch.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landed__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandedComponent = (function () {
    function LandedComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.toggleSold = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    LandedComponent.prototype.toggleLandedSold = function (landed) {
        this.toggleSold.emit(landed);
    };
    LandedComponent.prototype.removeLanded = function (landed) {
        this.remove.emit(landed);
    };
    return LandedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__landed__["a" /* Landed */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__landed__["a" /* Landed */]) === "function" && _a || Object)
], LandedComponent.prototype, "landed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], LandedComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _c || Object)
], LandedComponent.prototype, "toggleSold", void 0);
LandedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-landed',
        template: __webpack_require__(277),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [])
], LandedComponent);

var _a, _b, _c;
//# sourceMappingURL=landed.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__daily_catch__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyFooterComponent = (function () {
    function MyFooterComponent() {
    }
    MyFooterComponent.prototype.catchesSold = function () {
        return this.dailyCatch.landed
            .filter(function (landed) { return landed.sold === true; })
            .length;
    };
    return MyFooterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__daily_catch__["a" /* DailyCatch */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__daily_catch__["a" /* DailyCatch */]) === "function" && _a || Object)
], MyFooterComponent.prototype, "dailyCatch", void 0);
MyFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-my-footer',
        template: __webpack_require__(278),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [])
], MyFooterComponent);

var _a;
//# sourceMappingURL=my-footer.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landed__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyHeaderComponent = (function () {
    function MyHeaderComponent() {
        this.newLanded = new __WEBPACK_IMPORTED_MODULE_1__landed__["a" /* Landed */]();
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    MyHeaderComponent.prototype.changeFish = function (value) {
        this.selectedFish = value;
    };
    MyHeaderComponent.prototype.addLanded = function () {
        this.add.emit(this.newLanded);
        this.newLanded = new __WEBPACK_IMPORTED_MODULE_1__landed__["a" /* Landed */]();
    };
    return MyHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Array)
], MyHeaderComponent.prototype, "fish", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], MyHeaderComponent.prototype, "add", void 0);
MyHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-my-header',
        template: __webpack_require__(279),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [])
], MyHeaderComponent);

var _a;
//# sourceMappingURL=my-header.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 68,
	"./af.js": 68,
	"./ar": 75,
	"./ar-dz": 69,
	"./ar-dz.js": 69,
	"./ar-kw": 70,
	"./ar-kw.js": 70,
	"./ar-ly": 71,
	"./ar-ly.js": 71,
	"./ar-ma": 72,
	"./ar-ma.js": 72,
	"./ar-sa": 73,
	"./ar-sa.js": 73,
	"./ar-tn": 74,
	"./ar-tn.js": 74,
	"./ar.js": 75,
	"./az": 76,
	"./az.js": 76,
	"./be": 77,
	"./be.js": 77,
	"./bg": 78,
	"./bg.js": 78,
	"./bn": 79,
	"./bn.js": 79,
	"./bo": 80,
	"./bo.js": 80,
	"./br": 81,
	"./br.js": 81,
	"./bs": 82,
	"./bs.js": 82,
	"./ca": 83,
	"./ca.js": 83,
	"./cs": 84,
	"./cs.js": 84,
	"./cv": 85,
	"./cv.js": 85,
	"./cy": 86,
	"./cy.js": 86,
	"./da": 87,
	"./da.js": 87,
	"./de": 90,
	"./de-at": 88,
	"./de-at.js": 88,
	"./de-ch": 89,
	"./de-ch.js": 89,
	"./de.js": 90,
	"./dv": 91,
	"./dv.js": 91,
	"./el": 92,
	"./el.js": 92,
	"./en-au": 93,
	"./en-au.js": 93,
	"./en-ca": 94,
	"./en-ca.js": 94,
	"./en-gb": 95,
	"./en-gb.js": 95,
	"./en-ie": 96,
	"./en-ie.js": 96,
	"./en-nz": 97,
	"./en-nz.js": 97,
	"./eo": 98,
	"./eo.js": 98,
	"./es": 100,
	"./es-do": 99,
	"./es-do.js": 99,
	"./es.js": 100,
	"./et": 101,
	"./et.js": 101,
	"./eu": 102,
	"./eu.js": 102,
	"./fa": 103,
	"./fa.js": 103,
	"./fi": 104,
	"./fi.js": 104,
	"./fo": 105,
	"./fo.js": 105,
	"./fr": 108,
	"./fr-ca": 106,
	"./fr-ca.js": 106,
	"./fr-ch": 107,
	"./fr-ch.js": 107,
	"./fr.js": 108,
	"./fy": 109,
	"./fy.js": 109,
	"./gd": 110,
	"./gd.js": 110,
	"./gl": 111,
	"./gl.js": 111,
	"./gom-latn": 112,
	"./gom-latn.js": 112,
	"./he": 113,
	"./he.js": 113,
	"./hi": 114,
	"./hi.js": 114,
	"./hr": 115,
	"./hr.js": 115,
	"./hu": 116,
	"./hu.js": 116,
	"./hy-am": 117,
	"./hy-am.js": 117,
	"./id": 118,
	"./id.js": 118,
	"./is": 119,
	"./is.js": 119,
	"./it": 120,
	"./it.js": 120,
	"./ja": 121,
	"./ja.js": 121,
	"./jv": 122,
	"./jv.js": 122,
	"./ka": 123,
	"./ka.js": 123,
	"./kk": 124,
	"./kk.js": 124,
	"./km": 125,
	"./km.js": 125,
	"./kn": 126,
	"./kn.js": 126,
	"./ko": 127,
	"./ko.js": 127,
	"./ky": 128,
	"./ky.js": 128,
	"./lb": 129,
	"./lb.js": 129,
	"./lo": 130,
	"./lo.js": 130,
	"./lt": 131,
	"./lt.js": 131,
	"./lv": 132,
	"./lv.js": 132,
	"./me": 133,
	"./me.js": 133,
	"./mi": 134,
	"./mi.js": 134,
	"./mk": 135,
	"./mk.js": 135,
	"./ml": 136,
	"./ml.js": 136,
	"./mr": 137,
	"./mr.js": 137,
	"./ms": 139,
	"./ms-my": 138,
	"./ms-my.js": 138,
	"./ms.js": 139,
	"./my": 140,
	"./my.js": 140,
	"./nb": 141,
	"./nb.js": 141,
	"./ne": 142,
	"./ne.js": 142,
	"./nl": 144,
	"./nl-be": 143,
	"./nl-be.js": 143,
	"./nl.js": 144,
	"./nn": 145,
	"./nn.js": 145,
	"./pa-in": 146,
	"./pa-in.js": 146,
	"./pl": 147,
	"./pl.js": 147,
	"./pt": 149,
	"./pt-br": 148,
	"./pt-br.js": 148,
	"./pt.js": 149,
	"./ro": 150,
	"./ro.js": 150,
	"./ru": 151,
	"./ru.js": 151,
	"./sd": 152,
	"./sd.js": 152,
	"./se": 153,
	"./se.js": 153,
	"./si": 154,
	"./si.js": 154,
	"./sk": 155,
	"./sk.js": 155,
	"./sl": 156,
	"./sl.js": 156,
	"./sq": 157,
	"./sq.js": 157,
	"./sr": 159,
	"./sr-cyrl": 158,
	"./sr-cyrl.js": 158,
	"./sr.js": 159,
	"./ss": 160,
	"./ss.js": 160,
	"./sv": 161,
	"./sv.js": 161,
	"./sw": 162,
	"./sw.js": 162,
	"./ta": 163,
	"./ta.js": 163,
	"./te": 164,
	"./te.js": 164,
	"./tet": 165,
	"./tet.js": 165,
	"./th": 166,
	"./th.js": 166,
	"./tl-ph": 167,
	"./tl-ph.js": 167,
	"./tlh": 168,
	"./tlh.js": 168,
	"./tr": 169,
	"./tr.js": 169,
	"./tzl": 170,
	"./tzl.js": 170,
	"./tzm": 172,
	"./tzm-latn": 171,
	"./tzm-latn.js": 171,
	"./tzm.js": 172,
	"./uk": 173,
	"./uk.js": 173,
	"./ur": 174,
	"./ur.js": 174,
	"./uz": 176,
	"./uz-latn": 175,
	"./uz-latn.js": 175,
	"./uz.js": 176,
	"./vi": 177,
	"./vi.js": 177,
	"./x-pseudo": 178,
	"./x-pseudo.js": 178,
	"./yo": 179,
	"./yo.js": 179,
	"./zh-cn": 180,
	"./zh-cn.js": 180,
	"./zh-hk": 181,
	"./zh-hk.js": 181,
	"./zh-tw": 182,
	"./zh-tw.js": 182
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 273;


/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<section class=\"catch-of-the-day-app\">\n  <app-my-header [fish]=\"fish\" (add)=\"onAddLanded($event)\"></app-my-header>\n  <app-daily-catch [dailyCatch]=\"dailyCatch\" (toggleSold)=\"onToggleLandedSold($event)\"\n                 (remove)=\"onRemoveLanded($event)\"></app-daily-catch>\n  <app-my-footer [dailyCatch]=\"dailyCatch\"></app-my-footer>\n</section>\n"

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<section class=\"main\" *ngIf=\"dailyCatch && dailyCatch.landed.length > 0\">\n  <ul class=\"landed-list\">\n    <li *ngFor=\"let landed of dailyCatch.landed\" [class.completed]=\"false\">\n      <app-landed\n        [landed]=\"landed\"\n        (toggleSold)=\"onToggleLandedSold($event)\"\n        (remove)=\"onRemoveLanded($event)\"></app-landed>\n    </li>\n  </ul>\n</section>\n<section class=\"main\" *ngIf=\"dailyCatch\">\n  <label class=\"weather\">Today's weather: {{dailyCatch.weather}}</label>\n</section>"

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n  <input class=\"toggle\" type=\"checkbox\" (click)=\"toggleLandedSold(landed)\" [checked]=\"landed.sold\">\n  <label>{{landed.weight}} of {{landed.fish}}</label>\n  <button class=\"destroy\" (click)=\"removeLanded(landed)\"></button>\n</div>\n"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" *ngIf=\"dailyCatch && dailyCatch.landed.length > 0\">\n  <span class=\"catch-count\"><strong>{{dailyCatch.landed.length}}</strong> {{dailyCatch.landed.length == 1 ? 'catch' : 'catches'}} today</span>\n  <span class=\"catch-count right\"><strong>{{catchesSold()}}</strong> {{catchesSold() == 1 ? 'catch' : 'catches'}} sold</span>\n</footer>\n"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>Catch of the Day</h1>\n\n  <label for=\"fishSelect\">Select the type of fish below</label>\n  <select id=\"fishSelect\" [(ngModel)]=\"newLanded.fish\" (change)=\"changeFish(newLanded.fish)\">\n    <option *ngFor=\"let f of fish\" [ngValue]=\"f.name\">{{f.name}}</option>\n  </select>\n\n  <input class=\"new-landed\" placeholder=\"Enter the weight landed\" autofocus=\"\" [(ngModel)]=\"newLanded.weight\"\n         (keyup.enter)=\"addLanded()\">\n</header>\n"

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(193);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyCatch; });
var DailyCatch = (function () {
    function DailyCatch(values) {
        if (values === void 0) { values = {}; }
        this.day = '';
        this.weather = '';
        this.landed = [];
        Object.assign(this, values);
    }
    return DailyCatch;
}());

//# sourceMappingURL=daily-catch.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    // Resolve HTTP using the constructor
    function DataService(http) {
        this.http = http;
        // private instance variables to hold url & paths of our api
        // 'http://localhost:3030/api';
        this.apiRootUrl = 'https://catch-o-the-day.herokuapp.com/api';
        this.apiPathFish = '/fish';
        this.apiPathCatch = '/catches';
        this.apiPathLanded = '/landed';
        this.day = __WEBPACK_IMPORTED_MODULE_2_moment__().format('YYYY-MM-DD');
    }
    DataService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    };
    DataService.prototype.defaultLanded = function (landed) {
        if (!landed.fish) {
            landed.fish = 'Catfish';
        }
        if (!landed.weight) {
            landed.weight = '5kg';
        }
        return landed;
    };
    // GET - Fetch the types of fish we support in our app
    DataService.prototype.getFish = function () {
        return this.http.get("" + this.apiRootUrl + this.apiPathFish)
            .map(function (res) { return res.json(); });
    };
    // GET - Fetch today's dailyCatch
    DataService.prototype.getDailyCatch = function () {
        return this.http.get("" + this.apiRootUrl + this.apiPathCatch + "/" + this.day)
            .map(function (res) { return res.json(); });
    };
    // PUT - 'Upsert' of landed value on current dailyCatch
    DataService.prototype.landFish = function (landed) {
        // TODO add form validation to the header component to force selection of fish and entry of (valid?) weight on submit
        landed = this.defaultLanded(landed);
        return this.http.put("" + this.apiRootUrl + this.apiPathCatch + "/" + this.day + this.apiPathLanded, landed, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    // PUT - Toggle landed sold property of specific landed on current dailyCatch
    DataService.prototype.toggleLandedSold = function (landed) {
        return this.http.put("" + this.apiRootUrl + this.apiPathCatch + "/" + this.day + this.apiPathLanded + "/" + landed._id, {}, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    // DELETE - Remove landed by identifier from current dailyCatch
    DataService.prototype.deleteLandedById = function (id) {
        return this.http.delete("" + this.apiRootUrl + this.apiPathCatch + "/" + this.day + this.apiPathLanded + "/" + id, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Landed; });
var Landed = (function () {
    function Landed(values) {
        if (values === void 0) { values = {}; }
        this.sold = false;
        Object.assign(this, values);
    }
    return Landed;
}());

//# sourceMappingURL=landed.js.map

/***/ })

},[309]);
//# sourceMappingURL=main.bundle.js.map