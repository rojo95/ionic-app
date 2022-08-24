"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_views_customers_customers_module_ts"],{

/***/ 9021:
/*!*************************************************************!*\
  !*** ./src/app/views/customers/customers-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPageRoutingModule": () => (/* binding */ CustomersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _customers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.page */ 6004);




const routes = [
    {
        path: '',
        component: _customers_page__WEBPACK_IMPORTED_MODULE_0__.CustomersPage
    }
];
let CustomersPageRoutingModule = class CustomersPageRoutingModule {
};
CustomersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomersPageRoutingModule);



/***/ }),

/***/ 5354:
/*!*****************************************************!*\
  !*** ./src/app/views/customers/customers.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPageModule": () => (/* binding */ CustomersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-routing.module */ 9021);
/* harmony import */ var _customers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.page */ 6004);







let CustomersPageModule = class CustomersPageModule {
};
CustomersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomersPageRoutingModule
        ],
        declarations: [_customers_page__WEBPACK_IMPORTED_MODULE_1__.CustomersPage]
    })
], CustomersPageModule);



/***/ }),

/***/ 6004:
/*!***************************************************!*\
  !*** ./src/app/views/customers/customers.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPage": () => (/* binding */ CustomersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _customers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.page.html?ngResource */ 7968);
/* harmony import */ var _customers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.page.scss?ngResource */ 7524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);







let CustomersPage = class CustomersPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.customers = [];
    }
    ngOnInit() {
        this.permission = true;
        this.getCustomers().subscribe(res => {
            this.customers = res;
            this.searchedCustomer = this.customers;
        });
    }
    goToHome() {
        this.router.navigate(['/home']);
    }
    getCustomers() {
        return this.http
            .get('assets/files/customers.json')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data));
    }
    searchCustomer(event) {
        const text = event.target.value;
        this.searchedCustomer = this.customers;
        if (text && text.trim() !== '') {
            this.searchedCustomer = this.searchedCustomer.filter((user) => (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1));
        }
    }
};
CustomersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
CustomersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-customers',
        template: _customers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomersPage);



/***/ }),

/***/ 7524:
/*!****************************************************************!*\
  !*** ./src/app/views/customers/customers.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".text-primary {\n  color: var(--ion-color-custom);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGIiwiZmlsZSI6ImN1c3RvbWVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1wcmltYXJ5IHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWN1c3RvbSk7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7968:
/*!****************************************************************!*\
  !*** ./src/app/views/customers/customers.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"custom\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>customers</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"custom\">\r\n    <ion-searchbar placeholder=\"Buscar\" animated=\"\" (ionChange)=\"searchCustomer($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list *ngIf=\"permission\">\r\n    <ion-list-header> Conversaciones Recientes </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let customer of searchedCustomer\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/customers/{{customer.image}}.png\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{customer.name}}</h2>\r\n        <h3>{{customer.state}}</h3>\r\n        <p>{{customer.description}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-label *ngIf=\"!permission\">No posee permisos para ver a los clientes.</ion-label>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_customers_customers_module_ts.js.map