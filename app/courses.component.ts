import {Component} from 'angular2/core'; // In angular2 core module there is a Component decorator - so it is included

// Call the decorator - with @ before it. All decorators are fns so they must be called
@Component({
	selector: 'courses',// assuming that host element has a class courses
	template: `
				<h2>Courses</h2>
				{{ title }}
				<ul>
					<li *ngFor="#course of courses">
					{{ course }}
					</li>
				</ul>
			  ` // template for the component - back tick allows us to have multiple lines
			  // ngFor to iterate through object
})

// Create a class
// export a class, fn and variable if it is needed in other module and then import it there
export class CoursesComponent {
	// a component decorator is used to tell angular that this class is a component
	title = "The title of courses page";
	courses = ["Course1", "Course2", "Course3"];
}