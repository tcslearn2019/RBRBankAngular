import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCdiComponent } from './investment-cdi.component';

describe('InvestmentCdiComponent', () => {
  let component: InvestmentCdiComponent;
  let fixture: ComponentFixture<InvestmentCdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentCdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentCdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
