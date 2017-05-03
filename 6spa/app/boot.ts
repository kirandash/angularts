import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
// A constant array that holds all the router classes needed for dependency injection
import {ROUTER_PROVIDERS}    from 'angular2/router'
// Adding it in boot.ts will register the router providres for all the modules. So no need to add for individual moduels

bootstrap(AppComponent, [ROUTER_PROVIDERS]); // Provider passed in bootstrap function