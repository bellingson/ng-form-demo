import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValidationComponent } from './reactive-validation.component';

describe('ReactiveValidationComponent', () => {
  let component: ReactiveValidationComponent;
  let fixture: ComponentFixture<ReactiveValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
