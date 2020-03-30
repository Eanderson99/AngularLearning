import { TaskComponent } from './task/task.component';
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('tasks', {read: ViewContainerRef}) tasksContainer: ViewContainerRef

  constructor(private resolver: ComponentFactoryResolver) {

  }

  addTask(titleElem) {
    // create component factory
    let taskFact = this.resolver.resolveComponentFactory(TaskComponent)
    // create component object
    let taskComp = this.tasksContainer.createComponent(taskFact)
    taskComp.instance.title = titleElem.value
  }
}
