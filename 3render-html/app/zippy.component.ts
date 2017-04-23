import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
		<div class="zippy panel panel-default">
			<div 
				class="zippy-title panel-heading"
				(click)="toggle()">
				{{title}}
				<i 
					class="pull-right glyphicon"
					[ngClass]="
						{
							'glyphicon-chevron-down' : !isExpanded,
							'glyphicon-chevron-up' : isExpanded
						}"
				>
				</i>
			</div>
			<div *ngIf="isExpanded" class="zippy-content panel-body">
				<ng-content></ng-content>
			</div>
		</div>
    `
})

export class ZippyComponent {
	isExpanded = false;
	@Input() title: string;

	toggle(){
		this.isExpanded = !this.isExpanded;
	}
}