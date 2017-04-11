import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-list-demo',
  templateUrl: './input-list-demo.component.html',
  styleUrls: ['./input-list-demo.component.scss']
})
export class InputListDemoComponent implements OnInit {

    customers: Array<any>;
    selected: Array<any> = [];

    constructor() { }

    ngOnInit() {

        this.fetchCustomers();

    }

    fetchCustomers() {
        this.customers = [
            { id: 1, name: 'John Doe', email: 'john@doe.com' },
            { id: 2, name: 'James Doe', email: 'james@doe.com' },
            { id: 3, name: 'Brenda Doe', email: 'brenda@doe.com' },
            { id: 4, name: 'Tamara Doe', email: 'tamara@doe.com' },
            { id: 5, name: 'Jim Smith', email: 'jim@smith.com' }
        ];

    }

    select(customer) {

        customer.selected = !customer.selected;

        this.selected = this.customers.filter(c => c.selected );


    }


}
