import { Directive, Input, ElementRef, Renderer } from '@angular/core';

// Custom directive
@Directive({
  selector: '[dirHighlight]' // the [] is there to make it an attribute selector and is the standard. Removing it will make the directive a tag selector, or use . or # for class and id
})
export class HighlightDirective {

  @Input() dirHighlight: string; // When wrapping a property in brackets [] you're trying to bind to it. So you have to declare it as an @Input.

  // private elementRef: ElementRef; // Private to limit it only to this class
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  	// dependency injection to pass a reference of the current class to the element div where the directive is going to be bind
  	//this.elementRef.nativeElement.style.backgroundColor = 'green'; //nativeElement will return the html where the directive is bound
  	// This is not recommended and recommended to use renderer
  	this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
