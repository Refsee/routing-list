import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/shared/interfaces/interface-task';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() TaskList!: Array<Task>;
  @Output() changeStatus = new EventEmitter<{status: boolean; index: number;}>();
  @Output() editTask = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  change(status: boolean, index: number): void {
    this.changeStatus.emit({ status, index });
  }

  eTask(index: number): void {
    this.editTask.emit(index);
  }

  dTask(index: number): void {
    this.deleteTask.emit(index);
  }
}
