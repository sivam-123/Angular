import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  taskList: any = [];
  constructor() { }
}
