webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__age_age__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parents_parents__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contribute_contribute__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openYoung = function () {
        console.log("new young page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__age_age__["a" /* AgePage */]);
    };
    HomePage.prototype.openParent = function () {
        console.log("asdasd");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__parents_parents__["a" /* Parents */]);
    };
    HomePage.prototype.contribute = function () {
        console.log("contribution");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contribute_contribute__["a" /* Contribute */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br><br><br>\n  <div class="center">\n  <img width="100%" height="50%" src="assets/logo.png"/>\n  <br>\n\n</div>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col >\n        <button ion-button primary (click)="openYoung()">For Young Person</button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <button ion-button primary (click)="openParent()">For Parents</button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <button ion-button primary (click)="contribute()">Make a Contribution</button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n<br><br><br><br><br>\n  </ion-grid>\n  <div class="center">\n\n  <img width="80%" height="40%" src="assets/fb.png"/>\n</div>\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disease_disease__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__children_children__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgePage = (function () {
    function AgePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AgePage.prototype.openDisease = function () {
        console.log("new page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__disease_disease__["a" /* DiseasePage */]);
    };
    AgePage.prototype.openDiseaseChildren = function () {
        console.log("new children page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__children_children__["a" /* Children */]);
    };
    AgePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-age',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/age/age.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <br>\n    <div class="center">\n  \n  <h3 class="center">Select your age</h3>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col >\n        <button ion-button  secondary (click)="openDiseaseChildren()">Children</button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <button ion-button  secondary (click)="openDisease()">10-17 Years Old</button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <button ion-button  secondary (click)="openDisease()">18-25 Years Old</button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n<br><br><br><br><br>\n  </ion-grid>\n\n\n</div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/age/age.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AgePage);
    return AgePage;
}());

//# sourceMappingURL=age.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onedisease_onedisease__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiseasePage = (function () {
    function DiseasePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            'Leukemia',
            'Brain and spinal cord tumors',
            'Neuroblastoma',
            'Wilms tumor',
            'Lymphoma (including both Hodgkin and non-Hodgkin)',
            'Rhabdomyosarcoma',
            'Retinoblastoma',
            'Bone cancer (including osteosarcoma and Ewing sarcoma)'
        ];
    }
    DiseasePage.prototype.itemSelected = function () {
        console.log("Selected disease, prototype for blood cancer");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__onedisease_onedisease__["a" /* OneDiseasePage */]);
    };
    DiseasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-disease',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/disease/disease.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 class="center" id="head">Whats your Diagnosis?</h3>\n  <ion-list>\n     <button ion-item *ngFor="let item of items" (click)="itemSelected()">\n       {{ item }}\n     </button>\n   </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/disease/disease.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], DiseasePage);
    return DiseasePage;
}());

