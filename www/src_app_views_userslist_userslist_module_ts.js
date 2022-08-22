"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_userslist_userslist_module_ts"],{

/***/ 2599:
/*!*************************************************************!*\
  !*** ./src/app/views/userslist/userslist-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserslistPageRoutingModule": () => (/* binding */ UserslistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _userslist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userslist.page */ 7295);




const routes = [
    {
        path: '',
        component: _userslist_page__WEBPACK_IMPORTED_MODULE_0__.UserslistPage
    }
];
let UserslistPageRoutingModule = class UserslistPageRoutingModule {
};
UserslistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserslistPageRoutingModule);



/***/ }),

/***/ 7258:
/*!*****************************************************!*\
  !*** ./src/app/views/userslist/userslist.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserslistPageModule": () => (/* binding */ UserslistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _userslist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userslist-routing.module */ 2599);
/* harmony import */ var _userslist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userslist.page */ 7295);







let UserslistPageModule = class UserslistPageModule {
};
UserslistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _userslist_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserslistPageRoutingModule
        ],
        declarations: [_userslist_page__WEBPACK_IMPORTED_MODULE_1__.UserslistPage]
    })
], UserslistPageModule);



/***/ }),

/***/ 7295:
/*!***************************************************!*\
  !*** ./src/app/views/userslist/userslist.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserslistPage": () => (/* binding */ UserslistPage)
/* harmony export */ });
/* harmony import */ var C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _userslist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userslist.page.html?ngResource */ 9457);
/* harmony import */ var _userslist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userslist.page.scss?ngResource */ 1263);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);









let UserslistPage = class UserslistPage {
  constructor(http, router, loadingCtrl) {
    this.http = http;
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    var _this = this;

    return (0,C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create();
      loading.present();

      const users = _this.http.get('https://rickandmortyapi.com/api/character').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.results));

      yield users.subscribe(res => {
        _this.users = res;
        loading.dismiss();
      });
    })();
  }

  changeView(id) {
    var _this2 = this;

    return (0,C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingCtrl.create();
      loading.present();
      const user = yield _this2.http.get('https://rickandmortyapi.com/api/character/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res));
      yield user.subscribe(res => {
        localStorage.setItem('userData', JSON.stringify(res));

        _this2.router.navigate(['/user']);

        loading.dismiss();
      });
    })();
  }

  doRefresh(event) {
    var _this3 = this;

    return (0,C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Begin async operation');
      yield _this3.getUsers();
      event.target.complete();
    })();
  }

};

UserslistPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}];

UserslistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-userslist',
  template: _userslist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_userslist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UserslistPage);


/***/ }),

/***/ 1263:
/*!****************************************************************!*\
  !*** ./src/app/views/userslist/userslist.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vyc2xpc3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9457:
/*!****************************************************************!*\
  !*** ./src/app/views/userslist/userslist.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>users list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n\n    <ion-list-header> Usuarios Registrados </ion-list-header>\n\n    <ion-item *ngFor=\"let user of users\" (click)=\"changeView(user.id)\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{user.image}}\" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{user.name}}</h2>\n        <p>Especie: {{user.species}}</p>\n        <p>Estatus: {{user.status}}</p>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_userslist_userslist_module_ts.js.map