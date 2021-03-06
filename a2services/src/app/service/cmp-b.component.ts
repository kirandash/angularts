import { Component, OnInit } from '@angular/core';

import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: 'si-cmp-b',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `,
  // providers: [LogService, DataService] // The providers meta data tells angular which services to be used for this component
  // providers: [LogService]
})
export class CmpBComponent implements OnInit {
    value = '';

    constructor (private logService: LogService, private dataService: DataService) {}

    items: string[] = [];

    onLog(value: string) {
      this.logService.writeToLog(value);
    }

    onStore(value: string) {
      this.dataService.addData(value);
    }

    onGet() {
      // this.items = this.dataService.getData(); // This does live update
      this.items = this.dataService.getData().slice(0);
    }

    ngOnInit() {
        this.dataService.pushedData.subscribe(
            data => this.value = data// ES 6 syntax
        ); // Observing the eventemitter       
    }
}
