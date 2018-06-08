(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; display: flex; justify-content: center;\">\n  <div style=\"width: 960px\">\n    <div style=\"display: flex; margin: 0; padding: 0\">\n      <div>\n        <h3 style=\"margin: 5px; color: #33e\">\n          Кількість стратегій\n        </h3>\n        <div>\n          <mat-form-field appearance=\"outline\" style=\"margin: 5px\">\n            <mat-label>Гравець 1</mat-label>\n            <input [(ngModel)]=\"playerOneCount\" type=\"number\" matInput>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" style=\"margin: 5px\">\n            <mat-label>Гравець 2</mat-label>\n            <input [(ngModel)]=\"playerTwoCount\" type=\"number\" matInput>\n          </mat-form-field>\n        </div>\n      </div>\n      <div>\n        <h3 style=\"margin: 5px; color: #33e\">\n          Діапазон рандому\n        </h3>\n        <div>\n          <mat-form-field appearance=\"outline\" style=\"margin: 5px\">\n            <mat-label>Від</mat-label>\n            <input [(ngModel)]=\"numbersMinimum\" type=\"number\" matInput>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" style=\"margin: 5px\">\n            <mat-label>До</mat-label>\n            <input [(ngModel)]=\"numbersMaximum\" type=\"number\" matInput>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <div style=\"display: flex; margin: 5px; padding-bottom: 40px\">\n      <button mat-raised-button color=\"primary\" (click)=\"generateMatrix()\" style=\"margin: 5px\">Згенерувати матрицю</button>\n      <button mat-raised-button (click)=\"generateValues()\" style=\"margin: 5px\">Згенерувати платежі</button>\n    </div>\n    <mat-accordion *ngIf=\"matrix.playerOneCount > 0 && matrix.playerTwoCount > 0\">\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Матриця гри\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-matrix-auto-solver></app-matrix-auto-solver>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Спростити гру самому\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-matrix-user-solver></app-matrix-user-solver>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Функції реакції\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-matrix-reaction-function></app-matrix-reaction-function>\n      </mat-expansion-panel>\n      <!--<mat-expansion-panel>-->\n        <!--<mat-expansion-panel-header>-->\n          <!--<mat-panel-title>-->\n            <!--Ціна гри-->\n          <!--</mat-panel-title>-->\n        <!--</mat-expansion-panel-header>-->\n        <!--<app-matrix-game-cost></app-matrix-game-cost>-->\n      <!--</mat-expansion-panel>-->\n    </mat-accordion>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matrix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix.service */ "./src/app/matrix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(matrix) {
        this.matrix = matrix;
        this.playerOneCount = 5;
        this.playerTwoCount = 5;
        this.numbersMinimum = -10;
        this.numbersMaximum = 10;
    }
    AppComponent.prototype.generateMatrix = function () {
        this.matrix.initializeArray(this.playerOneCount, this.playerTwoCount);
    };
    AppComponent.prototype.generateValues = function () {
        if (this.matrix.playerOneCount === 0 || this.matrix.playerTwoCount === 0) {
            return;
        }
        this.matrix.initializeValues(this.numbersMinimum, this.numbersMaximum);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_matrix_service__WEBPACK_IMPORTED_MODULE_1__["MatrixService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matrix/matrix.component */ "./src/app/matrix/matrix.component.ts");
/* harmony import */ var _matrix_auto_solver_matrix_auto_solver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./matrix-auto-solver/matrix-auto-solver.component */ "./src/app/matrix-auto-solver/matrix-auto-solver.component.ts");
/* harmony import */ var _matrix_user_solver_matrix_user_solver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matrix-user-solver/matrix-user-solver.component */ "./src/app/matrix-user-solver/matrix-user-solver.component.ts");
/* harmony import */ var _matrix_reaction_function_matrix_reaction_function_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./matrix-reaction-function/matrix-reaction-function.component */ "./src/app/matrix-reaction-function/matrix-reaction-function.component.ts");
/* harmony import */ var _matrix_game_cost_matrix_game_cost_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./matrix-game-cost/matrix-game-cost.component */ "./src/app/matrix-game-cost/matrix-game-cost.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_6__["MatrixComponent"],
                _matrix_auto_solver_matrix_auto_solver_component__WEBPACK_IMPORTED_MODULE_7__["MatrixAutoSolverComponent"],
                _matrix_user_solver_matrix_user_solver_component__WEBPACK_IMPORTED_MODULE_8__["MatrixUserSolverComponent"],
                _matrix_reaction_function_matrix_reaction_function_component__WEBPACK_IMPORTED_MODULE_9__["MatrixReactionFunctionComponent"],
                _matrix_game_cost_matrix_game_cost_component__WEBPACK_IMPORTED_MODULE_10__["MatrixGameCostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/matrix-auto-solver/matrix-auto-solver.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/matrix-auto-solver/matrix-auto-solver.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/matrix-auto-solver/matrix-auto-solver.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/matrix-auto-solver/matrix-auto-solver.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ng-container *ngIf=\"matrixSteps.length == 0\">\n    <app-matrix [matrix]=\"matrix\" [disabled]=\"false\"></app-matrix> <br />\n    <button mat-raised-button color=\"primary\" (click)=\"Solve()\">Solve</button>\n  </ng-container>\n  <ng-container *ngIf=\"matrixSteps.length > 0\">\n    <div *ngFor=\"let matr of matrixSteps; let i = index\">\n      <h3 *ngIf=\"i+1 != matrixSteps.length\">Step #{{ i+1 }}</h3>\n      <h3 *ngIf=\"i+1 == matrixSteps.length\">Latest step</h3>\n      <app-matrix [matrix]=\"matr\" [disabled]=\"true\"></app-matrix>\n      <br />\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/matrix-auto-solver/matrix-auto-solver.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/matrix-auto-solver/matrix-auto-solver.component.ts ***!
  \********************************************************************/
/*! exports provided: MatrixAutoSolverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixAutoSolverComponent", function() { return MatrixAutoSolverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matrix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matrix.service */ "./src/app/matrix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatrixAutoSolverComponent = /** @class */ (function () {
    function MatrixAutoSolverComponent(matrixService) {
        var _this = this;
        this.matrixService = matrixService;
        this.matrixSteps = [];
        this.matrix = [[0]];
        matrixService.OnChange.subscribe(function (x) {
            _this.matrix = JSON.parse(JSON.stringify(matrixService.matrix));
            _this.matrixSteps = [];
        });
    }
    MatrixAutoSolverComponent.prototype.ngOnInit = function () {
    };
    MatrixAutoSolverComponent.prototype.addToHistory = function (matrix) {
        this.matrixSteps.push(JSON.parse(JSON.stringify(matrix)));
    };
    MatrixAutoSolverComponent.prototype.rowClicked = function (i) {
        this.matrix.splice(i, 1);
    };
    MatrixAutoSolverComponent.prototype.colClicked = function (i) {
        this.matrix.forEach(function (x) {
            x.splice(i, 1);
        });
    };
    MatrixAutoSolverComponent.prototype.Solve = function () {
        var ok = true;
        while (ok) {
            ok = false;
            for (var x = 0; x < this.matrix.length; x++) {
                for (var y = x + 1; y < this.matrix.length; y++) {
                    var b1 = false, b2 = false;
                    for (var j = 0; j < this.matrix[x].length; j++) {
                        if (this.matrix[x][j].value1 < this.matrix[y][j].value1) {
                            b1 = true;
                        }
                        else if (this.matrix[x][j].value1 > this.matrix[y][j].value1) {
                            b2 = true;
                        }
                    }
                    if (b1 && !b2) {
                        this.matrix[x].forEach(function (xd) { return xd.removed = true; });
                        this.matrix[y].forEach(function (xd) { return xd.highlighted = true; });
                        this.addToHistory(this.matrix);
                        this.rowClicked(x);
                    }
                    else if (b2 && !b1) {
                        this.matrix[y].forEach(function (xd) { return xd.removed = true; });
                        this.matrix[x].forEach(function (xd) { return xd.highlighted = true; });
                        this.addToHistory(this.matrix);
                        this.rowClicked(y);
                    }
                    if (b1 != b2) {
                        ok = true;
                        this.matrix.forEach(function (row) {
                            row.forEach(function (col) {
                                col.highlighted = false;
                                col.removed = false;
                            });
                        });
                    }
                }
            }
            var _loop_1 = function (x) {
                var _loop_2 = function (y) {
                    var b1 = false, b2 = false;
                    for (var j = 0; j < this_1.matrix.length; j++) {
                        if (this_1.matrix[j][x].value2 < this_1.matrix[j][y].value2) {
                            b1 = true;
                        }
                        else if (this_1.matrix[j][x].value2 > this_1.matrix[j][y].value2) {
                            b2 = true;
                        }
                    }
                    if (b1 && !b2) {
                        this_1.matrix.forEach(function (xd) { return xd[x].removed = true; });
                        this_1.matrix.forEach(function (xd) { return xd[y].highlighted = true; });
                        this_1.addToHistory(this_1.matrix);
                        this_1.colClicked(x);
                    }
                    else if (b2 && !b1) {
                        this_1.matrix.forEach(function (xd) { return xd[y].removed = true; });
                        this_1.matrix.forEach(function (xd) { return xd[x].highlighted = true; });
                        this_1.addToHistory(this_1.matrix);
                        this_1.colClicked(y);
                    }
                    if (b1 !== b2) {
                        ok = true;
                        this_1.matrix.forEach(function (row) {
                            row.forEach(function (col) {
                                col.highlighted = false;
                                col.removed = false;
                            });
                        });
                    }
                };
                for (var y = x + 1; y < this_1.matrix[0].length; y++) {
                    _loop_2(y);
                }
            };
            var this_1 = this;
            for (var x = 0; x < this.matrix[0].length; x++) {
                _loop_1(x);
            }
        }
        this.addToHistory(this.matrix);
    };
    MatrixAutoSolverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matrix-auto-solver',
            template: __webpack_require__(/*! ./matrix-auto-solver.component.html */ "./src/app/matrix-auto-solver/matrix-auto-solver.component.html"),
            styles: [__webpack_require__(/*! ./matrix-auto-solver.component.css */ "./src/app/matrix-auto-solver/matrix-auto-solver.component.css")]
        }),
        __metadata("design:paramtypes", [_matrix_service__WEBPACK_IMPORTED_MODULE_1__["MatrixService"]])
    ], MatrixAutoSolverComponent);
    return MatrixAutoSolverComponent;
}());



