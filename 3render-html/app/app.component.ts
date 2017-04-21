import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
		<h1>*ngIf and [hidden]</h1>
		<div *ngIf="courses.length > 0">
			List of courses
		</div>
		<div [hidden]="courses.length == 0">
			List of courses
		</div>
		<div *ngIf="courses.length == 0">
			No courses yet
		</div>
		<div [hidden]="courses.length > 0">
			No courses yet
		</div>
		<h1>ngSwitch, ngSwitchWhen, template and ngSwitchDefault</h1>
		<ul class="nav nav-pills">
			<li [class.active]="viewMode == 'map'"><a (click)="viewMode='map'">Map view</a></li>
			<li [class.active]="viewMode == 'list'"><a (click)="viewMode='list'">Map view</a></li>
		</ul>
		<div [ngSwitch]="viewMode">
			<template [ngSwitchWhen]="'map'" >Map view content</template>
			<template [ngSwitchWhen]="'list'" ngSwitchDefault>List view content</template>
		</div>
		<h1>*ngFor and index</h1>
		<ul>
			<li *ngFor="#course of courses2, #i = index">
				{{ i+1 }} - {{ course }}
			</li>
		</ul>
		<h1>*ngFor Asterisk</h1>
		<p>sterisk transforms li into template element</p>
		<ul>
			<template ngFor [ngForOf]="courses2" #course #i=index>
				<li>
					{{ i+1 }} - {{ course }}
				</li>
			</template>
		</ul>
		<h1>Pipes</h1>
		{{courses3.title | uppercase | lowercase}}
		<br>
		{{courses3.rating | number:'2.2-2'}}
		{{courses3.rating2 | number:'2.2-2'}}
		<br>
		{{courses3.students | number}}
		<br>
		{{courses3.money | currency:'AUD':true:'2.2-2'}}
		{{courses3.money | currency:'INR':false:'2.2-2'}}
		<br>
		{{courses3.date | date:'shortDate'}}
		{{courses3.date | date:'MMM yyyy'}}
		<br>
		{{courses3 | json}}
    `// ngIf does not render the html if condition is false - For large element tree
     // hidden renders the html - For small element tree
     // ngIf not good if element is revealed and shown multiple times - poor performance
     // Asterisk transforms li into template element
     // Number pipe for decimal operator
     // number with parameter:'minimum digits.minimum digits - maximum digits'
     // currency based on locale ('label':symbol:'format')
     // the json pipe is used in development to quickly have a look at an object
})
export class AppComponent { 
	courses = [];
	viewMode = 'map'; // default value not required if ngSwitchDefault is used
	// But it might not work with class binding so better to use viewMode check
	courses2 = ['bio','maths','zoology'];
	courses3 = {
		title: "This is a title",
		rating: 1.5,
		rating2: 231.56945,
		students: 56589,
		money: 30000,
		date: new Date(2017,3,2)
	}
}