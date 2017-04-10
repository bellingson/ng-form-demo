import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {

  form: FormGroup;


  constructor(fb: FormBuilder) {
      this.form = fb.group({
         firstName: '',
         lastName: '',
         email: ''
      });
  }

  ngOnInit() {
  }

  addCustomer() {

      console.log(this.form.value);


  }

}
