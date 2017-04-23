import {Component} from 'angular2/core';

import {ContactFormComponent} from './contact-form.component';

import {SubscriptionFormComponent} from './subscription-form.component';

@Component({
    selector: 'my-app',
    directives: [ContactFormComponent, SubscriptionFormComponent],
    template: `
		<div class="container">
			<contact-form></contact-form>
			<subscription-form></subscription-form>
		</div>
    `
})
export class AppComponent {  }