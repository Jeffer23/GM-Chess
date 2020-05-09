(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _play_with_computer_settings_play_with_computer_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-with-computer-settings/play-with-computer-settings.component */ "./src/app/play-with-computer-settings/play-with-computer-settings.component.ts");
/* harmony import */ var _play_with_computer_play_with_computer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play-with-computer/play-with-computer.component */ "./src/app/play-with-computer/play-with-computer.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");







const routes = [
    { path: 'playWithComputerSettings', component: _play_with_computer_settings_play_with_computer_settings_component__WEBPACK_IMPORTED_MODULE_2__["PlayWithComputerSettingsComponent"] },
    { path: '', component: _play_with_computer_play_with_computer_component__WEBPACK_IMPORTED_MODULE_3__["PlayWithComputerComponent"] },
    { path: 'playOnline', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");



class AppComponent {
    constructor() {
        this.title = 'JeffChess';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _play_with_computer_play_with_computer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./play-with-computer/play-with-computer.component */ "./src/app/play-with-computer/play-with-computer.component.ts");
/* harmony import */ var _play_with_computer_settings_play_with_computer_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./play-with-computer-settings/play-with-computer-settings.component */ "./src/app/play-with-computer-settings/play-with-computer-settings.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
        _play_with_computer_play_with_computer_component__WEBPACK_IMPORTED_MODULE_12__["PlayWithComputerComponent"],
        _play_with_computer_settings_play_with_computer_settings_component__WEBPACK_IMPORTED_MODULE_13__["PlayWithComputerSettingsComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                    _play_with_computer_play_with_computer_component__WEBPACK_IMPORTED_MODULE_12__["PlayWithComputerComponent"],
                    _play_with_computer_settings_play_with_computer_settings_component__WEBPACK_IMPORTED_MODULE_13__["PlayWithComputerSettingsComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chess.js */ "./node_modules/chess.js/chess.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_1__);



class GameComponent {
    constructor() { }
    ngOnInit() {
        const self = this;
        this.game = new chess_js__WEBPACK_IMPORTED_MODULE_1__();
        this.board = ChessBoard('chessBoard', {
            draggable: true,
            position: 'start',
            onDragStart: function (source, piece, position, orientation) {
                return self.onDragStart(source, piece, position, orientation);
            },
            onDrop: function (source, target, piece, newPos, oldPos, orientation) {
                return self.onDrop(source, target);
            },
            onSnapEnd: function (source, target, piece) {
                self.onSnapEnd();
            }
        });
        this.updateStatus;
    }
    onDragStart(source, piece, position, orientation) {
        // do not pick up pieces if the game is over
        //this.game = new Chess();
        //console.log(this.board);
        if (this.game.game_over())
            return false;
        // only pick up pieces for the side to move
        if ((this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (this.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
            return false;
        }
    }
    onDrop(source, target) {
        // see if the move is legal
        var move = this.game.move({
            from: source,
            to: target,
            promotion: 'q' // NOTE: always promote to a queen for example simplicity
        });
        // illegal move
        if (move === null)
            return 'snapback';
        this.updateStatus;
    }
    onSnapEnd() {
        this.board.position(this.game.fen());
        //console.log(this.board);
    }
    updateStatus() {
        var status = '';
        var moveColor = 'White';
        if (this.game.turn() === 'b') {
            moveColor = 'Black';
        }
        // checkmate?
        if (this.game.in_checkmate()) {
            status = 'Game over, ' + moveColor + ' is in checkmate.';
        }
        // draw?
        else if (this.game.in_draw()) {
            status = 'Game over, drawn position';
        }
        // game still on
        else {
            status = moveColor + ' to move';
            // check?
            if (this.game.in_check()) {
                status += ', ' + moveColor + ' is in check';
            }
        }
        this.status = status;
        this.pgn = this.game.pgn();
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 2, vars: 1, consts: [["id", "chessBoard", 2, "width", "400px"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status : ", ctx.status, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 20, vars: 0, consts: [["mode", "over", 1, "sideNavBar"], ["sidenav", ""], ["src", "assets/images/avatar.png", "alt", "Avatar", 1, "avatar"], [1, "userName"], ["mat-list-item", "", "href", "playWithComputer"], [1, "header"], ["mat-icon-button", "", "color", "accent", "aria-label", "Menu icon", 3, "click"], [1, "title"], [1, "container"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Isaac Jefferson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Play With Computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GM Chess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-color: #3f51b5 !important;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 1%;\r\n    margin-left: 1%;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    color: white;\r\n    margin-left: 1%;\r\n}\r\n\r\n.sideNavBar[_ngcontent-%COMP%]{\r\n    background-color: #ff4081;\r\n}\r\n\r\n.userName[_ngcontent-%COMP%]{\r\n    margin-left: 10%;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlciBidXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4udGl0bGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbi5zaWRlTmF2QmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcclxufVxyXG5cclxuLnVzZXJOYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG4uYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/play-with-computer-settings/play-with-computer-settings.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/play-with-computer-settings/play-with-computer-settings.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PlayWithComputerSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayWithComputerSettingsComponent", function() { return PlayWithComputerSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PlayWithComputerSettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlayWithComputerSettingsComponent.ɵfac = function PlayWithComputerSettingsComponent_Factory(t) { return new (t || PlayWithComputerSettingsComponent)(); };
PlayWithComputerSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayWithComputerSettingsComponent, selectors: [["app-play-with-computer-settings"]], decls: 50, vars: 0, consts: [[1, "form-horizontal"], [1, "form-group"], ["for", "timeBase", 1, "control-label", "col-xs-4", "col-sm-6", "col-md-4"], [1, "col-xs-4", "col-sm-6", "col-md-4"], ["type", "number", "id", "timeBase", "value", "5", 1, "form-control"], ["for", "timeInc", 1, "control-label", "col-xs-4", "col-sm-6", "col-md-4"], ["type", "number", "id", "timeInc", "value", "2", 1, "form-control"], ["for", "skillLevel", 1, "control-label", "col-xs-4", "col-sm-6", "col-md-4"], ["type", "number", "id", "skillLevel", "value", "0", 1, "form-control"], ["for", "color", 1, "control-label", "col-xs-4", "col-sm-6", "col-md-4"], ["data-toggle", "buttons", 1, "btn-group"], ["id", "color-white", 1, "btn", "btn-primary", "active"], ["type", "radio", "name", "color"], ["id", "color-black", 1, "btn", "btn-primary"], ["for", "showScore", 1, "control-label", "col-xs-4", "col-sm-6", "col-md-4"], ["type", "checkbox", "id", "showScore", "checked", "", 1, "form-control"], ["type", "button", "routerLink", "/", 1, "btn", "btn-primary"], ["id", "promote"], ["value", "q", "selected", ""], ["value", "r"], ["value", "b"], ["value", "n"]], template: function PlayWithComputerSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Base time (min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Increment (sec)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Skill Level (0-20)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Show score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Promote to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Queen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Rook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Bishop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Knight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXktd2l0aC1jb21wdXRlci1zZXR0aW5ncy9wbGF5LXdpdGgtY29tcHV0ZXItc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayWithComputerSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-play-with-computer-settings',
                templateUrl: './play-with-computer-settings.component.html',
                styleUrls: ['./play-with-computer-settings.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/play-with-computer/play-with-computer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/play-with-computer/play-with-computer.component.ts ***!
  \********************************************************************/
/*! exports provided: PlayWithComputerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayWithComputerComponent", function() { return PlayWithComputerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chess.js */ "./node_modules/chess.js/chess.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");







function PlayWithComputerComponent_mat_progress_bar_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 12);
} }
class PlayWithComputerComponent {
    constructor() {
        this.engine = new Worker("/assets/js/stockfish.js");
        this.evaler = new Worker("/assets/js/stockfish.js");
        this.displayScore = false;
        this.time = new Time();
        this.playerColor = "white";
        this.clockTimeoutID = null;
        this.isEngineRunning = false;
        this.computerThinking = false;
        this.chessClock = new ChessClock(0, 15, 0);
        setInterval(() => {
            /* Time Interval to update the clock during play*/
            this.whiteTime = this.chessClock.whiteClock.getTime();
            this.blackTime = this.chessClock.blackClock.getTime();
        }, 1000);
    }
    ngOnInit() {
        const self = this;
        this.engineStatus = new EngineStatus();
        this.game = new chess_js__WEBPACK_IMPORTED_MODULE_1__();
        this.board = ChessBoard('chessBoard', {
            draggable: true,
            position: 'start',
            onDragStart: function (source, piece, position, orientation) {
                return self.onDragStart(source, piece, position, orientation);
            },
            onDrop: function (source, target, piece, newPos, oldPos, orientation) {
                return self.onDrop(source, target);
            },
            onSnapEnd: function (source, target, piece) {
                self.onSnapEnd();
            }
        });
        self.displayStatus;
        self.uciCmd('uci');
        self.evaler.onmessage = function evalerOnmessage(event) {
            return self.evalerOnmessage(event);
        };
        self.engine.onmessage = function engineOnmessage(event) {
            return self.engineOnmessage(event);
        };
        self.start();
    }
    onDragStart(source, piece, position, orientation) {
        var re = this.playerColor == 'white' ? /^b/ : /^w/;
        if (this.game.game_over() ||
            piece.search(re) !== -1) {
            return false;
        }
    }
    ;
    uciCmd(cmd, which) {
        console.log("UCI: " + cmd);
        (which || this.engine).postMessage(cmd);
    }
    displayStatus() {
        var status = 'Engine: ';
        if (!this.engineStatus.engineLoaded) {
            status += 'loading...';
        }
        else if (!this.engineStatus.engineReady) {
            status += 'loaded...';
        }
        else {
            status += 'ready.';
        }
        if (this.engineStatus.search) {
            status += '<br>' + this.engineStatus.search;
            if (this.engineStatus.score && this.displayScore) {
                status += (this.engineStatus.score.substr(0, 4) === "Mate" ? " " : ' Score: ') + this.engineStatus.score;
            }
        }
    }
    /*private displayClock(color, t) {
      var isRunning = false;
      if(this.time.startTime > 0 && color == this.time.clockColor) {
          t = Math.max(0, t + this.time.startTime - Date.now());
          isRunning = true;
      }
      var id = color == this.playerColor ? '#time2' : '#time1';
      var sec = Math.ceil(t / 1000);
      var min = Math.floor(sec / 60);
      sec -= min * 60;
      var hours = Math.floor(min / 60);
      min -= hours * 60;
      var display = hours + ':' + ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
      if(isRunning) {
          display += sec & 1 ? ' <--' : ' <-';
      }
      //$(id).text(display);
      //TODO::
  
      console.log("Display : " + display);
    }*/
    /*private updateClock() {
      this.displayClock('white', this.time.wtime);
      this.displayClock('black', this.time.btime);
    }*/
    /*private clockTick() {
      this.updateClock;
      var t = (this.time.clockColor == 'white' ? this.time.wtime : this.time.btime) + this.time.startTime - Date.now();
      var timeToNextSecond = (t % 1000) + 1;
    }*/
    /*private stopClock() {
      if(this.clockTimeoutID !== null) {
          clearTimeout(this.clockTimeoutID);
          this.clockTimeoutID = null;
      }
      if(this.time.startTime > 0) {
          var elapsed = Date.now() - this.time.startTime;
          this.time.startTime = null;
          if(this.time.clockColor == 'white') {
              this.time.wtime = Math.max(0, this.time.wtime - elapsed);
          } else {
              this.time.btime = Math.max(0, this.time.btime - elapsed);
          }
      }
    }*/
    /*private startClock() {
      if(this.game.turn() == 'w') {
          this.time.wtime += this.time.winc;
          this.time.clockColor = 'white';
      } else {
          this.time.btime += this.time.binc;
          this.time.clockColor = 'black';
      }
      this.time.startTime = Date.now();
      this.clockTick();
    }*/
    get_moves() {
        var moves = '';
        var history = this.game.history({ verbose: true });
        for (var i = 0; i < history.length; ++i) {
            var move = history[i];
            moves += ' ' + move.from + move.to + (move.promotion ? move.promotion : '');
        }
        return moves;
    }
    prepareMove() {
        // this.stopClock();
        this.pgn = this.game.pgn();
        this.board.position(this.game.fen());
        //this.updateClock;
        var turn = this.game.turn() == 'w' ? 'white' : 'black';
        if (!this.game.game_over()) {
            if (turn != this.playerColor) {
                this.uciCmd('position startpos moves' + this.get_moves());
                this.uciCmd('position startpos moves' + this.get_moves(), this.evaler);
                this.uciCmd("eval", this.evaler);
                if (this.time && this.chessClock) {
                    this.uciCmd("go " + (this.time.depth ? "depth " + this.time.depth : "") + " wtime " + this.chessClock.whiteClock.getMilliSeconds() + " winc " + 0 + " btime " + this.chessClock.blackClock.getMilliSeconds() + " binc " + 0);
                }
                else {
                    this.uciCmd("go " + (this.time.depth ? "depth " + this.time.depth : ""));
                }
                this.isEngineRunning = true;
            }
        }
    }
    evalerOnmessage(event) {
        var line;
        if (event && typeof event === "object") {
            line = event.data;
        }
        else {
            line = event;
        }
        console.log("evaler: " + line);
        /// Ignore some output.
        if (line === "uciok" || line === "readyok" || line.substr(0, 11) === "option name") {
            return;
        }
    }
    engineOnmessage(event) {
        this.computerThinking = true;
        var line;
        if (event && typeof event === "object") {
            line = event.data;
        }
        else {
            line = event;
        }
        console.log("Reply: " + line);
        if (line == 'uciok') {
            this.engineStatus.engineLoaded = true;
            this.computerThinking = false;
        }
        else if (line == 'readyok') {
            this.engineStatus.engineReady = true;
            this.computerThinking = false;
        }
        else {
            var match = line.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbn])?/);
            /// Did the AI move?
            if (match) {
                this.isEngineRunning = false;
                this.game.move({ from: match[1], to: match[2], promotion: match[3] });
                this.prepareMove();
                this.uciCmd("eval", this.evaler);
                this.computerThinking = false;
                this.stopBlackClock();
                //uciCmd("eval");
                /// Is it sending feedback?
            }
            else if (match = line.match(/^info .*\bdepth (\d+) .*\bnps (\d+)/)) {
                this.engineStatus.search = 'Depth: ' + match[1] + ' Nps: ' + match[2];
            }
            /// Is it sending feed back with a score?
            if (match = line.match(/^info .*\bscore (\w+) (-?\d+)/)) {
                var score = parseInt(match[2]) * (this.game.turn() == 'w' ? 1 : -1);
                /// Is it measuring in centipawns?
                if (match[1] == 'cp') {
                    this.engineStatus.score = (score / 100.0).toFixed(2);
                    /// Did it find a mate?
                }
                else if (match[1] == 'mate') {
                    this.engineStatus.score = 'Mate in ' + Math.abs(score);
                }
                /// Is the score bounded?
                if (match = line.match(/\b(upper|lower)bound\b/)) {
                    this.engineStatus.score = ((match[1] == 'upper') == (this.game.turn() == 'w') ? '<= ' : '>= ') + this.engineStatus.score;
                }
            }
        }
        this.displayStatus;
    }
    ;
    onDrop(source, target) {
        // see if the move is legal
        var move = this.game.move({
            from: source,
            to: target,
            promotion: 'q' // NOTE: always promote to a queen for example simplicity
        });
        // illegal move
        if (move === null)
            return 'snapback';
        this.prepareMove();
        this.stopWhiteClock();
    }
    ;
    onSnapEnd() {
        this.board.position(this.game.fen());
    }
    ;
    reset() {
        this.uciCmd('setoption name Contempt value 0');
        //uciCmd('setoption name Skill Level value 20');
        this.setSkillLevel(0);
        this.uciCmd('setoption name King Safety value 0'); /// Agressive 100 (it's now symetric)
    }
    loadpgn(pgn) {
        this.game.load_pgn(pgn);
    }
    setPlayerColor(color) {
        this.playerColor = color;
        this.board.orientation(this.playerColor);
    }
    setSkillLevel(skill) {
        var max_err, err_prob, difficulty_slider;
        if (skill < 0) {
            skill = 0;
        }
        if (skill > 20) {
            skill = 20;
        }
        this.time.level = skill;
        /// Change thinking depth allowance.
        if (skill < 5) {
            this.time.depth = "1";
        }
        else if (skill < 10) {
            this.time.depth = "2";
        }
        else if (skill < 15) {
            this.time.depth = "3";
        }
        else {
            /// Let the engine decide.
            this.time.depth = "";
        }
        this.uciCmd('setoption name Skill Level value ' + skill);
        ///NOTE: Stockfish level 20 does not make errors (intentially), so these numbers have no effect on level 20.
        /// Level 0 starts at 1
        err_prob = Math.round((skill * 6.35) + 1);
        /// Level 0 starts at 10
        max_err = Math.round((skill * -0.5) + 10);
        this.uciCmd('setoption name Skill Level Maximum Error value ' + max_err);
        this.uciCmd('setoption name Skill Level Probability value ' + err_prob);
    }
    setDepth(depth) {
        this.time = new Time();
        this.time.depth = depth;
    }
    setNodes(nodes) {
        this.time = new Time();
        this.time.nodes = nodes;
    }
    setContempt(contempt) {
        this.uciCmd('setoption name Contempt value ' + contempt);
    }
    setAggressiveness(value) {
        this.uciCmd('setoption name Aggressiveness value ' + value);
    }
    setDisplayScore(flag) {
        this.displayScore = flag;
        this.displayStatus();
    }
    start() {
        this.uciCmd('ucinewgame');
        this.uciCmd('isready');
        this.engineStatus.engineReady = false;
        this.engineStatus.search = null;
        this.displayStatus();
        this.prepareMove();
        this.announced_game_over = false;
        this.computerThinking = false;
    }
    undo() {
        if (this.isEngineRunning)
            return false;
        this.game.undo();
        this.game.undo();
        this.engineStatus.search = null;
        this.displayStatus();
        this.prepareMove();
        return true;
    }
    newGame() {
        this.ngOnInit();
    }
    stopWhiteClock() {
        this.chessClock.startWhitePlay();
        this.chessClock.stop("white");
        this.whiteTime = this.chessClock.whiteClock.getTime();
    }
    stopBlackClock() {
        this.chessClock.startBlackPlay();
        this.chessClock.stop("black");
        this.blackTime = this.chessClock.blackClock.getTime();
    }
}
PlayWithComputerComponent.ɵfac = function PlayWithComputerComponent_Factory(t) { return new (t || PlayWithComputerComponent)(); };
PlayWithComputerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayWithComputerComponent, selectors: [["app-play-with-computer"]], decls: 35, vars: 4, consts: [[1, "GMPlayArea"], [1, "computer"], ["id", "computerTime"], ["mode", "indeterminate", "class", "computerProgressBar", 4, "ngIf"], ["id", "chessBoard"], [1, "player"], ["id", "playerTime"], [1, "action"], ["mat-flat-button", "", "color", "accent", 3, "click"], [1, "moves"], ["id", "pgn"], [1, "settings"], ["mode", "indeterminate", 1, "computerProgressBar"]], template: function PlayWithComputerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pemela(Computer Engine)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayWithComputerComponent_mat_progress_bar_7_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayWithComputerComponent_Template_button_click_16_listener() { return ctx.undo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "replay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Undo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayWithComputerComponent_Template_button_click_20_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "autorenew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " New Game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Moves:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blackTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.computerThinking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.whiteTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pgn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"]], styles: ["@media only screen and (max-width:1980px) {\r\n    \r\n    #chessBoard[_ngcontent-%COMP%]{\r\n        padding-left:5% !important;\r\n        width : 80%;\r\n        float: left;\r\n    }\r\n    .GMPlayArea[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n        width : 40%;\r\n        float: left;\r\n    }\r\n    .computer[_ngcontent-%COMP%]{\r\n        margin-left: 5%;\r\n    }\r\n\r\n    .computer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        margin:0;\r\n    }\r\n    .player[_ngcontent-%COMP%] {\r\n        float: right !important;\r\n        margin-right: 15%;\r\n    }\r\n\r\n    .moves[_ngcontent-%COMP%]{\r\n        margin-left: 10%;\r\n        float: right;\r\n        width: 50%;\r\n    }\r\n\r\n    .action[_ngcontent-%COMP%] {\r\n        float: left;\r\n        margin-left: 5%;\r\n        margin-top: 3%;\r\n        width:50%\r\n    }\r\n\r\n    .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n        margin-right: 5%;\r\n    }\r\n\r\n    .computerProgressBar[_ngcontent-%COMP%]{\r\n        width : 72%;\r\n        display: inline-flex;\r\n        margin-left: 1.25%;\r\n    }\r\n}\r\n@media only screen and (max-width:1200px) {\r\n\r\n#chessBoard[_ngcontent-%COMP%]{\r\n    padding-left: 2.5% !important;\r\n    width : 95%;\r\n}\r\n.GMPlayArea[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    width : 100%;\r\n}\r\n.computer[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n}\r\n.computer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin:0;\r\n}\r\n.player[_ngcontent-%COMP%] {\r\n    float: right !important;\r\n    margin-right: 2.5%;\r\n}\r\n.moves[_ngcontent-%COMP%]{\r\n    float:left;\r\n    margin-left: 2.5%;\r\n    width:95%\r\n}\r\n.action[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-left: 5%;\r\n    margin-top: 3%;\r\n    width:70%\r\n}\r\n.action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-right: 5%;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS13aXRoLWNvbXB1dGVyL3BsYXktd2l0aC1jb21wdXRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmO1FBQ0ksMEJBQTBCO1FBQzFCLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLGNBQWM7UUFDZDtJQUNKOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLG9CQUFvQjtRQUNwQixrQkFBa0I7SUFDdEI7QUFDSjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFFBQVE7QUFDWjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZDtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3BsYXktd2l0aC1jb21wdXRlci9wbGF5LXdpdGgtY29tcHV0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxOTgwcHgpIHtcclxuICAgIC8qRm9yIERlc2t0b3AgKi9cclxuICAgICNjaGVzc0JvYXJke1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDo1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoIDogODAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLkdNUGxheUFyZWF7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoIDogNDAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNvbXB1dGVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29tcHV0ZXIgaDJ7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICB9XHJcbiAgICAucGxheWVyIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgIH1cclxuXHJcbiAgICAubW92ZXN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgICAgd2lkdGg6NTAlXHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbiBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29tcHV0ZXJQcm9ncmVzc0JhcntcclxuICAgICAgICB3aWR0aCA6IDcyJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS4yNSU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xyXG4vKiBGb3IgTW9iaWxlICovXHJcbiNjaGVzc0JvYXJke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aCA6IDk1JTtcclxufVxyXG4uR01QbGF5QXJlYXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoIDogMTAwJTtcclxufVxyXG4uY29tcHV0ZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLmNvbXB1dGVyIGgye1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuLnBsYXllciB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMi41JTtcclxufVxyXG4ubW92ZXN7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICB3aWR0aDo5NSVcclxufVxyXG4uYWN0aW9uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICB3aWR0aDo3MCVcclxufVxyXG4uYWN0aW9uIGJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayWithComputerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-play-with-computer',
                templateUrl: './play-with-computer.component.html',
                styleUrls: ['./play-with-computer.component.css']
            }]
    }], function () { return []; }, null); })();
