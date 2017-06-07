import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup; // creating the form using FormGroup unlike default angular template driven approach
    // defining the type of myForm variable as FormGroup

    genders = [
    	'male',
    	'female'
    ];

    constructor(private formBuilder: FormBuilder) { // FormBuilder injected
    	/*this.myForm = new FormGroup({
    		'userData': new FormGroup({
	    		'username': new FormControl('kirandash', Validators.required),// in template driven approach form control was automatically created by adding ngModel directive to input
	    		'email': new FormControl('kiran@xhtmlchamps.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    		}),
    		'password': new FormControl('a345@30', Validators.required),// default value, validator, or array of validators
    		'gender': new FormControl('male'),
    		'hobbies': new FormArray([
    			new FormControl('Cooking', Validators.required)
    		])// array of form controls
    	});*/

    	this.myForm = formBuilder.group({
    		'userData': formBuilder.group({
	    		'username': ['kirandash', [Validators.required, this.exampleValidator]],// in template driven approach form control was automatically created by adding ngModel directive to input
	    		'email': ['kiran@xhtmlchamps.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
    		}),
    		'password': ['a345@30', Validators.required, this.asyncExampleValidator],// default value, validator, or array of validators
    		'gender': ['male'],
    		/*'hobbies': formBuilder.array([
    			['Cooking', Validators.required]
    		])*/// array of form controls
    	});
    }// note that for simpler forms constructor can be used bt for heavy complex forms, ngOnInit can be used

    /*onAddHobby(){
    	(<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
    }*/

    onSubmit() {
    	console.log(this.myForm);
    }

    // Custom validator funtion
    exampleValidator(control: FormControl): {[s: string]: boolean} {
    	if(control.value == 'Example'){
    		return {example: true};// Returning means validation will fail
    	}
    	return null;// validation is successful - dont return boolean false - it wont work
    }

    // Custom asynchronous validator
    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    	// an observable is there to make sure that a certain value can be observed
    	const promise = new Promise<any>(
    		(resolve, reject) => {
    			setTimeout(()=>{
    				if(control.value === 'Example'){
    					resolve({'invalid': true}); // validation failed
    				}else{
    					resolve(null); // validation is successful 
    				}
    			}, 1500);
    		}
    	);
    	return promise;
    }
}