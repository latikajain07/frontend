import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireFrontEndDevelopersComponent } from './hire-front-end-developers.component';

describe('HireFrontEndDevelopersComponent', () => {
  let component: HireFrontEndDevelopersComponent;
  let fixture: ComponentFixture<HireFrontEndDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireFrontEndDevelopersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireFrontEndDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
