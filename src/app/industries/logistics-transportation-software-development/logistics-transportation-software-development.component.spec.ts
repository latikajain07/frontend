import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsTransportationSoftwareDevelopmentComponent } from './logistics-transportation-software-development.component';

describe('LogisticsTransportationSoftwareDevelopmentComponent', () => {
  let component: LogisticsTransportationSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<LogisticsTransportationSoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsTransportationSoftwareDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsTransportationSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
