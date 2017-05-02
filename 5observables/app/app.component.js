/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx', './post.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, Rx_1, post_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService) {
                    /*var debounced = _.debounce(function(){
                        var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
                        $.getJSON(url, function(artists){
                            console.log(artists);
                        });
                    }, 400);
             
                    $("#search").keyup(function(e){
                        var text = e.target.value;
                        if(text.length<3)
                            return;
                        debounced(text);
                    });*/
                    this._postService = _postService;
                    this.isLoading = true;
                    //new Observable();
                    var keyups = Rx_1.Observable
                        .fromEvent($("#search"), "keyup")
                        .map(function (e) { return e.target.value; })
                        .filter(function (text) { return text.length > 3; })
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .flatMap(function (searchTerm) {
                        var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
                        var promise = $.getJSON(url);
                        return Rx_1.Observable.fromPromise(promise); // returns observable of observables, flatMap combines the observables list into a single list
                    }); // Create static observable
                    // Mapping is done to get just the value and not the entire DOM object
                    // Filter - check if length > 3
                    // Debounce is to listen to the events only after specific time
                    // distinctUntilChanged - to listen to events only if it is changed
                    // subscribe to the observables
                    var subscription = keyups.subscribe(function (data) { return console.log(data); });
                    // Unsubscribe an observable
                    subscription.unsubscribe(); // Application - user unsubscribing to notifications
                    // Importing Operators
                    console.log(new Rx_1.Observable);
                    // Use PostService Class
                    /*    	this._postService.getPosts()
                                .subscribe(posts => console.log(posts));*/
                    // returns array of posts objects
                    // In constructors we do light weight initializations and connection to server etc is done on OnInit method
                    // this._postService.createPost(1); // this now has typechecker and will not allow 1
                    this._postService.createPost({ userId: 1, title: 'a', body: 'b' }); // object is passed with optional id
                }
                // This method will be called when angular instantiates its component
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // In constructors we do light weight initializations and connection to server etc is done on OnInit method
                    this._postService.getPosts()
                        .then(function (posts) {
                        _this.isLoading = false;
                        console.log(posts[0].body);
                    }); // Converting observable to promise
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <input id=\"search\" type=\"text\" class=\"form-control\">\n        <div *ngIf=\"isLoading\">Getting data...</div>\n        <div *ngIf=\"isLoading\">\n\t\t\t<i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        <github-profile></github-profile>\n    ",
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS] // To avoid exception errors, include all the Classes and its dependencies
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map