"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_user_user_module_ts"],{

/***/ 7095:
/*!***************************************************!*\
  !*** ./src/app/views/user/user-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": () => (/* binding */ UserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page */ 7361);




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_0__.UserPage
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserPageRoutingModule);



/***/ }),

/***/ 6369:
/*!*******************************************!*\
  !*** ./src/app/views/user/user.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 7095);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page */ 7361);







let UserPageModule = class UserPageModule {
};
UserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_1__.UserPage]
    })
], UserPageModule);



/***/ }),

/***/ 7361:
/*!*****************************************!*\
  !*** ./src/app/views/user/user.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page.html?ngResource */ 9994);
/* harmony import */ var _user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page.scss?ngResource */ 6668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let UserPage = class UserPage {
    constructor(router) {
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('userData'));
        if (!localStorage.getItem('userData')) {
            this.router.navigate(['/userslist']);
        }
    }
    ngOnInit() {
        localStorage.removeItem('userData');
    }
};
UserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
UserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-user',
        template: _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserPage);



/***/ }),

/***/ 6668:
/*!******************************************************!*\
  !*** ./src/app/views/user/user.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  text-align: center;\n  padding: 15px;\n}\n\n.text {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9994:
/*!******************************************************!*\
  !*** ./src/app/views/user/user.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"custom\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{user.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col sizeSm=\"8\" offsetSm=\"2\">\r\n        <ion-card>\r\n          <img src=\"{{user.image}}\" alt=\"user.name\">\r\n          <div class=\"text\">\r\n            <h3>Información Básica</h3>\r\n            <p>Especie: {{user.species}}</p>\r\n            <p *ngIf=\"user.type\">Tipo: {{user.type}}</p>\r\n            <p>Género: {{user.gender}}</p>\r\n            <p>Estatus: {{user.status}}</p>\r\n            <p>Orígen: {{user.origin.name}}</p>\r\n            <p>Localización: {{user.location.name}}</p>\r\n            <h3></h3>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_user_user_module_ts.js.map