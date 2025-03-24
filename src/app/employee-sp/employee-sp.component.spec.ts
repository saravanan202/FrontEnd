import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSPComponent } from './employee-sp.component';

describe('EmployeeSPComponent', () => {
  let component: EmployeeSPComponent;
  let fixture: ComponentFixture<EmployeeSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
