import {Component, Input} from 'angular2/core';

@Component({
	selector: 'favorite',
	template: `
				<div>
				<h1>{{title}}</h1>
				<i class="glyphicon" 
				[class.glyphicon-star-empty]="!starActive"
				[class.glyphicon-star]="starActive"
				(click)="starClick()" style="font-size:30px;">
				</i>
				</div>
			`,
	inputs: ['starActive:star-active']// alternate to using @Input decorator
})

export class BindingComponent{
	title = "Star rating";
	@Input('star-active') starActive = false; // Private property is made input property
	onClick($event){
		// events propagate from bottom to up in DOM tree
		$event.stopPropagation();
		console.log("clicked",$event);
	}
	onDivClick(){
		console.log("clicked on div");
	}
	starClick(){
		this.starActive = !this.starActive;
	}
}