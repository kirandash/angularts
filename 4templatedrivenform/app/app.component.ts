import {Component} from 'angular2/core';

import {ContactFormComponent} from './contact-form.component';

import {SubscriptionFormComponent} from './subscription-form.component';

import {SignUpFormComponent} from './signup-form.component';

@Component({
    selector: 'my-app',
    directives: [ContactFormComponent, SubscriptionFormComponent, SignUpFormComponent],
    template: `
		<div class="container">
			<contact-form></contact-form>
			<subscription-form></subscription-form>
			<signup-form></signup-form>
		</div>
    `
})
export class AppComponent {  }