/***/ }),

/***/ "./src/app/matrix-game-cost/matrix-game-cost.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/matrix-game-cost/matrix-game-cost.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/matrix-game-cost/matrix-game-cost.component.html":
/*!******************************************************************!*\
  !*** ./src/app/matrix-game-cost/matrix-game-cost.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  matrix-game-cost works!\n</p>\n"

/***/ }),

/***/ "./src/app/matrix-game-cost/matrix-game-cost.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/matrix-game-cost/matrix-game-cost.component.ts ***!
  \****************************************************************/
/*! exports provided: MatrixGameCostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixGameCostComponent", function() { return MatrixGameCostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatrixGameCostComponent = /** @class */ (function () {
    function MatrixGameCostComponent() {
    }
    MatrixGameCostComponent.prototype.ngOnInit = function () {
    };
    MatrixGameCostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matrix-game-cost',
            template: __webpack_require__(/*! ./matrix-game-cost.component.html */ "./src/app/matrix-game-cost/matrix-game-cost.component.html"),
            styles: [__webpack_require__(/*! ./matrix-game-cost.component.css */ "./src/app/matrix-game-cost/matrix-game-cost.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MatrixGameCostComponent);
    return MatrixGameCostComponent;
}());



/***/ }),

/***/ "./src/app/matrix-reaction-function/matrix-reaction-function.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/matrix-reaction-function/matrix-reaction-function.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/matrix-reaction-function/matrix-reaction-function.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/matrix-reaction-function/matrix-reaction-function.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <app-matrix [matrix]=\"matrix1\" [disabled]=\"true\"></app-matrix> <br />\n  <app-matrix [matrix]=\"matrix2\" [disabled]=\"true\"></app-matrix>\n</p>\n"

