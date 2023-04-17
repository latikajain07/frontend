import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossPlatformDevelopmentComponent } from './cross-platform-development.component';

describe('CrossPlatformDevelopmentComponent', () => {
  let component: CrossPlatformDevelopmentComponent;
  let fixture: ComponentFixture<CrossPlatformDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossPlatformDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossPlatformDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
