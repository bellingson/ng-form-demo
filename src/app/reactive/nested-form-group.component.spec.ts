import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormGroupComponent } from './nested-form-group.component';

describe('NestedFormGroupComponent', () => {
  let component: NestedFormGroupComponent;
  let fixture: ComponentFixture<NestedFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
