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
                    this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hyderabad_Financial_district%2CIndia.jpg/680px-Hyderabad_Financial_district%2CIndia.jpg";
                }
                BindingComponent = __decorate([
                    core_1.Component({
                        selector: 'binding',
                        template: "\n\t\t\t\t<h1>{{title}}</h1>\n\t\t\t\t<h1 [textContent]=\"title\"></h1>\n\t\t\t\t<h1 bind-textContent=\"title\"></h1>\n\t\t\t\t<img src=\"{{imageUrl}}\">\n\t\t\t\t<img [src]=\"imageUrl\">\n\t\t\t\t<img bind-src=\"imageUrl\">\n\t\t\t"
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