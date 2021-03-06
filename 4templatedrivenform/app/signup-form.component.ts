import {Component} from 'angular2/core';

import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';

import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
	// Model Driven forms (Creating control explicitly whereas in template driven forms the controls are created in template implicitly)
	/*form = new ControlGroup({
		username: new Control('', Validators.required),
		password: new Control('', Validators.required) // default value, validators object
	});*/
	form: ControlGroup;
	constructor(fb: FormBuilder){
		this.form = fb.group({
			username: ['', Validators.compose([Validators.required, UsernameValidators.cannotContainSpace]),UsernameValidators.shouldBeUnique],// default value for control, one or more custom validator, one or more async validators
			password: ['', Validators.required],
		}); // Storing the result of group method from FormBuilder class in form property of constructor
	}
	signup(){
		// var result = authService.login(this.form.value);
		this.form.find('username').setErrors({
			invalidLogin: true
		});
		console.log(this.form.value);
	}
}