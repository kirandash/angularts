System.register(['angular2/core', './favorite.component'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }],
        execute: function() {
            // Decorator fn calling the object and using an object
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        starActive: false
                    }; // Post data assumed to come from service
                    this.tweet = {
                        starResult: 10,
                        heartActive: true
                    };
                    this.vote = {
                        voteCount: 3,
                        voteFlag: 0
                    };
                }
                AppComponent.prototype.onStarChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    // path of the module containing courses component
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<i class=\"glyphicon glyphicon-star\"></i>\n    \t<favorite \n    \t\t[star-active]=\"post.starActive\" \n    \t\t[star-result]=\"tweet.starResult\" \n    \t\t(change)=\"onStarChange($event)\"\n    \t\t[heart-active]=\"tweet.heartActive\"\n    \t\t[vote-count]=\"vote.voteCount\"\n    \t\t[vote-flag]=\"vote.voteFlag\"\n    \t\t(vote)=\"onVote($event)\"\n    \t\t></favorite>\n    \t",
                        directives: [favorite_component_1.BindingComponent],
                        // Directive - a class that allows us to extend of control DOM (and not part of standard html)
                        styles: [
                            "\n\t\t.glyphicon-star {\n\t\t\tcolor: orange;\n\t\t\tfont-size: 30px;\n\t\t}\n\t\t"
                        ] // inline styles - only applied to the class in current component, not to components from outside modules
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