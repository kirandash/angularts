import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _router: Router){

    }
    onSubmit(form){
        console.log(form);
        // Imperative Navigation with Router.navigate since routerLink can't be used here
        this._router.navigate(['Albums']);
    }

    routerCanDeactivate(next, previous){
    	//console.log("next", next);
    	//console.log("previous", previous);
    	//if(this.form.dirty)
    	return confirm("Are you sure?");
    	// If yes then current component can be deactivated and thus user can go to next page otherwise if no then current component stays activated and they stay on the same page
    }
}