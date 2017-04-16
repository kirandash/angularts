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
				<button class="btn btn-primary" [class.active]="isActive">Submit</button>
				</div>
			`
})

export class BindingComponent{
	title = "Learn Binding";
	title2 = "Binding class";
	imageUrl = "http://www.hlgjyl888.com/data/wallpapers/57/WDF_1035782.png";
	isActive = false;
}