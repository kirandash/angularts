import {Component} from 'angular2/core';

@Component({
	selector: 'binding',
	template: `
				<h1>{{title}}</h1>
				<h1 [textContent]="title"></h1>
				<h1 bind-textContent="title"></h1>
				<img src="{{imageUrl}}">
				<img [src]="imageUrl">
				<img bind-src="imageUrl">
				<div>
				<h1>{{title2}}</h1>
				<button class="btn btn-primary" 
				  [style.backgroundColor] = "isActive ? 'blue' : 'red'"
				  [class.active]="isActive">Submit</button>
				<button class="btn btn-primary" [class.active]="!isActive">Submit</button>
				</div>
				<div (click)="onDivClick()">
				<h1>{{title3}}</h1>
				<button (click)="onClick($event)">Submit</button>
				<button on-click="onClick()">Submit</button>
				</div>
			`
})

export class BindingComponent{
	title = "Learn Binding";
	title2 = "Binding class";
	title3 = "Binding events";
	imageUrl = "http://www.hlgjyl888.com/data/wallpapers/57/WDF_1035782.png";
	isActive = false;
	onClick($event){
		// events propagate from bottom to up in DOM tree
		$event.stopPropagation();
		console.log("clicked",$event);
	}
	onDivClick(){
		console.log("clicked on div");
	}
}