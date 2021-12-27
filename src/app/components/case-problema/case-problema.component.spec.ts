import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseProblemaComponent } from './case-problema.component';

describe('CaseProblemaComponent', () => {
  let component: CaseProblemaComponent;
  let fixture: ComponentFixture<CaseProblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseProblemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
