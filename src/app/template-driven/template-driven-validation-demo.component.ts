import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-validation-demo',
  templateUrl: './template-driven-validation-demo.component.html',
  styleUrls: ['./template-driven-validation-demo.component.css']
})
export class TemplateDrivenValidationDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    addCustomer(customer) {

        console.log(customer);

    }

}
