import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenDemoComponent } from './template-driven-demo.component';

describe('TemplateDrivenDemoComponent', () => {
  let component: TemplateDrivenDemoComponent;
  let fixture: ComponentFixture<TemplateDrivenDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
