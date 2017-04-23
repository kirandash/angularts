import {Component} from 'angular2/core';

import {SummaryPipe} from './summary.pipe';

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
		<h1>Custom Pipes</h1>
		{{post.title}}
		<br>
		{{post.content | summary:10 }}
		<br>
		{{post.content | summary:110 }}
		<h1>ngStyle directive</h1>
		<button
			[style.backgroundColor]="canSave ? 'blue' : 'gray'"
			[style.color]="canSave ? 'white' : 'black'"
			[style.fontWeight]="canSave ? 'bold' : 'normal'"
		>
			Submit
		</button>
		<br>
		<button
			[ngStyle]="{
				backgroundColor: canSave2 ? 'blue' : 'gray',
				color: canSave2 ? 'white' : 'black',
				fontWeight: canSave2 ? 'bold' : 'normal'
			}"
		>
			Submit
		</button>
		<h1>Elvis Operator</h1>
		<ul>
		<li>
			{{elvisData.title}}
		</li>
		<li>
			{{elvisData.assignee.name}}
		</li>
		<li *ngIf="elvisData.assignee2 != null">
			{{elvisData.assignee2.name}}
		</li>
		<li>
			{{ elvisData.assignee2.name != null ? elvisData.assignee2.name : ""}}
		</li>
		<li>
			{{ elvisData.assignee2?.roll?.name }}
		</li>
		</ul>
    `,// ngIf does not render the html if condition is false - For large element tree
     // hidden renders the html - For small element tree
     // ngIf not good if element is revealed and shown multiple times - poor performance
     // Asterisk transforms li into template element
     // Number pipe for decimal operator
     // number with parameter:'minimum digits.minimum digits - maximum digits'
     // currency based on locale ('label':symbol:'format')
     // the json pipe is used in development to quickly have a look at an object
     // elvis operator is used to access nullable properties
     pipes: [SummaryPipe]
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
	post = {
		title: "Post title here",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus venenatis mi eu egestas. Donec interdum interdum cursus. Nullam ex nunc, viverra non neque et, dignissim finibus nisi. Fusce nisl sem, commodo at dignissim at, consequat at ante. Etiam neque est, elementum at convallis eu, dictum nec nibh. Suspendisse potenti. In condimentum placerat elit in lobortis. Suspendisse sed nunc ullamcorper, pretium est non, blandit ex."
	}
	canSave = false;
	canSave2 = true;
	elvisData = {
		title: "Kiran Dash",
		assignee: {
			name: "KKD" 
		},
		assignee2: null
	}
}