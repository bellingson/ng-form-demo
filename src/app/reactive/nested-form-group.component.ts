import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.scss']
})
export class NestedFormGroupComponent implements OnInit {

  customerForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.customerForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: fb.group({
        address1: ['', Validators.required],
        address2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      })
    });

  }

  ngOnInit() {

    const customer = {
      firstName: 'bob',
      lastName: 'smith',
      email: 'bob@smith.com',
      address: {
        address1: '123 Main St',
        city: 'Chicago',
        state: 'IL',
        zip: 90210
      }
    };

    this.customerForm.patchValue(customer);



  }

  updateCustomer() {
    console.log(this.customerForm.value);
  }

}