/***/ }),

/***/ "./src/app/matrix-reaction-function/matrix-reaction-function.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/matrix-reaction-function/matrix-reaction-function.component.ts ***!
  \********************************************************************************/
/*! exports provided: MatrixReactionFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixReactionFunctionComponent", function() { return MatrixReactionFunctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matrix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matrix.service */ "./src/app/matrix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatrixReactionFunctionComponent = /** @class */ (function () {
    function MatrixReactionFunctionComponent(matrix) {
        var _this = this;
        this.matrix = matrix;
        matrix.OnChange.subscribe(function (x) {
            _this.matrix1 = JSON.parse(JSON.stringify(matrix.matrix));
            _this.matrix2 = JSON.parse(JSON.stringify(matrix.matrix));
            if (x === 2) {
                _this.matrix1.forEach(function (x) {
                    var maxVal = _this.matrix.minValue - 1;
                    x.forEach(function (val) {
                        maxVal = Math.max(maxVal, val.value1);
                    });
                    x.filter(function (xc) { return xc.value1 === maxVal; }).forEach(function (dat) {
                        dat.highlighted = true;
                    });
                });
                for (var i = 0; i < _this.matrix2[0].length; i++) {
                    var maxVal = _this.matrix.minValue - 1;
                    for (var j = 0; j < _this.matrix2.length; j++) {
                        maxVal = Math.max(_this.matrix2[j][i].value2, maxVal);
                    }
                    for (var j = 0; j < _this.matrix2.length; j++) {
                        if (_this.matrix2[j][i].value2 === maxVal)
                            _this.matrix2[j][i].highlighted = true;
                    }
                }
            }
        });
    }
    MatrixReactionFunctionComponent.prototype.ngOnInit = function () {
    };
    MatrixReactionFunctionComponent.prototype.onChanged = function (event) {
        console.log(event);
    };
    MatrixReactionFunctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matrix-reaction-function',
            template: __webpack_require__(/*! ./matrix-reaction-function.component.html */ "./src/app/matrix-reaction-function/matrix-reaction-function.component.html"),
            styles: [__webpack_require__(/*! ./matrix-reaction-function.component.css */ "./src/app/matrix-reaction-function/matrix-reaction-function.component.css")]
        }),
        __metadata("design:paramtypes", [_matrix_service__WEBPACK_IMPORTED_MODULE_1__["MatrixService"]])
    ], MatrixReactionFunctionComponent);
    return MatrixReactionFunctionComponent;
}());



