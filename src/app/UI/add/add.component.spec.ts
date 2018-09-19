import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { Task } from '../../Models/Task';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
//  import { TaskserviceService } from '../../Services/taskservice.service';
// import {fakeService} from '';
describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [AddComponent]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should insert when there is no id already', () => {
    const task = new Task();
    task.taskName = 'Hello world';
    task.parentID = 2;
    task.priority = 3, task.startDate = new Date(2015, 9, 22), task.startDate = new Date(2018, 9, 22);
    component.task = task;
    component.submitTask();
    expect(component.task.parentID).toBeGreaterThan(0);
  });

  it('should update when there is id already exists', () => {
    component.submitTask();
    const task = new Task();
    task.taskName = 'Hello world';
    task.id = 1;
    task.parentID = 2;
    task.priority = 3;
    task.startDate = new Date(2015, 9, 22), task.startDate = new Date(2018, 9, 22);
    component.task = task;
    component.submitTask();
    expect(component.task.id).toBeGreaterThan(0);
    // expect(component.message).;
  });
});
