(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tabs_modules_role_role_module_ts"],{

/***/ 47720:
/*!********************************************************************!*\
  !*** ./src/app/tabs/modules/role/role-edit/role-edit.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleEditComponent": function() { return /* binding */ RoleEditComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/role.service */ 66888);
/* harmony import */ var _utils_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/services/toast.service */ 31481);
/* harmony import */ var _utils_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/services/loading.service */ 53689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _utils_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/header/header.component */ 69475);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _utils_assing_tasks_assing_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/assing-tasks/assing-tasks.component */ 2649);
















function RoleEditComponent_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const validation_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](validation_r2.message);
} }
function RoleEditComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, RoleEditComponent_ng_container_12_div_1_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} if (rf & 2) {
    const validation_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r0.newRole.get("description").hasError(validation_r2.type) && (ctx_r0.newRole.get("description").dirty || ctx_r0.newRole.get("description").touched));
} }
function RoleEditComponent_ion_card_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, " Listado de Permisos de Aprobacion por Roll");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "app-assing-tasks", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("newPermits", function RoleEditComponent_ion_card_31_Template_app_assing_tasks_newPermits_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r5.onSubmitPermits($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("id", ctx_r1.id)("permits", ctx_r1.permits);
} }
class RoleEditComponent {
    constructor(fb, route, roleService, toastService, loadingService, router) {
        this.fb = fb;
        this.route = route;
        this.roleService = roleService;
        this.toastService = toastService;
        this.loadingService = loadingService;
        this.router = router;
        this.id = '';
        this.permits = [];
        this.loading = false;
        this.validation_messages = {
            'description': [
                { type: 'required', message: 'Descripcion es requerida.' },
            ],
            'canApprove': [
                { type: 'required', message: 'Aprobar es requerido.' },
            ],
            'active': [
                { type: 'required', message: 'Activo es requerido.' },
            ]
        };
    }
    ngOnInit() {
        this.newRole = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            canApprove: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            active: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
        this.route.params.subscribe((params) => {
            this.loading = true;
            if ('id' in params) {
                console.log(params);
                this.id = params.id;
                this.roleService.get(this.id).subscribe((currentRole) => {
                    this.newRole.controls.description.setValue(currentRole.description);
                    this.newRole.controls.canApprove.setValue(currentRole.canApprove);
                    this.newRole.controls.active.setValue(currentRole.active);
                    this.roleService.getAssingPermits(this.id).subscribe((response) => {
                        console.log({ response });
                        if (response) {
                            this.permits = [...response];
                        }
                        console.log(this.permits);
                        this.loading = false;
                        this.loadingService.close();
                    });
                });
            }
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingService.presentLoading('Guardando...');
            const roleBody = this.newRole.value;
            if (this.id) {
                this.roleService.update(this.id, roleBody).subscribe((response) => {
                    console.log({ response });
                    this.loadingService.close();
                    this.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');
                    this.router.navigateByUrl('/app/role');
                }, (err) => {
                    console.log({ err });
                    this.loadingService.close();
                    this.toastService.show('Error', err, 'error');
                });
            }
            else {
                this.roleService.add(roleBody).subscribe((response) => {
                    console.log({ response });
                    this.loadingService.close();
                    this.toastService.show('Guardado Correctamente', 'Se ha guardado correctamente', 'success');
                    this.router.navigateByUrl('/app/role');
                }, (err) => {
                    console.log({ err });
                    this.loadingService.close();
                    this.toastService.show('Error', err, 'error');
                });
            }
        });
    }
    onSubmitPermits(permits) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (permits.length <= 0) {
                this.toastService.show('Error', 'Tiene que seleccionar al menos un permiso', 'error');
            }
            else {
                yield this.loadingService.presentLoading('Guardando Permisos');
                try {
                    yield this.roleService.assingPermits(this.id, permits).toPromise();
                    this.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');
                    this.loadingService.close();
                }
                catch (error) {
                    this.toastService.show('Error', 'No se pudieron guardar los permisos', 'error');
                    this.loadingService.close();
                }
            }
        });
    }
}
RoleEditComponent.??fac = function RoleEditComponent_Factory(t) { return new (t || RoleEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_utils_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_utils_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
RoleEditComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: RoleEditComponent, selectors: [["app-role-edit"]], decls: 32, vars: 6, consts: [[3, "titulo", "backButton"], [1, "ion-padding"], [3, "formGroup"], ["size-xs", "12", "size-md", "6", "size-lg", "4", "size-xl", "8", "offset-xl", "2"], ["position", "floating"], ["required", "", "formControlName", "description"], [1, "error-container"], [4, "ngFor", "ngForOf"], ["color", "danger"], ["formControlName", "canApprove", "slot", "start"], ["formControlName", "active", "slot", "start"], ["size", "12"], ["expand", "block", "fill", "clear", "shape", "round", 3, "disabled", "click"], [4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["name", "information-circle-outline"], [3, "id", "permits", "newPermits"]], template: function RoleEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "ion-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Descripcion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](10, "ion-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](12, RoleEditComponent_ng_container_12_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](16, "Aprobar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "ion-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](19, "ion-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "ion-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](26, "ion-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function RoleEditComponent_Template_ion_button_click_29_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](30, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, RoleEditComponent_ion_card_31_Template, 7, 2, "ion-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("titulo", ctx.id ? "Editar Rol" : "Crear Rol")("backButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.newRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.validation_messages.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.newRole.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.id !== "" && !ctx.loading && ctx.newRole.value.canApprove);
    } }, directives: [_utils_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCard, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _utils_assing_tasks_assing_tasks_component__WEBPACK_IMPORTED_MODULE_4__.AssingTasksComponent], styles: [".error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQU47QUFFTTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUFBUiIsImZpbGUiOiJyb2xlLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItY29udGFpbmVyIHtcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBtYXJnaW4gICAgIDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICBkaXNwbGF5ICAgIDogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvciAgICAgIDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICBmb250LXNpemUgIDogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICB9XG4gICAgfVxuICB9Il19 */"] });


