"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_scann-qr_scann-qr_module_ts"],{

/***/ 2041:
/*!***********************************************************!*\
  !*** ./src/app/views/scann-qr/scann-qr-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScannQrPageRoutingModule": () => (/* binding */ ScannQrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _scann_qr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scann-qr.page */ 730);




const routes = [
    {
        path: '',
        component: _scann_qr_page__WEBPACK_IMPORTED_MODULE_0__.ScannQrPage
    }
];
let ScannQrPageRoutingModule = class ScannQrPageRoutingModule {
};
ScannQrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScannQrPageRoutingModule);



/***/ }),

/***/ 6853:
/*!***************************************************!*\
  !*** ./src/app/views/scann-qr/scann-qr.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScannQrPageModule": () => (/* binding */ ScannQrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scann_qr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scann-qr-routing.module */ 2041);
/* harmony import */ var _scann_qr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scann-qr.page */ 730);







let ScannQrPageModule = class ScannQrPageModule {
};
ScannQrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scann_qr_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScannQrPageRoutingModule
        ],
        declarations: [_scann_qr_page__WEBPACK_IMPORTED_MODULE_1__.ScannQrPage]
    })
], ScannQrPageModule);



/***/ }),

/***/ 730:
/*!*************************************************!*\
  !*** ./src/app/views/scann-qr/scann-qr.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScannQrPage": () => (/* binding */ ScannQrPage)
/* harmony export */ });
/* harmony import */ var C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _scann_qr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scann-qr.page.html?ngResource */ 390);
/* harmony import */ var _scann_qr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scann-qr.page.scss?ngResource */ 4917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);






let ScannQrPage = class ScannQrPage {
  constructor(barcodeScanner) {
    this.barcodeScanner = barcodeScanner;
  }

  ngOnInit() {}

  scan() {
    var _this = this;

    return (0,C_laragon_www_cursos_ionic_myIonicApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('escanear');

      _this.barcodeScanner.scan().then(barcodeData => {
        _this.code = barcodeData.text;
        console.log('Barcode data', _this.code);
      }).catch(err => {
        console.log('Error', err);
      });
    })();
  }

};

ScannQrPage.ctorParameters = () => [{
  type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner
}];

ScannQrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-scann-qr',
  template: _scann_qr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_scann_qr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ScannQrPage);


/***/ }),

/***/ 4917:
/*!**************************************************************!*\
  !*** ./src/app/views/scann-qr/scann-qr.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  text-align: center;\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW5uLXFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJzY2Fubi1xci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 390:
/*!**************************************************************!*\
  !*** ./src/app/views/scann-qr/scann-qr.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>scannQr</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"container\">\n    <ion-button sizeXs=\"12\" (click)=\"scan()\">ESCANEAR</ion-button>\n    <br>\n    {{code}}\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_scann-qr_scann-qr_module_ts.js.map