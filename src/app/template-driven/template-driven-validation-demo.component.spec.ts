import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenValidationDemoComponent } from './template-driven-validation-demo.component';

describe('TemplateDrivenValidationDemoComponent', () => {
  let component: TemplateDrivenValidationDemoComponent;
  let fixture: ComponentFixture<TemplateDrivenValidationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenValidationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenValidationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
