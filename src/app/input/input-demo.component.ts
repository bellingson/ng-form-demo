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

    referralSources: Array<any> = [
        { id: 1, description: 'Existing Customer' },
        { id: 2, description: 'A Friend' },
        { id: 3, description: 'Google' },
        { id: 4, description: 'Facebook' },
        { id: 5, description: 'Other' }
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
            referral: 0
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
