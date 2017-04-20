System.register(['angular2/core', './course.service', './input-focus.directive'], function(exports_1, context_1) {
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
    var core_1, course_service_1, input_focus_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (input_focus_directive_1_1) {
                input_focus_directive_1 = input_focus_directive_1_1;
            }],
        execute: function() {
            // Call the decorator - with @ before it. All decorators are fns so they must be called
            CoursesComponent = (function () {
                // reference the CourseService
                function CoursesComponent(courseService) {
                    // a component decorator is used to tell angular that this class is a component
                    this.title = "The title of courses page";
                    // dependency injection takes a class and injects a reference to it in the coursescomponent
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n\t\t\t\t<h2>Courses</h2>\n\t\t\t\t{{ title }}\n\t\t\t\t<input type=\"text\" inputFocus>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"#course of courses\">\n\t\t\t\t\t{{ course }}\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t  ",
                        // ngFor to iterate through object
                        providers: [course_service_1.CourseService],
                        directives: [input_focus_directive_1.InputFocusDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map