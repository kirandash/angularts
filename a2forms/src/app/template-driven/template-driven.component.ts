import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
  	.ng-invalid {
  		border: 1px solid red;
  	}
  `]
})
export class TemplateDrivenComponent {
	user = {
		username: 'Kiran',
		email: 'thekirankumardash@gmail.com',
		password: 'testpassword'
	}
	onSubmit(form: NgForm) { // form data received from local variable and ngForm directive which is of type NgForm
		// console.log('This form works');
		// console.log(form);
		// console.log(this.user);
		console.log(form.value);
	}
}
