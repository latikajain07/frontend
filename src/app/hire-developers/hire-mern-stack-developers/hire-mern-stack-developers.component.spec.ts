import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMernStackDevelopersComponent } from './hire-mern-stack-developers.component';

describe('HireMernStackDevelopersComponent', () => {
  let component: HireMernStackDevelopersComponent;
  let fixture: ComponentFixture<HireMernStackDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireMernStackDevelopersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireMernStackDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
