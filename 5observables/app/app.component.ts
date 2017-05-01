/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
// Reactive extensions - http://reactivex.io/rxjs/
// The direct Rx import has lot of operators reduce it 
 import {Observable} from 'rxjs/Rx';
// Stripped down observables created by angular team - few operators
// import {Observable} from 'rxjs/observable';
// import extra operator
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/filter';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    constructor(){
    	/*var debounced = _.debounce(function(){
    		var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
    		$.getJSON(url, function(artists){
    			console.log(artists);
    		});    		
    	}, 400);
 
    	$("#search").keyup(function(e){
    		var text = e.target.value;
    		if(text.length<3)
    			return;
    		debounced(text);
    	});*/
    	
    	//new Observable();
    	var keyups = Observable
    					.fromEvent($("#search"), "keyup")
    					.map(e => e.target.value)
    					.filter(text=>text.length > 3)
    					.debounceTime(400)
    					.distinctUntilChanged()
    					.flatMap(searchTerm => {
				     		var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
				    		var promise = $.getJSON(url);
				    		return Observable.fromPromise(promise); // returns observable of observables, flatMap combines the observables list into a single list
    					}); // Create static observable
    	// Mapping is done to get just the value and not the entire DOM object
    	// Filter - check if length > 3
    	// Debounce is to listen to the events only after specific time
    	// distinctUntilChanged - to listen to events only if it is changed
    	// subscribe to the observables
    	var subscription = keyups.subscribe(data => console.log(data));
    	// Unsubscribe an observable
    	subscription.unsubscribe(); // Application - user unsubscribing to notifications

    	// Importing Operators
    	console.log(new Observable);
    }
}