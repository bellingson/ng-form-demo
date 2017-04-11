import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss']
})
export class InputDemoComponent implements OnInit {

    form: FormGroup;

    customer: any;

    referalSources: Array<any> = [
        { id: 1, name: 'Existing Customer' },
        { id: 2, name: 'A Friend' },
        { id: 3, name: 'Google' },
        { id: 4, name: 'Facebook' },
        { id: 5, name: 'Other' }

    ];

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.email ],
            vegan: false,
            vegetarian: false,
            paleo: false,
            shirtSize: 'medium',
            referal: 0
        });
    }

    ngOnInit() {
        this.fetchCustomer();
    }

    fetchCustomer() {

        this.customer = { firstName: 'Bob', lastName: 'Smith', email: 'bob@smith.com' };

        this.form.patchValue(this.customer);
    }



    updateCustomer() {

        console.log(this.form.value);
        alert('success');
    }

}
