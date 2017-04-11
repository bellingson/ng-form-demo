import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUpdateComponent } from './reactive-update.component';

describe('ReactiveUpdateComponent', () => {
  let component: ReactiveUpdateComponent;
  let fixture: ComponentFixture<ReactiveUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
