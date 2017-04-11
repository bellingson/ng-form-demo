import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent  {

  form: FormGroup;

  customer: any;

  constructor(fb: FormBuilder) {
      this.form = fb.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         email: ['', Validators.email ]
      });
  }

  addCustomer() {
      this.customer = this.form.value;
  }


}
