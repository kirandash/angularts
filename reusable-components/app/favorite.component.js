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
                    this.title2 = "Twitter Like";
                    this.starActive = false; // Private property is made input property
                    // Alias in braket is optional
                    this.starResult = 10;
                    this.heartActive = false; // Private input property is made input property so that it can be used on favorite.template.html
                    this.voteCount = 5;
                    this.voteFlag = 0;
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
                BindingComponent.prototype.heartClick = function () {
                    this.heartActive = !this.heartActive;
                    this.starResult += this.heartActive ? 1 : -1;
                    this.change.emit({ newVlaue: this.heartActive });
                };
                BindingComponent.prototype.voteUp = function () {
                    this.voteFlag += (this.voteFlag == 0 || this.voteFlag == -1) ? 1 : 0;
                };
                BindingComponent.prototype.voteDown = function () {
                    this.voteFlag -= (this.voteFlag == 1 || this.voteFlag == 0) ? 1 : 0;
                };
                __decorate([
                    core_1.Input('star-active'), 
                    __metadata('design:type', Object)
                ], BindingComponent.prototype, "starActive", void 0);
                __decorate([
                    // Private property is made input property
                    core_1.Input('star-result'), 
                    __metadata('design:type', Object)
                ], BindingComponent.prototype, "starResult", void 0);
                __decorate([
                    core_1.Input('heart-active'), 
                    __metadata('design:type', Object)
                ], BindingComponent.prototype, "heartActive", void 0);
                __decorate([
                    // Private input property is made input property so that it can be used on favorite.template.html
                    core_1.Input('vote-count'), 
                    __metadata('design:type', Object)
                ], BindingComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input('vote-flag'), 
                    __metadata('design:type', Object)
                ], BindingComponent.prototype, "voteFlag", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BindingComponent.prototype, "change", void 0);
                BindingComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        templateUrl: 'app/favorite.template.html',
                        //inputs: ['starActive:star-active'],// alternate to using @Input decorator - Alias after colon is optional
                        // outputs: ['change:starChange']
                        // optional
                        styles: [
                            "\n\t\t\t.glyphicon-heart {\n\t\t\t\tfont-size: 30px;\n\t\t\t}\n\t\t\t.glyphicon-heart:hover {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.glyphicon-heart.active {\n\t\t\t\tcolor: deeppink;\n\t\t\t}\n\t\t\t#vote-updown .glyphicon.active {\n\t\t\t\tcolor: orange;\n\t\t\t}\n\t\t\t.glyphicon {\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-size: 30px;\n\t\t\t}\n\t\t\tdiv {\n\t\t\t\tfont-size: 30px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t"
                        ]
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