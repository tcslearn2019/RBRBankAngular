import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentSavingsComponent } from './investment-savings.component';

describe('InvestmentSavingsComponent', () => {
  let component: InvestmentSavingsComponent;
  let fixture: ComponentFixture<InvestmentSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
