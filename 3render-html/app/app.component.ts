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
    `// ngIf does not render the html if condition is false - For large element tree
     // hidden renders the html - For small element tree
     // ngIf not good if element is revealed and shown multiple times - poor performance
})
export class AppComponent { 
	courses = [];
	viewMode = 'map'; // default value not required if ngSwitchDefault is used
	// But it might not work with class binding so better to use viewMode check
	courses2 = ['bio','maths','zoology'];
}