import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-update-demo',
  templateUrl: './template-driven-update-demo.component.html',
  styleUrls: ['./template-driven-update-demo.component.scss']
})
export class TemplateDrivenUpdateDemoComponent implements OnInit {

  customer = { firstName: 'Bob', lastName: 'Smith', email: 'bob@smith.com '};

  constructor() { }

  ngOnInit() {
  }

    updateCustomer() {
      alert('success');
    }


}