class EngineStatus {
}
class Time {
}
class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    start() {
        this.timeoutId = setInterval(() => {
            if (--this.seconds <= 0) {
                if (--this.minutes < 0) {
                    if (--this.hours < 0) {
                        console.log("Game Over");
                    }
                    else {
                        this.minutes = 59;
                        this.seconds = 60;
                    }
                }
                else {
                    this.seconds = 60;
                }
            }
        }, 1000);
    }
    stop() {
        if (this.timeoutId)
            clearTimeout(this.timeoutId);
    }
    getTime() {
        var hours;
        var minutes;
        var seconds;
        if (this.hours != undefined && this.hours.toString().length == 1) {
            hours = "0" + this.hours;
        }
        else if (this.hours != undefined && this.hours.toString().length == 2) {
            hours = this.hours.toString();
        }
        if (this.minutes != undefined && this.minutes.toString().length == 1) {
            minutes = "0" + this.minutes;
        }
        else if (this.minutes != undefined && this.minutes.toString().length == 2) {
            minutes = this.minutes.toString();
        }
        if (this.seconds != undefined && this.seconds.toString().length == 1) {
            seconds = "0" + this.seconds;
        }
        else if (this.seconds != undefined && this.seconds.toString().length == 2) {
            seconds = this.seconds.toString();
        }
        return hours + ":" + minutes + ":" + seconds;
    }
    getMilliSeconds() {
        var totalSeconds = this.hours * 60 * 60 + this.minutes * 60 + this.seconds;
        return totalSeconds * 1000;
    }
}
class ChessClock {
    constructor(hours, minutes, seconds) {
        this.whiteClock = new Clock(hours, minutes, seconds);
        this.blackClock = new Clock(hours, minutes, seconds);
    }
    stop(stopColor) {
        if (stopColor == "white" && this.isBlackPlayStarted) {
            this.whiteClock.stop();
            this.blackClock.start();
        }
        else if (stopColor == "black" && this.isWhitePlayStarted) {
            this.blackClock.stop();
            this.whiteClock.start();
        }
    }
    startWhitePlay() {
        this.isWhitePlayStarted = true;
    }
    startBlackPlay() {
        this.isBlackPlayStarted = true;
    }
}


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Isaac Jefferson\Learning\Angular\Chess\GM Chess\GM-Chess\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map