/***/ }),

/***/ "./src/app/matrix-user-solver/matrix-user-solver.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/matrix-user-solver/matrix-user-solver.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/matrix-user-solver/matrix-user-solver.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/matrix-user-solver/matrix-user-solver.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"matrix\">\n  <h3 *ngIf=\"matrix.length > 1 || matrix[0].length > 1\">Pick a row or a column</h3>\n  <h3 *ngIf=\"!(matrix.length > 1 || matrix[0].length > 1)\">Done</h3>\n  <app-matrix [matrix]=\"matrix\" [disabled]=\"matrixSteps.length > 0\" (changed)=\"onChanged($event)\" (rowClicked)=\"rowClicked($event)\" (colClicked)=\"colClicked($event)\"></app-matrix>\n  <div *ngFor=\"let matr of matrixSteps.reverse(); let i = index\">\n    <h3>Step #{{ matrixSteps.length - i }}</h3>\n    <app-matrix [matrix]=\"matr\" [disabled]=\"true\"></app-matrix>\n    <br />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/matrix-user-solver/matrix-user-solver.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/matrix-user-solver/matrix-user-solver.component.ts ***!
  \********************************************************************/
/*! exports provided: MatrixUserSolverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixUserSolverComponent", function() { return MatrixUserSolverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matrix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matrix.service */ "./src/app/matrix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatrixUserSolverComponent = /** @class */ (function () {
    function MatrixUserSolverComponent(matrixService) {
        var _this = this;
        this.matrixService = matrixService;
        this.matrixSteps = [];
        this.matrix = [[0]];
        matrixService.OnChange.subscribe(function (x) {
            _this.matrix = JSON.parse(JSON.stringify(matrixService.matrix));
            _this.matrixSteps = [];
        });
    }
    MatrixUserSolverComponent.prototype.ngOnInit = function () {
    };
    MatrixUserSolverComponent.prototype.onChanged = function (event) {
        console.log(event);
    };
    MatrixUserSolverComponent.prototype.makeCopyToSteps = function () {
        this.matrixSteps.push(this.matrix);
        return JSON.parse(JSON.stringify(this.matrix));
    };
    MatrixUserSolverComponent.prototype.rowClicked = function (i) {
        if (this.matrix.length === 1)
            return;
        this.matrix[i].forEach(function (x) { return x.removed = true; });
        this.matrix = this.makeCopyToSteps();
        this.matrix.splice(i, 1);
    };
    MatrixUserSolverComponent.prototype.colClicked = function (i) {
        if (this.matrix[0].length === 1)
            return;
        this.matrix.forEach(function (x) {
            x[i].removed = true;
        });
        this.matrix = this.makeCopyToSteps();
        this.matrix.forEach(function (x) {
            x.splice(i, 1);
        });
    };
    MatrixUserSolverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matrix-user-solver',
            template: __webpack_require__(/*! ./matrix-user-solver.component.html */ "./src/app/matrix-user-solver/matrix-user-solver.component.html"),
            styles: [__webpack_require__(/*! ./matrix-user-solver.component.css */ "./src/app/matrix-user-solver/matrix-user-solver.component.css")]
        }),
        __metadata("design:paramtypes", [_matrix_service__WEBPACK_IMPORTED_MODULE_1__["MatrixService"]])
    ], MatrixUserSolverComponent);
    return MatrixUserSolverComponent;
}());



