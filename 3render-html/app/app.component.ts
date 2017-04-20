import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
		<div *ngIf="courses.length > 0">
			List of courses
		</div>
		<div [hidden]="courses.length == 0">
			List of courses
		</div>
		<div *ngIf="courses.length == 0">
			No courses yet
		</div>
		<div [hidden]="courses.length > 0">
			No courses yet
		</div>
    `// ngIf does not render the html if condition is false - For large element tree
     // hidden renders the html - For small element tree
     // ngIf not good if element is revealed and shown multiple times - poor performance
})
export class AppComponent { 
	courses = [];
}