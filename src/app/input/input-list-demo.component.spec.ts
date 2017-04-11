import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputListDemoComponent } from './input-list-demo.component';

describe('InputListDemoComponent', () => {
  let component: InputListDemoComponent;
  let fixture: ComponentFixture<InputListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
