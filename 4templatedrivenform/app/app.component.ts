import {Component} from 'angular2/core';

import {ContactFormComponent} from './contact-form.component';

@Component({
    selector: 'my-app',
    directives: [ContactFormComponent],
    template: `
		<div class="container">
			<contact-form></contact-form>
		</div>
    `
})
export class AppComponent { }