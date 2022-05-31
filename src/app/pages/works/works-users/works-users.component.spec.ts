import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksUsersComponent } from './works-users.component';

describe('WorksUsersComponent', () => {
  let component: WorksUsersComponent;
  let fixture: ComponentFixture<WorksUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
