import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

export class PostService {
	
	constructor(private _http: Http){

	}

	getPost(){
		return this._http.get("https://jsonplaceholder.typicode.com/posts")
			.map(res => res.json()); // http returns Observable which is then mapped to get json value
	}
}