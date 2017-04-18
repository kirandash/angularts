import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'favorite',
	templateUrl: 'app/favorite.template.html', // extra http request to download the template file - not with inline template
	//inputs: ['starActive:star-active'],// alternate to using @Input decorator - Alias after colon is optional
	// outputs: ['change:starChange']
	// optional
	styles: [
		`
			.glyphicon-heart {
				font-size: 30px;
			}
			.glyphicon-heart:hover {
				cursor: pointer;
			}
			.glyphicon-heart.active {
				color: deeppink;
			}
		`
	]
})

export class BindingComponent{
	title = "Star rating";
	title2 = "Twitter Like";
	@Input('star-active') starActive = false; // Private property is made input property
	// Alias in braket is optional
	@Input('star-result') starResult = 10;

	@Input('heart-active') heartActive = false; // Private input property is made input property so that it can be used on favorite.template.html

	//@Output('starChange') change = new EventEmitter(); // EventEmitter is a class used to publish events
	@Output() change = new EventEmitter();
	// This is a private property. in order for it to be used outside the module - we must use the @Output decorator

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
		this.change.emit({ newValue: this.starActive });// publish an event and pass an object with current properties or pass null
	}
	heartClick(){
		this.heartActive = !this.heartActive;
		this.starResult += this.heartActive ? 1 : -1;
		this.change.emit({ newVlaue: this.heartActive });
	}
}