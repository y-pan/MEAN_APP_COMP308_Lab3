webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  \n    <app-nav></app-nav>\n\n    <app-login></app-login>\n    \n    <app-signup></app-signup>\n    \n    <app-user></app-user>\n\n    <app-mycourses></app-mycourses>\n    <app-course></app-course>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'COMP308_Lab3';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_user_component__ = __webpack_require__("./src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_course_course_component__ = __webpack_require__("./src/app/components/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_nav_nav_component__ = __webpack_require__("./src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_mycourses_mycourses_component__ = __webpack_require__("./src/app/components/mycourses/mycourses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__array_contains_pipe__ = __webpack_require__("./src/app/array-contains.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_course_course_component__["a" /* CourseComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_mycourses_mycourses_component__["a" /* MycoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__array_contains_pipe__["a" /* ArrayContainsPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_9__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_11__services_message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/array-contains.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayContainsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrayContainsPipe = /** @class */ (function () {
    /** used for angular to check if a course's students (array or null) contains student_id, so that we can show/hide register button */
    /** course.students | arrayContains */
    function ArrayContainsPipe() {
    }
    ArrayContainsPipe.prototype.transform = function (array, element) {
        // check if args is undefined
        if (element === undefined)
            return false;
        if (array === undefined || !array)
            return false;
        if (array instanceof Array) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i] == element) {
                    return true;
                }
            }
        }
        else {
            return false;
        }
    };
    ArrayContainsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'arrayContains'
        })
        /** used for angular to check if a course's students (array or null) contains student_id, so that we can show/hide register button */
        /** course.students | arrayContains */
    ], ArrayContainsPipe);
    return ArrayContainsPipe;
}());



/***/ }),

