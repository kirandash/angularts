System.register(['angular2/platform/browser', './app.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // Adding it in boot.ts will register the router providres for all the modules. So no need to add for individual moduels
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS]); // Provider passed in bootstrap function
        }
    }
});
//# sourceMappingURL=boot.js.map