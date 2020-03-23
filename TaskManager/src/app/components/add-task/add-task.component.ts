import { Router } from '@angular/Router';
import { Task } from './../../interfaces/task';
import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private tasksService: TasksService, private router: Router, private title: Title) { 
    this.title.setTitle('Add new Task - Task Manager')
  }

  ngOnInit(): void {
  }

  onSave(title, description) {
    this.tasksService.addTask(title.value, description.value)

    this.router.navigate(["/"])
  }
}
