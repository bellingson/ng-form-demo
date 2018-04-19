import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenAdvancedControlsComponent } from './template-driven-advanced-controls.component';

describe('TemplateDrivenAdvancedControlsComponent', () => {
  let component: TemplateDrivenAdvancedControlsComponent;
  let fixture: ComponentFixture<TemplateDrivenAdvancedControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenAdvancedControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenAdvancedControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
