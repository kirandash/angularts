// Post class created for Static type checking. In typescript a variable whose type is undefined will accept any type, which we do not want for API integration
export interface Post {
	// https://jsonplaceholder.typicode.com/posts
	userId: number;
	id?: number; // A question mark will make it optional
	title: string;
	body: string;
}
// interface instead of class is used to create static type checking which will not create additional code in post.js but class creates additional code as IIFE