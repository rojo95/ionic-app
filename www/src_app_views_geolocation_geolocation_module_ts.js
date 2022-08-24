"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_geolocation_geolocation_module_ts"],{

/***/ 3588:
/*!*****************************************************************!*\
  !*** ./src/app/views/geolocation/geolocation-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationPageRoutingModule": () => (/* binding */ GeolocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocation.page */ 8708);




const routes = [
    {
        path: '',
        component: _geolocation_page__WEBPACK_IMPORTED_MODULE_0__.GeolocationPage
    }
];
let GeolocationPageRoutingModule = class GeolocationPageRoutingModule {
};
GeolocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeolocationPageRoutingModule);



/***/ }),

/***/ 9624:
/*!*********************************************************!*\
  !*** ./src/app/views/geolocation/geolocation.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationPageModule": () => (/* binding */ GeolocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocation-routing.module */ 3588);
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.page */ 8708);







let GeolocationPageModule = class GeolocationPageModule {
};
GeolocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeolocationPageRoutingModule
        ],
        declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_1__.GeolocationPage]
    })
], GeolocationPageModule);



/***/ }),

/***/ 8708:
/*!*******************************************************!*\
  !*** ./src/app/views/geolocation/geolocation.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationPage": () => (/* binding */ GeolocationPage)
/* harmony export */ });
/* harmony import */ var C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _geolocation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.page.html?ngResource */ 6209);
/* harmony import */ var _geolocation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geolocation.page.scss?ngResource */ 2723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 9683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let GeolocationPage = class GeolocationPage {
  constructor(geolocation, nativeGeocoder, alert, loadingCtrl) {
    this.geolocation = geolocation;
    this.nativeGeocoder = nativeGeocoder;
    this.alert = alert;
    this.loadingCtrl = loadingCtrl;
    this.location = []; // location = localStorage.getItem('location');
    // locationSearched: any;
    // locationSelected: any;

    this.coords = [];
    this.loading = this.loadingCtrl.create();
  }

  ngOnInit() {}

  locate() {
    var _this = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (yield _this.loading).present();
      const coordinates = yield _this.geolocation.getCurrentPosition();
      _this.coords = coordinates.coords;
      console.log('Coordenadas: ', _this.coords);

      _this.getCity(_this.coords.latitude, _this.coords.longitude);
    })();
  }

  getCity(latitude, longitude) {
    var _this2 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        useLocale: true,
        maxResults: 7
      };

      _this2.nativeGeocoder.reverseGeocode(latitude, longitude, options).then(result => _this2.saveCity(result)).catch(error => _this2.alertPresent(error, '¡ERROR!'));

      (yield _this2.loading).dismiss();
    })();
  }

  saveCity(result) {
    console.log(JSON.stringify(result[0]));
    this.location = result[0];
    this.direccion = JSON.stringify(result[0]); // const localidad = JSON.stringify(result[0].locality);
  }

  alertPresent(data, title) {
    var _this3 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alert.create({
        header: title,
        message: data,
        buttons: ['Aceptar']
      });
      alert.present();
    })();
  }

  doRefresh(event) {
    var _this4 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.location = '';
      event.target.complete();
    })();
  }

};

GeolocationPage.ctorParameters = () => [{
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
}, {
  type: _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

GeolocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-geolocation',
  template: _geolocation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_geolocation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GeolocationPage);


/***/ }),

/***/ 2723:
/*!********************************************************************!*\
  !*** ./src/app/views/geolocation/geolocation.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  text-align: center;\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJnZW9sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6209:
/*!********************************************************************!*\
  !*** ./src/app/views/geolocation/geolocation.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"custom\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>geolocation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-card *ngIf=\"location.locality\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{location.countryName}}</ion-card-title>\r\n      <ion-card-subtitle>Código Postal {{location.postalCode}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>{{location.locality}}</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>{{location.administrativeArea}}</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>{{location.subAdministrativeArea}}</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>{{location.subLocality}}</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>{{location.thoroughfare}}</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>{{location.subThoroughfare}}</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>{{location.areasOfInterest}}</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Ubicación Geografica: {{location.latitude+' '+location.longitude}}</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <br>\r\n\r\n  <div class=\"container\" *ngIf=\"!location.locality\">\r\n    <ion-button (click)=\"locate()\">Obtener Ubicación</ion-button>\r\n    <br>\r\n  </div>\r\n  {{direccion}}\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_geolocation_geolocation_module_ts.js.map