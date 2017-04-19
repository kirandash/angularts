// Importing component decorator from angular
import {Component} from 'angular2/core';
import {BindingComponent} from './favorite.component'; // path of the module containing courses component

// Decorator fn calling the object and using an object
@Component({
    selector: 'my-app',
    template: `
		<i class="glyphicon glyphicon-star"></i>
    	<favorite 
    		[star-active]="post.starActive" 
    		[star-result]="tweet.starResult" 
    		(change)="onStarChange($event)"
    		[heart-active]="tweet.heartActive"
    		[vote-count]="vote.voteCount"
    		[vote-flag]="vote.voteFlag"
    		(vote)="onVote($event)"
    		></favorite>
    	`,
    directives: [BindingComponent],
    // Directive - a class that allows us to extend of control DOM (and not part of standard html)
	styles: [
		`
		.glyphicon-star {
			color: orange;
			font-size: 30px;
		}
		`
	] // inline styles - only applied to the class in current component, not to components from outside modules
	//styleUrls: []// array of style files    
})

// export class - AppComponent which is the root of our application - takes control of entire app/page
export class AppComponent { 
	post = {
		title: "Title",
		starActive: false
	}// Post data assumed to come from service
	tweet = {
		starResult: 10,
		heartActive: true
	}
	vote = {
		voteCount: 3,
		voteFlag: 0
	}
	onStarChange($event){
		console.log($event);
	}
	onVote($event){
		console.log($event);	
	}
}