"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_city_city_module_ts"],{

/***/ 8517:
/*!***************************************************!*\
  !*** ./src/app/views/city/city-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityPageRoutingModule": () => (/* binding */ CityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _city_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.page */ 2516);




const routes = [
    {
        path: '',
        component: _city_page__WEBPACK_IMPORTED_MODULE_0__.CityPage
    }
];
let CityPageRoutingModule = class CityPageRoutingModule {
};
CityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CityPageRoutingModule);



/***/ }),

/***/ 5517:
/*!*******************************************!*\
  !*** ./src/app/views/city/city.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityPageModule": () => (/* binding */ CityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _city_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city-routing.module */ 8517);
/* harmony import */ var _city_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city.page */ 2516);







let CityPageModule = class CityPageModule {
};
CityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _city_routing_module__WEBPACK_IMPORTED_MODULE_0__.CityPageRoutingModule
        ],
        declarations: [_city_page__WEBPACK_IMPORTED_MODULE_1__.CityPage]
    })
], CityPageModule);



/***/ }),

/***/ 2516:
/*!*****************************************!*\
  !*** ./src/app/views/city/city.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityPage": () => (/* binding */ CityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _city_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.page.html?ngResource */ 9561);
/* harmony import */ var _city_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city.page.scss?ngResource */ 8942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);







let CityPage = class CityPage {
    constructor(activatedRoute, http) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.cities = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getCities().subscribe(res => {
            this.cities = res[this.id - 1];
            this.name = this.cities.name;
            this.image = this.cities.image;
            this.description = this.cities.description;
            console.log(this.cities);
        });
    }
    getCities() {
        return this.http
            .get('assets/files/cities.json')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data));
    }
};
CityPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
CityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-city',
        template: _city_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_city_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CityPage);



/***/ }),

/***/ 8942:
/*!******************************************************!*\
  !*** ./src/app/views/city/city.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".text {\n  font-size: 17px;\n  text-align: justify;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6ImNpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9561:
/*!******************************************************!*\
  !*** ./src/app/views/city/city.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <img src=\"../../../assets/img/cities/{{image}}.jpg\" alt=\"{{name}}\">\n    <div class=\"text\">{{description}}</div>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_city_city_module_ts.js.map