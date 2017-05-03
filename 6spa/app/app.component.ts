// Angular imports (alphabetically)
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

// Imports for application components
import {AlbumsComponent} from './albums.component';
import {ContactComponent} from './contact.component';

// Configure router
@RouteConfig([
	{ path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true },
	{ path: '/contact', name: 'Contact', component: ContactComponent },
	{ path: '/*other', name: 'Other', redirectTo: ['Albums'] }// Wild card path that matches any name (*) - This makes sure that any non-existent urls will redirect to albums path
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [RouterOutlet]
})
export class AppComponent {
}