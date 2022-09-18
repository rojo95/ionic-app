"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_location-map_location-map_module_ts"],{

/***/ 6562:
/*!*******************************************************************!*\
  !*** ./src/app/views/location-map/location-map-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationMapPageRoutingModule": () => (/* binding */ LocationMapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _location_map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-map.page */ 1584);




const routes = [
    {
        path: '',
        component: _location_map_page__WEBPACK_IMPORTED_MODULE_0__.LocationMapPage
    }
];
let LocationMapPageRoutingModule = class LocationMapPageRoutingModule {
};
LocationMapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocationMapPageRoutingModule);



/***/ }),

/***/ 8088:
/*!***********************************************************!*\
  !*** ./src/app/views/location-map/location-map.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationMapPageModule": () => (/* binding */ LocationMapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _location_map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-map-routing.module */ 6562);
/* harmony import */ var _location_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-map.page */ 1584);







let LocationMapPageModule = class LocationMapPageModule {
};
LocationMapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _location_map_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationMapPageRoutingModule
        ],
        declarations: [_location_map_page__WEBPACK_IMPORTED_MODULE_1__.LocationMapPage]
    })
], LocationMapPageModule);



/***/ }),

/***/ 1584:
/*!*********************************************************!*\
  !*** ./src/app/views/location-map/location-map.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationMapPage": () => (/* binding */ LocationMapPage)
/* harmony export */ });
/* harmony import */ var C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _location_map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-map.page.html?ngResource */ 2752);
/* harmony import */ var _location_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-map.page.scss?ngResource */ 4115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);








let LocationMapPage = class LocationMapPage {
  constructor(geolocation, loadingCtrl, alertCtrl) {
    this.geolocation = geolocation;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl; // marcadores

    this.marker = []; // config icon

    this.icon = {
      icon: leaflet__WEBPACK_IMPORTED_MODULE_4__.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 40],
        iconUrl: 'assets/img/map_markers/marker-icon.png',
        shadowUrl: 'assets/img/map_markers/marker-shadow.png'
      })
    }; // coordenadas

    this.coords = []; // cargando...

    this.loading = this.loadingCtrl.create();
  }

  ngOnInit() {
    // mostrar mapa
    this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4__.Map('map');
    leaflet__WEBPACK_IMPORTED_MODULE_4__.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'ovnisolutions.com'
    }).addTo(this.map);
    this.map.on("click", e => {
      this.addLocation(e);
    });
  }

  ionViewDidEnter() {
    this.locate();
  }

  locate() {
    var _this = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (yield _this.loading).present();
      const coordinates = yield (yield _this.geolocation.getCurrentPosition()).coords; // dar propiedades de mapa al div mapId, centrar a la zona y dar aumento

      _this.map.setView([coordinates.latitude, coordinates.longitude], 17); // cerrar cargando


      (yield _this.loading).dismiss();
    })();
  }

  addMyLocation() {
    var _this2 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const coordinates = yield (yield _this2.geolocation.getCurrentPosition()).coords;
      _this2.coords = {
        lat: coordinates.latitude,
        long: coordinates.longitude
      };

      _this2.map.removeLayer(_this2.marker);

      _this2.marker = leaflet__WEBPACK_IMPORTED_MODULE_4__.marker([coordinates.latitude, coordinates.longitude], _this2.icon).addTo(_this2.map);

      _this2.map.setView([coordinates.latitude, coordinates.longitude], 17);
    })();
  }

  addLocation(data) {
    var _this3 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.coords = data.latlng;

      _this3.map.removeLayer(_this3.marker);

      _this3.marker = leaflet__WEBPACK_IMPORTED_MODULE_4__.marker([data.latlng.lat, data.latlng.lng], _this3.icon).addTo(_this3.map); // add the marker onclick
    })();
  }

  confirm() {
    var _this4 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this4.coords);

      if (_this4.coords.lat) {
        _this4.alertMsg(true);
      } else {
        _this4.alertMsg(false);
      }
    })();
  }

  alertMsg(type) {
    var _this5 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertCtrl.create({
        header: 'Debe seleccionar algun sitio para su pedido',
        buttons: ['Aceptar']
      });
      const saveAlert = yield _this5.alertCtrl.create({
        header: '¿Está seguro de seleccionar esta dirección?',
        buttons: [{
          text: 'Aceptar',
          role: 'confirm',
          handler: function () {
            var _ref = (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              console.log('guardado');
            });

            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }, {
          text: 'Cancelar',
          role: 'cancel'
        }]
      });

      if (type) {
        saveAlert.present();
      } else {
        alert.present();
      }
    })();
  }
  /** Remove map when we have multiple map object */


  ngOnDestroy() {
    this.map.remove();
    console.log('mapa cerrado');
  }

};

LocationMapPage.ctorParameters = () => [{
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}];

LocationMapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-location-map',
  template: _location_map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_location_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LocationMapPage);


/***/ }),

/***/ 4115:
/*!**********************************************************************!*\
  !*** ./src/app/views/location-map/location-map.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi1tYXAucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2752:
/*!**********************************************************************!*\
  !*** ./src/app/views/location-map/location-map.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"custom\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>locationMap</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"addMyLocation()\">\n    <ion-fab-button>\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"confirm()\">\n    <ion-fab-button>\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <div id=\"map\" style=\"width: 100%; height: 100%\"></div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_location-map_location-map_module_ts.js.map