import {Component} from 'angular2/core';
import {Router from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent {
    constructor(private _router: Router){

    }
    onSubmit(form){
        console.log(form);
        // Imperative Navigation with Router.navigate since routerLink can't be used here
        this._router.navigate(['Albums']);
    }
}