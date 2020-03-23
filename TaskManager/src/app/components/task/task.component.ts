import { Title } from '@angular/platform-browser';
import { Task } from './../../interfaces/task';
import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskId
  task: Task

  constructor(private route: ActivatedRoute, private tasksService: TasksService, private router: Router, private title: Title) {
    this.title.setTitle((this.task ? this.task.title : "No Task") + ' - Task Manager')
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id')
    setInterval(() => {
      this.task = this.tasksService.getTask(this.taskId)
    }, 1000)
  }

  deleteTask() {
    this.tasksService.deleteTask(this.taskId)
    this.router.navigate(['/'])
  }

  editTask() {
    this.tasksService.editTask(this.taskId, this.task)
    this.router.navigate(['/'])
  }
}
