import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskArr: any = [];
  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
  }
  addTask(task) {
    this.taskService.taskList = this.taskArr.push(task.value);
  }
}
