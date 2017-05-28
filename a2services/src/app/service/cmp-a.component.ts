import { Component } from '@angular/core';

import { LogService } from './log.service';

@Component({
    moduleId: module.id,
    selector: 'si-cmp-a',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
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
  providers: [LogService] // The providers meta data tells angular which services to be used for this component
})
export class CmpAComponent {
    value = '';

    constructor (private logService: LogService) {}

    items: string[] = [];

    onLog(value: string) {
      this.logService.writeToLog(value);
    }

    onStore(value: string) {
 
    }

    onGet() {
 
    }

    onSend(value: string) {
   
    }
}
