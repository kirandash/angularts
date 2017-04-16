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
    var InputFocusDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Call the Directive Decorator - with an object
            InputFocusDirective = (function () {
                // Create the methods from host element using 2 services from angular (Elementref to access host element and Rendered to modify host element)
                function InputFocusDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    // angular will automatically inject references of the two services into the InputFocusDirective class
                }
                InputFocusDirective.prototype.onFocus = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '300');
                };
                InputFocusDirective.prototype.onBlur = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '150');
                };
                InputFocusDirective = __decorate([
                    core_1.Directive({
                        selector: '[inputFocus]',
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], InputFocusDirective);
                return InputFocusDirective;
            }());
            exports_1("InputFocusDirective", InputFocusDirective);
        }
    }
});
//# sourceMappingURL=input-focus.directive.js.map