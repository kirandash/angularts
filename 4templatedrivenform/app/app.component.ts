import {Component} from 'angular2/core';

import {ContactFormComponent} from './contact-form.component';

import {SubscriptionFormComponent} from './subscription-form.component';

import {SignUpFormComponent} from './signup-form.component';

import {ChangePasswordFormComponent} from './change-password-form.component';

@Component({
    selector: 'my-app',
    directives: [ContactFormComponent, SubscriptionFormComponent, SignUpFormComponent, ChangePasswordFormComponent],
    template: `
		<div class="container">
			<contact-form></contact-form>
			<subscription-form></subscription-form>
			<signup-form></signup-form>
			<change-password-form></change-password-form>
		</div>
    `
})
export class AppComponent {  }