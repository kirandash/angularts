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
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isExpanded = false;
                }
                ZippyComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZippyComponent.prototype, "title", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n\t\t<div class=\"zippy panel panel-default\">\n\t\t\t<div \n\t\t\t\tclass=\"zippy-title panel-heading\"\n\t\t\t\t(click)=\"toggle()\">\n\t\t\t\t{{title}}\n\t\t\t\t<i \n\t\t\t\t\tclass=\"pull-right glyphicon\"\n\t\t\t\t\t[ngClass]=\"\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'glyphicon-chevron-down' : !isExpanded,\n\t\t\t\t\t\t\t'glyphicon-chevron-up' : isExpanded\n\t\t\t\t\t\t}\"\n\t\t\t\t>\n\t\t\t\t</i>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"isExpanded\" class=\"zippy-content panel-body\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map