/***/ "./src/app/components/course/course.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf=\"displayCourses\">\n  <h3>All Courses</h3>\n  <div class=\"err\" *ngIf=\"errorInCourse\" style=\"color:red;\">\n      {{errorInCourse}}\n    </div>\n  <table class=\"table\">\n    <thead class=\"thead-dark\">\n      <tr>\n          <th scope=\"col\">index</th >\n          <th scope=\"col\">coce</th >\n          <th scope=\"col\">name</th>\n          <th scope=\"col\">section</th>\n          <th scope=\"col\">semester</th>\n          <th scope=\"col\">student registerd</th>\n          <th scope=\"col\">Register</th>\n\n          <th hidden>_id</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let course of courses; let i=index\">\n        <th scope=\"row\">{{i +1}}</th>\n        <td>{{course.code}}</td>\n        <td>{{course.name}}</td>\n        <td>{{course.section}}</td>\n        <td>{{course.semester}}</td>\n        <td>{{course.students.length}}</td>\n        <td>\n          <!-- need global student info: if you are registerred, then you can see Drop button, otherwise you see Register button -->\n          <button (click)=\"registerCourse(course)\" *ngIf=\"!(course.students | arrayContains:studentId); \">Register</button>\n          <!-- <ng-template #registered>Registerred</ng-template> -->\n        </td>\n        <td hidden>{{course._id}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseComponent = /** @class */ (function () {
    function CourseComponent(configService, dataService, messageService) {
        var _this = this;
        this.configService = configService;
        this.dataService = dataService;
        this.messageService = messageService;
        this.course_debug = "course_debug";
        this.messageService.listen().subscribe(function (msg) {
            switch (msg) {
                // case this.configService.MSG_USER_LOGGEDIN:
                //   this.enable(true);
                //   break;
                // case this.configService.MSG_USER_LOGGEDOUT:
                //   this.enable(false);
                //   break;
                case _this.configService.MSG_SHOW_COURSES:
                    _this.display(true);
                    break;
                // case this.configService.MSG_HIDE_COURSES:
                //   this.display(false);
                //   break;
                default:
                    _this.display(false);
                    break;
            }
        });
    }
    CourseComponent.prototype.ngOnInit = function () {
        console.log("course ngOnInt()...");
        this.courses = [];
        // this.mock_course();
        this.getCourses(); /** get all courses */
    };
    CourseComponent.prototype.enable = function (enabled) {
        this.isEnabled = enabled;
        if (!this.isEnabled) {
            this.display(false);
        }
    };
    CourseComponent.prototype.display = function (toDisplay) {
        this.displayCourses = toDisplay;
        this.displayMyCourse = toDisplay;
        // if(!this.isEnabled){return;}
        if (toDisplay) {
            this.getCourses();
            // this.getMyCourses();
        }
    };
    CourseComponent.prototype.getCourses = function () {
        var _this = this;
        var student = this.dataService.getStudent();
        if (student) {
            this.studentId = student._id;
            // console.log("get studentId!!!!!!!!!!!!!!: " + this.studentId)
        }
        else {
            this.studentId = "";
        }
        this.dataService.getCourses().subscribe(function (dataJson) {
            _this.courses = [];
            // console.log("course -> getCourse()")
            for (var i = 0; i < dataJson["data"].length; i++) {
                _this.courses.push(dataJson["data"][i]);
            }
        });
    };
    CourseComponent.prototype.registerCourse = function (course) {
        var _this = this;
        if (confirm("Are you sure to register course: " + course.code + " - " + course.name + " (section " + course.section + ") ?")) {
            var student = this.dataService.getStudent();
            // console.log("student=" + student._id + " | course=" + courseId);
            this.dataService.registerCourse(student._id, course._id).subscribe(function (data) {
                _this.errorInCourse = data["err"];
                if (!_this.errorInCourse) {
                    // this.display(true);
                    _this.messageService.filter(_this.configService.MSG_SHOW_COURSES);
                }
            });
        }
    };
    CourseComponent.prototype.getMyCourses = function () {
        // todo
        // console.log("TO IMPLEMENT course.component / getMyCourses()")
        this.messageService.filter(this.configService.MSG_SHOW_MYCOURSES); /** inform mycourses component to do job */
    };
    CourseComponent.prototype.mock_course = function () {
        this.courses.push({
            "students": [
                "5abea387729b162350860c15",
                "5abea794c85f2b199c72a785",
                "5abf131e6bcff834d450c951"
            ],
            "_id": "5abf03309004920700b40ab6",
            "code": "COMP200",
            "name": "Programing 2",
            "section": "1",
            "semester": "2",
        });
        this.courses.push({
            "students": [],
            "_id": "5abf033c9004920700b40ab7",
            "code": "COMP300",
            "name": "Programing 3",
            "section": "1",
            "semester": "3"
        });
    };
    CourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-course',
            template: __webpack_require__("./src/app/components/course/course.component.html"),
            styles: [__webpack_require__("./src/app/components/course/course.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf=\"toDisplayLogin\">\n\n  <form class=\"form-signin\" (ngSubmit)=\"onSubmit()\">\n    <h2 class=\"form-signin-heading\">Student Login</h2>\n    <label for=\"studentnumber\" class=\"sr-only\">Student Number</label>\n    <input type=\"text\" id=\"studentnumber\" name=\"credential.studentnumber\" [(ngModel)]=\"credential.studentnumber\" class=\"form-control\" placeholder=\"Student Number\" required autofocus>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" name=\"credential.password\" [(ngModel)]=\"credential.password\"  class=\"form-control\" placeholder=\"Password\" required>\n    <!-- <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div> -->\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n    <div class=\"err\" style=\"color:red;\">\n        {{loginErr}}\n    </div>\n  </form>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(configService, dataService, messageService) {
        var _this = this;
        this.configService = configService;
        this.dataService = dataService;
        this.messageService = messageService;
        this.messageService.listen().subscribe(function (msg) {
            switch (msg) {
                // case this.configService.MSG_USER_LOGGEDOUT:
                //   this.display(true);break;
                // case this.configService.MSG_USER_LOGGEDIN:
                //   this.display(false);break;
                case _this.configService.MSG_SHOW_LOGIN:
                    _this.display(true);
                    break;
                // case this.configService.MSG_SHOW_SIGNUP:
                //   this.display(false);break;
                default:
                    _this.display(false);
                    break;
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        // console.log("ng login compoment/ngOnInit...")
        // this.dataService.login("300823010", "Aa!123456").subscribe(data => {
        //   console.log("looks like login works...")
        //   console.log(data['data']['_id'])
        // });
        this.display(true);
        this.credential = {
            studentnumber: "",
            password: ""
        };
        this.loginErr = "";
        this.mock_cred();
    };
    LoginComponent.prototype.display = function (toDisplay) {
        this.toDisplayLogin = toDisplay;
    };
    LoginComponent.prototype.mock_cred = function () {
        this.credential = {
            studentnumber: "300823057",
            password: "Aa!123456"
        };
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.credential);
        this.dataService.login(this.credential.studentnumber, this.credential.password).subscribe(function (data) {
            // console.log("attempted login...")
            // console.log(data);
            _this.loginErr = data["err"];
            _this.dataService.setStudent(data["data"]);
            if (data["data"]) {
                _this.messageService.filter(_this.configService.MSG_USER_LOGGEDIN);
                _this.messageService.filter(_this.configService.MSG_SHOW_PROFILE);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/mycourses/mycourses.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mycourses/mycourses.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf=\"toDisplayMyCourses\">\n  <h3>My Courses</h3>\n  <div class=\"err\" *ngIf=\"errMyCourses\" style=\"color:red;\">\n      {{errMyCourses}}\n    </div>\n    <table class=\"table\" *ngIf=\"myCourses.length > 0\">\n      <thead class=\"thead-dark\">\n        <tr>\n            <th scope=\"col\">index</th >\n            <th scope=\"col\">coce</th >\n            <th scope=\"col\">name</th>\n            <th scope=\"col\">section</th>\n            <th scope=\"col\">semester</th>\n            <th scope=\"col\">student registerd</th>\n            <th scope=\"col\">Register/Drop</th>\n            <th hidden>_id</th>\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngFor=\"let course of myCourses; let i=index\">\n          <th scope=\"row\">{{i +1}}</th>\n          <td>{{course.code}}</td>\n          <td>{{course.name}}</td>\n          <td>{{course.section}}</td>\n          <td>{{course.semester}}</td>\n          <td>{{course.students.length}}</td>\n          <td>\n            <!-- need global student info: if you are registerred, then you can see Drop button, otherwise you see Register button -->\n            <!-- <button >Register</button> -->\n            <button (click)=\"drop(course)\" >Drop</button>\n          </td>\n          <td hidden>{{course._id}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div *ngIf=\"myCourses.length == 0\">\n      No courses registerred!\n    </div>\n   \n  </div>"

/***/ }),

/***/ "./src/app/components/mycourses/mycourses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MycoursesComponent = /** @class */ (function () {
    function MycoursesComponent(messageService, configService, dataService) {
        var _this = this;
        this.messageService = messageService;
        this.configService = configService;
        this.dataService = dataService;
        this.messageService.listen().subscribe(function (msg) {
            switch (msg) {
                case _this.configService.MSG_SHOW_MYCOURSES:
                    _this.display(true);
                    break;
                default:
                    _this.display(false);
                    break;
            }
        });
    }
    MycoursesComponent.prototype.ngOnInit = function () {
        this.errMyCourses = "";
        this.myCourses = [];
    };
    MycoursesComponent.prototype.display = function (toDisplay) {
        var _this = this;
        this.toDisplayMyCourses = toDisplay;
        this.myCourses = [];
        if (this.toDisplayMyCourses) {
            var student = this.dataService.getStudent();
            if (student) {
                this.dataService.getMyCourses(student._id).subscribe(function (data) {
                    _this.errMyCourses = data["err"];
                    _this.myCourses = data["data"];
                });
            }
            else {
                this.errMyCourses = "No student";
                this.myCourses = null;
            }
        }
    };
    MycoursesComponent.prototype.drop = function (course) {
        var _this = this;
        // console.log("to do drop course: " + courseId)
        if (confirm("Are you sure to drop course: " + course.code + " - " + course.name + " (section " + course.section + ") ?")) {
            var student = this.dataService.getStudent();
            this.dataService.dropCourse(student._id, course._id).subscribe(function (data) {
                console.log(data);
                /** response is either: { "data": "OK"} or  { "err": "error in dropping course"}*/
                _this.errMyCourses = data["err"];
                if (!_this.errMyCourses) {
                    _this.display(true);
                }
            });
        }
    };
    MycoursesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-mycourses',
            template: __webpack_require__("./src/app/components/mycourses/mycourses.component.html"),
            styles: [__webpack_require__("./src/app/components/mycourses/mycourses.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], MycoursesComponent);
    return MycoursesComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-bottom: 20px;\r\n  }\r\n  \r\n  .navbar {\r\n    margin-bottom: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Student Register System</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample03\" aria-controls=\"navbarsExample03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExample03\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [ngClass]=\"{active :displayNav == 0}\">\n        <a class=\"nav-link\" *ngIf=\"isLoggedIn\" (click)=\"showHome()\">Home</a>\n        <!-- <span class=\"sr-only\">(current)</span> -->\n      </li>  \n      <li class=\"nav-item\" *ngIf=\"!isLoggedIn\" [ngClass]=\"{active :displayNav == -1}\">\n        <a class=\"nav-link\" (click)=\"showLogin()\">Login</a>\n      </li>\n      <li class=\"nav-item\" [ngClass]=\"{active :displayNav == -2}\">\n        <a class=\"nav-link\" *ngIf=\"!isLoggedIn\" (click)=\"showSignUp()\">SignUp</a>\n      </li>\n      <li class=\"nav-item\" [ngClass]=\"{active :displayNav == 1}\">\n        <a class=\"nav-link\" *ngIf=\"isLoggedIn\" (click)=\"getMyCourses()\">My Courses</a>\n      </li>\n      <li class=\"nav-item\" [ngClass]=\"{active :displayNav == 2}\">\n        <a class=\"nav-link\" *ngIf=\"isLoggedIn\" (click)=\"getAllCourses()\">All Courses</a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"isLoggedIn\" (click)=\"logout()\">Logout</a>\n      </li> -->\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li> -->\n      <!-- <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown03\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown03\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li> -->\n    </ul>\n    <input type=\"button\" class=\"btn btn-danger btn-sm\" *ngIf=\"isLoggedIn\" (click)=\"logout()\" value=\"Logout\"/>\n    <!-- <form class=\"form-inline my-2 my-md-0\">\n        \n      <input class=\"form-control\" type=\"button\" value=\"Logout\">\n    </form> -->\n  </div>\n</nav>\n</div>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(configService, messageService, dataService) {
        var _this = this;
        this.configService = configService;
        this.messageService = messageService;
        this.dataService = dataService;
        this.onFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](); /** all for messaging to tell components to react upon messages */
        this.messageService.listen().subscribe(function (msg) {
            switch (msg) {
                case _this.configService.MSG_USER_LOGGEDOUT:
                    _this.doAfterLoggedOut();
                    break;
                case _this.configService.MSG_USER_LOGGEDIN:
                    _this.doAfterLoggedIn();
                    break;
                case _this.configService.MSG_ON_NAV_HOME:
                    _this.displayNav = 0;
                    break;
                case _this.configService.MSG_ON_NAV_LOGIN:
                    _this.displayNav = -1;
                    break;
                case _this.configService.MSG_ON_NAV_SIGNUP:
                    _this.displayNav = -2;
                    break;
                case _this.configService.MSG_ON_NAV_MYCOURSES:
                    _this.displayNav = 1;
                    break;
                case _this.configService.MSG_ON_NAV_ALLCOURSES:
                    _this.displayNav = 2;
                    break;
            }
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        this.err = "";
        this.checkIfLogin();
        this.displayNav = -1;
    };
    NavComponent.prototype.checkIfLogin = function () {
        /** here might need to check with server ??? */
        this.logout(); // log use out
        // this.login();  // log user in
    };
    NavComponent.prototype.login = function () {
        this.messageService.filter(this.configService.MSG_USER_LOGGEDIN);
        this.isLoggedIn = true;
    };
    NavComponent.prototype.logout = function () {
        if (confirm("Are you sure to logout?")) {
            this.messageService.filter(this.configService.MSG_USER_LOGGEDOUT);
            this.isLoggedIn = false;
            this.dataService.setStudent(null);
            this.messageService.filter(this.configService.MSG_SHOW_LOGIN);
            /** also need to clear local session ??? */
        }
    };
    NavComponent.prototype.doAfterLoggedIn = function () {
        this.isLoggedIn = true;
        this.displayNav = 0;
    };
    NavComponent.prototype.doAfterLoggedOut = function () {
        this.isLoggedIn = false;
        // this.messageService.filter(this.configService.MSG_ON_NAV_LOGIN);
        this.displayNav = -1;
    };
    NavComponent.prototype.showSignUp = function () {
        console.log("show showSignUp");
        this.messageService.filter(this.configService.MSG_SHOW_SIGNUP);
        // this.messageService.filter(this.configService.MSG_ON_NAV_SIGNUP);
        this.displayNav = -2;
    };
    NavComponent.prototype.showLogin = function () {
        console.log("show showLogin");
        this.messageService.filter(this.configService.MSG_SHOW_LOGIN);
        // this.messageService.filter(this.configService.MSG_ON_NAV_LOGIN);
        this.displayNav = -1;
    };
    NavComponent.prototype.getMyCourses = function () {
        this.messageService.filter(this.configService.MSG_SHOW_MYCOURSES);
        // this.messageService.filter(this.configService.MSG_ON_NAV_MYCOURSES);
        this.displayNav = 1;
    };
    NavComponent.prototype.getAllCourses = function () {
        this.messageService.filter(this.configService.MSG_SHOW_COURSES);
        // this.messageService.filter(this.configService.MSG_ON_NAV_ALLCOURSES);
        this.displayNav = 2;
    };
    NavComponent.prototype.showHome = function () {
        this.messageService.filter(this.configService.MSG_SHOW_PROFILE);
        // this.messageService.filter(this.configService.MSG_ON_NAV_HOME);
        this.displayNav = 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], NavComponent.prototype, "onFilter", void 0);
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"toDisplaySignUp\">\n    <h3>Student SignUp</h3>\n    <div class=\"err\" style=\"color:red;\" *ngIf=\"signUpErrs.length > 0\">\n        Failed to submit due to {{signUpErrs.length}} error(s) in form:\n        <ul>\n            <li *ngFor=\"let err of signUpErrs; let i = index\">\n                {{i+1}} - {{err}}\n            </li>\n        </ul>\n    </div>\n    <form method=\"POST\" (ngSubmit)=\"onSubmit()\">\n\n        <div class=\"form-group row\">\n            <label for=\"studentnumberFr\" class=\"col-2 col-form-label\">Student Number:</label>\n            <div class=\"col-10\">\n                <input id=\"studentnumberFr\" [(ngModel)]=\"student.studentnumber\" name=\"student.studentnumber\" type=\"text\" class=\"form-control\"\n                    placeholder=\"Enter your Student Number\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"firstname\" class=\"col-2 col-form-label\">First Name:</label>\n            <div class=\"col-10\">\n                <input id=\"firstname\" [(ngModel)]=\"student.firstname\" name=\"student.firstname\" type=\"text\" class=\"form-control\" placeholder=\"Enter your First Name\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n\n\n            <label for=\"lastnameFr\" class=\"col-2 col-form-label\">Last Name:</label>\n\n            <div class=\"col-10\">\n                <input id=\"lastnameFr\" [(ngModel)]=\"student.lastname\" name=\"student.lastname\" type=\"text\" class=\"form-control\" placeholder=\"Enter your Last Name\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"addresssFr\" class=\"col-2 col-form-label\">Addresss:</label>\n            <div class=\"col-10\">\n                <input id=\"addresssFr\" [(ngModel)]=\"student.address\" name=\"student.address\" type=\"text\" class=\"form-control\" placeholder=\"Enter your addresss\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"cityFr\" class=\"col-2 col-form-label\">City</label>\n            <div class=\"col-10\">\n                <input id=\"cityFr\" [(ngModel)]=\"student.city\" name=\"student.city\" type=\"text\" class=\"form-control\" placeholder=\"Enter your city\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"phoneFr\" class=\"col-2 col-form-label\">Phone:</label>\n            <div class=\"col-10\">\n                <input id=\"phoneFr\" [(ngModel)]=\"student.phone\" name=\"student.phone\" type=\"text\" class=\"form-control\" placeholder=\"Enter your phone\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"emailFr\" class=\"col-2 col-form-label\">Email:</label>\n            <div class=\"col-10\">\n                <input id=\"emailFr\" [(ngModel)]=\"student.email\" name=\"student.email\" type=\"text\" class=\"form-control\" placeholder=\"Enter your Email Address\">\n            </div>\n\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"programFr\" class=\"col-2 col-form-label\">Program</label>\n            <div class=\"col-10\">\n                <input id=\"programFr\" [(ngModel)]=\"student.program\" name=\"student.program\" type=\"text\" class=\"form-control\" placeholder=\"Enter your Favorite Program\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n\n            <label for=\"passwordFr\" class=\"col-2 col-form-label\">Password:</label>\n            <div class=\"col-10\">\n                <input id=\"passwordFr\" [(ngModel)]=\"student.password\" name=\"student.password\" type=\"password\" class=\"form-control\" placeholder=\"Enter your Password\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"passwordAgainFr\" class=\"col-2 col-form-label\">Confirm Password:</label>\n            <div class=\"col-10\">\n                <input id=\"passwordAgainFr\" (input)=\"match2Passwords()\" [(ngModel)]=\"student.passwordAgain\" name=\"student.passwordAgain\"\n                    type=\"password\" class=\"form-control\" placeholder=\"Enter your Password Again\">\n            </div>\n        </div>\n        <input id=\"btnSignUp\" type=\"submit\" [disabled]=\"isSubmitDisabled\" value=\"Sign Up\" class=\"btn btn-primary\" />\n\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(dataService, fb, messageService, configService) {
        // this.rForm = fb.group({
        //   'studentnumber':[null, Validators.required],
        //   'password':[null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
        //   'firstname':[null, Validators.required],
        //   'lastname':[null, Validators.required],
        //   'email':[null, Validators.compose([Validators.required, Validators.email])],
        //   'address':[null],
        //   'city':[null],
        //   'phone':[null],
        // })
        var _this = this;
        this.dataService = dataService;
        this.fb = fb;
        this.messageService = messageService;
        this.configService = configService;
        this.messageService.listen().subscribe(function (msg) {
            switch (msg) {
                case _this.configService.MSG_SHOW_SIGNUP:
                    _this.display(true);
                    break;
                default:
                    _this.display(false);
                    break;
            }
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        // this.display(false);
        this.isSubmitDisabled = true;
        this.signUpErrs = [];
        this.student = {
            studentnumber: "",
            password: "",
            passwordAgain: "",
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            city: "",
            phone: "",
            program: ""
        };
        this.mock_user();
    };
    SignupComponent.prototype.display = function (toDisplay) {
        this.toDisplaySignUp = toDisplay;
    };
    SignupComponent.prototype.match2Passwords = function () {
        if (this.student.password == "" || this.student.passwordAgain == "" || this.student.password != this.student.passwordAgain) {
            this.isSubmitDisabled = true;
        }
        else {
            this.isSubmitDisabled = false;
        }
    };
    SignupComponent.prototype.mock_user = function () {
        this.student = {
            studentnumber: "400000001",
            password: "Aa!123456",
            passwordAgain: "Aa!123456",
            firstname: "firstname41",
            lastname: "lastname41",
            email: "email41@gmail.com",
            address: "123 main ave",
            city: "Toronto",
            phone: "6470000001",
            program: "Software Engineering"
        };
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.student.password != this.student.passwordAgain) {
            this.signUpErrs = ["Passwords didn't match!"];
            return;
        }
        this.dataService.signup(this.student).subscribe(function (data) {
            _this.signUpErrs = [];
            console.log("err...");
            console.log(data["err"]);
            console.log("data...");
            console.log(data["data"]);
            if (data["err"]) {
                var dbErr = data["err"];
                if (dbErr["errmsg"]) {
                    _this.signUpErrs.push(dbErr["errmsg"]);
                }
                else {
                    if (dbErr instanceof Object) {
                    }
                    else {
                        _this.signUpErrs.push(dbErr);
                    }
                }
                var errors = data["err"]["errors"]; /** validation errors */
                for (var prop in errors) {
                    if (errors.hasOwnProperty(prop)) {
                        _this.signUpErrs.push(errors[prop]["message"]);
                    }
                }
            }
            else {
                // console.log("data...")
                // console.log(data["data"]);
                if (!data["data"]) {
                    _this.signUpErrs.push('Unknow error occurred!');
                }
                else {
                    _this.dataService.setStudent(data["data"]);
                    _this.messageService.filter(_this.configService.MSG_USER_LOGGEDIN);
                    _this.messageService.filter(_this.configService.MSG_SHOW_PROFILE); /** PROFILE is Home */
                }
            }
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"toDisplayProfile\">\n    <h3>Student Profile</h3>\n    <table class=\"table\">\n        <input type=\"text\" hidden value=\"{{user._id}}\">\n        <tbody>\n            <tr>\n                <th scope=\"row\">Student Number</th>\n                <td>{{user.studentnumber}}</td>\n            </tr>\n            <tr>\n                <th scope=\"row\">First Name</th>\n                <td>{{user.firstname}}</td>\n            </tr>\n            <tr>\n                <th scope=\"row\">Last Name</th>\n                <td>{{user.lastname}}</td>\n            </tr>\n            <tr>\n                <th scope=\"row\">Email</th>\n                <td>{{user.email}}</td>\n            </tr>\n            <tr>\n                <th scope=\"row\">Address</th>\n                <td>{{user.address}}</td>\n            </tr>\n            <tr>\n                <th scope=\"row\">City</th>\n                <td>{{user.city}}</td>\n            </tr>\n            <tr>\n                <th scope=\"row\">Phone</th>\n                <td>{{user.phone}}</td>\n            </tr>     \n            <tr>\n                <th scope=\"row\">Program</th>\n                <td>{{user.program}}</td>\n            </tr>\n            <!-- <tr>\n                <th scope=\"row\">My Courses:</th>\n                <td>mycourses...</td>\n            </tr> -->\n        </tbody>\n\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    // myCourses:
    function UserComponent(configService, messageService, dataService) {
        var _this = this;
        this.configService = configService;
        this.messageService = messageService;
        this.dataService = dataService;
        this.text = "mytext";
        this.messageService.listen().subscribe(function (msg) {
            switch (msg) {
                case _this.configService.MSG_SHOW_PROFILE:
                    _this.display(true);
                    break;
                default:
                    _this.display(false);
                    break;
            }
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.display = function (toDisplay) {
        this.toDisplayProfile = toDisplay;
        if (this.toDisplayProfile) {
            // this.mock_user();
            this.user = this.dataService.getStudent();
        }
    };
    UserComponent.prototype.mock_user = function () {
        this.user = {};
        this.user.studentnumber = "300823005";
        this.user.password = "Aa!123456";
        this.user.firstname = "Firstname5";
        this.user.lastname = "Lastname5";
        this.user.address = "124 Main Ave";
        this.user.city = "Markham";
        this.user.phone = "6471112225";
        this.user.email = "email5@gmail.com";
        this.user.program = "Software Technology";
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/components/user/user.component.html"),
            styles: [__webpack_require__("./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], UserComponent);
    return UserComponent;
}());

// interface User{
//   studentnumber?:string;
//   password?:string;
//   firstname?:string;
//   lastname?:string;
//   address?:string;
//   city?:string;
//   phone?:string;
//   email?:string;
//   program?:string;
// }


/***/ }),

/***/ "./src/app/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.MSG_ON_NAV_HOME = "onNavHome";
        this.MSG_ON_NAV_LOGIN = "onNavLogin";
        this.MSG_ON_NAV_SIGNUP = "onNavSignUp";
        this.MSG_ON_NAV_MYCOURSES = "onNavMyCourses";
        this.MSG_ON_NAV_ALLCOURSES = "onNavAllCourses";
        this.MSG_SHOW_MYCOURSES = "showMyCourses"; /** show user's couress */
        this.MSG_SHOW_PROFILE = "showUserProfile"; /** show user profile like name, email,... */
        this.MSG_SHOW_LOGIN = "showLoginForm";
        this.MSG_SHOW_SIGNUP = "showSignUpForm";
        this.MSG_USER_LOGGEDIN = "loggedIn";
        this.MSG_USER_LOGGEDOUT = "loggedOut";
        this.MSG_HIDE_COURSES = "hideAllCourses";
        this.MSG_SHOW_COURSES = "showAllCourses"; /** all courses for everyone */
    }
    // public methods for caller
    ConfigService.prototype.getCourses = function () { };
    // private helper mothers
    ConfigService.prototype.getApi = function () {
        return "";
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http, configService) {
        this.http = http;
        this.configService = configService;
        console.log('Data service is connected ... ');
        this.getCourses();
    }
    DataService.prototype.registerCourse = function (studentId, courseId) {
        var url = "http://localhost:8080/api/course/register";
        var headers = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) };
        var body = {
            "course_id": courseId,
            "student_id": studentId
        };
        console.log("in DataService: body=");
        console.log(body);
        return this.http.post(url, JSON.stringify(body), headers).map(function (res) { return res.json(); });
        /** response is either: { "data": "OK"} or  { "err": "error in dropping course"}*/
    };
    DataService.prototype.dropCourse = function (studentId, courseId) {
        var url = "http://localhost:8080/api/course/drop";
        var body = {
            "course_id": courseId,
            "student_id": studentId
        };
        var headers = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) };
        return this.http.post(url, JSON.stringify(body), headers).map(function (res) { return res.json(); });
        /** response is either: { "data": "OK"} or  { "err": "error in dropping course"}*/
    };
    DataService.prototype.setStudent = function (student) {
        this.student = student;
    };
    DataService.prototype.getStudent = function () {
        return this.student;
    };
    DataService.prototype.getCourses = function () {
        /** get all courses */
        var url = "http://localhost:8080/api/course/list";
        return this.http.get(url).map(function (res) { return res.json(); });
        // return this.http.get(url).map((res:Response) => {return res.json();});    // 
    };
    DataService.prototype.getMyCourses = function (_id) {
        /** get my registered courses */
        var url = "http://localhost:8080/api/course/mylist/" + _id; /** _id is default _id in mongodb, not student number */
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DataService.prototype.login = function (studentnumber, password) {
        console.log("ng login: " + studentnumber + " | " + password);
        var url = "http://localhost:8080/api/student/login";
        var body = { "studentnumber": studentnumber, "password": password };
        return this.http.post(url, JSON.stringify(body), { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) }).map(function (res) { return res.json(); });
    };
    DataService.prototype.signup = function (student) {
        var url = "http://localhost:8080/api/student/signup";
        return this.http.post(url, JSON.stringify(student), { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) }).map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.listeners = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    MessageService.prototype.listen = function () {
        return this.listeners.asObservable();
    };
    MessageService.prototype.filter = function (filterBy) {
        this.listeners.next(filterBy);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map