/***/ }),

/***/ 19099:
/*!**********************************************************!*\
  !*** ./src/app/tabs/modules/role/role-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePageRoutingModule": function() { return /* binding */ RolePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-edit/role-edit.component */ 47720);
/* harmony import */ var _role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.page */ 43824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _role_page__WEBPACK_IMPORTED_MODULE_1__.RolePage
            },
            {
                path: 'add',
                component: _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_0__.RoleEditComponent
            },
            {
                path: ':id',
                component: _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_0__.RoleEditComponent
            }
        ]
    }
];
class RolePageRoutingModule {
}
RolePageRoutingModule.??fac = function RolePageRoutingModule_Factory(t) { return new (t || RolePageRoutingModule)(); };
RolePageRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: RolePageRoutingModule });
RolePageRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](RolePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 44939:
/*!**************************************************!*\
  !*** ./src/app/tabs/modules/role/role.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePageModule": function() { return /* binding */ RolePageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-routing.module */ 19099);
/* harmony import */ var _role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.page */ 43824);
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils.module */ 24603);
/* harmony import */ var _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-edit/role-edit.component */ 47720);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);










class RolePageModule {
}
RolePageModule.??fac = function RolePageModule_Factory(t) { return new (t || RolePageModule)(); };
RolePageModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: RolePageModule });
RolePageModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _role_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolePageRoutingModule,
            _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](RolePageModule, { declarations: [_role_page__WEBPACK_IMPORTED_MODULE_1__.RolePage, _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_3__.RoleEditComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _role_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolePageRoutingModule,
        _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule] }); })();


/***/ }),

/***/ 43824:
/*!************************************************!*\
  !*** ./src/app/tabs/modules/role/role.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePage": function() { return /* binding */ RolePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/role.service */ 66888);
/* harmony import */ var _utils_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/services/alert.service */ 76449);
/* harmony import */ var _utils_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/services/toast.service */ 31481);
/* harmony import */ var _utils_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/generic-table/generic-table.component */ 46338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _utils_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/header/header.component */ 69475);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);














const _c0 = ["tabla"];
function RolePage_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function RolePage_ng_template_5_Template_ion_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r7); const item_r4 = restoredCtx.item; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r6.onEdit(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function RolePage_ng_template_5_Template_ion_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r7); const item_r4 = restoredCtx.item; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r8.onDelete(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](4, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
const _c1 = function (a0) { return { opciones: a0 }; };
class RolePage {
    constructor(roleService, router, route, alertService, toastService) {
        this.roleService = roleService;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.toastService = toastService;
        this.columns = [];
    }
    ngOnInit() {
        this.columns = [
            {
                attribute: 'description',
                header: 'Descripcion',
                title: true
            },
            {
                attribute: 'canApprove',
                header: 'Puede Aprobar',
                type: 'bool'
            },
            {
                attribute: 'canSuper',
                header: 'Es Administrador',
                type: 'bool'
            },
            {
                attribute: 'active',
                header: 'Esta Activo',
                type: 'bool'
            },
            {
                attribute: 'createdDate',
                header: 'Creado el',
                type: 'date'
            },
            {
                attribute: 'updatedDate',
                header: 'Modificado el',
                type: 'date'
            },
            {
                attribute: '_id',
                header: "Opciones",
                template: "opciones"
            }
        ];
    }
    onAdd() {
        this.router.navigate(['add'], { relativeTo: this.route });
    }
    onEdit(current) {
        this.router.navigate([current._id], { relativeTo: this.route });
    }
    onDelete(current) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.alertService.show('Confirmar Eliminacion', '??Esta Seguro que desea eliminar este usuario?', 'success', () => {
                this.roleService.remove(current._id).subscribe((response) => {
                    this.toastService.show("Eliminado Correctamente", "El usuario fue eliminado correctamente", "success");
                    this.tabla.refresh();
                }, (err) => {
                    console.log({ err });
                    this.toastService.show("Error", err, "error");
                });
            });
        });
    }
}
RolePage.??fac = function RolePage_Factory(t) { return new (t || RolePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_services_role_service__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_utils_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_utils_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
RolePage.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: RolePage, selectors: [["app-role"]], viewQuery: function RolePage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.tabla = _t.first);
    } }, decls: 9, vars: 8, consts: [["titulo", "Roles", 3, "backButton"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "click"], ["name", "add"], [1, "ion-padding"], ["templateOpciones", ""], [3, "service", "templates", "serviceMethod", "columns", "btnAdd"], ["tabla", ""], ["fill", "clear", "shape", "round", 3, "click"], ["name", "create-outline"], ["fill", "clear", "shape", "round", "color", "danger", 3, "click"], ["name", "trash-outline"]], template: function RolePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "ion-fab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "ion-fab-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function RolePage_Template_ion_fab_button_click_2_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, RolePage_ng_template_5_Template, 6, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "app-generic-table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("backButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("service", ctx.roleService)("templates", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction1"](6, _c1, _r0))("serviceMethod", "list")("columns", ctx.columns)("btnAdd", true);
    } }, directives: [_utils_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _utils_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_3__.GenericTableComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLnBhZ2Uuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_tabs_modules_role_role_module_ts-es2015.js.map