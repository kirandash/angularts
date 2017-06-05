import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    		'username': new FormControl('kirandash', Validators.required),// in template driven approach form control was automatically created by adding ngModel directive to input
    		'email': new FormControl('kiran@xhtmlchamps.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    		'password': new FormControl('a345@30', Validators.required)// default value, validator, or array of validators
    	});
    }// note that for simpler forms constructor can be used bt for heavy complex forms, ngOnInit can be used

    onSubmit() {
    	console.log(this.myForm);
    }
}
