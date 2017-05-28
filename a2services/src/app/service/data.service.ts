import { Injectable } from '@angular/core';
// Injecting services into services
import { LogService } from './log.service';

@Injectable() // To inject service in service

export class DataService {

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

}
