"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_cities_cities_module_ts"],{

/***/ 6129:
/*!*******************************************************!*\
  !*** ./src/app/views/cities/cities-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesPageRoutingModule": () => (/* binding */ CitiesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cities_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities.page */ 5199);




const routes = [
    {
        path: '',
        component: _cities_page__WEBPACK_IMPORTED_MODULE_0__.CitiesPage
    }
];
let CitiesPageRoutingModule = class CitiesPageRoutingModule {
};
CitiesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CitiesPageRoutingModule);



/***/ }),

/***/ 5059:
/*!***********************************************!*\
  !*** ./src/app/views/cities/cities.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesPageModule": () => (/* binding */ CitiesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cities_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities-routing.module */ 6129);
/* harmony import */ var _cities_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cities.page */ 5199);







let CitiesPageModule = class CitiesPageModule {
};
CitiesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cities_routing_module__WEBPACK_IMPORTED_MODULE_0__.CitiesPageRoutingModule
        ],
        declarations: [_cities_page__WEBPACK_IMPORTED_MODULE_1__.CitiesPage]
    })
], CitiesPageModule);



/***/ }),

/***/ 5199:
/*!*********************************************!*\
  !*** ./src/app/views/cities/cities.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesPage": () => (/* binding */ CitiesPage)
/* harmony export */ });
/* harmony import */ var C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cities_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cities.page.html?ngResource */ 8161);
/* harmony import */ var _cities_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities.page.scss?ngResource */ 6096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);









let CitiesPage = class CitiesPage {
  constructor(http, toastController, alertController, router) {
    this.http = http;
    this.toastController = toastController;
    this.alertController = alertController;
    this.router = router;
    this.token = localStorage.getItem('token');
    this.cities = [];
  }

  ngOnInit() {
    // console.log(this.token);
    // localStorage.removeItem('token');
    // localStorage.clear();
    this.getCities().subscribe(res => {
      this.cities = res;
    });
  }

  getCities() {
    return this.http.get('assets/files/cities.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.data));
  }

  presentToast1() {
    var _this = this;

    return (0,C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Ciudad seleccionada',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    })();
  }

  presentAlert1() {
    var _this2 = this;

    return (0,C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: 'Borrar Ciudad',
        message: 'Se ha borrado la ciudad correctamente.',
        buttons: ['OK']
      });
      yield alert.present();
      const result = yield alert.onDidDismiss();
      console.log(result);
    })();
  }

  presentAlert2() {
    var _this3 = this;

    return (0,C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Borrar Ciudad',
        message: '¿Estás seguro?',
        buttons: [{
          text: 'No',
          handler: () => {
            console.log('Cancelado.');
          }
        }, {
          text: 'Sí',
          handler: () => {
            console.log('Ciudad eliminada.');
          }
        }]
      });
      yield alert.present();
      const result = yield alert.onDidDismiss();
      console.log(result);
    })();
  }

  doRefresh(event) {
    return (0,C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Begin async operation');
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    })();
  }

};

CitiesPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

CitiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-cities',
  template: _cities_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cities_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CitiesPage);


/***/ }),

/***/ 6096:
/*!**********************************************************!*\
  !*** ./src/app/views/cities/cities.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".card-title {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.card-text-margin {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiY2l0aWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQtbWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 8161:
/*!**********************************************************!*\
  !*** ./src/app/views/cities/cities.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>cities</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-row>\n    <ion-col sizeLg=\"6\" sizeMd=\"6\" sizeXs=\"12\" *ngFor=\" let city of cities\">\n\n      <ion-card [routerLink]=\"['/city',city.id]\">\n        <img src=\"assets/img/cities/{{city.image}}.jpg\" alt=\"{{city.name}}\">\n        <div class=\"card-title card-text-margin\">{{city.name}}</div>\n        <div class=\"card-text-margin\">{{city.description.split(' ').slice(0,9).join(' ')}}...</div>\n      </ion-card>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_cities_cities_module_ts.js.map