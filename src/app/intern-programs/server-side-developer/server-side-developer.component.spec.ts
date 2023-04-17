import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideDeveloperComponent } from './server-side-developer.component';

describe('ServerSideDeveloperComponent', () => {
  let component: ServerSideDeveloperComponent;
  let fixture: ComponentFixture<ServerSideDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerSideDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerSideDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
