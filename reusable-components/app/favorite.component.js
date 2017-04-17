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
                    this.title = "Star rating";
                    this.starActive = false; // Private property is made input property
                    // Alias in braket is optional
                    //@Output('starChange') change = new EventEmitter(); // EventEmitter is a class used to publish events
                    this.change = new core_1.EventEmitter();
                }
                // This is a private property. in order for it to be used outside the module - we must use the @Output decorator
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
                    this.change.emit({ newValue: this.starActive }); // publish an event and pass an object with current properties or pass null
                };
                __decorate([
                    core_1.Input('star-active'), 
                    __metadata('design:type', Object)
                ], BindingComponent.prototype, "starActive", void 0);
                __decorate([
                    // Private property is made input property
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BindingComponent.prototype, "change", void 0);
                BindingComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        template: "\n\t\t\t\t<div>\n\t\t\t\t<h1>{{title}}</h1>\n\t\t\t\t<i class=\"glyphicon\" \n\t\t\t\t[class.glyphicon-star-empty]=\"!starActive\"\n\t\t\t\t[class.glyphicon-star]=\"starActive\"\n\t\t\t\t(click)=\"starClick()\" style=\"font-size:30px;\">\n\t\t\t\t</i>\n\t\t\t\t</div>\n\t\t\t",
                        inputs: ['starActive:star-active'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], BindingComponent);
                return BindingComponent;
            }());
            exports_1("BindingComponent", BindingComponent);
        }
    }
});
//# sourceMappingURL=favorite.component.js.map