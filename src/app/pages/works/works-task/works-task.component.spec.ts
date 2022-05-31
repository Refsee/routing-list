import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksTaskComponent } from './works-task.component';

describe('WorksTaskComponent', () => {
  let component: WorksTaskComponent;
  let fixture: ComponentFixture<WorksTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
