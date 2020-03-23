import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = [
    {title: "First", description: "This is my first task!"}
  ]

  constructor() { }

  deleteTask(i) {
    this.tasks.splice(i, 1) // delete one element at the index=1
  }

  addTask(title, description) {
    this.tasks.push({title, description})
  }

  getTask(index: number): Task {
    return this.tasks[index]
  }

  editTask(index, task) {
    this.tasks[index] = task
  }

}