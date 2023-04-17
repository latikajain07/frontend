import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMeanStackDevelopersComponent } from './hire-mean-stack-developers.component';

describe('HireMeanStackDevelopersComponent', () => {
  let component: HireMeanStackDevelopersComponent;
  let fixture: ComponentFixture<HireMeanStackDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireMeanStackDevelopersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireMeanStackDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
