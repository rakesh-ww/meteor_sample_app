import { Component } from '@angular/core';
 
import template from './app.component.html';

import { Observable } from 'rxjs/Observable';
 
import { Parties } from '../../../both/collections/parties.collection';

import { Party } from '../../../both/models/party.model';

 
@Component({
  selector: 'app',
  template
})


export class AppComponent {
  parties: Observable<any[]>;
 
  constructor() {
    this.parties = Parties.find({}).zone();
  }
}