import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss']
})
export class ReactiveValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    addCustomer() {

        console.log(this.form.value);

    }


}
