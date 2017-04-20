// Import the Directive decorator from the angular core module
import {Directive, ElementRef, Renderer} from 'angular2/core';

// Call the Directive Decorator - with an object
@Directive({
	selector: '[inputFocus]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}
})// selector - where directive is going to be applied, host - object taking events and handlers
// binding onFocus method to focus event

export class InputFocusDirective {
	// Create the methods from host element using 2 services from angular (Elementref to access host element and Rendered to modify host element)
	constructor(private el: ElementRef, private renderer: Renderer){
		// angular will automatically inject references of the two services into the InputFocusDirective class
	}

	onFocus(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '300');
	}

	onBlur(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '150');
	}
}