//# sourceMappingURL=disease.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneDiseasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OneDiseasePage = (function () {
    function OneDiseasePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    OneDiseasePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'title here',
            subTitle: 'Add text here about this person right over here haha ',
            buttons: ['Thanks!']
        });
        alert.present();
    };
    OneDiseasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onedisease',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/onedisease/onedisease.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 class="center">Information</h3>\n\n  <ion-card>\n  <ion-card-header class="center" id="head">\n    Summary\n  </ion-card-header>\n  <ion-card-content>\n    <p>ALL is a type of cancer that happens when your bone marrow\n    (the spongy stuff inside your bones) isn’t working properly.</p>\n\n    <p>Leukaemia will replace your healthy blood cells\n    with ones that don’t work properly.</p>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n<ion-card-header class="center" id="head">\n  Treatment\n</ion-card-header>\n<ion-card-content>\n  <div class="center">\n  <img width="80%" height="40%" src="assets/lkk.png"/>\n  </div>\n  <p>You will have chemotherapy. These medicines are to kill the cancer cells\n  and help your bone marrow to work normally. The treatment course lasts for\n  a long time - it continues even when you don’t feel ill anymore,\n  to ensure the leukaemia doesn\'t come back.</p>\n\n  <p>Sometimes you will also need to have a bone marrow or stem cell transplant,\n  but this depends on your leukaemia, so check with your doctor.</p>\n</ion-card-content>\n</ion-card>\n\n\n<ion-card>\n<ion-card-header class="center" id="head">\n  Tips\n</ion-card-header>\n<ion-card-content>\n  <p>Chemotherapy might make you feel more tired and poorly than usual. It\'s good\n  idea to try to stay in the best shape possible to negate it.</p>\n  <p>Also try to keep yourself warm, rested and infection-free - let your body\n  concentrate on fighting the disease!</p>\n</ion-card-content>\n</ion-card>\n<br>\n<br>\n\n\n\n<ion-list>\n  <ion-item (click)="presentAlert()">\n    <ion-avatar item-start>\n      <img src="img/test103.jpg">\n    </ion-avatar>\n    <h2>Amy</h2>\n    <p>Leuakemia  • 2014</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/test104.jpg">\n    </ion-avatar>\n    <h2>Aidan</h2>\n    <p>ALL  • 2016</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/test102.jpg">\n    </ion-avatar>\n    <h2>Lucia</h2>\n    <p>Acute Lymphoblastic Leukaemia  • 2005</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/test101.jpg">\n    </ion-avatar>\n    <h2>Blake</h2>\n    <p>Leuakemia (ALL)  • 2013</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/onedisease/onedisease.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OneDiseasePage);
    return OneDiseasePage;
}());

//# sourceMappingURL=onedisease.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Children; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Children = (function () {
    function Children(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Children.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'title here',
            subTitle: 'Add text here about this person right over here haha ',
            buttons: ['Thanks!']
        });
        alert.present();
    };
    Children = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-children',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/children/children.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="center">\n\n  <h3 >Hello!</h3>\n</div>\n\n<div class="center">\n<img width="80%" height="40%" src="assets/albert.png"/>\n</div>\n<br>\n<br>\n\n<ion-card>\n<ion-card-header>\n  Tips\n</ion-card-header>\n<ion-card-content>\n  add tips\n</ion-card-content>\n</ion-card>\n\n\n\n\n<ion-list>\n  <ion-item (click)="presentAlert()">\n    <ion-avatar item-start>\n      <img src="img/kk01.jpg">\n    </ion-avatar>\n    <h2>My Neighbor Totoro</h2>\n    <p>Blood Cancer  • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/kk02.jpg">\n    </ion-avatar>\n    <h2>My Neighbor Totoro</h2>\n    <p>Blood Cancer  • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/kk04.jpg">\n    </ion-avatar>\n    <h2>My Neighbor Totoro</h2>\n    <p>Blood Cancer  • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n</ion-list>\n<div class="center">\n\n<img width="80%" height="40%" src="assets/notalbert.png"/>\n</div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/children/children.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Children);
    return Children;
}());

//# sourceMappingURL=children.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { OneDiseasePage } from '../onedisease/onedisease';
var Parents = (function () {
    function Parents(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Parents.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'title here',
            subTitle: 'Add text here about this person right over here haha ',
            buttons: ['Thanks!']
        });
        alert.present();
    };
    Parents = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parents',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/parents/parents.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Iname name naem</h3>\n\n\n<ion-card>\n<ion-card-header>\n  Tips\n</ion-card-header>\n<ion-card-content>\n  add tips\n</ion-card-content>\n</ion-card>\n\n\n<ion-list>\n  <ion-item (click)="presentAlert()">\n    <ion-avatar item-start>\n      <img src="img/pp01.jpg">\n    </ion-avatar>\n    <h2>My Neighbor Totoro</h2>\n    <p>Blood Cancer  • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/pp02.jpg">\n    </ion-avatar>\n    <h2>My Neighbor Totoro</h2>\n    <p>Blood Cancer  • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/pp03.jpg">\n    </ion-avatar>\n    <h2>My Neighbor Totoro</h2>\n    <p>Blood Cancer  • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/pp04.jpg">\n    </ion-avatar>\n    <h2>My Neighbor Totoro</h2>\n    <p>Blood Cancer  • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/parents/parents.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Parents);
    return Parents;
}());

