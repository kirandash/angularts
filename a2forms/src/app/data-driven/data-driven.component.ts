import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup; // creating the form using FormGroup unlike default angular template driven approach
    // defining the type of myForm variable as FormGroup
    constructor() {
    	this.myForm = new FormGroup({
    		'username': new FormControl(),// in template driven approach form control was automatically created by adding ngModel directive to input
    		'email': new FormControl(),
    		'password': new FormControl()
    	});
    }// note that for simpler forms constructor can be used bt for heavy complex forms, ngOnInit can be used

    onSubmit() {
    	console.log(this.myForm);
    }
}
