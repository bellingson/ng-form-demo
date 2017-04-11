import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-update',
  templateUrl: './reactive-update.component.html',
  styleUrls: ['./reactive-update.component.scss']
})
export class ReactiveUpdateComponent implements OnInit {

    form: FormGroup;

    customer: any;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.email ]
        });
    }

    ngOnInit() {
        this.fetchCustomer();
    }

    fetchCustomer() {

        this.customer = { firstName: 'Bob', lastName: 'Smith' };

        // setValue will throw an error when missing a required field
        // this.form.setValue(this.customer);

        // patchValue is more safe and will update the form when a required field is missing
        // form will still be not valid
        this.form.patchValue(this.customer);
    }



    updateCustomer() {

        console.log(this.form.value);
        alert('success');
    }

}
