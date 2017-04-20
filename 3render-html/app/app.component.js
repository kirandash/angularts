System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.courses = [];
                    this.viewMode = 'map'; // default value not required if ngSwitchDefault is used
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>*ngIf and [hidden]</h1>\n\t\t<div *ngIf=\"courses.length > 0\">\n\t\t\tList of courses\n\t\t</div>\n\t\t<div [hidden]=\"courses.length == 0\">\n\t\t\tList of courses\n\t\t</div>\n\t\t<div *ngIf=\"courses.length == 0\">\n\t\t\tNo courses yet\n\t\t</div>\n\t\t<div [hidden]=\"courses.length > 0\">\n\t\t\tNo courses yet\n\t\t</div>\n\t\t<h1>ngSwitch, ngSwitchWhen, template and ngSwitchDefault</h1>\n\t\t<ul class=\"nav nav-pills\">\n\t\t\t<li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode='map'\">Map view</a></li>\n\t\t\t<li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode='list'\">Map view</a></li>\n\t\t</ul>\n\t\t<div [ngSwitch]=\"viewMode\">\n\t\t\t<template [ngSwitchWhen]=\"'map'\" >Map view content</template>\n\t\t\t<template [ngSwitchWhen]=\"'list'\" ngSwitchDefault>List view content</template>\n\t\t</div>\n    " // ngIf does not render the html if condition is false - For large element tree
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map