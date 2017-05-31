import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home-component.component';
import { UserComponent } from './user/user.component';

const APP_ROUTES: Routes = [
	{ path: 'user', component: UserComponent }
	{ path: '', component: HomeComponent }
]; // Angular 2 routes are defined as array of JS objects

// register the routes using the built in router module from angular 2 core
export const routing = RouterModule.forRoot(APP_ROUTES);