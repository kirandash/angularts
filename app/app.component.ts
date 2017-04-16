// Importing component decorator from angular
import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'; // path of the module containing courses component
import {AuthorsComponent} from './authors.component'; // path of the module containing authors component
import {BindingComponent} from './binding.component';

// Decorator fn calling the object and using an object
@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1><courses></courses><authors></authors><binding></binding>',
    directives: [CoursesComponent, AuthorsComponent, BindingComponent]
    // Directive - a class that allows us to extend of control DOM (and not part of standard html)
})

// export class - AppComponent which is the root of our application - takes control of entire app/page
export class AppComponent { }