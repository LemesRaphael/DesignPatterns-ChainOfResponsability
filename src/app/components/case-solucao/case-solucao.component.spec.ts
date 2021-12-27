import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSolucaoComponent } from './case-solucao.component';

describe('CaseSolucaoComponent', () => {
  let component: CaseSolucaoComponent;
  let fixture: ComponentFixture<CaseSolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
