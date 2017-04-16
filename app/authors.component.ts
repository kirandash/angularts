// Import the Component decorator from the angular core module
import {Component} from 'angular2/core';
// Import author service
import {AuthorService} from './author.service';

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
			`,
	providers: [AuthorService]		
	// Providers - teaches angular to create AuthorService that is being injected to the component via dependency injection
})// Do not use semicolon here

// Create a class for authors component with all the properties which then can be used on other modules.
export class AuthorsComponent {
	title = "Title for the main authors page";
	authors: string[];

	// Reference the AuthorService - dependency injection
	constructor(authorService: AuthorService){
		// dependency injection takes a class and injects a reference to it in the coursescomponent
		this.authors = authorService.getAuthors();
	}
}