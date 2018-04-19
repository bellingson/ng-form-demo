import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-advanced-controls',
  templateUrl: './template-driven-advanced-controls.component.html',
  styleUrls: ['./template-driven-advanced-controls.component.scss']
})
export class TemplateDrivenAdvancedControlsComponent implements OnInit {

  // select

  address = { state: 'AK'};

  states = [
    { code: 'AL', name: 'Alabama'},
    { code: 'AK', name: 'Alaska'},
    { code: 'AZ', name: 'Arizona'}
  ];

  // checkbox

  agree = true;

  // radio
  size: string;

  sizes = [ 'Small', 'Medium', 'Large' ];

  constructor() { }

  ngOnInit() {
  }

  updateSelect() {
    console.log(this.address);
  }

  updateCheckbox() {
    console.log(this.agree);
  }

  updateRadio() {
    console.log(this.size);
  }


}
