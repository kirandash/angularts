import { Injectable, EventEmitter } from '@angular/core';
// Injecting services into services
import { LogService } from './log.service';

@Injectable() // To inject service in service - Decorators must be right before components or services class being declared

export class DataService {
	pushedData = new EventEmitter<string>();// A string data type will be pushed
  /*constructor() { }*/
  private data: string[] = [];

  constructor(private logService: LogService) {}

  // Method to push new number to the data array
  addData(input: string) {
  	this.data.push(input);
  	this.logService.writeToLog('Saved item: ' + input)
  }

  // Method to return the data array
  getData() {
  	return this.data;
  }

  pushData(value:string) {
  	this.pushedData.emit(value);
  }

}
