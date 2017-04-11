import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, AbstractControl, AsyncValidator, Validators, ValidationErrors} from "@angular/forms";

import 'rxjs/add/operator/debounceTime';
import {Observable, Subject, ReplaySubject} from "rxjs";

@Component({
  selector: 'app-reactive-async-validation',
  templateUrl: './reactive-async-validation.component.html',
  styleUrls: ['./reactive-async-validation.component.scss']
})
export class ReactiveAsyncValidationComponent  {


  form = new FormGroup({
      discountCode: new FormControl('',
                                    Validators.required,
                                    this.validateDiscountCode.bind(this))
  })


  validateDiscountCode(ctrl: AbstractControl) : Observable<ValidationErrors | null> {

      if(ctrl.value === 'abc') {
          return Observable.of(null).delay(1000);
      } else {
          return Observable.of({invalid: true}).delay(1000);
      }

  }


}
