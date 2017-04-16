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
			`
})

export class BindingComponent{
	title = "Learn Binding",
	imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hyderabad_Financial_district%2CIndia.jpg/680px-Hyderabad_Financial_district%2CIndia.jpg"
}