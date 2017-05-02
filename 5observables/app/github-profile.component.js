System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/observable/forkJoin', './github.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, github_service_1;
    var GithubProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            }],
        execute: function() {
            GithubProfileComponent = (function () {
                function GithubProfileComponent(_githubService) {
                    this._githubService = _githubService;
                    this.isLoading = true;
                    this.username = "kirandash";
                    this.user = {};
                    this.followers = [];
                }
                GithubProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Observable_1.Observable.forkJoin(this._githubService.getUser(this.username), this._githubService.getFollowers(this.username))
                        .subscribe(function (res) {
                        _this.user = res[0];
                        _this.followers = res[1];
                    }, null, function () { _this.isLoading = false; });
                };
                GithubProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'github-profile',
                        styles: [
                            "\n\t\t\t.avatar {\n\t\t\t\twidth: 100;\n\t\t\t\theight: 100;\n\t\t\t\tborder-radius: 100%;\n\t\t\t}\n\t\t"
                        ],
                        template: "\n\t\t<i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n\t\t<h2>@{{user.login}}</h2>\n\t\t<img class=\"avatar\" src=\"{{user.avatar_url}}\">\n\t\t<h3>Followers</h3>\n\t\t<div *ngFor=\"#follower of followers\">\n\t\t\t<div class=\"media-left\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img class=\"media-object avatar\" src=\"{{follower.avatar_url}}\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<h4 class=\"media-heading\">{{follower.login}}</h4>\n\t\t\t</div>\n\t\t</div>\n\t",
                        providers: [http_1.HTTP_PROVIDERS, github_service_1.GithubService]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubProfileComponent);
                return GithubProfileComponent;
            }());
            exports_1("GithubProfileComponent", GithubProfileComponent);
        }
    }
});
//# sourceMappingURL=github-profile.component.js.map