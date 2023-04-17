import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireJavaAngularjsDevelopersComponent } from './hire-java-angularjs-developers.component';

describe('HireJavaAngularjsDevelopersComponent', () => {
  let component: HireJavaAngularjsDevelopersComponent;
  let fixture: ComponentFixture<HireJavaAngularjsDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireJavaAngularjsDevelopersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireJavaAngularjsDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
