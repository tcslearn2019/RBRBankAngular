import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarsegundaComponent } from './toolbarsegunda.component';

describe('ToolbarsegundaComponent', () => {
  let component: ToolbarsegundaComponent;
  let fixture: ComponentFixture<ToolbarsegundaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarsegundaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarsegundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
