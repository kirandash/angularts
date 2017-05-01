import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
// Import Injectable annotation
import {Injectable} from 'angular2/core';

// To make the service ready for injection on app.component.ts
@Injectable()
export class PostService {
	private _url = 'https://jsonplaceholder.typicode.com/posts';
	constructor(private _http: Http){

	}

	getPosts(){
		return this._http.get(this._url)
			.map(res => res.json()); // http returns Observable which is then mapped to get json value
	}

	createPost(post){
		return this._http.post(this._url, JSON.stringify(post))
				.map(res => res.json());
	}
}