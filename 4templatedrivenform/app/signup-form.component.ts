import {Component} from 'angular2/core';

import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
	// Model Driven forms (Creating control explicitly whereas in template driven forms the controls are created in template implicitly)
	form = new ControlGroup({
		username: new Control('', Validators.required),
		password: new Control('', Validators.required) // default value, validators object
	});
	signup(){
		console.log(this.form.value);
	}
}