//# sourceMappingURL=parents.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contribute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Contribute = (function () {
    function Contribute(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.todo = {
            title: '',
            description: ''
        };
    }
    Contribute.prototype.logForm = function (form) {
        console.log("saved");
        console.log(form.value);
    };
    Contribute.prototype.validateButton = function () {
        var toast = this.toastCtrl.create({
            message: 'Request registered',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    Contribute = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contribute',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/contribute/contribute.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n    <form #form="ngForm" novalidate>\n       <ion-item>\n         <ion-label>Name</ion-label>\n         <ion-input type="text" required  ngControl="title"></ion-input>\n       </ion-item>\n       <ion-item>\n         <ion-label>Email adress</ion-label>\n         <ion-textarea  ngControl="description"></ion-textarea>\n       </ion-item>\n       <button ion-button type="submit" block (click)="validateButton()">Submit</button>\n      </form>\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/contribute/contribute.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], Contribute);
    return Contribute;
}());

//# sourceMappingURL=contribute.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_age_age__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_disease_disease__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_onedisease_onedisease__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tips_tips__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_peoplestories_peoplestories__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_treatment_treatment__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_parents_parents__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_children_children__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contribute_contribute__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_age_age__["a" /* AgePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_disease_disease__["a" /* DiseasePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_onedisease_onedisease__["a" /* OneDiseasePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tips_tips__["a" /* Tips */],
                __WEBPACK_IMPORTED_MODULE_9__pages_peoplestories_peoplestories__["a" /* PeopleStoriesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_treatment_treatment__["a" /* Treatment */],
                __WEBPACK_IMPORTED_MODULE_11__pages_parents_parents__["a" /* Parents */],
                __WEBPACK_IMPORTED_MODULE_12__pages_children_children__["a" /* Children */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contribute_contribute__["a" /* Contribute */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_age_age__["a" /* AgePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_disease_disease__["a" /* DiseasePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_onedisease_onedisease__["a" /* OneDiseasePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tips_tips__["a" /* Tips */],
                __WEBPACK_IMPORTED_MODULE_9__pages_peoplestories_peoplestories__["a" /* PeopleStoriesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_treatment_treatment__["a" /* Treatment */],
                __WEBPACK_IMPORTED_MODULE_11__pages_parents_parents__["a" /* Parents */],
                __WEBPACK_IMPORTED_MODULE_12__pages_children_children__["a" /* Children */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contribute_contribute__["a" /* Contribute */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Lydia/team-18/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/Lydia/team-18/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tips; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tips = (function () {
    function Tips(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tips = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tips',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/tips/tips.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Iname name naem</h3>\n  <p>\n    add text here about tips\n  </p>\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/tips/tips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Tips);
    return Tips;
}());

//# sourceMappingURL=tips.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleStoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleStoriesPage = (function () {
    function PeopleStoriesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PeopleStoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-peoplestories',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/peoplestories/peoplestories.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Iname name naem</h3>\n  <p>\n    add text here about people stories\n\n    list list list !! !\n  </p>\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/peoplestories/peoplestories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PeopleStoriesPage);
    return PeopleStoriesPage;
}());

//# sourceMappingURL=peoplestories.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Treatment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Treatment = (function () {
    function Treatment(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Treatment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-treatment',template:/*ion-inline-start:"/Users/Lydia/team-18/src/pages/treatment/treatment.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Iname name naem</h3>\n  <p>\n    add text here about treatment\n  </p>\n</ion-content>\n`/*ion-inline-end:"/Users/Lydia/team-18/src/pages/treatment/treatment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Treatment);
    return Treatment;
}());

//# sourceMappingURL=treatment.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map