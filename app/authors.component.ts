// Import the Component decorator from the angular core module
import {Component} from 'angular2/core';

// Call the Component Decorator - with an object
@Component({
	selector: 'authors',
	template: `
				<h2>Authors</h2>
				{{title}}
				<ul>
					<li *ngFor="#author of authors">
						{{author}}
					</li>
				</ul>
			`
})

// Create a class for authors component with all the properties which then can be used on other modules.
export class AuthorsComponent {
	title = "Title for the main authors page";
	authors = ["Author 1","Author 2","Author 3","Author 4"];
}