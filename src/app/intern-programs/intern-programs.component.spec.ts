import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternProgramsComponent } from './intern-programs.component';

describe('InternProgramsComponent', () => {
  let component: InternProgramsComponent;
  let fixture: ComponentFixture<InternProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
