System.register(['rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PostService;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                    this._url = 'https://jsonplaceholder.typicode.com/posts';
                }
                PostService.prototype.getPost = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); }); // http returns Observable which is then mapped to get json value
                };
                PostService.prototype.createPost = function (post) {
                    return this._http.post(this._url, JSON.stringify(post))
                        .map(function (res) { return res.json(); });
                };
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map