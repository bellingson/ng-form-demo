import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValueChangesComponent } from './reactive-value-changes.component';

describe('ReactiveValueChangesComponent', () => {
  let component: ReactiveValueChangesComponent;
  let fixture: ComponentFixture<ReactiveValueChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveValueChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveValueChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
