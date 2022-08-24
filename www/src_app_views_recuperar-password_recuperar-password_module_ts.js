"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_recuperar-password_recuperar-password_module_ts"],{

/***/ 5491:
/*!*******************************************************************************!*\
  !*** ./src/app/views/recuperar-password/recuperar-password-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarPasswordPageRoutingModule": () => (/* binding */ RecuperarPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recuperar_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar-password.page */ 1784);




const routes = [
    {
        path: '',
        component: _recuperar_password_page__WEBPACK_IMPORTED_MODULE_0__.RecuperarPasswordPage
    }
];
let RecuperarPasswordPageRoutingModule = class RecuperarPasswordPageRoutingModule {
};
RecuperarPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecuperarPasswordPageRoutingModule);



/***/ }),

/***/ 5565:
/*!***********************************************************************!*\
  !*** ./src/app/views/recuperar-password/recuperar-password.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarPasswordPageModule": () => (/* binding */ RecuperarPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _recuperar_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar-password-routing.module */ 5491);
/* harmony import */ var _recuperar_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar-password.page */ 1784);







let RecuperarPasswordPageModule = class RecuperarPasswordPageModule {
};
RecuperarPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recuperar_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecuperarPasswordPageRoutingModule
        ],
        declarations: [_recuperar_password_page__WEBPACK_IMPORTED_MODULE_1__.RecuperarPasswordPage]
    })
], RecuperarPasswordPageModule);



/***/ }),

/***/ 1784:
/*!*********************************************************************!*\
  !*** ./src/app/views/recuperar-password/recuperar-password.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarPasswordPage": () => (/* binding */ RecuperarPasswordPage)
/* harmony export */ });
/* harmony import */ var C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recuperar_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar-password.page.html?ngResource */ 2253);
/* harmony import */ var _recuperar_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recuperar-password.page.scss?ngResource */ 8100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authService/auth.service */ 8227);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);








let RecuperarPasswordPage = class RecuperarPasswordPage {
  constructor(tokenService, router, menu, alert, loadCtrlr) {
    this.tokenService = tokenService;
    this.router = router;
    this.menu = menu;
    this.alert = alert;
    this.loadCtrlr = loadCtrlr;
    this.loading = this.loadCtrlr.create();
  }

  ngOnInit() {}

  restart() {
    var _this = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.alertMessage();
    })();
  }

  alertMessage() {
    var _this2 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alert.create({
        header: '¿DESEA REINICIAR LA CONTRASEÑA?',
        message: 'Se reiniciará la contraseña e iniciará sesión automáticamente.',
        buttons: [{
          text: 'SÍ',
          role: 'confirm',
          handler: function () {
            var _ref = (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              (yield _this2.loading).present();
              const data = {
                email: 'user',
                password: '123456'
              };
              const info = yield _this2.tokenService.loguearse(data).subscribe( /*#__PURE__*/function () {
                var _ref2 = (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                  if (res.users) {
                    const users = res.users;
                    const usuario = users.find(item => (item.user === data.email || item.email === data.email) && item.password === data.password);

                    if (usuario) {
                      (yield _this2.loading).dismiss();
                      localStorage.setItem('token', usuario.token);
                      localStorage.setItem('name', usuario.Usuario);
                      localStorage.setItem('lastnames', usuario.lastnames);
                      yield _this2.router.navigateByUrl('/home');
                    } else {
                      _this2.alertError('Por favor verifique sus datos de usuario.');
                    }
                  } else {
                    _this2.alertError('Error al traer información del servidor.');
                  }
                });

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());
            });

            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }, {
          text: 'NO',
          role: 'cancel'
        }]
      });
      yield alert.present();
    })();
  }

  alertError(msg) {
    var _this3 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alert.create({
        header: '¡ERROR!',
        message: msg,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

};

RecuperarPasswordPage.ctorParameters = () => [{
  type: src_app_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

RecuperarPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-recuperar-password',
  template: _recuperar_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_recuperar_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RecuperarPasswordPage);


/***/ }),

/***/ 8100:
/*!**********************************************************************************!*\
  !*** ./src/app/views/recuperar-password/recuperar-password.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "button {\n  background-color: var(--ion-color-custom);\n  border-radius: 3px;\n  color: var(--ion-color-custom-contrast);\n  font-size: 15px;\n  padding: 15px;\n}\n\n.container {\n  text-align: center;\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3VwZXJhci1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6InJlY3VwZXJhci1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1jdXN0b20pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWN1c3RvbS1jb250cmFzdCk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICB0b3A6IDUwJTtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 2253:
/*!**********************************************************************************!*\
  !*** ./src/app/views/recuperar-password/recuperar-password.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"custom\">\r\n    <ion-title>Recuperar Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <button ion-button sizeXs=\"12\" (click)=\"restart()\">RECUPERAR CONTRASEÑA</button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_recuperar-password_recuperar-password_module_ts.js.map