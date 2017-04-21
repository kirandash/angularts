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
                    // But it might not work with class binding so better to use viewMode check
                    this.courses2 = ['bio', 'maths', 'zoology'];
                    this.courses3 = {
                        title: "This is a title",
                        rating: 1.5,
                        rating2: 231.56945,
                        students: 56589,
                        money: 30000,
                        date: new Date(2017, 3, 2)
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>*ngIf and [hidden]</h1>\n\t\t<div *ngIf=\"courses.length > 0\">\n\t\t\tList of courses\n\t\t</div>\n\t\t<div [hidden]=\"courses.length == 0\">\n\t\t\tList of courses\n\t\t</div>\n\t\t<div *ngIf=\"courses.length == 0\">\n\t\t\tNo courses yet\n\t\t</div>\n\t\t<div [hidden]=\"courses.length > 0\">\n\t\t\tNo courses yet\n\t\t</div>\n\t\t<h1>ngSwitch, ngSwitchWhen, template and ngSwitchDefault</h1>\n\t\t<ul class=\"nav nav-pills\">\n\t\t\t<li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode='map'\">Map view</a></li>\n\t\t\t<li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode='list'\">Map view</a></li>\n\t\t</ul>\n\t\t<div [ngSwitch]=\"viewMode\">\n\t\t\t<template [ngSwitchWhen]=\"'map'\" >Map view content</template>\n\t\t\t<template [ngSwitchWhen]=\"'list'\" ngSwitchDefault>List view content</template>\n\t\t</div>\n\t\t<h1>*ngFor and index</h1>\n\t\t<ul>\n\t\t\t<li *ngFor=\"#course of courses2, #i = index\">\n\t\t\t\t{{ i+1 }} - {{ course }}\n\t\t\t</li>\n\t\t</ul>\n\t\t<h1>*ngFor Asterisk</h1>\n\t\t<p>sterisk transforms li into template element</p>\n\t\t<ul>\n\t\t\t<template ngFor [ngForOf]=\"courses2\" #course #i=index>\n\t\t\t\t<li>\n\t\t\t\t\t{{ i+1 }} - {{ course }}\n\t\t\t\t</li>\n\t\t\t</template>\n\t\t</ul>\n\t\t<h1>Pipes</h1>\n\t\t{{courses3.title | uppercase | lowercase}}\n\t\t<br>\n\t\t{{courses3.rating | number:'2.2-2'}}\n\t\t{{courses3.rating2 | number:'2.2-2'}}\n\t\t<br>\n\t\t{{courses3.students | number}}\n\t\t<br>\n\t\t{{courses3.money | currency:'AUD':true:'2.2-2'}}\n\t\t{{courses3.money | currency:'INR':false:'2.2-2'}}\n\t\t<br>\n\t\t{{courses3.date | date:'shortDate'}}\n\t\t{{courses3.date | date:'MMM yyyy'}}\n\t\t<br>\n\t\t{{courses3 | json}}\n    " // ngIf does not render the html if condition is false - For large element tree
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