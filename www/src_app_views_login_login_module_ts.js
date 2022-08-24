"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_login_login_module_ts"],{

/***/ 696:
/*!*****************************************************!*\
  !*** ./src/app/views/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 9015);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 265:
/*!*********************************************!*\
  !*** ./src/app/views/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 696);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 9015);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 9015:
/*!*******************************************!*\
  !*** ./src/app/views/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6117);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 5827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authService/auth.service */ 8227);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);








 // prueba


let LoginPage = class LoginPage {
  constructor(tokenService, router, menu, alert, loadCtrlr, platform, formBuilder) {
    this.tokenService = tokenService;
    this.router = router;
    this.menu = menu;
    this.alert = alert;
    this.loadCtrlr = loadCtrlr;
    this.platform = platform;
    this.formBuilder = formBuilder;
    this.form = this.formBuilder.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('user', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)])
    });
    this.loading = this.loadCtrlr.create();
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
  }

  ngOnInit() {}

  overrideHardwareBackAction($event) {
    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield void 0; // Do nothing
    })();
  }

  ingresar() {
    var _this = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        email: _this.form.get('email')?.value,
        password: _this.form.get('password')?.value
      };

      if (!_this.form.invalid) {
        (yield _this.loading).present();
        const info = yield _this.tokenService.loguearse(data).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            if (res.users) {
              const users = res.users;
              const usuario = users.find(item => (item.user === data.email || item.email === data.email) && item.password === data.password);

              if (usuario) {
                _this.menu.enable(true);

                (yield _this.loading).dismiss();
                localStorage.setItem('token', usuario.token);
                localStorage.setItem('name', usuario.Usuario);
                localStorage.setItem('lastnames', usuario.lastnames);
                yield _this.router.navigate(['/home']);
              } else {
                _this.alertMessage('Por favor verifique sus datos de usuario.');
              }
            } else {
              _this.alertMessage('Error al traer información del servidor');
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    })();
  }

  alertMessage(msg) {
    var _this2 = this;

    return (0,C_laragon_www_appIonicPruebas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alert.create({
        header: 'ERROR AL INGRESAR',
        message: msg + '.',
        buttons: ['Aceptar']
      });
      yield alert.present();
    })();
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

};

LoginPage.ctorParameters = () => [{
  type: src_app_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 5827:
/*!********************************************************!*\
  !*** ./src/app/views/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".container {\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  top: 43%;\n  margin: 20px;\n}\n\n.btn {\n  border-radius: 3px;\n  background-color: var(--ion-color-custom);\n  color: var(--ion-color-custom-contrast);\n  font-size: 15px;\n  padding: 10px;\n  width: 120px;\n  margin-top: 10px;\n}\n\n.btn:disabled {\n  background-color: var(--ion-color-custom-disable);\n  color: rgba(var(--ion-color-custom-rgb), 0.25);\n}\n\n.button-div {\n  text-align: right;\n  margin-right: 20px;\n  margin-top: 20px;\n  width: 50%;\n}\n\n.title {\n  position: absolute;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\nimg {\n  border-radius: 50%;\n  width: 180px;\n}\n\n.link {\n  font-size: medium;\n  background-color: transparent;\n  color: var(--ion-color-custom);\n  text-decoration: none;\n}\n\n.container-buttons {\n  display: flex;\n}\n\n.error {\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlEQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogNDMlO1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1jdXN0b20pO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY3VzdG9tLWNvbnRyYXN0KTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ0bjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWN1c3RvbS1kaXNhYmxlKTtcclxuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItY3VzdG9tLXJnYiksIDAuMjUpO1xyXG59XHJcblxyXG4uYnV0dG9uLWRpdiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbi5saW5rICB7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jdXN0b20pO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6117:
/*!********************************************************!*\
  !*** ./src/app/views/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n\r\n  <div class=\"title\">\r\n      <h2>\r\n        LOGIN MAMÓN\r\n      </h2>\r\n      <img src=\"assets/img/dios_maquina.png\" alt=\"\" srcset=\"\">\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"ingresar()\" novalidate>\r\n      <div>\r\n        <ion-item lines=\"full\">\r\n          <ion-label position=\"floating\">Correo/Usuario</ion-label>\r\n          <ion-input name=\"user\" class=\"text\" required=\"\" formControlName=\"email\"></ion-input>\r\n        </ion-item>\r\n        <span class=\"error\" *ngIf=\"form.get('email').hasError('required')\">El campo es requerido</span>\r\n        <span class=\"error\" *ngIf=\"form.get('email').hasError('minlength')\">El campo es demasiado corto</span>\r\n        <ion-item lines=\"full\">\r\n          <ion-label position=\"floating\">Contraseña</ion-label>\r\n          <ion-input type=\"password\"  name=\"password\" class=\"text\" required=\"\" formControlName=\"password\"></ion-input>\r\n        </ion-item>\r\n        <span class=\"error\" *ngIf=\"form.get('password').hasError('required')\">El campo es requerido</span>\r\n        <span class=\"error\" *ngIf=\"form.get('password').hasError('minlength')\">El campo es demasiado corto</span>\r\n      </div>\r\n      <div class=\"container-buttons\">\r\n        <div class=\"col\">\r\n          <button class=\"btn\" ion-button color=\"primary\" [disabled]=\"form.invalid\">INGRESAR</button>\r\n        </div>\r\n        <div class=\"button-div\">\r\n          <a routerLink=\"/recuperar-password\" class=\"link\">\r\n            recuperar clave\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <br>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_login_login_module_ts.js.map