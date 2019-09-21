import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  taskList: any = [];

  constructor(private taskService: TaskServiceService) {
    this.taskList = taskService.taskList;
    console.log(this.taskList);
  }
  ngOnInit() {
  }

}
