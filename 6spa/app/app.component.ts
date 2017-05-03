// Angular imports (alphabetically)
import {Component} from 'angular2/core';
// import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; // Include all the common Router Directives

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
    // directives: [RouterOutlet, RouterLink]
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}