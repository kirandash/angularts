System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            // Custom validator
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                UsernameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') > 0)
                        return { cannotContainSpace: true }; // If validation failed, return an object with properties
                    return null; // If validation successful
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=usernameValidators.js.map