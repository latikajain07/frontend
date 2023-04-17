import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatorcontrollerComponent } from './rotatorcontroller.component';

describe('RotatorcontrollerComponent', () => {
  let component: RotatorcontrollerComponent;
  let fixture: ComponentFixture<RotatorcontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotatorcontrollerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotatorcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
