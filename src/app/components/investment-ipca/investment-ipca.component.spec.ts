import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentIpcaComponent } from './investment-ipca.component';

describe('InvestmentIpcaComponent', () => {
  let component: InvestmentIpcaComponent;
  let fixture: ComponentFixture<InvestmentIpcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentIpcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentIpcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
