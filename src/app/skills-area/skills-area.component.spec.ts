import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAreaComponent } from './skills-area.component';

describe('SkillsAreaComponent', () => {
  let component: SkillsAreaComponent;
  let fixture: ComponentFixture<SkillsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