/***/ }),

/***/ "./src/app/matrix.service.ts":
/*!***********************************!*\
  !*** ./src/app/matrix.service.ts ***!
  \***********************************/
/*! exports provided: MatrixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixService", function() { return MatrixService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatrixService = /** @class */ (function () {
    function MatrixService() {
        this.matrix = [[{ value1: 0, value2: 0, highlighted: false, removed: false }]];
        this.playerOneCount = 0;
        this.playerTwoCount = 0;
        this.OnChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    MatrixService.prototype.initializeArray = function (playerOneCount, playerTwoCount) {
        var _this = this;
        this.playerOneCount = playerOneCount;
        this.playerTwoCount = playerTwoCount;
        this.matrix = new Array(playerOneCount).fill(0).map(function (x) { return new Array(playerTwoCount).fill(0).map(function (xd) {
            return { value1: 0, value2: 0, highlighted: false, removed: false };
        }); });
        setTimeout(function (x) {
            _this.OnChange.next(1);
        }, 0);
    };
    MatrixService.prototype.initializeValues = function (from, to) {
        var _this = this;
        this.minValue = from;
        this.maxValue = to;
        this.matrix.forEach(function (row) {
            row.forEach(function (col) {
                col.value1 = _this.getRandomInt(from, to);
                col.value2 = _this.getRandomInt(from, to);
                col.highlighted = false;
            });
        });
        this.OnChange.next(2);
    };
    MatrixService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    MatrixService.prototype.matrixChanged = function () {
        this.OnChange.next(2);
    };
    MatrixService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MatrixService);
    return MatrixService;
}());



