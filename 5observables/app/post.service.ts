import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// Import Injectable annotation
import {Injectable} from 'angular2/core';
// Import Post interface
import {Post} from './post';

// To make the service ready for injection on app.component.ts
@Injectable()
export class PostService {
	private _url = 'https://jsonplaceholder.typicode.com/posts';
	constructor(private _http: Http){

	}

	getPosts() : Observable<Post[]>{ // Changing observable type any to the Post interface for better type annotations on app.component.ts
		return this._http.get(this._url)
			.map(res => res.json()) // http returns Observable which is then mapped to get json value 
			.toPromise();
	}

	createPost(post: Post){
		return this._http.post(this._url, JSON.stringify(post))
				.map(res => res.json());
	}
}