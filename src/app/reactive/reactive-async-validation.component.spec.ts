import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAsyncValidationComponent } from './reactive-async-validation.component';

describe('ReactiveAsyncValidationComponent', () => {
  let component: ReactiveAsyncValidationComponent;
  let fixture: ComponentFixture<ReactiveAsyncValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveAsyncValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAsyncValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
