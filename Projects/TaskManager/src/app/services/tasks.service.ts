import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = []

  constructor() {
    let savedTasks = localStorage.getItem('tasks') 
    if(savedTasks)
      this.tasks = JSON.parse(savedTasks)
    else
      this.tasks = []
   }

  getTask(index: number): Task {
    return this.tasks[index]
  }

  addTask(title, description) {
    this.tasks.push({title, description})
    this.saveAll()
  }

  editTask(index, task) {
    this.tasks[index] = task
    this.saveAll()
  }

  deleteTask(i) {
    this.tasks.splice(i, 1) // delete one element at the index=1
    this.saveAll()
  }

  saveAll() { // save to file
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

}