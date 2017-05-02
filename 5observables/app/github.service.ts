import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
	private _baseUrl = "https://api.github.com/users/";

	constructor(private _http: Http){}

	// Note that type annotation is not used since it does not add any vallue
	// Takes a username and returns username object
	getUser(username){
		return this._http.get(this._baseUrl + username)
					.map(res => res.json());
	}

	getFollowers(username){
		return this._http.get(this._baseUrl + username + "/followers")
					.map(res => res.json());		
	}
}