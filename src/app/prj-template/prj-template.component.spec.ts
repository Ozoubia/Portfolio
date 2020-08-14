import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjTemplateComponent } from './prj-template.component';

describe('PrjTemplateComponent', () => {
  let component: PrjTemplateComponent;
  let fixture: ComponentFixture<PrjTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
