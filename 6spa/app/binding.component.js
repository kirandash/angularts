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
    var BindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BindingComponent = (function () {
                function BindingComponent() {
                    this.title = "Learn Binding";
                    this.title2 = "Binding class";
                    this.title3 = "Binding events";
                    this.title4 = "Two way binding";
                    this.title5 = "Star rating";
                    this.inputvalue = "Modify the title here";
                    this.imageUrl = "http://www.hlgjyl888.com/data/wallpapers/57/WDF_1035782.png";
                    this.isActive = false;
                    this.starActive = false;
                }
                BindingComponent.prototype.onClick = function ($event) {
                    // events propagate from bottom to up in DOM tree
                    $event.stopPropagation();
                    console.log("clicked", $event);
                };
                BindingComponent.prototype.onDivClick = function () {
                    console.log("clicked on div");
                };
                BindingComponent.prototype.starClick = function () {
                    this.starActive = !this.starActive;
                };
                BindingComponent = __decorate([
                    core_1.Component({
                        selector: 'binding',
                        template: "\n\t\t\t\t<h1>{{title}}</h1>\n\t\t\t\t<h1 [textContent]=\"title\"></h1>\n\t\t\t\t<h1 bind-textContent=\"title\"></h1>\n\t\t\t\t<img src=\"{{imageUrl}}\">\n\t\t\t\t<img [src]=\"imageUrl\">\n\t\t\t\t<img bind-src=\"imageUrl\">\n\t\t\t\t<div>\n\t\t\t\t<h1>{{title2}}</h1>\n\t\t\t\t<button class=\"btn btn-primary\" \n\t\t\t\t  [style.backgroundColor] = \"isActive ? 'blue' : 'red'\"\n\t\t\t\t  [class.active]=\"isActive\">Submit</button>\n\t\t\t\t<button class=\"btn btn-primary\" [class.active]=\"!isActive\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t<div (click)=\"onDivClick()\">\n\t\t\t\t<h1>{{title3}}</h1>\n\t\t\t\t<button (click)=\"onClick($event)\">Submit</button>\n\t\t\t\t<button on-click=\"onClick()\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t<h1>{{title4}}</h1>\n\t\t\t\t<input type=\"text\" [value]=\"inputvalue\" (input)=\"title4 = $event.target.value\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"title4\">\n\t\t\t\t<input type=\"text\" bindon-ngModel=\"title4\">\n\t\t\t\t<input type=\"button\" (click)=\"title4 = ''\" value=\"Clear\">\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t<h1>{{title5}}</h1>\n\t\t\t\t<i class=\"glyphicon\" \n\t\t\t\t[class.glyphicon-star-empty]=\"!starActive\"\n\t\t\t\t[class.glyphicon-star]=\"starActive\"\n\t\t\t\t(click)=\"starClick()\" style=\"font-size:30px;\">\n\t\t\t\t</i>\n\t\t\t\t</div>\n\t\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], BindingComponent);
                return BindingComponent;
            }());
            exports_1("BindingComponent", BindingComponent);
        }
    }
});
//# sourceMappingURL=binding.component.js.map