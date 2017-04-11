import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss']
})
export class ReactiveValidationComponent implements OnInit {

    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.email ],
            password: ['', this.validatePassword.bind(this) ],
            confirm: ['', this.validateConfirm.bind(this)]
        });
    }


  ngOnInit() {
  }

    addCustomer() {

        console.log(this.form.value);

    }

    validatePassword(ctrl: AbstractControl) : ValidationErrors | null {

        if(this.form == null) {
            return null;
        }

        if(this.form.get('password').value == '') {
            return { required: true };
        }

        if(this.form.get('password').value.length < 4) {
            return { tooshort: true };
        }

        return null
    }

    validateConfirm(ctrl: AbstractControl) : ValidationErrors | null {

        if(this.form == null) {
            return null;
        }

        if(this.form.get('password').value != this.form.get('confirm').value) {
            return { nomatch: true };
        }

        return null
    }



}