/***/ }),

/***/ "./src/app/matrix/matrix.component.css":
/*!*********************************************!*\
  !*** ./src/app/matrix/matrix.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  background-color: white;\r\n}\r\n\r\ntr {\r\n  height: 40px;\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n}\r\n\r\n.selected {\r\n  background-color: lawngreen;\r\n}\r\n\r\n.removed {\r\n  background-color: #c60006;\r\n}\r\n\r\ntable, th, td {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 1px dashed black;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr td:first-child, table tr:first-child {\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  background-color: #eee;\r\n  min-width: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/matrix/matrix.component.html":
/*!**********************************************!*\
  !*** ./src/app/matrix/matrix.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"\" *ngIf=\"matrix && matrix.length != 0 && matrix[0].length != 0\">\n  <tr>\n    <td></td>\n    <td *ngFor=\"let row of matrix[0]; let i = index\" (click)=\"clickCol(i)\">B<sub>{{ i+1 }}</sub></td>\n  </tr>\n  <tr *ngFor=\"let row of matrix; let i = index\">\n    <td (click)=\"clickRow(i)\">A<sub>{{ i+1 }}</sub></td>\n    <td *ngFor=\"let item of row; let j = index\" style=\"word-break: keep-all\" [class.selected]=\"matrix[i][j].highlighted\" nowrap [class.removed]=\"matrix[i][j].removed\">\n      <div style=\"max-width: 100%; text-align: center;\">\n        <input style=\"text-align: center; max-width: 50%\" [disabled]=\"disabled\" name=\"123\" [(ngModel)]=\"matrix[i][j].value1\" (input)=\"onChange(i, j, 1, $event)\" type=\"number\" matInput>\n        <span style=\"text-align: center\">:</span>\n        <input style=\"text-align: center; max-width: 50%\" [disabled]=\"disabled\" name=\"321\" [(ngModel)]=\"matrix[i][j].value2\" (input)=\"onChange(i, j, 2, $event)\" type=\"number\" matInput>\n      </div>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/matrix/matrix.component.ts":
/*!********************************************!*\
  !*** ./src/app/matrix/matrix.component.ts ***!
  \********************************************/
/*! exports provided: MatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixComponent", function() { return MatrixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matrix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matrix.service */ "./src/app/matrix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatrixComponent = /** @class */ (function () {
    function MatrixComponent(matrixService) {
        this.matrixService = matrixService;
        this.disabled = false;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.colClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MatrixComponent.prototype.ngOnInit = function () {
    };
    MatrixComponent.prototype.onChange = function (x, y, type, event) {
        var value = parseInt(event.target.value, 10);
        this.changed.emit({ x: x, y: y, value: value });
        this.matrixService.matrixChanged();
    };
    MatrixComponent.prototype.clickRow = function (i) {
        this.rowClicked.emit(i);
    };
    MatrixComponent.prototype.clickCol = function (i) {
        this.colClicked.emit(i);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MatrixComponent.prototype, "matrix", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MatrixComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MatrixComponent.prototype, "changed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MatrixComponent.prototype, "rowClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MatrixComponent.prototype, "colClicked", void 0);
    MatrixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matrix',
            template: __webpack_require__(/*! ./matrix.component.html */ "./src/app/matrix/matrix.component.html"),
            styles: [__webpack_require__(/*! ./matrix.component.css */ "./src/app/matrix/matrix.component.css")]
        }),
        __metadata("design:paramtypes", [_matrix_service__WEBPACK_IMPORTED_MODULE_1__["MatrixService"]])
    ], MatrixComponent);
    return MatrixComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\nodejs\game-university\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map