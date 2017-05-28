/*import { Injectable } from '@angular/core';

@Injectable()*/
export class DataService {

  /*constructor() { }*/
  private data: string[] = [];

  // Method to push new number to the data array
  addData(input: string) {
  	this.data.push(input);
  }

  // Method to return the data array
  getData() {
  	return this.data;
  }

}
