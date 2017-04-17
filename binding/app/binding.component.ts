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
				<div>
				<h1>{{title4}}</h1>
				<input type="text" [value]="inputvalue" (input)="title4 = $event.target.value">
				<input type="text" [(ngModel)]="title4">
				<input type="text" bindon-ngModel="title4">
				<input type="button" (click)="title4 = ''" value="Clear">
				</div>
				<div>
				<h1>{{title5}}</h1>
				<i class="glyphicon" 
				[class.glyphicon-star-empty]="!starActive"
				[class.glyphicon-star]="starActive"
				(click)="starClick()" style="font-size:30px;">
				</i>
				</div>
			`
})

export class BindingComponent{
	title = "Learn Binding";
	title2 = "Binding class";
	title3 = "Binding events";
	title4 = "Two way binding";
	title5 = "Star rating";
	inputvalue = "Modify the title here";
	imageUrl = "http://www.hlgjyl888.com/data/wallpapers/57/WDF_1035782.png";
	isActive = false;
	starActive = false;
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