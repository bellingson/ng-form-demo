import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenUpdateDemoComponent } from './template-driven-update-demo.component';

describe('TemplateDrivenUpdateDemoComponent', () => {
  let component: TemplateDrivenUpdateDemoComponent;
  let fixture: ComponentFixture<TemplateDrivenUpdateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenUpdateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenUpdateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
