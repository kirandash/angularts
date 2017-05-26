import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

// Custom structural directive
@Directive({
  selector: '[dirUnless]' // note that * is not a part of selector - it comes with angular 2 as a part of desugar mechanism
})
export class UnlessDirective {

	@Input() set dirUnless(condition: boolean) {
		if(!condition){
			this.vcRef.createEmbeddedView(this.templateRef); // Sof if this case occurs then a2 will render the template in the view
		} else {
			this.vcRef.clear(); // otherwise clear the view reference
		}
	} // Since property binding is required
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { } // Inject template and container reference

}
