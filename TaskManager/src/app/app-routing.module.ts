import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "task", component: TaskComponent},
  {path: "task/:id", component: TaskComponent},
  {path: "add-task/:id", component: AddTaskComponent},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
