import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-reactive-value-changes',
  templateUrl: './reactive-value-changes.component.html',
  styleUrls: ['./reactive-value-changes.component.scss']
})
export class ReactiveValueChangesComponent implements OnInit {

  customers: Array<any>;

  q: FormControl;

  constructor() { }

  ngOnInit() {

      this.q = new FormControl('');
      this.q.valueChanges
          .debounceTime(500)
          .subscribe(value => {

              this.fetchCustomers(value);
      });

      this.fetchCustomers();

  }

  fetchCustomers(find?:string) {
      let _customers = [
          { id: 1, name: 'John Doe', email: 'john@doe.com' },
          { id: 2, name: 'James Doe', email: 'james@doe.com' },
          { id: 3, name: 'Brenda Doe', email: 'brenda@doe.com' },
          { id: 4, name: 'Tamara Doe', email: 'tamara@doe.com' },
          { id: 5, name: 'Jim Smith', email: 'jim@smith.com' }
      ];

      if(find) {

          this.customers = _customers.filter(c => {
              return c.name.toLowerCase().indexOf(find.toLowerCase()) != -1;
          });

      } else {
          this.customers = _customers;
      }

  }

}
